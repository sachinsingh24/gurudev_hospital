import { Component as ReactComponent, use } from 'react';

/**
 * Route-level code splitting that is safe for prerendering + hydration.
 *
 * Each page lives in its own JS chunk. `preload()` fetches it; once loaded, the page renders synchronously.
 *  - Prerender (scripts/prerender.mjs) preloads every page first, so renderToString never suspends.
 *  - The browser preloads the current page's chunk before hydrating (src/main.jsx), so hydration never suspends
 *    either and the server HTML is reused as-is.
 *  - On client-side navigation an unloaded page suspends inside <Suspense> in App.jsx; React Router wraps
 *    navigations in startTransition, so the current page stays on screen until the next one is ready.
 */
export function lazyPage(loader, pick = (m) => m.default) {
  let promise = null;
  const preload = () => {
    if (!promise) {
      const p = loader().then(
        (m) => {
          // Mark the promise as settled the way React's use() reads it, so an already-loaded page renders
          // synchronously instead of suspending for a tick.
          p.status = 'fulfilled';
          p.value = pick(m);
          return p.value;
        },
        (err) => {
          // Keep the failure (don't retry here): React's use() then throws it to <ChunkErrorBoundary>, which
          // reloads the page. Retrying instead leaves the old page on screen while React re-suspends forever.
          p.status = 'rejected';
          p.reason = err;
          throw err;
        },
      );
      promise = p;
    }
    return promise;
  };

  function LazyPage(props) {
    const C = use(preload());
    return <C {...props} />;
  }
  LazyPage.preload = preload;
  return LazyPage;
}

/**
 * If a page chunk fails to load (most often: the site was redeployed while this tab was open, so the old chunk
 * file no longer exists), reload once to get the new HTML and chunks instead of showing a blank page.
 */
export class ChunkErrorBoundary extends ReactComponent {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    const isChunkError = /dynamically imported module|Importing a module script failed|error loading dynamically imported module|Failed to fetch/i.test(
      String(error?.message || error),
    );
    const key = `chunk-reload:${window.location.pathname}`;
    let reloaded = false;
    try {
      reloaded = sessionStorage.getItem(key) === '1';
      if (isChunkError && !reloaded) sessionStorage.setItem(key, '1');
    } catch {
      /* storage blocked: still try one reload below */
    }
    if (isChunkError && !reloaded) window.location.reload();
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <section className="section">
        <div className="container container--narrow">
          <h1>This page didn't load</h1>
          <p>
            Please <a href={typeof window !== 'undefined' ? window.location.href : '/'}>reload the page</a>. For urgent help, call{' '}
            <a href="tel:+918087534842">080875&nbsp;34842</a>; we are open 24×7.
          </p>
        </div>
      </section>
    );
  }
}

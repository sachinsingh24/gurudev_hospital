import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import { HeadProvider } from './seo/Head.jsx';
import { preloadPath } from './routeTable.js';
import './styles/global.css';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>
);

// Production pages are prerendered to static HTML → hydrate. In `vite dev` the root is empty → render.
// The current page's chunk is fetched first (the prerendered HTML already modulepreloads it), so hydration
// renders synchronously and reuses the server HTML without suspending.
const start = () => {
  if (container.firstElementChild) hydrateRoot(container, app);
  else createRoot(container).render(app);
};
preloadPath(window.location.pathname).then(start, start);

// Fetch a page's chunk as soon as the visitor shows intent (hover, focus or touch on an internal link),
// so client-side navigation is instant.
const prefetch = (e) => {
  const a = e.target instanceof Element ? e.target.closest('a[href^="/"]') : null;
  if (a) preloadPath(new URL(a.href).pathname).catch(() => {});
};
for (const type of ['pointerover', 'focusin', 'touchstart']) document.addEventListener(type, prefetch, { passive: true });

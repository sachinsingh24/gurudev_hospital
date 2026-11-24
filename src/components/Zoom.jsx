import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import Lightbox from './Lightbox.jsx';

/**
 * Full-screen photo viewer for the whole site.
 *
 * Every content photo is wrapped in <Zoomable>: a real button (keyboard and screen-reader friendly) that
 * opens the viewer. The viewer shows ALL zoomable photos on the current page, in page order, so visitors can
 * move on to the other photos with the arrows, arrow keys or a swipe.
 */
const ZoomContext = createContext(null);

export function ZoomProvider({ children }) {
  const entries = useRef(new Map()); // id → () => ({ el, item })
  const [view, setView] = useState(null); // { items, index }
  const { pathname } = useLocation();

  const register = useCallback((id, get) => {
    entries.current.set(id, get);
    return () => entries.current.delete(id);
  }, []);

  const show = useCallback((id) => {
    const list = [...entries.current.entries()]
      .map(([key, get]) => ({ key, ...get() }))
      // only photos actually on screen in this layout (not hidden copies or collapsed sections)
      .filter(({ el }) => el?.isConnected && el.getClientRects().length > 0 && !el.closest('[inert], [aria-hidden="true"]'))
      .sort((a, b) => (a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
    // The same photo twice on one page → show it once.
    const seen = new Map();
    const items = [];
    let index = 0;
    for (const e of list) {
      if (!seen.has(e.item.src)) {
        seen.set(e.item.src, items.length);
        items.push(e.item);
      }
      if (e.key === id) index = seen.get(e.item.src);
    }
    if (!items.length) return;
    // Phone "Back" should close the viewer, not leave the page: add a history entry while it is open.
    // Done here in the click handler, not in an effect, so React's development double-run of effects
    // (StrictMode) can't add and remove the entry and close the viewer straight away.
    try {
      if (!window.history.state?.lightbox) window.history.pushState({ ...window.history.state, lightbox: true }, '');
    } catch {
      /* history not available: the viewer still works, Back just leaves the page */
    }
    setView({ items, index });
  }, []);

  // Close button / Escape / background click: close now and drop the viewer's history entry.
  const close = useCallback(() => {
    setView(null);
    if (window.history.state?.lightbox) window.history.back();
  }, []);
  const setIndex = useCallback((index) => setView((v) => (v ? { ...v, index } : v)), []);

  // Phone / browser Back while the viewer is open → close it.
  useEffect(() => {
    const onPop = () => {
      if (!window.history.state?.lightbox) setView(null);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // A new page closes the viewer.
  useEffect(() => setView(null), [pathname]);

  const value = useMemo(() => ({ register, show }), [register, show]);
  return (
    <ZoomContext.Provider value={value}>
      {children}
      {view ? <Lightbox items={view.items} index={view.index} onIndex={setIndex} onClose={close} /> : null}
    </ZoomContext.Provider>
  );
}

/**
 * Wraps a photo so a click / tap / Enter opens it full screen.
 * item: { src, srcSet?, alt, caption?, note?, credits? }
 */
export function Zoomable({ item, className = '', children }) {
  const ctx = useContext(ZoomContext);
  const id = useId();
  const ref = useRef(null);
  const latest = useRef(item);
  latest.current = item;

  useEffect(() => ctx?.register(id, () => ({ el: ref.current, item: latest.current })), [ctx, id]);

  const name = item.caption || item.alt;
  return (
    <button
      ref={ref}
      type="button"
      className={`zoom ${className}`.trim()}
      onClick={() => ctx?.show(id)}
      aria-label={name ? `View photo full screen: ${name}` : 'View photo full screen'}
      aria-haspopup="dialog"
    >
      {children}
    </button>
  );
}

/** Viewer item for an image in the normalised shape ({ url(w), widths, alt, representative }). */
export const zoomItem = (img, caption) => ({
  src: img.url(img.widths.at(-1)),
  srcSet: img.widths.map((w) => `${img.url(w)} ${w}w`).join(', '),
  alt: img.alt,
  caption: caption || img.caption || '',
  note: img.representative ? 'Representative image' : '',
});

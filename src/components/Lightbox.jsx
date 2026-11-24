import { useCallback, useEffect, useRef } from 'react';
import Icon from './Icon.jsx';

/**
 * Accessible full-screen photo viewer.
 * items: [{ src, srcSet?, alt, caption?, note?, credits?: [{ name, uri }] }]
 *
 * - Previous / Next buttons, arrow keys and left/right swipes move through the photos (it loops).
 * - Escape, the close button or a click on the dark background closes it (the phone's Back button too,
 *   handled in components/Zoom.jsx).
 * - Keyboard focus stays inside the viewer while it is open and returns to the photo afterwards.
 */
export default function Lightbox({ items, index, onClose, onIndex }) {
  const rootRef = useRef(null);
  const closeRef = useRef(null);
  const lastFocus = useRef(null);
  const touch = useRef(null);
  const item = items[index];
  const many = items.length > 1;
  const go = useCallback((d) => onIndex((index + d + items.length) % items.length), [index, items.length, onIndex]);

  // Focus the close button, lock page scrolling, and give focus back to the photo afterwards.
  // (The phone Back button is handled by the owner of the viewer — see components/Zoom.jsx.)
  useEffect(() => {
    lastFocus.current = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
      lastFocus.current?.focus?.({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' && many) go(1);
      else if (e.key === 'ArrowLeft' && many) go(-1);
      else if (e.key === 'Tab') {
        // keep focus inside the viewer
        const f = [...(rootRef.current?.querySelectorAll('button, a[href]') || [])];
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || !rootRef.current.contains(document.activeElement))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, many, onClose]);

  // Load the next and previous photos in the background, so moving through them is instant.
  useEffect(() => {
    if (!many) return;
    for (const d of [1, -1]) {
      const it = items[(index + d + items.length) % items.length];
      const img = new Image();
      if (it.srcSet) {
        img.sizes = '100vw';
        img.srcset = it.srcSet;
      }
      img.src = it.src;
    }
  }, [index, items, many]);

  // Swipe left/right on touch screens.
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current || !many) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
  };

  if (!item) return null;
  const caption = item.caption || item.alt;
  return (
    <div
      ref={rootRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(e) => (e.target === e.currentTarget || e.target.classList.contains('lightbox__figure')) && onClose()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close photo viewer">
        <Icon name="x" size={26} />
      </button>
      {many ? (
        <>
          <button type="button" className="lightbox__btn lightbox__prev" onClick={() => go(-1)} aria-label="Previous photo">
            <Icon name="chevronLeft" size={28} />
          </button>
          <button type="button" className="lightbox__btn lightbox__next" onClick={() => go(1)} aria-label="Next photo">
            <Icon name="chevronRight" size={28} />
          </button>
        </>
      ) : null}
      <figure className="lightbox__figure">
        {/* Default referrer policy on purpose: Google photo URLs are checked against the API key's website restriction. */}
        <img key={item.src} src={item.src} srcSet={item.srcSet} sizes="100vw" alt={item.alt} />
        <figcaption className="lightbox__caption" aria-live="polite">
          {caption ? <span className="lightbox__text">{caption}</span> : null}
          {item.note ? <span className="lightbox__note">{item.note}</span> : null}
          {item.credits?.length ? (
            <span className="lightbox__credit">
              Photo:{' '}
              {item.credits.map((c, i) => (
                <span key={c.name + i}>
                  {i ? ', ' : ''}
                  {c.uri ? <a href={c.uri} target="_blank" rel="noopener nofollow">{c.name}</a> : c.name}
                </span>
              ))}{' '}
              · Google Maps
            </span>
          ) : null}
          {many ? (
            <span className="lightbox__count">
              {index + 1} / {items.length}
            </span>
          ) : null}
        </figcaption>
      </figure>
    </div>
  );
}

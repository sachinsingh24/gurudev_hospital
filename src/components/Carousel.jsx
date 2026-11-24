import { Children, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

/**
 * Lightweight, accessible carousel (no library):
 *  - every slide is in the server-rendered HTML, so links stay crawlable;
 *  - native horizontal scrolling with scroll-snap, so swipe works on phones and trackpads; mouse drag on desktop;
 *  - Previous / Next buttons move one card at a time; dots below the cards show the current card and jump to any card;
 *  - `infinite`: loops forever in both directions with no rewind to the start. After hydration, one copy of the
 *    cards is added before and one after the real ones; when the carousel comes to rest on a copy, it jumps
 *    (instantly, invisibly) to the identical real card. The copies are client-only (not in the prerendered
 *    HTML), hidden from screen readers and not focusable (`inert`);
 *  - optional auto-slide (`autoplay` = milliseconds per card) with the safeguards WCAG 2.2.2 asks for:
 *    a visible pause/play button, pausing on hover, focus and touch, no auto-slide for visitors who prefer
 *    reduced motion, and no movement while the carousel is off-screen or the tab is hidden.
 *
 * `head` renders on the left of the header row, `actions` on the right, next to the controls.
 */
export default function Carousel({ id, label, head, actions, autoplay = 0, infinite = false, children }) {
  const track = useRef(null);
  const root = useRef(null);
  // Same initial state on server and client (no hydration mismatch); real values are set after mount.
  const [edges, setEdges] = useState({ start: true, end: false });
  const [playing, setPlaying] = useState(autoplay > 0);
  const [hold, setHold] = useState(false); // hover / focus / touch inside the carousel
  const [looped, setLooped] = useState(false); // copies added (client only)
  const [active, setActive] = useState(0); // real card currently in the first position (for the dots)
  const slides = Children.toArray(children);
  const count = slides.length;
  const name = label.toLowerCase();
  const loop = infinite && count > 1;

  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const stepWidth = (el) => {
    const first = el.firstElementChild;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return first ? first.getBoundingClientRect().width + gap : el.clientWidth;
  };

  // Jump without animation (the track has CSS scroll-behavior: smooth, which a plain assignment would honour).
  const jumpTo = (el, left) => {
    el.style.scrollBehavior = 'auto';
    el.scrollLeft = left;
    el.style.scrollBehavior = '';
  };

  // Infinite mode: add the copies once the page has hydrated…
  useEffect(() => {
    if (loop) setLooped(true);
  }, [loop]);

  // …and, before the browser paints, shift the view so the first real card stays exactly where it was.
  useLayoutEffect(() => {
    const el = track.current;
    if (looped && el) jumpTo(el, count * stepWidth(el));
  }, [looped, count]);

  // When the carousel comes to rest on a copy, move to the identical real card.
  const normalise = useCallback(() => {
    const el = track.current;
    if (!el || !looped) return;
    const step = stepWidth(el);
    const index = Math.round(el.scrollLeft / step);
    if (index < count) jumpTo(el, (index + count) * step);
    else if (index >= 2 * count) jumpTo(el, (index - count) * step);
  }, [looped, count]);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
    const index = Math.round(el.scrollLeft / stepWidth(el));
    setActive(looped ? ((index % count) + count) % count : Math.min(index, count - 1));
  }, [looped, count]);

  // Dot i → bring card i to the first position (inside the real set when looping).
  const goTo = (i) => {
    const el = track.current;
    if (!el) return;
    const left = (looped ? count + i : i) * stepWidth(el);
    el.scrollTo({ left: Math.min(left, el.scrollWidth - el.clientWidth), behavior: reducedMotion() ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return undefined;
    measure();
    // "scroll end": the native event where supported, otherwise a short pause in scroll events.
    const hasScrollEnd = 'onscrollend' in window;
    let settle = 0;
    const onScroll = () => {
      measure();
      if (!hasScrollEnd) {
        window.clearTimeout(settle);
        settle = window.setTimeout(normalise, 150);
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    if (hasScrollEnd) el.addEventListener('scrollend', normalise);
    window.addEventListener('resize', measure);
    return () => {
      window.clearTimeout(settle);
      el.removeEventListener('scroll', onScroll);
      if (hasScrollEnd) el.removeEventListener('scrollend', normalise);
      window.removeEventListener('resize', measure);
    };
  }, [measure, normalise]);

  // Visitors who asked for reduced motion get no auto-slide (they can still press play).
  useEffect(() => {
    if (autoplay > 0 && reducedMotion()) setPlaying(false);
  }, [autoplay]);

  // Mouse dragging (touch already scrolls natively, with momentum). Snap is switched off while dragging and
  // until the release animation ends; a short flick (15% of a card) is enough to move one card.
  const drag = useRef(null);
  const dragGen = useRef(0); // bumps on every drag, so a previous drag's release timer can't end this one
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false, id: e.pointerId };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    const el = track.current;
    if (!d || !el) return;
    const dx = e.clientX - d.x;
    if (!d.moved) {
      if (Math.abs(dx) < 5) return; // a click, not a drag
      d.moved = true;
      dragGen.current += 1;
      el.classList.add('is-dragging');
      try {
        el.setPointerCapture(d.id);
      } catch {
        /* pointer already gone */
      }
    }
    el.scrollLeft = d.left - dx;
  };
  const endDrag = (e) => {
    const d = drag.current;
    const el = track.current;
    drag.current = null;
    if (!d || !d.moved || !el) return;
    const step = stepWidth(el);
    const from = Math.round(d.left / step);
    let to = Math.round(el.scrollLeft / step);
    const dx = (e?.clientX ?? d.x) - d.x;
    if (to === from && Math.abs(dx) > step * 0.15) to += dx < 0 ? 1 : -1;
    el.scrollTo({ left: to * step, behavior: reducedMotion() ? 'auto' : 'smooth' });
    const gen = dragGen.current;
    const release = () => {
      if (gen === dragGen.current && !drag.current) el.classList.remove('is-dragging');
    };
    if ('onscrollend' in window) el.addEventListener('scrollend', release, { once: true });
    window.setTimeout(release, 700); // fallback (and if the position didn't change, no scrollend fires)
    // The click that follows a drag must not open the card's link.
    const swallow = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    };
    el.addEventListener('click', swallow, { capture: true, once: true });
    window.setTimeout(() => el.removeEventListener('click', swallow, { capture: true }), 0);
  };

  // Previous / Next (and auto-slide) move exactly one card.
  const move = (dir) => {
    const el = track.current;
    if (!el) return;
    const step = stepWidth(el);
    const behavior = reducedMotion() ? 'auto' : 'smooth';
    if (!looped && !loop && dir > 0 && el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) return;
    el.scrollBy({ left: dir * step, behavior });
  };

  // Auto-slide: one card per tick. Infinite mode keeps going forward; otherwise it returns to the first card.
  useEffect(() => {
    if (!autoplay || !playing || hold) return undefined;
    const timer = window.setInterval(() => {
      const el = track.current;
      const box = root.current?.getBoundingClientRect();
      if (!el || !box || document.hidden) return;
      if (box.bottom < 0 || box.top > window.innerHeight) return; // off-screen: don't move
      if (!looped && el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollTo({ left: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
      } else {
        move(1);
      }
    }, autoplay);
    return () => window.clearInterval(timer);
  }, [autoplay, playing, hold, looped]);

  const holdOn = () => setHold(true);
  const holdOff = (e) => {
    // focusout: stay held while focus moves to another element inside the carousel
    if (e?.type === 'blur' && root.current?.contains(e.relatedTarget)) return;
    setHold(false);
  };

  const slide = (child, i, copy) => (
    <div
      key={`${copy || ''}${child.key ?? i}`}
      className="carousel__slide"
      {...(copy
        ? { 'aria-hidden': 'true', inert: true }
        : { role: 'group', 'aria-roledescription': 'slide', 'aria-label': `${i + 1} of ${count}` })}
    >
      {child}
    </div>
  );

  return (
    <div
      ref={root}
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={holdOn}
      onPointerLeave={holdOff}
      onFocus={holdOn}
      onBlur={holdOff}
    >
      <div className="gallery-head">
        <div>{head}</div>
        <div className="carousel__actions">
          {actions}
          <div className="carousel__nav">
            {autoplay > 0 ? (
              <button
                type="button"
                className="carousel__btn"
                onClick={() => setPlaying((p) => !p)}
                aria-controls={id}
                aria-label={playing ? `Pause automatic sliding of ${name}` : `Play automatic sliding of ${name}`}
              >
                <Icon name={playing ? 'pause' : 'play'} size={18} />
              </button>
            ) : null}
            <button type="button" className="carousel__btn" onClick={() => move(-1)} disabled={!loop && edges.start} aria-controls={id} aria-label={`Previous ${name}`}>
              <Icon name="chevronLeft" size={20} />
            </button>
            <button type="button" className="carousel__btn" onClick={() => move(1)} disabled={!loop && edges.end} aria-controls={id} aria-label={`Next ${name}`}>
              <Icon name="chevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* While sliding automatically, screen readers are not interrupted by every move (WAI carousel pattern). */}
      <div
        className="carousel__track"
        id={id}
        ref={track}
        aria-live={playing && !hold ? 'off' : 'polite'}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDragStart={(e) => e.preventDefault()}
      >
        {looped ? slides.map((c, i) => slide(c, i, 'before-')) : null}
        {slides.map((c, i) => slide(c, i, ''))}
        {looped ? slides.map((c, i) => slide(c, i, 'after-')) : null}
      </div>
      {count > 1 ? (
        <div className="carousel__dots" role="group" aria-label={`Choose a slide of ${name}`}>
          {slides.map((c, i) => (
            <button
              key={c.key ?? i}
              type="button"
              className={`carousel__dot${i === active ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-controls={id}
              aria-label={`Show slide ${i + 1} of ${count}`}
              aria-current={i === active ? 'true' : undefined}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

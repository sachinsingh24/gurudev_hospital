import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';

/**
 * Floating "scroll to top" button. Appears after scrolling 600px; sits above the mobile action bar
 * on phones and in the bottom-right corner on desktop. Respects prefers-reduced-motion.
 */
export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // React bails out when the boolean doesn't change, so this is cheap without rAF throttling
    // (rAF is paused in background tabs, which would leave the button stuck hidden).
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    // Keep keyboard / screen-reader users oriented: move focus to the top of the page.
    document.querySelector('.header__logo')?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className={`to-top${show ? ' to-top--show' : ''}`}
      onClick={toTop}
      aria-label="Scroll to top"
      title="Back to top"
      tabIndex={show ? 0 : -1}
      aria-hidden={show ? undefined : 'true'}
    >
      <Icon name="arrowUp" size={22} />
    </button>
  );
}

/**
 * Google Analytics 4 (free standard GA4). Enabled only when VITE_GA_MEASUREMENT_ID is set (e.g. G-XXXXXXX).
 * - gtag.js is loaded after the page is idle so it never delays LCP / INP.
 * - Page views are sent manually on every client-side route change (SPA).
 * - Patient-intent actions are tracked as events — mark them as "Key events" in GA4:
 *     click_call, click_whatsapp, click_directions, generate_lead
 */
const GA_ID = (import.meta.env && import.meta.env.VITE_GA_MEASUREMENT_ID) || '';
let started = false;

export const analyticsEnabled = Boolean(GA_ID);

export function initAnalytics() {
  if (!GA_ID || started || typeof window === 'undefined') return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });

  const load = () => {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
    document.head.appendChild(s);
  };
  if ('requestIdleCallback' in window) window.requestIdleCallback(load, { timeout: 3500 });
  else setTimeout(load, 2500);

  // One delegated listener for every call / WhatsApp / directions link on the site.
  document.addEventListener(
    'click',
    (e) => {
      const a = e.target.closest?.('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const where = { link_location: a.closest('header, footer, nav, main, aside')?.tagName.toLowerCase() || 'page' };
      if (href.startsWith('tel:')) trackEvent('click_call', where);
      else if (href.includes('wa.me/')) trackEvent('click_whatsapp', where);
      else if (href.includes('google.com/maps/dir')) trackEvent('click_directions', where);
    },
    { capture: true },
  );
}

export function trackEvent(name, params = {}) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

export function trackPageView(path) {
  trackEvent('page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

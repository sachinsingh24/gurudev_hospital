import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MobileActionBar from './MobileActionBar.jsx';
import ScrollTopButton from './ScrollTopButton.jsx';
import { ZoomProvider } from './Zoom.jsx';
import { initAnalytics, trackPageView } from '../lib/analytics.js';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    // 'instant' overrides html { scroll-behavior: smooth }, which otherwise animated (or stalled) the jump on every page change
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Child effects (the page's <Seo>) have already updated document.title at this point.
    initAnalytics();
    trackPageView(pathname);
  }, [pathname]);

  return (
    <ZoomProvider>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer />
      <MobileActionBar />
      <ScrollTopButton />
    </ZoomProvider>
  );
}

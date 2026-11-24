import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';
import { HeadProvider, headToString } from './seo/Head.jsx';

export { getAllRoutes } from './routes.js';
export { preloadAll, routeFor } from './routeTable.js';
export { site } from './config/site.js';
export { localPhotos, photoLargest } from './data/photos.js';

/** Render one URL to HTML + head tags (used at build time by scripts/prerender.mjs). */
export function render(url) {
  const collector = { head: null };
  const html = renderToString(
    <StrictMode>
      <HeadProvider collector={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadProvider>
    </StrictMode>,
  );
  return { html, head: headToString(collector.head) };
}

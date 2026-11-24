import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import { PAGES, ROUTES } from './routeTable.js';
import { ChunkErrorBoundary } from './lib/lazyPage.jsx';

export default function App() {
  return (
    <Layout>
      {/* Only reached when a page's chunk is still loading on client-side navigation (see src/lib/lazyPage.jsx). */}
      <ChunkErrorBoundary>
        <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
          <Routes>
            {ROUTES.map((r) => {
              const Page = PAGES[r.page];
              return <Route key={r.path} path={r.path} element={<Page />} />;
            })}
          </Routes>
        </Suspense>
      </ChunkErrorBoundary>
    </Layout>
  );
}

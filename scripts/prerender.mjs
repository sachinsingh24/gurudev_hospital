/**
 * Static-site generation step.
 * Renders every route with React on the server and writes fully-formed HTML (content, title, meta, canonical,
 * JSON-LD) so search engines index real content. The same React app then hydrates in the browser.
 * Also writes sitemap.xml and robots.txt. Deployed on Vercel (see vercel.json).
 */
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

const { render, getAllRoutes, preloadAll, routeFor, site, localPhotos, photoLargest } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(path.join(dist, 'index.html'), 'utf8');

// Pages are code-split (src/routeTable.js). Load every page module first so renderToString never suspends.
await preloadAll();

// Each page's own JS chunk (+ shared chunks it needs) → <link rel="modulepreload">, so the browser fetches it in
// parallel with the main bundle instead of discovering it after. Chunks index.html already loads are skipped.
const manifestFile = path.join(dist, '.vite', 'manifest.json');
const manifest = JSON.parse(await readFile(manifestFile, 'utf8'));
const chunkFiles = (key, seen = new Set()) => {
  const entry = manifest[key];
  if (!entry || seen.has(key)) return [];
  seen.add(key);
  return [entry.file, ...(entry.imports || []).flatMap((k) => chunkFiles(k, seen))];
};
const entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry);
const alreadyLoaded = new Set(chunkFiles(entryKey));
const preloadTags = (route) => {
  const src = routeFor(route).src;
  if (!manifest[src]) throw new Error(`No chunk in the Vite manifest for ${src} (route ${route})`);
  return [...new Set(chunkFiles(src))]
    .filter((file) => !alreadyLoaded.has(file))
    .map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`)
    .join('\n    ');
};

if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html template is missing <!--app-head--> or <!--app-html--> placeholders');
}

const gsc = site.api.gscVerification
  ? `<meta name="google-site-verification" content="${site.api.gscVerification.replace(/"/g, '')}" />`
  : '';

const fileFor = (route) => (route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`);

async function writePage(route, outFile) {
  const { html, head } = render(route);
  const page = template
    .replace('<!--gsc-verification-->', gsc)
    .replace('<!--app-head-->', `${head}\n    ${preloadTags(route)}`)
    .replace('<!--app-html-->', html);
  const target = path.join(dist, outFile);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, page, 'utf8');
  return page.length;
}

const routes = getAllRoutes();
let total = 0;
for (const r of routes) {
  const bytes = await writePage(r.path, fileFor(r.path));
  total += bytes;
  console.log(`  ✓ ${r.path.padEnd(48)} ${(bytes / 1024).toFixed(1)} kB`);
}
await writePage('/404', '404.html');
console.log(`  ✓ /404 (noindex)`);

// ---- sitemap.xml ----
const today = new Date().toISOString().slice(0, 10);
const url = (p) => `${site.url}${p === '/' ? '/' : p}`;
const xmlEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Image sitemap entries for self-hosted hospital photos (home shows the first 8, /photos shows all).
const imageTags = (r) => {
  const list = r.path === '/photos' ? localPhotos : r.path === '/' ? localPhotos.slice(0, 8) : [];
  return list.map((p) => `
    <image:image><image:loc>${xmlEsc(site.url + photoLargest(p))}</image:loc></image:image>`).join('');
};
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map(
    (r) => `  <url>
    <loc>${url(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>${imageTags(r)}
  </url>`,
  )
  .join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');

// ---- robots.txt ----
await writeFile(
  path.join(dist, 'robots.txt'),
  `# ${site.name}
User-agent: *
Allow: /
Disallow: /404

Sitemap: ${site.url}/sitemap.xml
`,
  'utf8',
);

// Hosting: Vercel — clean URLs, apex → www redirect and cache headers live in vercel.json.

await rm(path.join(root, 'dist-server'), { recursive: true, force: true });
// The manifest is a build-time file only; keep it out of the deployed site.
await rm(path.join(dist, '.vite'), { recursive: true, force: true });

console.log(`\n✓ Prerendered ${routes.length} pages + 404 (${(total / 1024).toFixed(0)} kB HTML), sitemap.xml, robots.txt → dist/`);
console.log(`  Canonical origin: ${site.url}`);

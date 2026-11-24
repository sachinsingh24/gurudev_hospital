/**
 * Minimal production preview server for the prerendered build — mirrors how Netlify/Vercel/Cloudflare
 * serve it: /about → dist/about.html, unknown URLs → dist/404.html with HTTP 404, gzip for text.
 * Usage: npm run preview   (PORT env var optional, default 4173)
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = Number(process.env.PORT || 4173);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.ico': 'image/x-icon', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8', '.woff2': 'font/woff2',
};

const exists = async (p) => { try { return (await stat(p)).isFile(); } catch { return false; } };

async function resolve(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]).replace(/\/+$/, '') || '/';
  const safe = path.normalize(clean).replace(/^(\.\.[/\\])+/, '');
  const candidates = clean === '/' ? ['index.html'] : [safe, `${safe}.html`, path.join(safe, 'index.html')];
  for (const c of candidates) {
    const p = path.join(dist, c);
    if (p.startsWith(dist) && (await exists(p))) return { file: p, status: 200 };
  }
  return { file: path.join(dist, '404.html'), status: 404 };
}

createServer(async (req, res) => {
  try {
    // Mirror vercel.json redirects used in production.
    if ((req.url || '').split('?')[0].replace(/\/+$/, '') === '/review') {
      res.writeHead(302, { Location: 'https://search.google.com/local/writereview?placeid=ChIJrdahtqDt5zsRZjEF-9eCBis' });
      res.end();
      return;
    }
    const { file, status } = await resolve(req.url || '/');
    const ext = path.extname(file);
    let body = await readFile(file);
    const headers = { 'Content-Type': TYPES[ext] || 'application/octet-stream' };
    headers['Cache-Control'] = file.includes(`${path.sep}assets${path.sep}`) ? 'public, max-age=31536000, immutable' : 'no-cache';
    if (/text|javascript|json|xml|svg/.test(headers['Content-Type']) && /gzip/.test(req.headers['accept-encoding'] || '')) {
      body = gzipSync(body);
      headers['Content-Encoding'] = 'gzip';
    }
    res.writeHead(status, headers);
    res.end(body);
  } catch (e) {
    res.writeHead(500);
    res.end(String(e));
  }
}).listen(port, () => console.log(`Preview: http://localhost:${port}`));

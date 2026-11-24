/**
 * Representative stock photos for speciality & treatment pages:  npm run stock
 *
 * Reads photos/stock-manifest.json, downloads each image (Unsplash / Pexels, both free for commercial use
 * without attribution), crops to 3:2, writes WebP 480/960/1440 to public/images/stock/, and generates
 * src/data/pageImages.json (used by the pages). Source URLs + licence are kept in the JSON for records only;
 * no photographer names are rendered on the site.
 */
import sharp from 'sharp';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'photos', 'stock-manifest.json'), 'utf8'));
const outDir = path.join(root, 'public', 'images', 'stock');
const WIDTHS = [480, 960, 1440];
const RATIO = 3 / 2;

const resolve = (src) => {
  const [provider, id] = src.split(':');
  if (provider === 'unsplash')
    return { url: `https://images.unsplash.com/${id}?w=1600&q=85&fm=jpg`, page: `https://images.unsplash.com/${id}`, license: 'Unsplash License (free commercial use, no attribution required)' };
  if (provider === 'pexels')
    return { url: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`, page: `https://www.pexels.com/photo/${id}/`, license: 'Pexels License (free commercial use, no attribution required)' };
  throw new Error(`Unknown provider in ${src}`);
};

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const out = {};
let count = 0;
for (const [slug, list] of Object.entries(manifest.images)) {
  out[slug] = [];
  for (const [i, item] of list.entries()) {
    const { url, page, license } = resolve(item.src);
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`${slug}[${i}] download failed: ${res.status} ${url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const name = `${slug}-${i + 1}`;
    const base = sharp(buf, { failOn: 'none' }).rotate();
    const meta = await base.metadata();
    // centre-crop to 3:2 so banners and inline images share one consistent shape
    const srcW = meta.width;
    const srcH = meta.height;
    let cw = srcW;
    let ch = Math.round(srcW / RATIO);
    if (ch > srcH) {
      ch = srcH;
      cw = Math.round(srcH * RATIO);
    }
    const left = Math.round((srcW - cw) / 2);
    const top = Math.round((srcH - ch) / 2);
    const widths = WIDTHS.filter((w) => w <= cw);
    if (!widths.length) widths.push(cw);
    for (const w of widths) {
      await sharp(buf, { failOn: 'none' })
        .rotate()
        .extract({ left, top, width: cw, height: ch })
        .resize({ width: w })
        .webp({ quality: 76, effort: 5 })
        .toFile(path.join(outDir, `${name}-${w}.webp`));
    }
    out[slug].push({ file: name, alt: item.alt, width: widths.at(-1), height: Math.round(widths.at(-1) / RATIO), widths, source: page, license });
    count += 1;
    console.log(`  ✓ ${name} (${widths.join('/')})`);
  }
}
await writeFile(path.join(root, 'src', 'data', 'pageImages.json'), `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`\n✓ ${count} stock images → public/images/stock, src/data/pageImages.json`);

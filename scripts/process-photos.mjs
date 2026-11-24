/**
 * Hospital photo pipeline:  npm run photos
 *
 *   photos/*.jpg|jpeg|png|webp|tif   (original photos — e.g. downloaded from the Google Business Profile
 *                                      dashboard "Photos → By owner", or straight from the camera)
 *   photos/captions.json             (optional alt text / caption / category / order per file)
 *
 * → public/images/hospital/<slug>-480|960|1600.webp   (auto-rotated, EXIF/GPS stripped, never upscaled)
 * → src/data/photos.json                             (consumed by the gallery, schema and image sitemap)
 */
import sharp from 'sharp';
import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'photos');
const outDir = path.join(root, 'public', 'images', 'hospital');
const dataFile = path.join(root, 'src', 'data', 'photos.json');
const WIDTHS = [480, 960, 1600];
const EXT = /\.(jpe?g|png|webp|tiff?)$/i;

const slugify = (s) =>
  s.toLowerCase().replace(/\.[a-z0-9]+$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'photo';
const humanize = (s) => s.replace(/\.[a-z0-9]+$/i, '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();

if (!existsSync(srcDir)) {
  await mkdir(srcDir, { recursive: true });
  console.log('Created /photos — add hospital photos there and run `npm run photos` again.');
  process.exit(0);
}

let captions = {};
const capFile = path.join(srcDir, 'captions.json');
if (existsSync(capFile)) captions = JSON.parse(await readFile(capFile, 'utf8'));

const files = (await readdir(srcDir)).filter((f) => EXT.test(f)).sort();
await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const used = new Set();
const out = [];
for (const file of files) {
  const meta = captions[file] || {};
  let slug = slugify(meta.slug || file);
  while (used.has(slug)) slug += '-2';
  used.add(slug);

  const input = sharp(path.join(srcDir, file), { failOn: 'none' }).rotate(); // apply EXIF orientation
  const { width, height } = await input.clone().toBuffer({ resolveWithObject: true }).then((r) => r.info);
  // e.g. 4000px → 480/960/1600 · 1200px → 480/960/1200 · 400px → 400 (never upscaled)
  const finalWidths = [...new Set([...WIDTHS.filter((w) => w < width), Math.min(width, WIDTHS.at(-1))])].sort((a, b) => a - b);

  for (const w of finalWidths) {
    await input.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(outDir, `${slug}-${w}.webp`));
  }
  const name = humanize(file);
  out.push({
    slug,
    alt: meta.alt || `${name} — Gurudev Multi-Speciality Hospital, Badlapur East`,
    caption: meta.caption || name.charAt(0).toUpperCase() + name.slice(1),
    category: meta.category || 'Hospital',
    order: Number.isFinite(meta.order) ? meta.order : 100,
    source: meta.source || null,
    width,
    height,
    widths: finalWidths,
  });
  console.log(`  ✓ ${file} → ${slug} (${finalWidths.join(', ')}w)`);
}

out.sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
await writeFile(dataFile, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`\n✓ ${out.length} photo(s) processed → public/images/hospital, src/data/photos.json`);

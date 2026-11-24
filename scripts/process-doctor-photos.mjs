/**
 * Doctor portraits:  npm run doctor-photos
 *   photos/doctors/<doctor-slug>.jpg|png|webp  →  public/images/doctors/<slug>-160|320|640.webp (square)
 *   + src/data/doctorPhotos.json   (used by the doctor cards, profile page, home spotlight and schema)
 * Only add a portrait with the doctor's consent (see photos/doctors/README.md).
 */
import sharp from 'sharp';
import { readdir, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'photos', 'doctors');
const outDir = path.join(root, 'public', 'images', 'doctors');
const dataFile = path.join(root, 'src', 'data', 'doctorPhotos.json');
const SIZES = [160, 320, 640];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
const out = {};
if (existsSync(srcDir)) {
  for (const file of (await readdir(srcDir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))) {
    const slug = file.replace(/\.[a-z]+$/i, '').toLowerCase();
    const img = sharp(path.join(srcDir, file), { failOn: 'none' }).rotate();
    const { width, height } = await img.metadata();
    const side = Math.min(width, height);
    const sizes = SIZES.filter((s) => s <= side);
    if (!sizes.length) sizes.push(side);
    for (const s of sizes) {
      await sharp(path.join(srcDir, file), { failOn: 'none' })
        .rotate()
        // square crop, biased slightly upwards so the face stays centred in circular avatars
        .resize(s, s, { fit: 'cover', position: 'north' })
        .webp({ quality: 82, effort: 5 })
        .toFile(path.join(outDir, `${slug}-${s}.webp`));
    }
    out[slug] = { sizes, size: sizes.at(-1) };
    console.log(`  ✓ ${file} → ${slug} (${sizes.join('/')})`);
  }
}
await writeFile(dataFile, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`✓ ${Object.keys(out).length} doctor portrait(s) → public/images/doctors, src/data/doctorPhotos.json`);

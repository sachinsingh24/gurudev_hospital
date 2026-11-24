/**
 * Generates PNG icons and the Open Graph share image from SVG sources into /public.
 * Replace with real photography/logo when the hospital supplies them (see MISSING-INFO.md).
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');
await mkdir(pub, { recursive: true });

const mark = (size, radius = 0.275) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40">
  <rect width="40" height="40" rx="${40 * radius}" fill="#0b5e73"/>
  <path d="M16.5 9h7v7.5H31v7h-7.5V31h-7v-7.5H9v-7h7.5z" fill="#fff"/>
</svg>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#073f4e"/><stop offset=".6" stop-color="#0b5e73"/><stop offset="1" stop-color="#0e7088"/>
    </linearGradient>
    <radialGradient id="r" cx=".9" cy="0" r=".7"><stop offset="0" stop-color="#10957a" stop-opacity=".6"/><stop offset="1" stop-color="#10957a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#r)"/>
  <g transform="translate(80 84) scale(2.4)">
    <rect width="40" height="40" rx="11" fill="#ffffff" fill-opacity=".14"/>
    <path d="M16.5 9h7v7.5H31v7h-7.5V31h-7v-7.5H9v-7h7.5z" fill="#fff"/>
  </g>
  <text x="200" y="128" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="700" fill="#8ff0cb" letter-spacing="3">BADLAPUR EAST · THANE</text>
  <text x="80" y="270" font-family="Segoe UI, Arial, sans-serif" font-size="74" font-weight="800" fill="#ffffff">Gurudev Multi-Speciality</text>
  <text x="80" y="356" font-family="Segoe UI, Arial, sans-serif" font-size="74" font-weight="800" fill="#ffffff">Hospital</text>
  <text x="80" y="428" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="500" fill="#d7ecf1">24×7 surgical &amp; multi-speciality care · Surgeon on floor 24×7</text>
  <rect x="80" y="478" rx="34" ry="34" width="420" height="68" fill="#c8281c"/>
  <text x="290" y="523" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="32" font-weight="800" fill="#ffffff">Call 080875 34842</text>
  <text x="530" y="523" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" fill="#ffffff">www.gurudevhospital.com</text>
</svg>`;

await Promise.all([
  sharp(Buffer.from(mark(512, 0.2))).png().toFile(path.join(pub, 'logo-512.png')),
  sharp(Buffer.from(mark(192, 0.2))).png().toFile(path.join(pub, 'icon-192.png')),
  sharp(Buffer.from(mark(180, 0.2))).png().toFile(path.join(pub, 'apple-touch-icon.png')),
  sharp(Buffer.from(mark(32))).png().toFile(path.join(pub, 'favicon-32.png')),
  sharp(Buffer.from(og)).png({ compressionLevel: 9, palette: true }).toFile(path.join(pub, 'og-image.png')),
]);
console.log('✓ icons + og-image generated in /public');

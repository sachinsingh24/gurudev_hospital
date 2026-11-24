/**
 * Generates the patient-review QR code + a printable reception card:  npm run review-qr
 *   marketing/review-qr.png, marketing/review-qr.svg, marketing/review-card.html
 * The QR points to https://www.gurudevhospital.com/review, which redirects (vercel.json) to the
 * hospital's Google "Write a review" form — so the printed code keeps working even if the Google URL changes.
 */
import QRCode from 'qrcode';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'marketing');
const url = 'https://www.gurudevhospital.com/review';
await mkdir(out, { recursive: true });

const opts = { errorCorrectionLevel: 'M', margin: 2, color: { dark: '#073f4e', light: '#ffffff' } };
await QRCode.toFile(path.join(out, 'review-qr.png'), url, { ...opts, width: 1024 });
const svg = await QRCode.toString(url, { ...opts, type: 'svg' });
await writeFile(path.join(out, 'review-qr.svg'), svg, 'utf8');

const card = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Review card — Gurudev Multi-Speciality Hospital</title>
<style>
  @page { size: A6; margin: 0; }
  body { margin: 0; font-family: 'Segoe UI', Arial, 'Noto Sans Devanagari', sans-serif; color: #0e1d27; }
  .card { width: 105mm; height: 148mm; box-sizing: border-box; padding: 9mm 8mm; display: flex; flex-direction: column; align-items: center; text-align: center; border: 1px dashed #ccc; }
  .brand { font-weight: 800; font-size: 15pt; color: #0b5e73; }
  .sub { font-size: 8.5pt; color: #5b6b76; margin-top: 1mm; }
  h1 { font-size: 15pt; margin: 6mm 0 1mm; }
  .mr { font-size: 12pt; margin: 0 0 4mm; color: #10957a; font-weight: 700; }
  .qr { width: 62mm; height: 62mm; }
  .qr svg { width: 100%; height: 100%; }
  .stars { color: #f5a524; font-size: 18pt; letter-spacing: 2mm; margin: 3mm 0 1mm; }
  .url { font-size: 9pt; color: #5b6b76; }
  .thanks { margin-top: auto; font-size: 9pt; }
</style></head>
<body><div class="card">
  <div class="brand">Gurudev Multi-Speciality Hospital</div>
  <div class="sub">Shirgaon, Badlapur East · Open 24×7 · 080875 34842</div>
  <h1>How was your care?</h1>
  <p class="mr">तुमचा अनुभव Google वर शेअर करा</p>
  <div class="qr">${svg}</div>
  <div class="stars">★★★★★</div>
  <div class="url">Scan with your phone camera or visit<br><strong>gurudevhospital.com/review</strong></div>
  <div class="thanks">Thank you for helping other families in Badlapur find the right care.</div>
</div></body></html>`;
await writeFile(path.join(out, 'review-card.html'), card, 'utf8');
console.log(`✓ marketing/review-qr.png, review-qr.svg, review-card.html → ${url}`);

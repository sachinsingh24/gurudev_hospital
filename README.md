# Gurudev Multi-Speciality Hospital — website

Official website for **Gurudev Multi-Speciality Hospital, Shirgaon, Badlapur East** (www.gurudevhospital.com).

- **Built with:** React 19, Vite 8 and React Router 7.
- **Prerendered for SEO:** every page ships as complete static HTML, then becomes a live React app in the browser.

- **SEO plan:** [SEO-STRATEGY.md](SEO-STRATEGY.md)
- **What the hospital still needs to confirm:** [MISSING-INFO.md](MISSING-INFO.md)

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173 (development, client-rendered)
npm run build      # production build + prerender → dist/
npm run preview    # serve dist/ like production → http://localhost:4173
```

Node 20.19+ is required.

## Deploy on Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repo and import it in Vercel. Alternatively, run `npx vercel` here.
   - Build settings come from `vercel.json`: `npm run build` → `dist/`.
2. In **Project → Settings → Environment Variables**, add:

   | Variable | Value |
   |---|---|
   | `VITE_SITE_URL` | `https://www.gurudevhospital.com` |
   | `VITE_GOOGLE_MAPS_API_KEY` | your browser key (see below) |
   | `VITE_FORM_ENDPOINT` | optional: endpoint for appointment requests |
   | `VITE_GSC_VERIFICATION` | optional: Google Search Console code |
   | `VITE_GA_MEASUREMENT_ID` | optional: Google Analytics 4 ID (`G-…`, free) |

   These are read **at build time**, so redeploy after changing them.
3. In **Project → Settings → Domains**:
   - Add `www.gurudevhospital.com` as the primary domain.
   - Add `gurudevhospital.com` and set it to **redirect (308) to www**.
   - Point DNS as Vercel instructs: an A record for the apex and a CNAME for www.
   - `vercel.json` also contains an apex → www redirect as a safety net.
4. `cleanUrls` serves `/about` from `about.html`. Unknown URLs get `404.html` with a real 404 status.

## Live Google reviews (dynamic)

The reviews section loads the hospital's **current rating, review count and latest reviews** from Google, using the official Maps JavaScript API and Places API (New) with place ID `ChIJrdahtqDt5zsRZjEF-9eCBis`.

Setup:
1. In Google Cloud Console, create a project and enable billing.
2. Enable **Maps JavaScript API**, **Places API (New)** and **Maps Embed API**.
3. Create an API key, then restrict it:
   - Application restriction: **Websites**. Allow `https://www.gurudevhospital.com/*`, `https://gurudevhospital.com/*` and `http://localhost:*/*`.
   - API restriction: the three APIs above.
4. Put the key in `VITE_GOOGLE_MAPS_API_KEY` and redeploy.

How it behaves:
- **Lazy loading.** The API is called only when the reviews section scrolls into view: once per page view, shared by all widgets.
  - This keeps Core Web Vitals fast and API usage low.
  - Places Details with reviews is a billable SKU. Check current pricing and free monthly usage, and set a budget alert.
- **Google's limits and rules.**
  - Google returns up to **5 reviews** ("most relevant").
  - Reviewer names and links are shown with Google attribution, as Google's terms require.
  - Nothing is stored or cached.
- **Without a key** the site still works. It shows the rating snapshot from `src/config/site.js` with "Read all reviews" and "Write a review" links, and the map uses a keyless embed.

## Hospital photos

The gallery (home page, about page and `/photos`) combines two sources:

1. **Live photos from the Google Maps listing**, through Places API (New).
   - They update automatically when photos are added on Google.
   - Each photo shows its contributor credit, as Google requires.
   - They load only when the gallery scrolls into view.
   - Fetching the photo list is free; each photo **shown** is billed (see [GOOGLE-PRICING.md](GOOGLE-PRICING.md)).
2. **The hospital's own photos, self-hosted.** This is best for SEO: they appear in Google Images under this domain, in the schema and in the image sitemap, at no API cost.
   - **5 are already in place**, taken from the hospital's own Google listing: building and signboard (day and night), operation theatre, reception and OPD, inauguration. Their source and alt text are in `photos/captions.json`.
   - To add more, put the originals in `photos/` (see [photos/README.md](photos/README.md)), run `npm run photos`, then rebuild.
   - Because self-hosted photos exist, the home and about galleries no longer load paid Google photos. `/photos` shows both kinds, and skips Google copies of photos that are already self-hosted.

Photos uploaded by patients and other customers on Google are only ever shown live with credit. They are never downloaded or re-hosted, because they belong to those contributors.

## Representative stock photos and illustrations

- **Photos.** Each speciality and treatment page has two representative photos: a banner and an in-article photo. Health guides reuse the related treatment's photo.
  - They come from Unsplash and Pexels, both free for commercial use with no attribution required.
  - Every photo carries a small **"Representative image"** label so it isn't mistaken for the hospital. No photographer names are shown.
  - To change a photo, edit `photos/stock-manifest.json` (`"unsplash:photo-…"` or `"pexels:<id>"`, plus alt text), then run `npm run stock` and rebuild.
  - `npm run stock` crops to 3:2, writes WebP at 480/960/1440px to `public/images/stock/`, and records each source URL and licence in `src/data/pageImages.json` (kept for records, not shown on the site).
- **Illustrations.** Speciality and treatment cards use original medical illustrations from `src/components/Illustration.jsx`: no downloads, no licences, a few KB each.
- **Live Google Maps photos are off** (`site.google.showLivePhotos = false`). Google requires each contributor's name to be shown on those photos. The gallery shows the hospital's own self-hosted photos instead.

## Google Analytics 4

GA4 is free. Set `VITE_GA_MEASUREMENT_ID` to turn it on.
- gtag.js loads after the page is idle, so it doesn't slow loading.
- It tracks page views on every route change, plus `click_call`, `click_whatsapp`, `click_directions` and `generate_lead`.
- Mark those four as **Key events** in GA4 to count patient enquiries.

## Review link and QR code

- `https://www.gurudevhospital.com/review` redirects to the hospital's Google "Write a review" form. It's configured in `vercel.json`, and mirrored by `npm run preview`.
- `npm run review-qr` regenerates the following in `marketing/`:
  - `review-qr.png` and `review-qr.svg`
  - `review-card.html`: a printable A6 reception card
- The WhatsApp message to send after discharge is in [SEO-STRATEGY.md](SEO-STRATEGY.md), section 5.

## Appointment form

- If `VITE_FORM_ENDPOINT` is set, requests are POSTed as JSON. This works with Formspree, Web3Forms, Getform, a Google Apps Script web app, or your own API.
- If it is empty, the form opens **WhatsApp** to 8087534842 with the request pre-filled. Confirm WhatsApp is active on that number.
- `?dept=<speciality-slug>` pre-selects the department; every "Book appointment" button links this way.

## Project structure

```
src/
  config/site.js         NAP, Place ID, hours, attributes: the single source of truth (keep identical to Google)
  data/                  specialities, treatments (with SPECIALITY_/TREATMENT_PRIORITY order), doctors, areas,
                         facilities, guides (health articles), FAQs: these drive all pages, routes and the sitemap.
                         Page text lives in *Content.js files (treatmentContent, specialityContent, guideContent)
                         that only the detail pages load, so menus and cards stay light
  seo/Head.jsx           dependency-free head manager (SSR collector + client updates)
  seo/schema.js          Schema.org JSON-LD builders (Hospital, MedicalProcedure, IndividualPhysician, …)
  lib/googlePlace.js     live Google reviews + photos stores (Maps JS API, Places API (New))
  lib/analytics.js       optional GA4 (page views + call/WhatsApp/directions/lead events)
  data/photos.json       self-hosted photo list (generated by `npm run photos`)
  components/            Header, Footer, MobileActionBar, GoogleReviews, MapEmbed, AppointmentForm, Blocks…
  pages/                 Home, Specialities, SpecialityDetail, Treatments, TreatmentDetail, Doctors,
                         DoctorDetail, Areas, Facilities, Guides, Photos, Reviews, About, Contact,
                         BookAppointment, Privacy, NotFound
  routes.js              list of indexable URLs (prerender + sitemap)
  routeTable.js          URL → page component; each page is its own JS chunk (lib/lazyPage.jsx)
  entry-server.jsx       server render used at build time
  main.jsx               browser entry (hydrates prerendered HTML)
scripts/
  prerender.mjs          renders every route → dist/*.html (+ modulepreload for the page's chunk), sitemap.xml, robots.txt
  serve.mjs              local production preview server
  generate-icons.mjs     regenerates favicon/OG PNGs (npm run build:icons; needs Segoe UI/Arial fonts)
  process-photos.mjs     photos/ originals → optimised WebP (480/960/1600) + src/data/photos.json
  review-qr.mjs          review QR code + printable reception card → marketing/
photos/                  the hospital's original photos + captions.json (alt text, source)
marketing/               review QR code and printable review card
seo/keywords.csv         about 140 target keywords → target URL, intent, language, priority, evidence
```

### Adding content
- **New treatment or speciality:** add an object to `src/data/treatments.js` or `specialities.js` (name, slug, card and schema fields) and its page text under the same slug in `treatmentContent.js` or `specialityContent.js`. Then add its slug to `TREATMENT_PRIORITY` or `SPECIALITY_PRIORITY` where it should rank. The page, navigation, footer, sitemap and schema update automatically.
- **Change priority order:** reorder `TREATMENT_PRIORITY` or `SPECIALITY_PRIORITY`. Every menu and list follows that order.
- **New health guide:** add its list entry to `src/data/guides.js` (in priority order) and its sections and FAQs under the same slug in `src/data/guideContent.js`. Once a doctor has reviewed it, set `reviewedBy` and `lastReviewed`.
- **New page type:** create it in `src/pages/`, then register it in `src/routeTable.js` (in `PAGES` and `ROUTES`). That gives it its own JS chunk and its preload link; add indexable URLs to `src/routes.js` for the sitemap.
- **New doctor profile:** add the details in `src/data/doctors.js` and set `profile: true`.
- **Real photos:** put them in `public/images/` as WebP, at most 1600px wide.
  - Reference them with `<img src="/images/…" alt="…" width height loading="lazy">`.
  - Use `fetchpriority="high"` only for a hero image above the fold.

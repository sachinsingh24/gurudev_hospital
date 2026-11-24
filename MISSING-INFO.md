# Missing information and next steps

**Last updated: 24 Nov 2026.**

The website is **live at https://www.gurudevhospital.com** (Vercel, with the domain connected at GoDaddy). Every fact on it comes from the hospital's **Google Business Profile** (place ID `ChIJrdahtqDt5zsRZjEF-9eCBis`, read 23 Nov 2026), the hospital's own boards and photos, or Dr. Rupavat's LinkedIn. No dummy data is used.

Anything not published officially is left out or worded around. Send the answers and they can be added in minutes: most live in `src/config/site.js` or `src/data/*.js`.

---

## Status at a glance

| Area | Status |
|---|---|
| Website built: 52 pages, Google structured data, sitemap, robots.txt | ✅ Done |
| Live on `www.gurudevhospital.com`; `gurudevhospital.com` and `http://` redirect to it | ✅ Done (checked 24 Nov 2026) |
| PageSpeed (mobile / desktop) | ✅ Performance 96 / 100 · Accessibility 100 / 100 · Best Practices 100 / 100 · SEO 100 / 100 |
| Code on GitHub (`sachinsingh24/gurudev_hospital`); Vercel deploys every push to `main` | ✅ Done |
| Google Search Console: verify, submit the sitemap | ⏳ **Next step 1** |
| Google Business Profile: name fix, website and booking links | ⏳ **Next step 2** |
| Live Google reviews on the site (Maps API key) | ⏳ Next step 3; the site shows the saved rating (4.8★, 133 reviews) until then |
| Google Analytics 4 | ⏳ Next step 3 |
| Appointment form delivery | ⚠️ Uses WhatsApp on 8087534842; confirm WhatsApp is active (item 2 below) |
| Bing Places, Apple Maps | ⏳ Next step 4 |
| Hospital information still missing | ❓ See "Needed from the hospital" |

---

## Next steps, in order

These need the owner's logins (Google, Vercel, GoDaddy). Each takes 5–15 minutes.

### 1. Google Search Console (gets the site into Google Search)
1. Go to search.google.com/search-console → **Add property** → **Domain** → `gurudevhospital.com`.
2. Copy the TXT record Google gives you. In **GoDaddy → DNS**, add it as a TXT record for `@`, then click **Verify** (it can take a few minutes).
3. **Sitemaps** → submit `https://www.gurudevhospital.com/sitemap.xml`.
4. **URL inspection** → paste `https://www.gurudevhospital.com/` → **Request indexing**. Do the same for `/specialities` and `/contact`.
5. Optional: add the same site in **Bing Webmaster Tools** using "Import from Google Search Console".

### 2. Google Business Profile (the biggest lever for "hospital near me")
Open the profile while signed in as the owner or a manager, then go to **Edit profile**:
- **Name:** `Gurudev Multi-Speciality Hospital`. Remove *"| Best Surgery Centre in Badlapur"*: keywords in the name are against Google's rules and can get the listing suspended.
- **Website:** `https://www.gurudevhospital.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- **Appointment link:** `https://www.gurudevhospital.com/book-appointment?utm_source=google&utm_medium=organic&utm_campaign=gbp-booking`
- **Categories, description, services, photos and the weekly posts plan:** ready to paste in `SEO-STRATEGY.md`, section 5.

### 3. Vercel settings (Project → Settings → Environment Variables, then **Redeploy**)
| Variable | What it does | Where to get it |
|---|---|---|
| `VITE_GOOGLE_MAPS_API_KEY` | Shows the latest Google reviews and rating live on the site | Google Cloud console; setup steps in `README.md` |
| `VITE_GA_MEASUREMENT_ID` | Visitor numbers, plus counts of calls, WhatsApp, directions and booking clicks | analytics.google.com → new GA4 property (free), format `G-XXXXXXXXXX` |
| `VITE_FORM_ENDPOINT` | Optional: sends appointment requests to email or a sheet instead of WhatsApp | Formspree, Web3Forms or a Google Apps Script |

`VITE_SITE_URL` is already set correctly.

### 4. Other maps and directories (same name, address and phone everywhere)
- **Bing Places:** "Import from Google Business Profile".
- **Apple Business Connect:** claim the hospital on Apple Maps.
- **Justdial, Practo, Facebook page:** claim them and use exactly the same details and website. The full list is in `SEO-STRATEGY.md`, section 6.

### 5. Every week, from now on
- **Ask every patient for a Google review:** QR card in `marketing/review-card.html` at reception and in discharge files, or send the short link `www.gurudevhospital.com/review` on WhatsApp. Never pay for or gift reviews.
- **Reply to every review** within 48 hours.
- **Post one update** on the Google profile (the 12-week plan is in `SEO-STRATEGY.md`).
- **Add 2–3 real photos** to the Google profile.

---

## Verified (already used on the site)

| Item | Value |
|---|---|
| Name | Gurudev Multi-Speciality Hospital (मराठी: गुरुदेव मल्टी-स्पेशलिटी हॉस्पिटल) |
| Address | Plot No 12, Yadav Nagar Road, Near Parsi Bungalow, Shirgaon, Badlapur East, Maharashtra 421503 |
| Phone | 080875 34842 / +91 80875 34842 (Google). The site header and buttons show it as **8087534842**, changed by the owner on 24 Nov 2026. |
| Hours | Open 24 hours, 7 days |
| Location | 19.1562458, 73.2335488; plus code 564M+FC |
| Rating | 4.8 from 133 Google reviews (live once the Maps key is set) |
| Specialities | 24-hour critical care, General Medicine, Gastroenterology, Paediatrics, Gynaecology & Obstetrics, Orthopaedics, Neurology, Dialysis, Urology, General Surgery, Trauma |
| Lead surgeon | Dr. Mayur Rupavat: MBBS, MS (General Surgery), FMAS, FIAGES; consulting general & laparoscopic surgeon |
| Dr. Rupavat's education and experience ([LinkedIn](https://www.linkedin.com/in/dr-mayur-rupavat-37027754/), 23 Nov 2026) | MBBS, Dr. Ulhas Patil Medical College (2008–2013). MS General Surgery, Baroda Medical College (2016–2019). Fellowship in Minimal Access Surgery, Seth GS Medical College & KEM Hospital, Mumbai (2020–2021). At Gurudev since April 2023; focus: laparoscopic surgery and proctology |
| Other doctors | Dr. Tarkeshwar Gupta and Dr. Siddik (named in the owner's replies to reviews) |
| Mission and vision | Exact wording from the hospital's Mission & Vision board (photo shared by the owner, Nov 2026); shown on the About page |
| Facilities | Women-owned. Wheelchair-accessible entrance, car park, seating and toilet. Assistive hearing loop. Nursing room. Gender-neutral toilets |
| Services board (Google listing photo, Mar 2025) | ICU, physiotherapy, X-ray, C-arm; room types: general ward, twin sharing, special ward, ICU |
| Payments | Credit cards, debit cards, NFC mobile payments |
| Procedures confirmed by patient reviews | Kidney stone procedure, fissure surgery, Hepatitis A treatment, mediclaim accepted |
| Hospital signboard (the hospital's own Google photos, 2023 and 2025) | Surgery, Medicine, Paediatrics, Gynaecology, Gastro, Orthopaedics, **Endoscopy**, Trauma, Neuro, **ENT**, Urology. "24×7". The **Gurudev Medical** store is at the entrance. The board also shows **"THN-C-283"**, possibly a registration number |

---

## Needed from the hospital

Items marked 🔑 also unlock search keywords that the site deliberately doesn't target yet, because it can't truthfully claim them (see the `status` column in `seo/keywords.csv`).

### Setup
1. **Official logo.** The site uses a text logo and generated icons.
2. **Appointment requests:** confirm WhatsApp is active on 8087534842 (the booking form opens WhatsApp now), or give an email or form service (next step 3).
3. **Photos.** 13 real photos are on the site.
   - Confirm **Dr. Mayur Rupavat** is happy for his 2 uploaded photos to be used (sources: `photos/captions.json`).
   - **Still wanted:** ICU, dialysis unit, pharmacy, nursing station, twin-sharing room, special ward, and the team. Add them to `photos/` with a caption in `photos/captions.json`, then run `npm run photos`.
   - The casualty-room photo matches one a Google user (a visitor) posted in Oct 2025. It is used on the owner's instruction (Nov 2026); replace it with the hospital's own photo if possible. One more visitor photo (reception with the OPD 1 and OPD 2 doors) is held back in `photos/needs-permission/` and is not on GitHub.
   - Other speciality and treatment pages still use labelled stock photos ("Representative image") until real ones arrive.

### Doctors
4. **Dr. Tarkeshwar Gupta and Dr. Siddik:** full name, qualifications, speciality, registration number, OPD days and times, and photo. Each gets a profile page once confirmed.
   - A LinkedIn member with a hidden name lists "Internal Medicine Physician at Gurudev hospital badlapur"; a review thanks "Gupta sir" for treating Hepatitis A. Is that Dr. Gupta?
   - Dr. Siddik is also mentioned in a review of Siddhivinayak Hospital. Is he a visiting consultant?
5. 🔑 **The consultant for each department:** gynaecologist (and whether a **lady gynaecologist** is available), paediatrician, orthopaedic surgeon, neurologist, urologist, nephrologist/dialysis, physician, gastroenterologist, ENT. This unlocks searches like "neurologist in Badlapur", "gynecologist in Ambernath" and "orthopedic surgeon in Badlapur".
6. **Dr. Mayur Rupavat:**
   - **Medical Council registration number.** A Google summary gives Maharashtra Medical Council no. 2014041242 (2014), but it isn't on his LinkedIn, so it is **not shown**. Please confirm it.
   - **Other hospitals.** Justdial also lists him at Shree Ashirwad Hospital, Badlapur. If he consults elsewhere, his page should say so.
   - **Portrait.** His LinkedIn photo is used with his consent; a higher-resolution portrait would look better.
7. **Health guide review.** Ask Dr. Rupavat (and the gynaecologist, orthopaedic surgeon and physician once named) to review the 11 articles in `/health-guides`, then add his name as `reviewedBy` in `src/data/guides.js`. A named medical reviewer matters for health content on Google.

### Services: please confirm
8. **Surgeries.** Piles, fistula, hernia, gallbladder, appendix and hydrocele surgery each have a page. Fissure surgery and kidney stone procedures are confirmed by reviews; please confirm the others.
9. **Techniques that could become extra pages:** laser piles/fissure/fistula; kidney stone URS, RIRS, PCNL or ESWL; colonoscopy; laparoscopic hysterectomy.
10. **Endoscopy and ENT** (from the signboard, not on the Google profile): still offered? Doctor's name and OPD days? If not, delete them from `src/data/` and rebuild.
11. **Facilities:**
    - Still offered: ICU, physiotherapy, X-ray, C-arm?
    - Number of beds and ICU beds; NICU (yes/no); ventilators
    - 🔑 **Ambulance:** does the hospital run one, and what is its number? (Unlocks "ambulance Badlapur".)
    - Pathology lab, sonography, CT and the rest of the "Diagnostic services" list (the board photo is cut off after X-ray)
    - Is the **Gurudev Medical** store at the entrance the hospital's own pharmacy? What are its hours?
12. 🔑 **Insurance:** list of insurers and TPAs, whether **cashless** is offered, and **MJPJAY / PM-JAY (Ayushman Bharat)** empanelment. This unlocks "cashless hospital in Badlapur", "Star Health cashless" and "Ayushman card hospital", and could become a "Cashless & Insurance" page.
13. 🔑 **Prices:** indicative package prices (normal and caesarean delivery, hernia, gallbladder, piles, kidney stone, dialysis per session, room charges), if the hospital is willing to publish them. This unlocks about 15 "… cost in Thane" and "… charges" searches. The rate notice in the Google photo is too blurry to read, so **no prices are shown**.
14. **Patient stay:** number of beds per room type, visiting hours, attendants allowed, meals and canteen, room facilities (AC, attached toilet, TV, attendant bed), and corrections to the admission checklist in `src/data/patientServices.js`.

### Business details
15. **Email address.** None is published.
16. **Year established, registration and accreditations:** Bombay Nursing Home registration, the **"THN-C-283"** number on the signboard, and NABH status if any. These are strong trust signals.
17. **Social media:** Facebook, Instagram and YouTube links. They go into `site.social` in `src/config/site.js` and the structured data (`sameAs`).
18. **Second phone number.** 8669189303 appears on one third-party site (TrustRx) but not on Google. It is **not used**; ask TrustRx to correct it if it is wrong.

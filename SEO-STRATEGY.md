# Local SEO action plan: Gurudev Multi-Speciality Hospital, Badlapur East

**Goal.** When people in Badlapur, Ambernath and Vangani search for a hospital, doctor, speciality or treatment, Gurudev's website and Google Maps listing should appear as high as possible, and turn the search into a call, a visit or a booking.

**Expectations.**
- No one can guarantee rankings.
- This plan follows Google's guidelines only: no keyword stuffing, no fake reviews, no bought links, no doorway pages. Shortcuts get listings suspended and sites demoted.
- Results build over about 3 to 6 months of steady work.

**Related files:**
- [`seo/keywords.csv`](seo/keywords.csv): about 140 target keywords, each mapped to its page
- [MISSING-INFO.md](MISSING-INFO.md): facts to confirm

---

## 1. How Google ranks local results, and what we control

Google ranks the Maps pack and "near me" results on three things:

| Factor | What it means | What we do |
|---|---|---|
| **Relevance** | How well the listing and website match the search | Correct categories and services on Google, plus a dedicated page for each speciality, treatment and area (done) |
| **Distance** | How close the hospital is to the searcher | We can't change it, but area pages and accurate NAP/geo data help Google understand the service area (done) |
| **Prominence** | How well known and trusted the hospital is | Review count, rating and freshness; citations; local links; brand searches; an active profile (sections 5–7) |

The website itself also has to be fast, crawlable and trustworthy (E-E-A-T: experience, expertise, authority, trust). All of that is already built in (section 4).

## 2. Competitors and how to outrank them

Checked on 23 Nov 2026:

| Competitor | Their weakness | How Gurudev wins |
|---|---|---|
| Siddhivinayak Multispeciality, Badlapur W (1,334 reviews) | One-page Justdial template, expired SSL, no service pages | Win the specific searches (piles, hernia, dialysis, kidney stone) with dedicated pages. Close the review gap with a steady review system (section 5) |
| Shree Samarth, Katrap | Service pages and sitemap return 404; domain problems | Working pages for the same procedures, with correct schema |
| Shri Balaji, Shirgaon-Katrap (same neighbourhood) | Placeholder template text, empty meta description | Clearly better content and trust signals in the same area. Photos, reviews and the doctor page matter most here |
| Shreeji, Shree Ashirwad, Maxcare, Chikhloli | No website | Every local search where a website matters is open to us |
| Pristyn Care (aggregator) | No Badlapur address | Local hospital with a real address, a real surgeon and a 24×7 emergency service. Mention these on every procedure page (done) |
| Dr. Santosh Patil (surgeon, Badlapur W) | Procedure pages have empty title tags | Better-optimised procedure pages, plus a hospital and 24×7 service behind them |

**The biggest gap is reviews.** Siddhivinayak has about 10× more. Volume and steady new reviews strongly influence Maps rankings, so the review system in section 5 is the most important ongoing task.

## 3. What the website covers (44 URLs)

| Page type | Pages | Main searches targeted |
|---|---|---|
| Home | 1 | hospital in Badlapur East, best hospital in Badlapur, multispeciality hospital |
| Specialities | 11 + index | surgeon, urologist, orthopedic, gynecologist, child specialist, neurologist, ENT, dialysis, emergency (all + Badlapur) |
| Treatments | 12 + index | hernia, gallbladder, appendix, piles, fissure, fistula, kidney stone, hydrocele, endoscopy, fracture, maternity, jaundice |
| Doctors | Dr. Mayur Rupavat + index | the doctor's name, laparoscopic surgeon Badlapur |
| Facilities | 1 | operation theatre, emergency, OPD, endoscopy, dialysis, maternity, medical store |
| Health guides | 4 + index | appendix pain symptoms, piles vs fissure vs fistula, laparoscopic vs open surgery, kidney stone pain (Hindi and Marathi terms included) |
| Areas | Ambernath, Vangani, Badlapur West + index | hospital near Ambernath, hospital in Vangani, hospital in Badlapur West |
| Trust and conversion | Reviews (live from Google), Photos, About, Contact, Book appointment | "Gurudev hospital Badlapur reviews / photos / number" |

**Priority order.** Every menu and list follows the business priority ("Best Surgery Centre in Badlapur", surgeon on floor 24×7):
1. Laparoscopic surgery
2. The 24×7 emergency service
3. Ano-rectal (piles, fissure, fistula)
4. Urology
5. Trauma
6. Maternity
7. Medical care

To change the order, edit `SPECIALITY_PRIORITY` and `TREATMENT_PRIORITY` in `src/data/`.

**Avoided on purpose.** There are no "service × area" pages (such as "piles doctor Ambernath"). Google treats them as doorway pages.

## 4. On-page and technical SEO (implemented)
- **Prerendering.** Every URL is complete HTML: unique title (66 characters or fewer) and meta description (165 or fewer), canonical URL, one H1, logical headings, alt text, Open Graph tags.
- **Structured data:**
  - `Hospital` on every page: NAP, geo, 24/7 hours, specialities, services, amenities, payments, area served, map, photos
  - `MedicalWebPage` with a specialty on speciality pages
  - `MedicalProcedure` on treatment pages
  - `IndividualPhysician` on the doctor page
  - `MedicalWebPage` on health guides, with dates and a `reviewedBy` slot
  - `ImageGallery`, `BreadcrumbList`, plus `FAQPage` where a page has FAQs
- **Self-hosted photos.** The hospital's own photos are WebP with descriptive alt text, listed in an **image sitemap** so they can appear in Google Images under the domain.
- **Sitemaps and URLs.** `sitemap.xml` (44 URLs plus images) and `robots.txt`. Clean URLs, and a 301 redirect from apex to www (Vercel).
- **Core Web Vitals:**
  - System fonts and inline SVG icons.
  - Lazy-loaded maps, reviews and photos.
  - Images sized for each screen, with fixed dimensions so the layout doesn't jump.
- **Mobile.** A sticky Call / WhatsApp / Directions / Book bar, tested at 375px.
- **Deliberately left out.**
  - `AggregateRating`: self-serving review markup isn't eligible, and Google reviews mustn't be re-marked up.
  - FAQ rich results: Google stopped showing them in May 2026, so the FAQs are kept for users and AI answers.

## 5. Google Business Profile playbook (biggest lever for Google Maps)

### One-time fixes
1. **Rename the listing** to `Gurudev Multi-Speciality Hospital`. The current "| Best Surgery Centre in Badlapur" suffix is keyword stuffing; it breaks Google's guidelines and risks suspension.
2. **Website:** `https://www.gurudevhospital.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`. The UTM tags let GA4 show visits that come from Maps.
3. **Appointment link:** `https://www.gurudevhospital.com/book-appointment?utm_source=google&utm_medium=organic&utm_campaign=gbp-booking`
4. **Primary category: Hospital.** Add secondary categories only if they are accurate and appear in Google's picker. For example: *General hospital, Surgical center, Maternity hospital, Dialysis center, Emergency care service*.
5. **Description** (730 characters, no URLs or phone numbers; paste as is):
   > Gurudev Multi-Speciality Hospital is a 24-hour medical and surgical hospital in Shirgaon, Badlapur East, with a surgeon on the floor round the clock. Our consulting general and laparoscopic surgeon, Dr. Mayur Rupavat (MS, FMAS, FIAGES), performs keyhole and general surgery including hernia, gallbladder stone, appendix, piles, fissure and fistula operations. We also provide emergency and trauma care, urology and kidney stone treatment, orthopaedics and fracture care, gynaecology and maternity care, gastroenterology and endoscopy, general medicine, paediatrics, neurology and dialysis. As a women-owned hospital, we focus on compassionate care, clear advice and affordable treatment, with support for major mediclaim policies.
6. **Services.** Add each speciality and treatment, named exactly as on the website, with a 1–2 sentence description each.
7. **Attributes.** Keep women-owned, accessibility, payments and on-site services. Add "Online appointments" once the booking form is live.
8. **Photos:**
   - Cover photo: the daytime building and signboard photo (from `photos/`).
   - Logo: once the official logo is ready.
   - Then 2–3 real photos a week: wards, OT, ICU, lab, team, events. Real photos only, never stock.

### Weekly posts (12-week calendar)
Post once a week with a photo and a "Learn more" button to the matching page:

| Week | Topic | Link |
|---|---|---|
| 1 | Open 24×7: save our emergency number | /specialities/emergency-trauma-care |
| 2 | Laparoscopic hernia surgery: faster recovery | /treatments/hernia-surgery |
| 3 | Fever season: dengue and typhoid warning signs | /specialities/general-medicine |
| 4 | Kidney stone pain: what to do | /health-guides/kidney-stone-pain-what-to-do |
| 5 | Meet Dr. Mayur Rupavat | /doctors/dr-mayur-rupavat |
| 6 | Piles vs fissure vs fistula | /health-guides/piles-vs-fissure-vs-fistula |
| 7 | Maternity care and our nursing room | /treatments/maternity-delivery-care |
| 8 | Appendix pain: don't wait | /health-guides/appendix-pain-symptoms |
| 9 | Dialysis close to home | /specialities/dialysis |
| 10 | Accident and fracture care, day and night | /treatments/fracture-treatment |
| 11 | Thank you to our patients | /reviews |
| 12 | A tour of our facilities | /facilities |

### Reviews system (the most important ongoing task)
- **Ask every patient**, at discharge or after an OPD visit:
  - Put the printed QR card (`marketing/review-card.html`, A6) at reception and in discharge files.
  - Short link for SMS and WhatsApp: **www.gurudevhospital.com/review**
- **WhatsApp message to send:**
  - EN: *Thank you for choosing Gurudev Multi-Speciality Hospital. We hope you are feeling better. If you have a minute, please share your experience on Google. It helps other families in Badlapur find the right care: https://www.gurudevhospital.com/review*
  - MR: *गुरुदेव मल्टी-स्पेशलिटी हॉस्पिटल निवडल्याबद्दल धन्यवाद. आपली तब्येत लवकर बरी होवो. कृपया आपला अनुभव Google वर शेअर करा, यामुळे बदलापूरमधील इतर कुटुंबांना योग्य उपचार शोधण्यास मदत होईल: https://www.gurudevhospital.com/review*
- **Reply to every review within 48 hours.** The owner already does this well.
  - Never confirm medical details in a reply; patient privacy comes first.
  - For a negative review, apologise, take it offline ("please call us on 080875 34842"), and fix the issue.
- **Never:**
  - offer discounts or gifts for reviews
  - ask only happy patients (review gating)
  - post reviews from staff or family
  - buy reviews

  Google removes these reviews and can suspend the listing.
- **Target:** about 15–25 genuine new reviews a month. Steady new reviews matter more than a one-time burst.

### Q&A and messaging
- If Q&A or chat is available on the profile, add the real FAQs (timings, insurance, parking, dialysis booking) and answer every question quickly.

## 6. Citations: consistent NAP everywhere
Use exactly this name, address and phone everywhere:
```
Gurudev Multi-Speciality Hospital
Plot No 12, Yadav Nagar Road, Near Parsi Bungalow, Shirgaon, Badlapur East, Maharashtra 421503
+91 80875 34842 · https://www.gurudevhospital.com
```

| Priority | Where | Action |
|---|---|---|
| 1 | Google Business Profile, Apple Business Connect (Apple Maps), Bing Places | Claim, verify, add photos, hours and website |
| 1 | Justdial, Practo (hospital and doctor profiles), Facebook page, Instagram | Claim or create. Make the name, phone and website match exactly |
| 2 | Lybrate, Eka Care, Sulekha, Bajaj Finserv Health, TrustRx (**fix the wrong phone number**), Magicpin | Update NAP, add the website link |
| 3 | Insurer and TPA network hospital lists (ManipalCigna and New India Assurance list Gurudev, unverified), IMA local branch directory, AMASI/IAGES member directories for Dr. Rupavat | Ask for correct details and a website link |

Add the Facebook, Instagram and Practo URLs to `site.social` in `src/config/site.js`. They then appear in the schema `sameAs` field.

## 7. Local authority and backlinks: earn them, never buy them
Each item below is a real-world activity that also earns a genuine local link or mention:
1. **Free health camps**, for example in housing societies, schools or the Badlapur MIDC area: BP, sugar and hernia/piles screening. Local news websites and the Thane editions of Marathi newspapers often cover them. Ask them to link to the website.
2. **Corporate tie-ups** with MIDC employers for pre-employment checks and emergency care. They can list the hospital on their intranet or website.
3. **Referral partners:** local pharmacies, diagnostic labs and GPs. Ask them to list the hospital on their own Google profile or website.
4. **Doctor authority:**
   - Dr. Rupavat's Practo and LinkedIn profiles should link to his page on the website.
   - Health talks or articles for local media, with a byline linking to the site.
5. **Community:** sponsor local events (marathons, festivals, school sports) with a sponsor link.
6. **Never:** paid link packages, PBNs, comment spam, or exchanging links with unrelated sites.

## 8. Content plan: building topical authority
- **One new health guide a month,** reviewed and named by a doctor (set `reviewedBy` in `src/data/guides.js`). Next topics:
  - Jaundice (kavil) diet
  - Dengue warning signs
  - Hernia operation cost factors
  - What happens at your first dialysis
  - C-section vs normal delivery
  - Gallbladder stone symptoms (pittashay)
  - Fracture first aid
  - Child fever: when to worry
- **Phase 2: Marathi pages** (`/mr/…` with hreflang) for the top 10 pages. Marathi searches such as "मूळव्याध डॉक्टर बदलापूर" or "कावीळ उपचार" have little competition.
- **More pages once the hospital confirms the details:**
  - Cashless & Insurance
  - ICU / critical care detail
  - A profile for each consultant
  - Laser or lithotripsy pages, only if offered
- **Refresh:** update dates, photos and FAQs on the top pages every quarter.

## 9. Measurement (monthly)
| Tool | What to watch |
|---|---|
| Google Search Console | Impressions, clicks and positions for the keywords in `seo/keywords.csv`; indexing errors |
| GBP Performance | Calls, direction requests, website clicks, search terms that found the listing |
| GA4 (key events) | `click_call`, `click_whatsapp`, `click_directions`, `generate_lead`, plus visits from `utm_campaign=gbp` |
| Reviews | Total count, new reviews this month, average rating, reply rate |
| Rank checks | P1 keywords, checked monthly from Badlapur East, Badlapur West and Ambernath (use a local rank tracker, or search in a private window with the location set) |

## 10. 90-day roadmap
| When | Tasks |
|---|---|
| Week 1 | Deploy the site on Vercel. Connect `www.gurudevhospital.com`. Add the Maps API key and the GA4 ID. Verify Search Console and Bing, and submit the sitemap. Make the GBP one-time fixes (section 5). |
| Weeks 1–2 | Start the review system: print the QR cards and send the WhatsApp template after every discharge. Claim Apple, Bing, Justdial, Practo and Facebook. |
| Weeks 2–4 | Get the MISSING-INFO answers. Add doctor profiles, insurance, ICU details and more photos. Start the weekly GBP posts. |
| Month 2 | Fix tier-2 and tier-3 citations. Run the first health camp. Publish one new guide reviewed by Dr. Rupavat. |
| Month 3 | Check Search Console. Strengthen pages that rank 5–20 (add FAQs, photos, internal links). Plan the Marathi pages. Run another camp or partnership. |
| Ongoing | Weekly: posts, photos, replies to reviews. Monthly: one new guide and the measurement review. |

## 11. What not to do
- Keywords in the Google business name (fix the current name)
- Fake, bought, incentivised or gated reviews
- Separate pages for every "service + town" combination (doorway pages)
- Bought links, link farms, PBNs
- Stock photos presented as the hospital
- Claims about equipment, accreditations or doctors that aren't true (see MISSING-INFO.md)

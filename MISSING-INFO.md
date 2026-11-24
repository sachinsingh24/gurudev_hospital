# Missing information — please confirm before launch

Everything on the website comes from the hospital's **Google Business Profile** (place ID `ChIJrdahtqDt5zsRZjEF-9eCBis`), read on **23 Nov 2026**. No dummy data is used.

The items below were **not published anywhere official**. The site either leaves them out or words around them. Send the answers and they can be added in minutes: most live in `src/config/site.js` or `src/data/*.js`.

## Verified from Google (already used on the site)

| Item | Value |
|---|---|
| Name | Gurudev Multi-Speciality Hospital (मराठी: गुरुदेव मल्टी-स्पेशलिटी हॉस्पिटल) |
| Address | Plot No 12, Yadav Nagar Road, Near Parsi Bungalow, Shirgaon, Badlapur East, Maharashtra 421503 |
| Phone | 080875 34842 (+91 80875 34842) |
| Hours | Open 24 hours, 7 days |
| Location | 19.1562458, 73.2335488; plus code 564M+FC |
| Rating | 4.8 from 133 Google reviews (now loaded live, see README) |
| Specialities | 24-hour critical care, General Medicine, Gastroenterology, Paediatrics, Gynaecology & Obstetrics, Orthopaedics, Neurology, Dialysis, Urology, General Surgery, Trauma |
| Lead surgeon | Dr. Mayur Rupavat: MBBS, MS (General Surgery), FMAS, FIAGES; consulting general & laparoscopic surgeon |
| Dr. Rupavat's education & experience (verified on [his LinkedIn](https://www.linkedin.com/in/dr-mayur-rupavat-37027754/), 23 Nov 2026) | MBBS, Dr. Ulhas Patil Medical College (2008–2013). MS General Surgery, Baroda Medical College (2016–2019). Fellowship in Minimal Access Surgery, Seth GS Medical College & KEM Hospital, Mumbai (2020–2021). At Gurudev since April 2023; focus: laparoscopic surgery and proctology |
| Other doctors | Dr. Tarkeshwar Gupta and Dr. Siddik (named in the owner's replies to reviews) |
| Facilities | Women-owned. Wheelchair-accessible entrance, car park, seating and toilet. Assistive hearing loop. Nursing room. Gender-neutral toilets |
| Payments | Credit cards, debit cards, NFC mobile payments |
| Procedures confirmed by patient reviews | Kidney stone procedure, fissure surgery, Hepatitis A treatment, mediclaim accepted |
| Hospital signboard (in the hospital's own Google photos, 2023 and 2025) | Surgery, Medicine, Paediatrics, Gynaecology, Gastro, Orthopaedics, **Endoscopy**, Trauma, Neuro, **ENT**, Urology. "24×7". The **Gurudev Medical** store is at the entrance. The board also shows **"THN-C-283"**, possibly a registration number |

## Needed from the hospital

### Must-have before launch
1. **Google Maps Platform API key** to show live reviews. Setup is in the README.
2. **Where appointment requests should go.** Either:
   - confirm WhatsApp is active on 8087534842 (the form uses it now), or
   - give an email or form service for `VITE_FORM_ENDPOINT`.
3. **Official logo.** The site uses a placeholder text logo and generated icons.
4. **Photos: 13 real photos are on the site, with two confirmations needed.** Building and signboard (day and night), reception and OPD, operation theatre (two views, one with the C-arm), general ward, single patient room (Room 4), casualty room (two views), emergency crash cart, labour room, and two inauguration photos.
   - 3 were uploaded by the hospital's own Google account, and 2 by **Dr. Mayur Rupavat**. **Confirm he is happy for his 2 photos to be used** (sources are in `photos/captions.json`).
   - The night photo was cropped to remove passers-by.
   - Photos posted by patients were **not** copied. Live Google Maps photos are switched off, because Google would require each contributor's name on them.
   - **Still wanted:** ICU (the teal-walled ICU photo shared in chat was not in the photo folder), dialysis unit, pharmacy, nursing station, and the team. Add them to `photos/`, add a caption in `photos/captions.json`, and run `npm run photos`.
   - Real photos now lead the emergency, surgery, orthopaedics, fracture, gynaecology and maternity pages. Other speciality and treatment pages still use labelled stock photos ("Representative image").
5. **Google Analytics 4 Measurement ID** (`G-…`): free. Set it as `VITE_GA_MEASUREMENT_ID` in Vercel.
6. **Domain access.** A login to wherever gurudevhospital.com is registered, or the hospital's IT contact. It's needed to:
   - point the domain to Vercel (A record and CNAME)
   - verify Google Search Console
7. **Google Business Profile access.** Add your account as a **Manager** on the hospital's listing. It's needed for the name fix, the website link and the monthly posts and review replies.

### Doctors
8. **Dr. Tarkeshwar Gupta and Dr. Siddik:** full name, qualifications, speciality, registration number, OPD days and times, and photo. They get their own profile pages once this is confirmed.
   - Neither has a LinkedIn or other public profile that matches (searched 23 Nov 2026).
   - One LinkedIn member with a hidden name lists "Internal Medicine Physician at Gurudev hospital badlapur". It may be Dr. Gupta: a patient review thanks "Gupta sir" for treating Hepatitis A. Please confirm.
   - Dr. Siddik is also mentioned in a patient review of Siddhivinayak Hospital, so he may be a visiting consultant.
9. **The consultant for each department:** gynaecologist, paediatrician, orthopaedic surgeon, neurologist, urologist, nephrologist/dialysis, physician, gastroenterologist.
10. **Dr. Mayur Rupavat:**
    - **Medical Council registration number.** A Google summary gives Maharashtra Medical Council no. 2014041242 (2014), but it isn't on his LinkedIn, so it's **not shown**. Please confirm it; displaying a doctor's registration number is a strong trust signal.
    - **Other hospitals.** Justdial also lists him at Shree Ashirwad Hospital, Badlapur. His LinkedIn lists only Gurudev. If he consults elsewhere, his page should say so.
    - **Profile photo.** His LinkedIn photo is used on the site with his consent (as relayed by the site owner, Nov 2026). A higher-resolution portrait would look better.

### Services: please confirm each one
11. **Surgeries offered.** Piles, fistula, hernia, gallbladder (laparoscopic cholecystectomy), appendix and hydrocele surgery each have a page.
   - Fissure surgery and kidney stone procedures are confirmed by reviews.
   - The others are standard work for a general and laparoscopic surgeon. Please confirm them.
12. **Techniques.** If the hospital offers any of these, they can become extra pages:
   - Laser piles/fissure/fistula
   - Kidney stone methods: URS, RIRS, PCNL, ESWL/lithotripsy
   - Colonoscopy
   - Laparoscopic hysterectomy
13. **Pages added from the signboard: please confirm.** The hospital's own signboard lists **Endoscopy** and **ENT**, which aren't on the Google profile.
    - Both now have pages: `/treatments/endoscopy` and `/specialities/ent`.
    - Confirm they are still offered, the doctor's name, and OPD days.
    - If either is no longer offered, delete its entry from `src/data/` and rebuild.
14. **Facilities:**
    - **Now on the site, from the hospital's services board** (a photo on the Google listing, Mar 2025): ICU, physiotherapy, X-ray and C-arm. Please confirm they are still offered.
    - Number of beds; number of ICU beds; NICU (yes/no); ventilators
    - Ambulance service and its number
    - Pathology lab, sonography, CT, and the rest of the "Diagnostic services" list (the board photo is cut off after X-ray)
    - Whether the **Gurudev Medical** store at the entrance is the hospital's own pharmacy, and its hours
15. **Health guide review.** Ask Dr. Mayur Rupavat (and the gynaecologist, orthopaedic surgeon and physician once named) to review the 11 articles in `/health-guides`, one for every treatment, then add his name as `reviewedBy` in `src/data/guides.js`.
    - A named medical reviewer strengthens E-E-A-T, which matters for health content.
16. **The "THN-C-283" number** on the signboard: is it the nursing-home registration number? If so, it can be shown on the site as a trust signal.
17. **Insurance:**
    - List of insurers and TPAs, and whether cashless is offered
    - MJPJAY / PM-JAY (Ayushman Bharat) empanelment
    - A confirmed list can become a "Cashless & Insurance" page; people search for this a lot.
18. **Prices.** Indicative package prices (delivery, hernia, gallbladder, dialysis per session), if the hospital is willing to publish them.
19. **Patient rooms and stay.** The page `/patient-rooms-services` describes the stay without inventing details and asks patients to call.
    - **Room types now on the site:** general ward, twin sharing, special ward and ICU. They come from the rate notice taped beside the services board (Google listing photo, Mar 2025). Please confirm, and give the number of beds in each.
    - Room charges: the notice also shows a general-ward charges table (registration, bed, consultant, nursing, BMW, RMO) and an advance deposit per room type, but the numbers are too blurry to read, so **no prices are shown**. Send the current rate card if the hospital wants prices published.
    - Visiting hours, and how many attendants may stay with the patient
    - Food: are meals provided for patients (and attendants)? Is there a canteen?
    - Facilities in the rooms: AC, attached toilet, TV, attendant bed
    - Photos: the general ward, Room 4, casualty room and labour room photos are now on this page, the home page and the Facilities page. The Unsplash stand-ins were removed. Still wanted: ICU, twin-sharing room, special ward, nursing station.
    - **Casualty-room photo:** it is identical to a photo a Google user (a visitor) posted in Oct 2025. It is used on the site on the owner's instruction (Nov 2026). Please make sure the hospital is happy with this, or replace it with the hospital's own photo. One more visitor photo (reception with the OPD 1 and OPD 2 doors) is still held back in `photos/needs-permission/`.
    - What to bring for admission: confirm or correct the checklist on the page (`src/data/patientServices.js`)

### Business details
20. **Email address.** None is published.
21. **Year established, registration, accreditations.** Includes Bombay Nursing Home registration and NABH status, if any.
22. **Social media:** Facebook, Instagram, YouTube links. They are added to the schema as `sameAs`.
23. **Second phone number.** 8669189303 appears on one third-party site (TrustRx) but not on Google. It is **not used**.

## Fix on the Google Business Profile
- **Business name.** The listing is named *"Gurudev Multi-Speciality Hospital | Best Surgery Centre in Badlapur"*.
  - Adding keywords to the business name is against Google's guidelines and can get the listing suspended.
  - Rename it to **Gurudev Multi-Speciality Hospital**. The website already uses that name.
- **Website field.** Set it to `https://www.gurudevhospital.com` (the listing currently says "Add website").
- **Appointment link.** Set it to `https://www.gurudevhospital.com/book-appointment`.

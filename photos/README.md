# Hospital photos (originals)

Put the hospital's **own** original photos in this folder, then run:

```bash
npm run photos
npm run build
```

The script:
- makes optimised WebP copies at 480, 960 and 1600px in `public/images/hospital/`
- removes EXIF and GPS data
- writes `src/data/photos.json`

## Where the photos appear
- **Home page:** the "Inside our hospital" section.
- **`/photos` page:** the full gallery.
- **Hospital structured data:** the `image` field.
- **Image sitemap:** so the photos can show up in Google Images under www.gurudevhospital.com.

## Getting the originals from Google
1. Sign in at **business.google.com** with the account that manages the hospital listing.
2. Open **Photos → By owner**.
3. Open each photo and download it.

These are the hospital's own photos, so they can be self-hosted. **Do not** copy photos uploaded by patients or other customers: those belong to them. The website already shows those live from Google, with credit to each person, through the Places API.

## Recommended shots
- Building front with the signboard (the most important one)
- Reception
- OPD/consultation room
- Operation theatre
- ICU or critical care
- General ward and private room
- Labour room / maternity
- Dialysis unit
- Pharmacy and lab
- Team photo
- Dr. Mayur Rupavat (portrait)

Landscape, at least 1600px wide, in good light, with no patients' faces unless they have given written consent.

## Optional `captions.json`
Copy `captions.example.json` to `captions.json` and fill in alt text, which helps SEO and accessibility:

```json
{
  "front.jpg": {
    "alt": "Front entrance of Gurudev Multi-Speciality Hospital on Yadav Nagar Road, Shirgaon, Badlapur East",
    "caption": "Hospital entrance",
    "category": "Exterior",
    "order": 1
  }
}
```

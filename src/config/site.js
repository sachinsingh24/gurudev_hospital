/**
 * Single source of truth for the hospital's NAP (Name, Address, Phone) and business details.
 *
 * Every value below was taken from the hospital's Google Business Profile
 * (Google Maps place ID ChIJrdahtqDt5zsRZjEF-9eCBis) on 23 Nov 2026.
 * Keep this file identical to the Google Business Profile — NAP consistency is a local ranking factor.
 * Items marked `null` are NOT published on the profile; see MISSING-INFO.md before filling them.
 */

const env = import.meta.env || {};

const SITE_URL = (env.VITE_SITE_URL || 'https://www.gurudevhospital.com').replace(/\/+$/, '');

export const site = {
  url: SITE_URL,
  // Name exactly as on Google, minus the keyword suffix ("| Best Surgery Centre in Badlapur").
  name: 'Gurudev Multi-Speciality Hospital',
  shortName: 'Gurudev Hospital',
  legalName: null, // not published
  nameMarathi: 'गुरुदेव मल्टी-स्पेशलिटी हॉस्पिटल',
  googleListingName: 'Gurudev Multi-Speciality Hospital | Best Surgery Centre in Badlapur',
  tagline: 'Best surgery centre in Badlapur — 24×7 surgeon on floor',
  description:
    'Gurudev Multi-Speciality Hospital is a 24-hour medical and surgical hospital in Shirgaon, Badlapur East, offering general & laparoscopic surgery, 24×7 emergency & trauma care, urology, orthopaedics, gynaecology & obstetrics, gastroenterology, general medicine, paediatrics, neurology and dialysis.',

  phone: {
    display: '8087534842',
    displayIntl: '+91\u00a080875\u00a034842',
    e164: '+918087534842',
    tel: 'tel:+918087534842',
  },
  // Mobile number — confirm WhatsApp is active on it (see MISSING-INFO.md).
  whatsapp: '918087534842',
  email: null, // not published

  address: {
    plot: 'Plot No 12',
    street: 'Plot No 12, Yadav Nagar Road, Near Parsi Bungalow',
    locality: 'Shirgaon',
    area: 'Badlapur East',
    city: 'Badlapur',
    district: 'Thane',
    state: 'Maharashtra',
    stateCode: 'MH',
    postalCode: '421503',
    country: 'IN',
    countryName: 'India',
    // One-line format matching Google: "Plot No 12, Yadav Nagar Road, Near Parsi Bungalow Shirgaon, East, Badlapur, Maharashtra 421503"
    full: 'Plot No 12, Yadav Nagar Road, Near Parsi Bungalow, Shirgaon, Badlapur East, Maharashtra 421503',
  },

  geo: {
    lat: 19.1562458,
    lng: 73.2335488,
    plusCode: '564M+FC Badlapur, Maharashtra',
  },

  google: {
    placeId: 'ChIJrdahtqDt5zsRZjEF-9eCBis',
    featureId: '0x3be7eda0b6a1d6ad:0x2b0682d7fb053166', // Maps feature ID (used by the keyless map embed)
    cid: '3100309257632166246',
    mapsUrl: 'https://maps.google.com/?cid=3100309257632166246',
    reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJrdahtqDt5zsRZjEF-9eCBis',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJrdahtqDt5zsRZjEF-9eCBis',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Gurudev+Multi-Speciality+Hospital+Badlapur&destination_place_id=ChIJrdahtqDt5zsRZjEF-9eCBis',
    // Live Google Maps photos must show each contributor's name (Google's terms). Turned OFF at the owner's request
    // (no names on images); the gallery shows the hospital's own self-hosted photos instead. Set true to re-enable.
    showLivePhotos: false,
    // Google photos by these uploaders are already self-hosted (photos/), so the live gallery skips them.
    selfHostedPhotoAuthors: ['Gurudev Multi-Speciality Hospital', 'Mayur Rupavat'],
    // Snapshot shown only when the live Places API is not configured or unreachable.
    ratingSnapshot: { rating: 4.8, count: 133, asOf: '2026-11-23' },
  },

  hours: {
    is24x7: true,
    label: 'Open 24 hours, 7 days a week',
  },

  attributes: {
    womenOwned: true,
    accessibility: [
      'Wheelchair-accessible entrance',
      'Wheelchair-accessible car park',
      'Wheelchair-accessible seating',
      'Wheelchair-accessible toilet',
      'Assistive hearing loop',
    ],
    amenities: ['Nursing room', 'Gender-neutral toilets', 'On-site services'],
    payments: ['Credit cards', 'Debit cards', 'NFC mobile payments'],
  },

  social: [], // No official social profiles found — add URLs here (used in schema `sameAs`).

  api: {
    googleMapsKey: env.VITE_GOOGLE_MAPS_API_KEY || '',
    formEndpoint: env.VITE_FORM_ENDPOINT || '',
    gscVerification: env.VITE_GSC_VERIFICATION || '',
  },
};

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '/' : path}`;

export const whatsappLink = (text = '') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : null;

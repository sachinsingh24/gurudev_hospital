/**
 * Nearby-area landing pages. Each page carries area-specific travel information
 * (rail + road, approximate straight-line distance computed from Google Maps coordinates)
 * rather than swapped-out place names, to avoid thin / duplicate "doorway" content.
 * Station coordinates were read from Google Maps on 23 Nov 2026; road distances are approximate
 * routing estimates (no traffic) — verify before printing them anywhere else.
 */

export const areas = [
  {
    slug: 'badlapur-west',
    name: 'Badlapur West',
    placeName: 'Badlapur West',
    title: 'Hospital near Badlapur West | 24×7 Multi-Speciality Care',
    metaDescription:
      '24-hour multi-speciality & surgical hospital for Badlapur West, just across the railway in Badlapur East. Emergency, surgery, maternity. Call 080875\u00a034842.',
    h1: 'Multi-Speciality Hospital for Badlapur West Residents',
    station: { name: 'Badlapur railway station', lat: 19.1668031, lng: 73.2395714 },
    distance: 'about 2–5 km by road, depending on where you start',
    intro:
      'For families in Badlapur West, Gurudev Multi-Speciality Hospital is a short trip across the railway line to Shirgaon in Badlapur East. The hospital is open 24 hours, which matters most at night, when many clinics on the West side are closed.',
    howToReach: [
      'From Badlapur West, cross the railway line to the East side near Badlapur station, then continue to Yadav Nagar Road in Shirgaon. The hospital is near Parsi Bungalow, at Plot No 12.',
      'By auto-rickshaw: ask for "Gurudev Hospital, Yadav Nagar Road, Shirgaon, near Parsi Bungalow".',
      'Use the "Directions from Badlapur West" button below for live traffic-aware routing on Google Maps.',
    ],
    focus: [
      { label: 'Night-time emergencies', text: 'Fever, injuries and acute abdominal pain at any hour — the surgeon is on the floor 24×7.' },
      { label: 'Planned surgery', text: 'Hernia, gallbladder, appendix, piles and fissure surgery by a laparoscopic surgeon.' },
      { label: 'Maternity', text: 'Pregnancy care and delivery at a women-owned hospital with a nursing room.' },
    ],
    origin: 'Badlapur West, Maharashtra',
  },
  {
    slug: 'ambernath',
    name: 'Ambernath',
    placeName: 'Ambernath',
    title: 'Hospital near Ambernath | Surgery & 24×7 Care in Badlapur East',
    metaDescription:
      'Hospital near Ambernath: Gurudev Hospital, Badlapur East is one station away. 24×7 emergency, laparoscopic surgery, kidney stone care. Call 080875\u00a034842.',
    h1: 'Hospital near Ambernath — Gurudev Multi-Speciality Hospital',
    station: { name: 'Ambernath railway station', lat: 19.2099855, lng: 73.1848741 },
    distance: 'about 8–9 km by road from Ambernath station',
    intro:
      'Ambernath patients choose Gurudev Multi-Speciality Hospital in Badlapur East for planned surgery and specialist care at an affordable cost. Badlapur is the very next station after Ambernath on the Central Railway Karjat line, and the hospital is reachable by road along the Ambernath–Badlapur route.',
    howToReach: [
      'By train: take any Karjat-bound local from Ambernath to Badlapur (one stop), exit on the East side and take an auto-rickshaw to Yadav Nagar Road, Shirgaon.',
      'By road: drive towards Badlapur, enter Badlapur East and head to Shirgaon. The hospital is at Plot No 12, Yadav Nagar Road, near Parsi Bungalow.',
      'In an emergency, call 080875\u00a034842 on the way so the team is ready when you arrive.',
    ],
    focus: [
      { label: 'Laparoscopic surgery', text: 'Keyhole surgery for hernia, gallbladder stones and appendix by Dr. Mayur Rupavat (MS, FMAS, FIAGES).' },
      { label: 'Kidney stone treatment', text: 'Pain relief and stone-removal procedures with in-patient care.' },
      { label: 'Dialysis', text: 'Dialysis sessions close to home — call to check slot availability.' },
    ],
    origin: 'Ambernath, Maharashtra',
  },
  {
    slug: 'vangani',
    name: 'Vangani',
    placeName: 'Vangani',
    title: 'Hospital near Vangani | 24 Hour Hospital in Badlapur East',
    metaDescription:
      '24-hour multi-speciality hospital for Vangani patients in Badlapur East. Emergency & trauma care, surgery, maternity, dialysis. Call 080875\u00a034842.',
    h1: '24-Hour Hospital for Vangani & Nearby Villages',
    station: null,
    distance: 'about 12 km by road',
    intro:
      'Families in Vangani and the villages along the Karjat line often travel to Badlapur for hospital care. Gurudev Multi-Speciality Hospital in Badlapur East — one station towards Mumbai — is open 24 hours with a surgeon on the floor, so accident, delivery and other emergencies can be handled at any time.',
    howToReach: [
      'By train: Badlapur is the next station from Vangani towards Kalyan. Exit Badlapur station on the East side and take an auto-rickshaw to Yadav Nagar Road, Shirgaon.',
      'By road: travel towards Badlapur and enter Badlapur East; the hospital is at Plot No 12, Yadav Nagar Road, near Parsi Bungalow, Shirgaon.',
      'For an emergency, call 080875\u00a034842 while you are travelling.',
    ],
    focus: [
      { label: 'Accident & trauma', text: 'Road and work injuries, fractures and wounds treated 24×7.' },
      { label: 'Delivery & pregnancy', text: 'Labour received at any hour; caesarean section when needed.' },
      { label: 'Fever & infections', text: 'Dengue, malaria, typhoid and jaundice with admission when required.' },
    ],
    origin: 'Vangani, Maharashtra',
  },
];

export const getArea = (slug) => areas.find((a) => a.slug === slug);

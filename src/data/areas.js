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
      '24-hour hospital for Badlapur West, just across the railway in Badlapur East: emergency, maternity, child care, orthopedics & surgery. Call 080875\u00a034842.',
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
    // Departments and treatments linked from this page (what patients from here search for)
    services: [
      { to: '/specialities/emergency-trauma-care', label: '24×7 emergency & trauma care', text: 'Accidents, injuries, chest or abdominal pain and breathing trouble, with a surgeon on the floor round the clock.' },
      { to: '/treatments/maternity-delivery-care', label: 'Maternity hospital & delivery', text: 'Pregnancy care and normal or caesarean delivery; a labour room with a newborn baby warmer and a nursing room for mothers.' },
      { to: '/specialities/paediatrics', label: 'Child specialist (paediatrics)', text: 'Care for newborns and children, from fever to admission when needed.' },
      { to: '/specialities/orthopaedics', label: 'Orthopedic doctor & fracture care', text: 'Fractures, joint pain and injuries; accident fractures are treated 24×7.' },
      { to: '/specialities/gynaecology-obstetrics', label: 'Gynaecology', text: 'Periods, pregnancy check-ups and other women\'s health problems, in a women-owned hospital.' },
      { to: '/specialities/general-laparoscopic-surgery', label: 'General & laparoscopic surgeon', text: 'Hernia, gallbladder stone and appendix surgery by Dr. Mayur Rupavat (MS, FMAS, FIAGES).' },
      { to: '/treatments/piles-treatment', label: 'Piles doctor (piles, fissure & fistula)', text: 'Private examination and treatment by a surgeon whose practice focuses on proctology.' },
      { to: '/treatments/kidney-stone-treatment', label: 'Kidney stone doctor', text: 'Pain relief, medicines and stone-removal procedures with in-patient care.' },
    ],
    faqs: [
      { q: 'Is there a 24-hour hospital near Badlapur West?', a: 'Yes. Gurudev Multi-Speciality Hospital is just across the railway line in Shirgaon, Badlapur East, about 2–5 km by road from most of Badlapur West. It is open 24 hours, 7 days a week, with a surgeon on the floor round the clock.' },
      { q: 'Is there a maternity hospital near Badlapur West?', a: 'Gurudev Hospital in Badlapur East handles pregnancy care and deliveries, normal or caesarean when needed. The labour room has a delivery table and a newborn baby warmer, and there is a nursing room for mothers. Labour is received at any hour.' },
      { q: 'Where can I take my child to a doctor near Badlapur West?', a: 'Gurudev Hospital has a paediatrics (child care) department for newborns and children, and it is open 24 hours for emergencies. Call 080875\u00a034842 to check the OPD timings.' },
      { q: 'Where can I see an orthopedic doctor near Badlapur West?', a: 'The orthopaedics department at Gurudev Hospital treats fractures, joint pain and injuries. Fractures after an accident are treated 24×7. Call 080875\u00a034842 to check the OPD timings.' },
    ],
    origin: 'Badlapur West, Maharashtra',
  },
  {
    slug: 'ambernath',
    name: 'Ambernath',
    placeName: 'Ambernath',
    title: 'Hospital near Ambernath East & West | 24×7 Multi-Speciality',
    metaDescription:
      'Hospital near Ambernath East & West, one station away in Badlapur East: 24×7 emergency, maternity, piles, kidney stone, surgery & dialysis. Call 080875\u00a034842.',
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
    // Departments and treatments linked from this page (what patients from here search for)
    services: [
      { to: '/treatments/maternity-delivery-care', label: 'Maternity hospital & delivery', text: 'Pregnancy care and normal or caesarean delivery; a labour room with a newborn baby warmer and a nursing room for mothers.' },
      { to: '/treatments/piles-treatment', label: 'Piles doctor (piles, fissure & fistula)', text: 'Private examination and treatment by a surgeon whose practice focuses on proctology.' },
      { to: '/treatments/kidney-stone-treatment', label: 'Kidney stone doctor', text: 'Pain relief, medicines and stone-removal procedures with in-patient care.' },
      { to: '/specialities/general-laparoscopic-surgery', label: 'General & laparoscopic surgeon', text: 'Hernia, gallbladder stone and appendix surgery by Dr. Mayur Rupavat (MS, FMAS, FIAGES).' },
      { to: '/specialities/orthopaedics', label: 'Orthopedic doctor & fracture care', text: 'Fractures, joint pain and injuries; accident fractures are treated 24×7.' },
      { to: '/specialities/gynaecology-obstetrics', label: 'Gynaecology', text: 'Periods, pregnancy check-ups and other women\'s health problems, in a women-owned hospital.' },
      { to: '/specialities/paediatrics', label: 'Child specialist (paediatrics)', text: 'Care for newborns and children, from fever to admission when needed.' },
      { to: '/specialities/dialysis', label: 'Dialysis centre', text: 'Dialysis sessions close to home; please call to check slot availability.' },
      { to: '/specialities/emergency-trauma-care', label: '24×7 emergency & trauma care', text: 'Accidents, injuries, chest or abdominal pain and breathing trouble, with a surgeon on the floor round the clock.' },
      { to: '/specialities/ent', label: 'ENT (ear, nose & throat)', text: 'Ear pain, sinus, tonsils and throat problems.' },
    ],
    faqs: [
      { q: 'Is Gurudev Hospital in Ambernath East or Ambernath West?', a: 'Neither: the hospital is in Shirgaon, Badlapur East, the next station after Ambernath. From Ambernath East or West, take a Karjat-bound local to Badlapur and an auto-rickshaw from the East side, or drive about 8–9 km from Ambernath station.' },
      { q: 'Is there a 24-hour hospital near Ambernath?', a: 'Gurudev Multi-Speciality Hospital in Badlapur East is open 24 hours, 7 days a week, with a surgeon on the floor round the clock. In an emergency, call 080875\u00a034842 on the way so the team is ready when you arrive.' },
      { q: 'Is there a maternity hospital near Ambernath?', a: 'Yes. Gurudev Hospital handles pregnancy care and deliveries, normal or caesarean when needed, in a women-owned hospital. The labour room has a newborn baby warmer, and there is a nursing room for mothers.' },
      { q: 'Where can I see a piles doctor near Ambernath?', a: 'Piles, fissure and fistula are treated at Gurudev Hospital by Dr. Mayur Rupavat, a general and laparoscopic surgeon whose practice focuses on proctology. The examination is done privately. Call 080875\u00a034842 to book.' },
      { q: 'Is there a dialysis centre near Ambernath?', a: 'Gurudev Hospital in Badlapur East offers dialysis. Please call 080875\u00a034842 to check slot availability before you travel.' },
    ],
    origin: 'Ambernath, Maharashtra',
  },
  {
    slug: 'vangani',
    name: 'Vangani',
    placeName: 'Vangani',
    title: 'Hospital near Vangani | 24 Hour Hospital in Badlapur East',
    metaDescription:
      '24-hour hospital near Vangani, one station away in Badlapur East: accident & trauma care, delivery, fever & jaundice treatment, surgery. Call 080875\u00a034842.',
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
    // Departments and treatments linked from this page (what patients from here search for)
    services: [
      { to: '/specialities/emergency-trauma-care', label: '24×7 emergency & trauma care', text: 'Accidents, injuries, chest or abdominal pain and breathing trouble, with a surgeon on the floor round the clock.' },
      { to: '/treatments/maternity-delivery-care', label: 'Maternity hospital & delivery', text: 'Pregnancy care and normal or caesarean delivery; a labour room with a newborn baby warmer and a nursing room for mothers.' },
      { to: '/treatments/fracture-treatment', label: 'Fracture treatment', text: 'Plaster, splints and surgery when needed, 24×7 after a fall or accident.' },
      { to: '/specialities/general-medicine', label: 'Fever, infections & general medicine', text: 'Dengue, malaria, typhoid, diabetes and BP, with admission when required.' },
      { to: '/treatments/jaundice-hepatitis-treatment', label: 'Jaundice treatment', text: 'Blood tests, monitoring and admission when needed.' },
      { to: '/specialities/paediatrics', label: 'Child specialist (paediatrics)', text: 'Care for newborns and children, from fever to admission when needed.' },
      { to: '/specialities/general-laparoscopic-surgery', label: 'General & laparoscopic surgeon', text: 'Hernia, gallbladder stone and appendix surgery by Dr. Mayur Rupavat (MS, FMAS, FIAGES).' },
      { to: '/specialities/dialysis', label: 'Dialysis centre', text: 'Dialysis sessions close to home; please call to check slot availability.' },
    ],
    faqs: [
      { q: 'Is there a 24-hour hospital near Vangani?', a: 'Gurudev Multi-Speciality Hospital in Badlapur East, the next station from Vangani towards Kalyan and about 12 km by road, is open 24 hours with a surgeon on the floor, so accidents, deliveries and other emergencies can be handled at any time.' },
      { q: 'Can a delivery be handled at night for patients from Vangani?', a: 'Yes. Labour is received at any hour, and a caesarean section is done when needed. Call 080875\u00a034842 while you are travelling so the team is ready.' },
      { q: 'What should we do after an accident near Vangani?', a: 'Call 108 for an ambulance or come straight to the hospital, and call 080875\u00a034842 on the way. Road and work injuries, fractures and wounds are treated 24×7.' },
      { q: 'How do I reach Gurudev Hospital from Vangani by train?', a: 'Take a local towards Kalyan to Badlapur (the next station), exit on the East side and take an auto-rickshaw to Yadav Nagar Road, Shirgaon. The hospital is at Plot No 12, near Parsi Bungalow.' },
    ],
    origin: 'Vangani, Maharashtra',
  },
];

export const getArea = (slug) => areas.find((a) => a.slug === slug);

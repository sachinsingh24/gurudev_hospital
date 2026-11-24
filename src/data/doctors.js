/**
 * Doctors — only names published by the hospital itself on Google.
 * Dr. Mayur Rupavat: credentials from the Google Business Profile description; education and
 *   experience verified on his LinkedIn profile (checked 23 Nov 2026).
 * Dr. Tarkeshwar Gupta, Dr. Siddik: named in the owner's replies to Google reviews; no matching
 *   LinkedIn or other public profile was found, so their qualifications and specialities are NOT
 *   published and they get no individual page yet (`profile: false`). See MISSING-INFO.md.
 */

export const doctors = [
  {
    slug: 'dr-mayur-rupavat',
    name: 'Dr. Mayur Rupavat',
    givenName: 'Mayur',
    familyName: 'Rupavat',
    profile: true,
    role: 'Consulting General & Laparoscopic Surgeon',
    qualifications: ['MBBS', 'MS (General Surgery)', 'FMAS', 'FIAGES'],
    qualificationNotes: {
      FMAS: 'Fellowship in Minimal Access Surgery',
      FIAGES: 'Fellowship of the Indian Association of Gastrointestinal Endoscopic Surgeons',
    },
    specialities: ['general-laparoscopic-surgery', 'urology', 'gastroenterology'],
    schemaSpecialty: 'Surgical',
    title: 'Dr. Mayur Rupavat | Laparoscopic & General Surgeon in Badlapur',
    metaDescription:
      'Dr. Mayur Rupavat, MBBS, MS, FMAS, FIAGES — general & laparoscopic surgeon at Gurudev Multi-Speciality Hospital, Badlapur East. Book: 080875\u00a034842.',
    bio: [
      'Dr. Mayur Rupavat has been the consulting general and laparoscopic surgeon at Gurudev Multi-Speciality Hospital, Badlapur East, since April 2023. He completed his MBBS at Dr. Ulhas Patil Medical College, his MS in General Surgery at Baroda Medical College, and a Fellowship in Minimal Access Surgery at Seth GS Medical College & KEM Hospital, Mumbai. He also holds the FMAS and FIAGES (Indian Association of Gastrointestinal Endoscopic Surgeons) fellowships.',
      'His practice focuses on laparoscopic (keyhole) surgery and proctology: hernia, gallbladder stones (laparoscopic cholecystectomy), appendicitis, piles, fissure and fistula, along with wound care, skin grafting, gangrene management and emergency surgery. Patients frequently mention him by name in their Google reviews for kidney stone procedures, fissure surgery and for explaining treatment clearly.',
    ],
    // Verified on LinkedIn (education + experience sections)
    education: [
      { course: 'Fellowship in Minimal Access Surgery', institution: 'Seth GS Medical College & KEM Hospital, Mumbai', years: '2020 – 2021' },
      { course: 'MS (General Surgery)', institution: 'Baroda Medical College', years: '2016 – 2019' },
      { course: 'MBBS', institution: 'Dr. Ulhas Patil Medical College', years: '2008 – 2013' },
    ],
    experience: [
      { role: 'Consulting General & Laparoscopic Surgeon', place: 'Gurudev Multi-Speciality Hospital, Badlapur East', years: 'April 2023 – present', focus: 'Laparoscopic surgery and proctology' },
    ],
    linkedin: 'https://www.linkedin.com/in/dr-mayur-rupavat-37027754/',
    expertise: [
      'Laparoscopic (keyhole) surgery',
      'Gallbladder stone surgery (laparoscopic cholecystectomy)',
      'Hernia repair',
      'Appendix surgery',
      'Proctology: piles, fissure & fistula',
      'Kidney stone procedures',
      'Wound care, skin grafting & gangrene management',
      'Emergency & trauma surgery',
    ],
    treatments: ['hernia-surgery', 'gallbladder-stone-surgery', 'appendix-surgery', 'piles-treatment', 'fissure-treatment', 'fistula-treatment', 'hydrocele-surgery', 'kidney-stone-treatment'],
  },
  {
    slug: 'dr-tarkeshwar-gupta',
    name: 'Dr. Tarkeshwar Gupta',
    profile: false,
    role: 'Doctor, Gurudev Multi-Speciality Hospital',
    qualifications: [],
    specialities: [],
  },
  {
    slug: 'dr-siddik',
    name: 'Dr. Siddik',
    profile: false,
    role: 'Doctor, Gurudev Multi-Speciality Hospital',
    qualifications: [],
    specialities: [],
  },
];

export const getDoctor = (slug) => doctors.find((d) => d.slug === slug && d.profile);
export const profileDoctors = doctors.filter((d) => d.profile);

/**
 * Specialities listed on the hospital's Google Business Profile description:
 * "24 hour critical. General Medicine, Gastroenterology, Pediatric, Gynaecology & Obstetric,
 *  Orthopedics, Neurology, Dialysis, Urology, General Surgery, Trauma"
 * + "Consulting General & Laparoscopic Surgeon" (Dr. Mayur Rupavat).
 *
 * Medical text is general patient education. Specific equipment, bed counts and named
 * consultants for each department are NOT published — see MISSING-INFO.md.
 */

// Page text (title, metaDescription, h1, body, conditions, services, symptoms, keywords, faqs) lives in ./specialityContent.js, loaded only by the speciality page.
const specialityData = [
  {
    slug: "general-laparoscopic-surgery",
    name: "General & Laparoscopic Surgery",
    short: "Surgery",
    icon: "scalpel",
    schemaSpecialty: "Surgical",
    featured: true,
    lead: "Surgery is the core of Gurudev Multi-Speciality Hospital — the hospital is known locally as the best surgery centre in Badlapur, with a surgeon on the floor 24 hours a day.",
    treatments: [
      "hernia-surgery",
      "gallbladder-stone-surgery",
      "appendix-surgery",
      "piles-treatment",
      "fissure-treatment",
      "fistula-treatment",
      "hydrocele-surgery"
    ]
  },
  {
    slug: "emergency-trauma-care",
    name: "24×7 Emergency, Trauma & Critical Care",
    short: "Emergency",
    icon: "ambulance",
    schemaSpecialty: "Emergency",
    featured: true,
    lead: "Gurudev Multi-Speciality Hospital is open 24 hours a day, every day of the year, with a surgeon on the floor round the clock for medical, surgical and trauma emergencies.",
    treatments: [
      "fracture-treatment",
      "appendix-surgery",
      "kidney-stone-treatment"
    ]
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    short: "Medicine",
    icon: "stethoscope",
    schemaSpecialty: "PrimaryCare",
    featured: true,
    lead: "Our general medicine department diagnoses and treats everyday and serious illnesses in adults — from fevers and infections to long-term conditions such as diabetes and high blood pressure.",
    treatments: [
      "jaundice-hepatitis-treatment"
    ]
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    short: "Gastro",
    icon: "stomach",
    schemaSpecialty: "Gastroenterologic",
    lead: "Digestive problems range from simple acidity to serious liver and gallbladder disease. Our team evaluates and treats conditions of the food pipe, stomach, intestines, liver, gallbladder and pancreas.",
    treatments: [
      "endoscopy",
      "jaundice-hepatitis-treatment",
      "gallbladder-stone-surgery",
      "appendix-surgery"
    ]
  },
  {
    slug: "gynaecology-obstetrics",
    name: "Gynaecology & Obstetrics",
    short: "Gynaecology",
    icon: "female",
    schemaSpecialty: "Gynecologic",
    schemaSpecialtyExtra: [
      "Obstetric"
    ],
    featured: true,
    lead: "From the first pregnancy check-up to delivery and beyond, and for every stage of a woman's health, our gynaecology and obstetrics department offers respectful, private and affordable care.",
    treatments: [
      "maternity-delivery-care"
    ]
  },
  {
    slug: "paediatrics",
    name: "Paediatrics (Child Care)",
    short: "Paediatrics",
    icon: "baby",
    schemaSpecialty: "Pediatric",
    lead: "Children are not small adults. Our paediatric care looks after newborns, infants, children and teenagers with gentle, child-friendly treatment.",
    treatments: []
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    short: "Orthopaedics",
    icon: "bone",
    schemaSpecialty: "Musculoskeletal",
    featured: true,
    lead: "Our orthopaedic service treats fractures, injuries and painful bone and joint conditions — and because we are open 24×7, accident and fracture patients can be seen at any time.",
    treatments: [
      "fracture-treatment"
    ]
  },
  {
    slug: "neurology",
    name: "Neurology",
    short: "Neurology",
    icon: "brain",
    schemaSpecialty: "Neurologic",
    lead: "Neurological conditions affect the brain, spinal cord and nerves. Early treatment — especially for stroke and seizures — can make a lifelong difference.",
    treatments: []
  },
  {
    slug: "urology",
    name: "Urology",
    short: "Urology",
    icon: "kidney",
    schemaSpecialty: "Urologic",
    featured: true,
    lead: "Urology deals with the kidneys, ureters, bladder, prostate and male reproductive organs. Kidney stone procedures are among the treatments patients most often review us for.",
    treatments: [
      "kidney-stone-treatment",
      "hydrocele-surgery"
    ]
  },
  {
    slug: "dialysis",
    name: "Dialysis",
    short: "Dialysis",
    icon: "droplet",
    schemaSpecialty: "Renal",
    lead: "For patients with kidney failure, dialysis takes over the work of the kidneys — removing waste and extra fluid from the blood. Regular, reliable dialysis close to home makes a big difference to quality of life.",
    treatments: []
  },
  {
    slug: "ent",
    name: "ENT (Ear, Nose & Throat)",
    short: "ENT",
    icon: "ear",
    schemaSpecialty: "Otolaryngologic",
    lead: "Ear, nose and throat problems are among the most common reasons families see a doctor. ENT is listed among the services on the Gurudev Multi-Speciality Hospital signboard.",
    treatments: []
  }
];

/**
 * DISPLAY ORDER = BUSINESS PRIORITY. Used everywhere: menus, home grid, footer, schema, sitemap.
 * Positioning on Google: "Best Surgery Centre in Badlapur" with a 24×7 surgeon on floor → procedure-led
 * departments first (surgery, emergency/trauma, urology, orthopaedics, maternity, gastro/endoscopy),
 * then medical departments. Re-order this list to change priority site-wide.
 */
export const SPECIALITY_PRIORITY = [
  'general-laparoscopic-surgery',
  'emergency-trauma-care',
  'urology',
  'orthopaedics',
  'gynaecology-obstetrics',
  'gastroenterology',
  'ent',
  'general-medicine',
  'paediatrics',
  'neurology',
  'dialysis',
];

export const specialities = [
  ...SPECIALITY_PRIORITY.map((slug) => specialityData.find((s) => s.slug === slug)).filter(Boolean),
  ...specialityData.filter((s) => !SPECIALITY_PRIORITY.includes(s.slug)),
];

export const getSpeciality = (slug) => specialities.find((s) => s.slug === slug);

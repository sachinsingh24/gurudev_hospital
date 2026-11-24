/**
 * Procedure / treatment landing pages (one page per distinct condition — no area × service doorway pages).
 *
 * Confirmed from Google reviews: kidney stone procedure, fissure surgery, Hepatitis A treatment.
 * Confirmed specialities on the Google profile: General Surgery, Orthopaedics, Gynaecology & Obstetrics, Urology.
 * Piles, fistula, hernia, gallbladder, appendix and hydrocele surgery are core procedures of a consulting
 * general & laparoscopic surgeon (FMAS, FIAGES) — CONFIRM each with the hospital (see MISSING-INFO.md).
 * No specific technology (laser, lithotripsy, etc.) is claimed because none is published.
 */

// Page text (title, metaDescription, h1, sections, keywords, faqs) lives in ./treatmentContent.js, loaded only by the treatment page.
const treatmentData = [
  {
    slug: "piles-treatment",
    name: "Piles (Haemorrhoids) Treatment",
    speciality: "general-laparoscopic-surgery",
    icon: "scalpel",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Anal canal",
    lead: "Piles — called bawaseer in Hindi and मूळव्याध (mulvyadh) in Marathi — are very common and very treatable. Our surgeon examines you privately and recommends the simplest treatment that will work.",
    symptoms: [
      "Bright-red bleeding during or after motion",
      "A soft lump that comes out of the anus",
      "Itching or irritation around the anus",
      "Painful swelling at the anal opening",
      "Feeling of incomplete emptying"
    ]
  },
  {
    slug: "fissure-treatment",
    name: "Anal Fissure Treatment & Surgery",
    speciality: "general-laparoscopic-surgery",
    icon: "scalpel",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Anal canal",
    lead: "A fissure causes sharp, cutting pain every time you pass motion. Patients have reviewed Gurudev Hospital for fissure surgery — and many fissures heal without an operation when treated early.",
    symptoms: [
      "Sharp, cutting pain during motion",
      "Burning pain lasting minutes to hours after motion",
      "Streak of fresh blood on stool or tissue",
      "Small skin tag near the anus",
      "Fear of passing motion due to pain"
    ]
  },
  {
    slug: "fistula-treatment",
    name: "Anal Fistula (Bhagandar) Surgery",
    speciality: "general-laparoscopic-surgery",
    icon: "scalpel",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Anal canal and perianal skin",
    lead: "An anal fistula — bhagandar in Hindi and Marathi — rarely heals on its own. Proper surgery closes the tract and stops the cycle of pus, pain and repeated boils.",
    symptoms: [
      "Repeated pus or blood discharge near the anus",
      "A small opening in the skin near the anus",
      "Recurring painful boils",
      "Itching and skin irritation",
      "Fever with painful swelling (abscess)"
    ]
  },
  {
    slug: "hernia-surgery",
    name: "Hernia Surgery",
    speciality: "general-laparoscopic-surgery",
    icon: "scalpel",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Abdominal wall and groin",
    lead: "A hernia does not go away on its own and can become dangerous if the bowel gets trapped. Timely surgery is safe, effective and — with laparoscopic techniques — quick to recover from.",
    symptoms: [
      "A bulge in the groin, navel or scar",
      "Bulge that increases on coughing, lifting or standing",
      "Dragging pain or heaviness",
      "Painful, hard bulge that will not go back (emergency)"
    ]
  },
  {
    slug: "gallbladder-stone-surgery",
    name: "Gallbladder Stone Surgery",
    speciality: "general-laparoscopic-surgery",
    icon: "scalpel",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Gallbladder",
    lead: "Gallbladder stones (pittashay ki pathri) that cause pain or infection are best treated by removing the gallbladder through keyhole surgery — one of the most common laparoscopic operations.",
    symptoms: [
      "Upper-right abdominal pain after meals",
      "Nausea, vomiting or bloating",
      "Pain spreading to the back or right shoulder",
      "Fever or yellow eyes (urgent)"
    ]
  },
  {
    slug: "appendix-surgery",
    name: "Appendix Surgery (Appendicectomy)",
    speciality: "general-laparoscopic-surgery",
    icon: "scalpel",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Appendix",
    lead: "Appendicitis is a surgical emergency. With a surgeon on the floor round the clock, Gurudev Hospital can diagnose and operate on appendicitis at any hour.",
    symptoms: [
      "Pain moving from navel to lower-right abdomen",
      "Pain worse on walking or coughing",
      "Fever, nausea, vomiting",
      "Loss of appetite"
    ]
  },
  {
    slug: "hydrocele-surgery",
    name: "Hydrocele Surgery",
    speciality: "general-laparoscopic-surgery",
    icon: "scalpel",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Scrotum",
    lead: "A hydrocele is a collection of fluid around the testis that causes painless swelling of the scrotum. It is not dangerous, but a large hydrocele can be uncomfortable and usually needs a simple operation.",
    symptoms: [
      "Painless swelling of one or both sides of the scrotum",
      "Heaviness or dragging discomfort",
      "Swelling that increases slowly over months"
    ]
  },
  {
    slug: "kidney-stone-treatment",
    name: "Kidney Stone Treatment",
    speciality: "urology",
    icon: "kidney",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Kidney and urinary tract",
    lead: "Kidney stone procedures are among the treatments our patients most often review us for. We relieve the pain quickly and then treat the stone itself.",
    symptoms: [
      "Severe pain in the side or back",
      "Pain spreading to the lower abdomen or groin",
      "Blood in urine",
      "Nausea and vomiting",
      "Fever with pain (urgent)"
    ]
  },
  {
    slug: "fracture-treatment",
    name: "Fracture Treatment",
    speciality: "orthopaedics",
    icon: "bone",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Bones and joints",
    lead: "Falls, road accidents and sports injuries can happen at any hour. Gurudev Multi-Speciality Hospital receives fracture and trauma patients 24×7.",
    symptoms: [
      "Pain and swelling after a fall or accident",
      "Visible deformity of a limb",
      "Unable to move or bear weight",
      "Bone visible through a wound (emergency)"
    ]
  },
  {
    slug: "jaundice-hepatitis-treatment",
    name: "Jaundice & Hepatitis Treatment",
    speciality: "general-medicine",
    icon: "stethoscope",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Liver",
    lead: "Jaundice — कावीळ (kavil) in Marathi and piliya in Hindi — means yellowing of the eyes and skin. Patients have reviewed our doctors for recovering from Hepatitis A with treatment and a regular nutrition plan.",
    symptoms: [
      "Yellow eyes or skin",
      "Dark yellow urine",
      "Loss of appetite, nausea or vomiting",
      "Fever and tiredness",
      "Pale stools or itching"
    ]
  },
  {
    slug: "maternity-delivery-care",
    name: "Maternity & Delivery Care",
    speciality: "gynaecology-obstetrics",
    icon: "baby",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Uterus",
    lead: "Bringing your baby into the world should feel safe and personal. Our maternity care supports you through pregnancy, delivery and the first weeks after birth.",
    symptoms: [
      "Labour pains or regular contractions",
      "Leaking fluid or bleeding during pregnancy",
      "Reduced baby movements",
      "Severe headache, swelling or blurred vision during pregnancy"
    ]
  },
  {
    slug: "endoscopy",
    name: "Endoscopy (Upper GI)",
    speciality: "gastroenterology",
    icon: "stomach",
    procedureType: null,
    bodyLocation: "Oesophagus, stomach and duodenum",
    lead: "Endoscopy lets the doctor see inside your food pipe, stomach and the first part of the small intestine: the most direct way to find the cause of persistent acidity, pain, bleeding or swallowing problems.",
    symptoms: [
      "Acidity or burning that does not settle with medicines",
      "Difficulty or pain while swallowing",
      "Vomiting blood or black, tarry stools",
      "Unexplained anaemia or weight loss",
      "Persistent upper-abdominal pain"
    ]
  }
];

/**
 * DISPLAY ORDER = BUSINESS PRIORITY (menus, home, treatments page, footer, schema, sitemap).
 *  1. Flagship laparoscopic (keyhole) surgery — the lead surgeon's FMAS/FIAGES speciality
 *  2. 24×7 surgical emergency (appendix) — "surgeon on floor 24×7"
 *  3. Ano-rectal surgery — high local demand; fissure surgery confirmed by patient reviews
 *  4. Urological procedures — kidney stone procedures confirmed by patient reviews
 *  5. Trauma, maternity, then medical treatment
 * Re-order this list to change priority site-wide.
 */
export const TREATMENT_PRIORITY = [
  'hernia-surgery',
  'gallbladder-stone-surgery',
  'appendix-surgery',
  'piles-treatment',
  'fissure-treatment',
  'fistula-treatment',
  'kidney-stone-treatment',
  'hydrocele-surgery',
  'endoscopy',
  'fracture-treatment',
  'maternity-delivery-care',
  'jaundice-hepatitis-treatment',
];

/** Short factual badge shown on treatment cards (only where the website states it). */
export const TREATMENT_TAGS = {
  'hernia-surgery': 'Keyhole surgery',
  'gallbladder-stone-surgery': 'Keyhole surgery',
  'appendix-surgery': '24×7 emergency',
  'fissure-treatment': 'Reviewed by patients',
  'kidney-stone-treatment': 'Reviewed by patients',
  'fracture-treatment': '24×7 trauma',
  'jaundice-hepatitis-treatment': 'Reviewed by patients',
};

export const treatments = [
  ...TREATMENT_PRIORITY.map((slug) => treatmentData.find((t) => t.slug === slug)).filter(Boolean),
  ...treatmentData.filter((t) => !TREATMENT_PRIORITY.includes(t.slug)),
].map((t) => ({ ...t, tag: TREATMENT_TAGS[t.slug] || null }));

export const getTreatment = (slug) => treatments.find((t) => t.slug === slug);

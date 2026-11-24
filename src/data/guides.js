/**
 * Health guides: patient-education articles targeting informational searches
 * (people researching symptoms before choosing a hospital), each linked to the matching treatment page.
 *
 * This file holds each guide's list data (title, description, links), in business-priority order: it is used on the
 * guides index, the home page and treatment pages. The article text (sections + FAQs) is in ./guideContent.js,
 * which only the guide page loads, so it stays out of every other page's JavaScript.
 *
 * Adding a guide: add its entry here (in priority order) and its text under the same slug in guideContent.js.
 * `imageFrom` (optional) borrows another page's photos so two guides never share one.
 *
 * E-E-A-T: when a doctor has reviewed an article, set `reviewedBy` (name + credentials) and `lastReviewed`.
 * This adds a visible "Medically reviewed by" line and `reviewedBy` schema. See MISSING-INFO.md.
 */
export const guides = [
  {
    slug: "hernia-symptoms-and-treatment",
    title: "Hernia Symptoms: Types, Warning Signs & When Surgery Is Needed",
    metaDescription: "Hernia (harniya) explained: groin or navel bulge, types, emergency warning signs, mesh repair and recovery. 24×7 surgeon at Gurudev Hospital, Badlapur East.",
    h1: "Hernia symptoms: types, warning signs and when surgery is needed",
    excerpt: "A soft bulge in the groin or near the navel that disappears when you lie down is often a hernia. Learn the types, the danger signs and how it is treated.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Hernia",
    treatment: "hernia-surgery",
    speciality: "general-laparoscopic-surgery",
    keywords: [
      "hernia symptoms",
      "inguinal hernia",
      "umbilical hernia",
      "hernia operation",
      "harniya ka ilaj"
    ]
  },
  {
    slug: "gallbladder-stone-symptoms",
    title: "Gallbladder Stone Symptoms: Pain, Diet & When Surgery Is Needed",
    metaDescription: "Gallbladder stones (pitt ki pathri): pain after fatty meals, warning signs, whether silent stones need surgery, and life without a gallbladder. Badlapur East.",
    h1: "Gallbladder stone symptoms: pain, diet and when surgery is needed",
    excerpt: "Pain in the upper right abdomen after a heavy meal is a classic sign of gallbladder stones. Learn when stones need treatment and what to expect after surgery.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Gallstones (cholelithiasis)",
    treatment: "gallbladder-stone-surgery",
    speciality: "general-laparoscopic-surgery",
    keywords: [
      "gallbladder stone symptoms",
      "gallstone pain",
      "pitt ki pathri",
      "gallbladder stone operation",
      "life after gallbladder removal"
    ]
  },
  {
    slug: "appendix-pain-symptoms",
    title: "Appendix Pain: Symptoms, Location & When to Go to Hospital",
    metaDescription: "Where appendix pain starts, how it moves, warning signs in children, pregnancy & the elderly, and when to rush to hospital. 24×7 surgeon in Badlapur East.",
    h1: "Appendix pain: symptoms, location and when to go to hospital",
    excerpt: "Appendix pain usually starts near the navel and moves to the lower right abdomen. Learn the warning signs and what not to do at home.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Appendicitis",
    treatment: "appendix-surgery",
    speciality: "emergency-trauma-care",
    keywords: [
      "appendix pain symptoms",
      "appendix pain location",
      "appendicitis symptoms",
      "appendix pain kaha hota hai"
    ]
  },
  {
    slug: "piles-vs-fissure-vs-fistula",
    title: "Piles vs Fissure vs Fistula: How to Tell the Difference",
    metaDescription: "Bleeding, pain or a lump near the anus? Compare piles (mulvyadh), fissure and fistula (bhagandar): symptoms, home care and when to see a surgeon in Badlapur.",
    h1: "Piles vs fissure vs fistula: how to tell the difference",
    excerpt: "Three common conditions, three different treatments. A simple guide to the symptoms of piles, fissure and fistula, and when to see a doctor.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Haemorrhoids, anal fissure and anal fistula",
    treatment: "piles-treatment",
    related: [
      "fissure-treatment",
      "fistula-treatment"
    ],
    speciality: "general-laparoscopic-surgery",
    keywords: [
      "piles vs fissure",
      "fissure and piles difference",
      "piles fissure fistula difference",
      "mulvyadh",
      "bhagandar"
    ]
  },
  {
    slug: "laparoscopic-vs-open-surgery",
    title: "Laparoscopic vs Open Surgery: Recovery, Scars & What to Expect",
    metaDescription: "How keyhole (laparoscopic) surgery differs from open surgery: recovery time, scars, hospital stay, cost factors and questions to ask your surgeon in Badlapur.",
    h1: "Laparoscopic vs open surgery: recovery, scars and what to expect",
    excerpt: "Keyhole surgery means smaller cuts and usually a faster recovery, but it is not right for every patient. Here is what to expect.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Conditions treated with abdominal surgery",
    treatment: "gallbladder-stone-surgery",
    related: [
      "hernia-surgery",
      "appendix-surgery"
    ],
    imageFrom: "general-laparoscopic-surgery",
    speciality: "general-laparoscopic-surgery",
    keywords: [
      "laparoscopic vs open surgery",
      "keyhole surgery recovery time",
      "laparoscopic surgery benefits",
      "laparoscopic surgery in Badlapur"
    ]
  },
  {
    slug: "kidney-stone-pain-what-to-do",
    title: "Kidney Stone Pain: What to Do & When to See a Doctor",
    metaDescription: "Kidney stone (mutkhada / pathri) pain explained: symptoms, warning signs, tests, which stones pass on their own and how to prevent new stones. Badlapur East.",
    h1: "Kidney stone pain: what to do and when to see a doctor",
    excerpt: "Sudden, severe pain in the side that moves to the groin is typical of a kidney stone. Know the warning signs and how to prevent new stones.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Kidney stones (nephrolithiasis)",
    treatment: "kidney-stone-treatment",
    speciality: "urology",
    keywords: [
      "kidney stone pain",
      "kidney stone symptoms",
      "mutkhada",
      "pathri ka dard",
      "kidney stone home remedy"
    ]
  },
  {
    slug: "hydrocele-symptoms-treatment",
    title: "Hydrocele: Causes, Symptoms & Treatment Options",
    metaDescription: "Painless scrotal swelling? Hydrocele (andkosh mein pani) explained: causes, how it differs from a hernia, when surgery is needed and recovery. Badlapur East.",
    h1: "Hydrocele: causes, symptoms and treatment options",
    excerpt: "A hydrocele is a collection of fluid around a testicle that causes painless swelling of the scrotum. Learn the causes, warning signs and when it needs treatment.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Hydrocele",
    treatment: "hydrocele-surgery",
    speciality: "general-laparoscopic-surgery",
    keywords: [
      "hydrocele symptoms",
      "hydrocele treatment",
      "hydrocele operation",
      "andkosh mein pani",
      "hydrocele without surgery"
    ]
  },
  {
    slug: "upper-gi-endoscopy-guide",
    title: "Upper GI Endoscopy: Why It's Done, Preparation & What to Expect",
    metaDescription: "Advised an endoscopy? Why upper GI endoscopy is done, how to prepare, what happens during the test, sedation, risks and results. Gurudev Hospital, Badlapur.",
    h1: "Upper GI endoscopy: why it's done, preparation and what to expect",
    excerpt: "An endoscopy lets the doctor look inside your food pipe, stomach and duodenum with a thin camera. Here is how to prepare and what happens on the day.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Upper digestive tract problems (acidity, ulcers, bleeding)",
    treatment: "endoscopy",
    speciality: "gastroenterology",
    keywords: [
      "endoscopy test",
      "upper gi endoscopy",
      "endoscopy preparation",
      "endoscopy procedure",
      "endoscopy in Badlapur"
    ]
  },
  {
    slug: "fracture-signs-first-aid",
    title: "Fracture or Sprain? Signs of a Broken Bone & First Aid",
    metaDescription: "How to tell a fracture from a sprain, first aid for a broken bone, when to go to hospital and how fractures heal. 24×7 emergency with X-ray in Badlapur East.",
    h1: "Fracture or sprain? Signs of a broken bone and first aid",
    excerpt: "Pain, swelling and not being able to use the limb after a fall can mean a fracture. Learn the signs, safe first aid and what treatment involves.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Bone fracture",
    treatment: "fracture-treatment",
    speciality: "orthopaedics",
    keywords: [
      "fracture symptoms",
      "fracture or sprain",
      "broken bone first aid",
      "haddi tootna",
      "fracture treatment in Badlapur"
    ]
  },
  {
    slug: "pregnancy-warning-signs-labour",
    title: "Pregnancy Warning Signs & Labour Signs: When to Go to Hospital",
    metaDescription: "Danger signs in pregnancy, signs of true labour, when to leave for hospital and what to pack in your hospital bag. 24×7 maternity care in Badlapur East.",
    h1: "Pregnancy warning signs and signs of labour: when to go to hospital",
    excerpt: "Know the danger signs that need a doctor straight away, how to recognise true labour, and what to pack for the hospital.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Pregnancy and childbirth",
    treatment: "maternity-delivery-care",
    speciality: "gynaecology-obstetrics",
    keywords: [
      "pregnancy danger signs",
      "signs of labour",
      "when to go to hospital in labour",
      "hospital bag for delivery",
      "maternity hospital in Badlapur"
    ]
  },
  {
    slug: "jaundice-causes-warning-signs",
    title: "Jaundice (Piliya / Kavil): Causes, Diet & Warning Signs",
    metaDescription: "Yellow eyes or dark urine? Jaundice (piliya / kavil) explained: causes such as hepatitis A and E, tests, diet myths and danger signs that need hospital care.",
    h1: "Jaundice (piliya / kavil): causes, diet and warning signs",
    excerpt: "Jaundice is a sign, not a disease. Yellow eyes and dark urine can have many causes. Learn which tests are needed, what to eat and the danger signs.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    reviewedBy: null,
    lastReviewed: null,
    condition: "Jaundice",
    treatment: "jaundice-hepatitis-treatment",
    speciality: "general-medicine",
    keywords: [
      "jaundice symptoms",
      "piliya",
      "kavil",
      "jaundice diet",
      "hepatitis A",
      "jaundice treatment in Badlapur"
    ]
  }
];

export const getGuide = (slug) => guides.find((g) => g.slug === slug);

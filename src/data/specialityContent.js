/**
 * Page text for each speciality page, keyed by slug: title, metaDescription, h1, body, conditions, services, symptoms, keywords, faqs.
 * Only the speciality detail page imports this file, so the text stays out of the JavaScript every other page loads.
 * Names, slugs, short descriptions and schema fields stay in ./specialities.js (menus, footer, cards and schema use them).
 */
import { getSpeciality } from './specialities.js';

export const specialityContent = {
  "general-laparoscopic-surgery": {
    title: "Laparoscopic & General Surgeon in Badlapur East, Thane",
    metaDescription: "Keyhole & general surgery in Badlapur East by Dr. Mayur Rupavat (MS, FMAS, FIAGES). Hernia, gallbladder, appendix, piles. 24×7 surgeon. 080875\u00a034842.",
    h1: "General & Laparoscopic Surgery in Badlapur",
    body: [
      "Our surgical department is led by Dr. Mayur Rupavat (MBBS, MS – General Surgery, FMAS, FIAGES), a consulting general and laparoscopic surgeon. Laparoscopic or \"keyhole\" surgery is performed through small cuts using a camera and fine instruments. Compared with open surgery it usually means less pain, smaller scars, a shorter hospital stay and a quicker return to work — though the right approach always depends on your condition, and the surgeon will explain the options before you decide.",
      "Because a surgeon is available round the clock, patients with surgical emergencies such as acute appendicitis, bowel obstruction, abscesses or injuries can be assessed and operated on without waiting for a consultant to be called in from outside."
    ],
    conditions: [
      "Hernia (inguinal, umbilical, incisional)",
      "Gallbladder stones (cholelithiasis)",
      "Appendicitis",
      "Piles (haemorrhoids), anal fissure & fistula",
      "Abscesses, cysts & lipomas",
      "Hydrocele",
      "Abdominal pain needing surgical evaluation",
      "Wounds, cuts & injuries"
    ],
    services: [
      "Laparoscopic (keyhole) surgery",
      "Open general surgery",
      "Emergency surgery, 24×7",
      "Surgical opinion & second opinion",
      "Pre-operative evaluation & post-operative care",
      "Day-care minor procedures"
    ],
    symptoms: [
      "A bulge in the groin or navel that grows on coughing or standing",
      "Pain in the upper right abdomen after fatty meals",
      "Sudden pain that starts near the navel and moves to the lower right abdomen",
      "Bleeding, pain or a lump around the anus",
      "A painful, swollen, pus-filled boil that is not healing"
    ],
    keywords: [
      "laparoscopic surgeon in Badlapur",
      "general surgeon near me",
      "surgery hospital in Badlapur East",
      "keyhole surgery Badlapur"
    ],
    faqs: [
      {
        q: "Who performs laparoscopic surgery at Gurudev Hospital, Badlapur?",
        a: "Laparoscopic and general surgery is performed by Dr. Mayur Rupavat, MBBS, MS (General Surgery), FMAS, FIAGES, consulting general and laparoscopic surgeon."
      },
      {
        q: "Is a surgeon available at night for emergencies?",
        a: "Yes. The hospital is open 24 hours and has a surgeon on the floor 24×7, so surgical emergencies can be seen at any time. Call 080875\u00a034842 on the way."
      },
      {
        q: "How long is the hospital stay after keyhole surgery?",
        a: "It depends on the operation and your health. Many routine laparoscopic operations need a short stay of one to a few days; the surgeon will give you an estimate after examining you."
      },
      {
        q: "Can I use mediclaim or health insurance for surgery?",
        a: "Patients report that major mediclaim policies are accepted. Please call the hospital with your policy or TPA details to confirm cashless or reimbursement eligibility before admission."
      }
    ]
  },
  "emergency-trauma-care": {
    title: "24 Hour Emergency Hospital in Badlapur East | Trauma Care",
    metaDescription: "Emergency hospital in Badlapur East, open 24 hours, 7 days. Trauma, accident, surgical & medical emergencies, surgeon on floor 24×7. Call 080875\u00a034842.",
    h1: "24×7 Emergency, Trauma & Critical Care in Badlapur",
    body: [
      "In an emergency, every minute counts. Our hospital on Yadav Nagar Road, Shirgaon, Badlapur East, receives patients at any hour — road-traffic accidents, falls and fractures, severe abdominal pain, high fever, breathing difficulty, poisoning, burns and other urgent problems. Patients are assessed, stabilised and treated by the on-duty team, and the surgical team can take emergency cases to the operation theatre without delay.",
      "Patients who need close monitoring after surgery or during a serious illness are cared for by our critical-care team. If a condition needs a facility we do not have, our doctors stabilise the patient and arrange a safe referral.",
      "Please call 080875\u00a034842 while you are on the way so the team can prepare for your arrival."
    ],
    conditions: [
      "Road-traffic accidents & injuries",
      "Fractures, sprains & dislocations",
      "Head injury",
      "Acute abdominal pain (appendicitis, stones, obstruction)",
      "High fever, dengue, malaria & typhoid",
      "Breathing difficulty & asthma attacks",
      "Dehydration, vomiting & diarrhoea",
      "Poisoning, bites & burns"
    ],
    services: [
      "Open 24 hours, 7 days a week",
      "Surgeon on floor 24×7",
      "Emergency surgery",
      "Trauma & fracture care",
      "Critical-care monitoring",
      "Stabilisation & safe referral when needed"
    ],
    symptoms: [
      "Chest pain, fainting or sudden weakness of one side of the body",
      "Severe bleeding or a deep wound",
      "Severe abdominal pain or a rigid, swollen abdomen",
      "Difficulty breathing",
      "High fever with drowsiness, fits or bleeding",
      "Any injury after a fall or road accident"
    ],
    keywords: [
      "emergency hospital near me",
      "24 hour hospital in Badlapur",
      "trauma centre Badlapur",
      "accident hospital Badlapur East"
    ],
    faqs: [
      {
        q: "Is Gurudev Hospital open 24 hours?",
        a: "Yes. Gurudev Multi-Speciality Hospital, Badlapur East is open 24 hours a day, 7 days a week, including Sundays and holidays."
      },
      {
        q: "What is the emergency phone number?",
        a: "Call 080875\u00a034842 (+91\u00a080875\u00a034842). For a life-threatening emergency you can also dial 108 for a government ambulance."
      },
      {
        q: "Where exactly is the hospital?",
        a: "Plot No 12, Yadav Nagar Road, Near Parsi Bungalow, Shirgaon, Badlapur East, Maharashtra 421503. Tap \"Get directions\" for turn-by-turn navigation on Google Maps."
      }
    ]
  },
  "general-medicine": {
    title: "General Physician in Badlapur East | Fever, Diabetes & BP",
    metaDescription: "General medicine at Gurudev Hospital, Badlapur East — fever, dengue, typhoid, jaundice, diabetes, BP & infections. OPD and 24×7 admission. Call 080875\u00a034842.",
    h1: "General Medicine & Physician Care in Badlapur",
    body: [
      "Many illnesses can be managed in the out-patient department with the right tests and medicines. When a patient needs closer care — for example severe dehydration, dengue with falling platelets, jaundice or uncontrolled sugar — they can be admitted and monitored round the clock.",
      "Patients have written about recovering from Hepatitis A under the care of our doctors, with a nutrition plan from the team during and after their stay. We believe good medicine means explaining the illness clearly, treating it promptly and keeping costs reasonable."
    ],
    conditions: [
      "Viral fever, dengue, malaria & typhoid",
      "Jaundice & hepatitis",
      "Diabetes",
      "High blood pressure",
      "Thyroid disorders",
      "Respiratory infections, asthma & pneumonia",
      "Urinary tract infections",
      "Gastroenteritis & dehydration"
    ],
    services: [
      "OPD consultation",
      "In-patient admission & monitoring",
      "Fever & infection management",
      "Diabetes & BP management",
      "Nutrition and diet guidance",
      "Health check-up advice"
    ],
    symptoms: [
      "Fever lasting more than two to three days",
      "Yellow eyes or urine",
      "Constant tiredness, excessive thirst or frequent urination",
      "Persistent cough or breathlessness",
      "Repeated vomiting or loose motions"
    ],
    keywords: [
      "general physician in Badlapur",
      "fever treatment Badlapur",
      "dengue treatment hospital Badlapur",
      "MD physician near me"
    ],
    faqs: [
      {
        q: "Can I be admitted for dengue or typhoid at Gurudev Hospital?",
        a: "Yes. Patients with fevers that need monitoring, IV fluids or blood tests can be admitted. Our doctors will advise admission based on your symptoms and reports."
      },
      {
        q: "Do I need an appointment to see a physician?",
        a: "Walk-ins are welcome, but calling 080875\u00a034842 or booking online helps reduce your waiting time."
      }
    ]
  },
  gastroenterology: {
    title: "Gastroenterology in Badlapur East | Stomach & Liver Care",
    metaDescription: "Stomach, liver & digestive care in Badlapur East: acidity, ulcers, jaundice, hepatitis, gallbladder stones & GI surgery. Call 080875\u00a034842.",
    h1: "Gastroenterology — Stomach, Liver & Digestive Care",
    body: [
      "Gastroenterology at Gurudev Hospital works closely with our surgical department. Our lead surgeon holds the FIAGES fellowship of the Indian Association of Gastrointestinal Endoscopic Surgeons, so patients whose problem needs an operation — such as gallbladder stones, appendicitis or hernia — can be treated under the same roof.",
      "Conditions like jaundice, hepatitis and severe gastroenteritis are managed with in-patient monitoring, fluids and diet planning when needed."
    ],
    conditions: [
      "Acidity, GERD & heartburn",
      "Gastritis & stomach ulcers",
      "Jaundice, hepatitis & fatty liver",
      "Gallbladder stones",
      "Pancreatitis",
      "Constipation, IBS & chronic diarrhoea",
      "Blood in stool or vomit"
    ],
    services: [
      "Consultation & diagnosis",
      "Endoscopy",
      "In-patient management",
      "Liver disease care",
      "Gastro-intestinal surgery",
      "Diet and nutrition planning"
    ],
    symptoms: [
      "Burning chest or upper-abdominal pain",
      "Yellow eyes or dark urine",
      "Black stools or blood in vomit",
      "Unexplained weight loss",
      "Difficulty swallowing"
    ],
    keywords: [
      "gastroenterologist in Badlapur",
      "stomach specialist Badlapur",
      "liver treatment Badlapur",
      "jaundice treatment near me"
    ],
    faqs: [
      {
        q: "Can gallbladder stones be treated at Gurudev Hospital?",
        a: "Yes. Symptomatic gallbladder stones are usually treated by laparoscopic gallbladder removal (cholecystectomy), performed by our general & laparoscopic surgeon."
      },
      {
        q: "When should acidity be checked by a doctor?",
        a: "See a doctor if acidity happens several times a week, wakes you at night, or comes with vomiting, weight loss, black stools or difficulty swallowing."
      }
    ]
  },
  "gynaecology-obstetrics": {
    title: "Gynaecologist & Maternity Hospital in Badlapur East, Thane",
    metaDescription: "Pregnancy care, normal & caesarean delivery and gynaecology treatment in Badlapur East. Women-owned, 24×7 hospital with a nursing room. Call 080875\u00a034842.",
    h1: "Gynaecology, Obstetrics & Maternity Care in Badlapur",
    body: [
      "Gurudev Multi-Speciality Hospital identifies as a women-owned hospital, and we understand how important comfort and privacy are to women patients and new mothers. The hospital has a nursing room for mothers and is open 24 hours, so labour and pregnancy emergencies are received at any time.",
      "Our obstetric care covers regular antenatal check-ups, management of high-risk pregnancies, normal delivery, caesarean section when medically required, and postnatal care for mother and baby. Gynaecology care includes menstrual problems, infections, PCOS, fibroids, cysts and menopause-related concerns."
    ],
    conditions: [
      "Pregnancy & antenatal care",
      "Normal delivery & caesarean section",
      "Irregular or painful periods",
      "PCOS / PCOD",
      "Fibroids & ovarian cysts",
      "White discharge & infections",
      "Menopause problems",
      "Infertility evaluation"
    ],
    services: [
      "Antenatal check-ups",
      "Labour & delivery, 24×7",
      "Caesarean section",
      "Postnatal care",
      "Gynaecology OPD",
      "Gynaecological surgery"
    ],
    symptoms: [
      "Bleeding, leaking fluid or severe pain during pregnancy",
      "Reduced baby movements",
      "Very heavy, painful or irregular periods",
      "Lower abdominal pain or a lump",
      "Bleeding after menopause"
    ],
    keywords: [
      "maternity hospital in Badlapur",
      "gynecologist in Badlapur East",
      "delivery hospital near me",
      "normal delivery hospital Badlapur"
    ],
    faqs: [
      {
        q: "Is normal delivery done at Gurudev Hospital, Badlapur?",
        a: "Yes. The obstetrics team supports normal delivery whenever it is safe and performs caesarean section when medically required. The hospital is open 24 hours for labour."
      },
      {
        q: "Is there a lady doctor for gynaecology?",
        a: "Please call 080875\u00a034842 to check the gynaecologist's OPD timings and availability before your visit."
      },
      {
        q: "Does the hospital have a nursing room for new mothers?",
        a: "Yes, the hospital has a nursing room for mothers and babies."
      }
    ]
  },
  paediatrics: {
    title: "Child Specialist in Badlapur East | Paediatric Care, Thane",
    metaDescription: "Child specialist & paediatric care in Badlapur East — newborn care, fever, cough, diarrhoea, vaccination advice & admission. 24×7 hospital. Call 080875\u00a034842.",
    h1: "Paediatrics — Child & Newborn Care in Badlapur",
    body: [
      "Common childhood illnesses such as fever, cough, cold, vomiting and loose motions can quickly become serious in young children because they dehydrate faster. Our team assesses children promptly, and admits them for observation, fluids or treatment when needed — at any hour.",
      "We also guide parents on growth, nutrition and the national immunisation schedule, and provide care for newborns born at the hospital."
    ],
    conditions: [
      "Fever & seizures with fever",
      "Cough, cold, pneumonia & asthma",
      "Vomiting, diarrhoea & dehydration",
      "Dengue, malaria & typhoid in children",
      "Newborn jaundice",
      "Poor feeding & growth concerns",
      "Skin rashes & allergies"
    ],
    services: [
      "Paediatric OPD",
      "Newborn care",
      "Paediatric admission",
      "Vaccination guidance",
      "Growth & nutrition advice"
    ],
    symptoms: [
      "Fever in a baby under 3 months",
      "Fast or difficult breathing",
      "Fewer wet nappies, dry mouth or sunken eyes",
      "Fits or unusual drowsiness",
      "Not feeding well"
    ],
    keywords: [
      "child specialist in Badlapur",
      "pediatrician near me",
      "children hospital Badlapur",
      "baby doctor Badlapur East"
    ],
    faqs: [
      {
        q: "Can children be admitted at Gurudev Hospital?",
        a: "Yes. Children who need IV fluids, observation or treatment can be admitted. The hospital is open 24 hours."
      },
      {
        q: "When should I bring my child to hospital immediately?",
        a: "Come straight away if your child has difficulty breathing, a fit, is very drowsy, is not drinking, or if a baby under 3 months has fever."
      }
    ]
  },
  orthopaedics: {
    title: "Orthopedic Hospital in Badlapur East | Fracture & Joint Care",
    metaDescription: "Orthopaedic care in Badlapur East: fractures, accident injuries, back, knee & joint pain, sports injuries. 24×7 trauma care. Call 080875\u00a034842.",
    h1: "Orthopaedics — Bone, Joint & Fracture Care in Badlapur",
    body: [
      "Fractures and dislocations need correct alignment and fixation to heal well. Depending on the injury, treatment may be a plaster or splint, or surgery to fix the bone. Patients with long-term problems like knee arthritis, back pain or frozen shoulder are treated with medicines, physiotherapy advice and procedures where appropriate.",
      "Trauma cases benefit from the hospital's round-the-clock surgical team, which can manage associated injuries alongside orthopaedic care."
    ],
    conditions: [
      "Fractures & dislocations",
      "Road-accident injuries",
      "Knee pain & arthritis",
      "Back & neck pain, slip disc",
      "Shoulder pain & frozen shoulder",
      "Ligament & sports injuries",
      "Osteoporosis"
    ],
    services: [
      "Fracture management (plaster & surgery)",
      "24×7 trauma care",
      "Joint-pain treatment",
      "Spine-pain evaluation",
      "Physiotherapy guidance"
    ],
    symptoms: [
      "Pain, swelling or deformity after a fall or accident",
      "Inability to bear weight on a leg",
      "Knee pain while climbing stairs",
      "Back pain spreading down the leg",
      "Numbness or weakness in arms or legs"
    ],
    keywords: [
      "orthopedic doctor in Badlapur",
      "fracture hospital near me",
      "bone doctor Badlapur",
      "knee pain treatment Badlapur"
    ],
    faqs: [
      {
        q: "Do you treat fractures at night?",
        a: "Yes. The hospital is open 24 hours for accident and fracture patients."
      },
      {
        q: "Do all fractures need surgery?",
        a: "No. Many fractures heal with a plaster or splint. Surgery is advised when the bone is displaced, unstable or involves a joint. The doctor will decide after examination and X-ray."
      }
    ]
  },
  neurology: {
    title: "Neurology Care in Badlapur East | Stroke, Seizure, Migraine",
    metaDescription: "Neurology care in Badlapur East for stroke, seizures, migraine, vertigo, nerve pain & head injury, with 24×7 emergency. Call 080875\u00a034842.",
    h1: "Neurology — Brain, Spine & Nerve Care in Badlapur",
    body: [
      "Our neurology service evaluates and manages headaches and migraine, seizures (fits), stroke, vertigo, nerve pain, numbness and weakness. Because the hospital is open 24 hours, patients with sudden neurological symptoms can be assessed immediately and stabilised.",
      "If you notice the signs of stroke — face drooping, arm weakness or slurred speech — come to the hospital or call for help immediately. Time lost is brain lost."
    ],
    conditions: [
      "Stroke & paralysis",
      "Seizures / epilepsy",
      "Migraine & chronic headache",
      "Vertigo & dizziness",
      "Nerve pain, numbness & neuropathy",
      "Head injury",
      "Parkinson's disease & tremors"
    ],
    services: [
      "Neurology consultation",
      "Emergency stroke & seizure stabilisation",
      "In-patient neurological care",
      "Long-term follow-up"
    ],
    symptoms: [
      "Sudden face drooping, arm weakness or slurred speech",
      "A first-ever fit",
      "Worst headache of your life",
      "Sudden loss of vision or balance",
      "Tingling or numbness that is spreading"
    ],
    keywords: [
      "neurologist in Badlapur",
      "stroke treatment hospital near me",
      "paralysis treatment Badlapur",
      "migraine doctor Badlapur"
    ],
    faqs: [
      {
        q: "What should I do if someone shows stroke symptoms?",
        a: "Note the time symptoms started and bring the person to hospital immediately, or call 080875\u00a034842 / 108. Do not give food, water or medicines by mouth."
      }
    ]
  },
  urology: {
    title: "Urologist in Badlapur East | Kidney Stone & Prostate Care",
    metaDescription: "Urology care in Badlapur East: kidney stone procedures, prostate, urine infection & urinary problems. Gurudev Hospital. Call 080875\u00a034842.",
    h1: "Urology — Kidney Stone, Prostate & Urinary Care in Badlapur",
    body: [
      "Kidney stones can cause some of the most severe pain a person can experience. Small stones often pass with medicines and fluids; larger or obstructing stones need a procedure. Our team evaluates the size and position of the stone and recommends the most suitable treatment.",
      "We also treat urinary infections, enlarged prostate, difficulty passing urine, blood in urine and other urological conditions, with in-patient care and pain relief available 24 hours a day."
    ],
    conditions: [
      "Kidney & ureteric stones",
      "Urinary tract infection",
      "Enlarged prostate (BPH)",
      "Difficulty or burning while passing urine",
      "Blood in urine",
      "Hydrocele"
    ],
    services: [
      "Kidney stone procedures",
      "Urology consultation",
      "Emergency renal colic care",
      "Prostate evaluation",
      "In-patient urological care"
    ],
    symptoms: [
      "Severe pain in the side or back that moves to the groin",
      "Blood in urine",
      "Burning or frequent urination with fever",
      "Weak urine stream or getting up at night to pass urine",
      "Unable to pass urine"
    ],
    keywords: [
      "urologist in Badlapur",
      "kidney stone hospital Badlapur",
      "prostate treatment Badlapur",
      "urine infection doctor near me"
    ],
    faqs: [
      {
        q: "Are kidney stone procedures done at Gurudev Hospital?",
        a: "Yes. Patients have been admitted for kidney stone procedures under the care of Dr. Mayur Rupavat and team. Call 080875\u00a034842 with your sonography or CT report to discuss the right option."
      }
    ]
  },
  dialysis: {
    title: "Dialysis Centre in Badlapur East, Thane | Gurudev Hospital",
    metaDescription: "Dialysis services in Badlapur East at Gurudev Multi-Speciality Hospital, open 24 hours. Care for kidney failure. Call 080875\u00a034842 to book a dialysis slot.",
    h1: "Dialysis Services in Badlapur",
    body: [
      "Gurudev Multi-Speciality Hospital offers dialysis in Badlapur East so patients from Badlapur, Ambernath and nearby areas do not have to travel far for each session. Because we are a multi-speciality hospital that is open 24 hours, dialysis patients also have access to medicine, surgery and emergency care when complications arise.",
      "Please call 080875\u00a034842 to check slot availability and to share your nephrologist's prescription and recent reports before your first session."
    ],
    conditions: [
      "Chronic kidney disease (CKD)",
      "Acute kidney injury",
      "Kidney failure due to diabetes or high BP",
      "Fluid overload"
    ],
    services: [
      "Haemodialysis sessions",
      "Dialysis for admitted patients",
      "Monitoring of blood reports",
      "Diet & fluid guidance"
    ],
    symptoms: [
      "Swelling of feet, face or around the eyes",
      "Breathlessness from fluid overload",
      "Very low urine output",
      "Nausea, itching and tiredness with high creatinine"
    ],
    keywords: [
      "dialysis centre in Badlapur",
      "dialysis near me",
      "kidney dialysis Badlapur East",
      "dialysis hospital Ambernath Badlapur"
    ],
    faqs: [
      {
        q: "How do I book a dialysis slot?",
        a: "Call 080875\u00a034842 with your doctor's prescription and latest reports. The team will confirm a suitable slot."
      },
      {
        q: "Is dialysis covered by insurance?",
        a: "Coverage depends on your policy. Call the hospital with your insurer or TPA details to check."
      }
    ]
  },
  ent: {
    title: "ENT Doctor in Badlapur East | Ear, Nose & Throat Care",
    metaDescription: "ENT care in Badlapur East: ear pain & infection, wax, hearing problems, sinusitis, tonsillitis, nosebleeds & throat infections. Call 080875\u00a034842.",
    h1: "ENT: Ear, Nose & Throat Care in Badlapur",
    body: [
      "ENT care covers infections and blockages of the ear, nose, sinuses and throat in children and adults, from ear pain and wax to recurrent tonsillitis, sinusitis and nosebleeds. Many problems are treated in the out-patient department with examination and medicines; others need a minor procedure or surgery.",
      "Please call 080875\u00a034842 to check the ENT OPD days before your visit. For severe bleeding, breathing difficulty or a high fever with throat swelling, come to the hospital immediately. We are open 24×7."
    ],
    conditions: [
      "Ear pain, ear discharge & infections",
      "Ear wax blockage",
      "Hearing difficulty & ringing in the ears",
      "Sinusitis & nasal blockage",
      "Tonsillitis & sore throat",
      "Nosebleeds",
      "Voice change & hoarseness",
      "Dizziness related to the ear"
    ],
    services: [
      "ENT OPD consultation",
      "Ear examination & wax removal",
      "Treatment of ear, nose & throat infections",
      "Evaluation for ENT procedures",
      "24×7 emergency care for ENT emergencies"
    ],
    symptoms: [
      "Ear pain or discharge lasting more than 2 to 3 days",
      "Sudden hearing loss",
      "Nosebleed that does not stop with pressure",
      "Difficulty swallowing or breathing with throat swelling",
      "Hoarse voice for more than 3 weeks"
    ],
    keywords: [
      "ENT doctor in Badlapur",
      "ENT specialist near me",
      "ear doctor Badlapur East",
      "ENT hospital Badlapur"
    ],
    faqs: [
      {
        q: "Is there an ENT doctor at Gurudev Hospital?",
        a: "ENT is one of the services listed on the hospital signboard. Call 080875\u00a034842 to check the ENT OPD days and timings."
      },
      {
        q: "Should I clean ear wax with earbuds?",
        a: "No. Earbuds push wax deeper and can injure the ear canal. If wax blocks the ear, a doctor can remove it safely."
      }
    ]
  }
};

/** Everything a speciality page needs: the list fields plus the page text. */
export const getSpecialityPage = (slug) => {
  const item = getSpeciality(slug);
  return item ? { ...item, ...specialityContent[slug] } : undefined;
};

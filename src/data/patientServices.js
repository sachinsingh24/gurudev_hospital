/**
 * Patient rooms & services — only what is evidenced by the Google Business Profile, patient reviews
 * or the hospital's own photos. Room categories, charges, visiting hours, attendant and food policies
 * are NOT published, so the site asks patients to call (see MISSING-INFO.md).
 *
 * Evidence:
 *  - 24×7 admission, surgeon on floor ............ Google profile
 *  - Nursing & ward staff day and night ........... reviews ("nurses and ward boys", "Sister Reena")
 *  - In-patient stays ............................. reviews (e.g. 5-day admission for a kidney stone procedure)
 *  - Diet / nutrition plan ........................ review ("regular health nutrition plan was given")
 *  - Mediclaim .................................... review ("Major mediclaims are also available")
 *  - OPD rooms, reception ......................... hospital's own photo (OPD 1 / OPD 2)
 *  - Medical store "Gurudev Medical" .............. hospital's own photo
 *  - Nursing room, accessibility, payments ........ Google profile attributes
 *  - ICU, physiotherapy, X-ray, C-arm ............. hospital's services board (photo on the Google listing, Mar 2025)
 *  - Room types: general ward, twin sharing,
 *    special ward, ICU ............................ rate notice beside that board (charges unreadable, so not shown)
 */

export const roomsIntro = [
  'Patients admitted for surgery, maternity care or medical treatment stay in our in-patient rooms, with nurses and ward staff on duty day and night. Families often thank our nursing team by name in their Google reviews for the care and support during a hospital stay.',
  'Room options include the general ward, twin-sharing rooms, a special ward and ICU beds. Charges depend on the room and the treatment, so please call 080875\u00a034842 to check availability, the expected length of stay and an estimate before admission.',
];

export const patientServices = [
  { icon: 'ambulance', title: '24×7 admission & emergency', text: 'Patients are admitted at any hour, with a surgeon on the floor round the clock for emergencies.', link: { to: '/specialities/emergency-trauma-care', label: 'Emergency care' } },
  { icon: 'bed', title: 'In-patient rooms', text: 'General ward, twin-sharing rooms and a special ward for patients admitted after surgery, for delivery or for medical treatment. Call to check availability.' },
  { icon: 'hospital', title: 'Intensive care unit (ICU)', text: 'An ICU for patients who need close monitoring after major surgery, an accident or a serious illness.', link: { to: '/specialities/emergency-trauma-care', label: 'Emergency & critical care' } },
  { icon: 'heart', title: 'Round-the-clock nursing', text: 'Nurses and ward staff look after admitted patients day and night, from medicines and dressings to helping families.' },
  { icon: 'stethoscope', title: 'OPD consultations', text: 'Separate OPD consultation rooms beside the reception. Walk-ins are welcome; booking ahead reduces waiting time.', link: { to: '/book-appointment', label: 'Book an appointment' } },
  { icon: 'shield', title: 'Mediclaim & insurance help', text: 'Support for major mediclaim policies. Call with your insurer or TPA details to check cashless or reimbursement options.' },
  { icon: 'utensils', title: 'Diet & nutrition guidance', text: 'Nutrition plans during and after treatment, for example during recovery from jaundice or after surgery.' },
  { icon: 'pill', title: 'Medical store at the entrance', text: 'Gurudev Medical is at the hospital entrance on Yadav Nagar Road, so prescriptions are easy to collect.' },
  { icon: 'baby', title: 'Nursing room for mothers', text: 'A private nursing room for mothers and babies, part of our maternity care.', link: { to: '/treatments/maternity-delivery-care', label: 'Maternity care' } },
  { icon: 'accessibility', title: 'Accessible for everyone', text: 'Wheelchair-accessible entrance, car park, seating and toilet, plus an assistive hearing loop.' },
  { icon: 'card', title: 'Easy payments', text: 'Credit and debit cards and NFC mobile payments are accepted.' },
  { icon: 'bone', title: 'X-ray & C-arm imaging', text: 'X-ray for injuries and chest problems, and C-arm imaging used in the operation theatre during fracture and other surgery.', link: { to: '/treatments/fracture-treatment', label: 'Fracture treatment' } },
  { icon: 'move', title: 'Physiotherapy', text: 'Physiotherapy to help patients regain strength and movement after fractures, surgery or a long illness.' },
  { icon: 'droplet', title: 'Dialysis & endoscopy', text: 'Dialysis sessions and endoscopy under the same roof as surgery and medicine.', link: { to: '/specialities/dialysis', label: 'Dialysis' } },
  { icon: 'users', title: 'Clear explanations for families', text: 'Patients often mention that our doctors explain the illness, the options and the costs clearly before treatment.' },
];

export const admissionChecklist = [
  'Photo ID of the patient (Aadhaar, PAN or similar)',
  'Previous prescriptions, reports and scans (sonography, CT, blood tests)',
  'A list of the medicines the patient currently takes',
  'Mediclaim / insurance card and policy details, if any',
  'Phone number of a family member who can be contacted',
  'Comfortable clothes, toiletries and any personal items needed',
];

export const patientServiceFaqs = [
  { q: 'What types of rooms are available at Gurudev Hospital?', a: 'Room options include the general ward, twin-sharing rooms, a special ward and ICU beds. Charges depend on the room and the treatment. Please call 080875\u00a034842 before admission to check availability and get an estimate.' },
  { q: 'Does Gurudev Hospital have an ICU?', a: 'Yes. Gurudev Multi-Speciality Hospital has an intensive care unit (ICU) alongside its operation theatre, for patients who need close monitoring after surgery, an accident or a serious illness.' },
  { q: 'Can patients be admitted at night?', a: 'Yes. Gurudev Multi-Speciality Hospital is open 24 hours, 7 days a week, and patients are admitted at any time.' },
  { q: 'Is mediclaim or cashless treatment available?', a: 'Patients report that major mediclaim policies are supported. Call with your insurer or TPA details to confirm cashless or reimbursement eligibility before admission.' },
  { q: 'Is there a medical store at the hospital?', a: 'Yes. Gurudev Medical is located at the hospital entrance.' },
  { q: 'Which payment methods are accepted?', a: 'Credit cards, debit cards and NFC mobile payments are accepted.' },
];

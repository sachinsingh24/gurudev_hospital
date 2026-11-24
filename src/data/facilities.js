/**
 * Facilities — only what is evidenced by the Google Business Profile, the hospital's own photos
 * (operation theatre, reception/OPD, signboard listing Endoscopy, the "Gurudev Medical" store at the entrance)
 * or its published service list. Bed counts, ICU/NICU equipment and lab/imaging are NOT published — see MISSING-INFO.md.
 */
export const facilities = [
  {
    id: 'operation-theatre',
    name: 'Operation theatre',
    icon: 'scalpel',
    photo: 'operation-theatre',
    text: 'An operation theatre with operating tables and ceiling-mounted surgical lights, used for general and laparoscopic (keyhole) surgery. A surgeon is on the floor 24×7, so emergency operations such as appendicitis or an obstructed hernia can be performed at any hour.',
    link: { to: '/specialities/general-laparoscopic-surgery', label: 'General & laparoscopic surgery' },
  },
  {
    id: 'emergency',
    name: '24×7 emergency, critical care & ICU',
    icon: 'ambulance',
    photo: 'casualty-emergency-room',
    text: 'The hospital is open 24 hours, every day of the year, for accidents, trauma, surgical and medical emergencies. Patients who need close monitoring after surgery or during a serious illness are cared for in the ICU (intensive care unit).',
    link: { to: '/specialities/emergency-trauma-care', label: 'Emergency, trauma & critical care' },
  },
  {
    id: 'opd',
    name: 'Reception & OPD consultation rooms',
    icon: 'stethoscope',
    photo: 'reception-opd',
    text: 'A reception desk with separate OPD consultation rooms (OPD 1 and OPD 2) for private out-patient consultations. Walk-ins are welcome; booking ahead reduces waiting time.',
    link: { to: '/book-appointment', label: 'Book an OPD appointment' },
  },
  {
    id: 'wards',
    name: 'In-patient wards & rooms',
    icon: 'bed',
    photo: 'general-ward',
    text: 'A general ward with privacy curtains between beds, single patient rooms with air conditioning, and nurses and ward staff on duty day and night.',
    link: { to: '/patient-rooms-services', label: 'Patient rooms & services' },
  },
  {
    id: 'endoscopy',
    name: 'Endoscopy',
    icon: 'stomach',
    text: 'Endoscopy is listed on the hospital signboard. Upper GI endoscopy lets the doctor look inside the food pipe, stomach and first part of the intestine to find the cause of acidity, pain, bleeding or swallowing problems.',
    link: { to: '/treatments/endoscopy', label: 'About endoscopy' },
  },
  {
    id: 'dialysis',
    name: 'Dialysis',
    icon: 'droplet',
    text: 'Dialysis for patients with kidney failure, close to home for families in Badlapur and Ambernath, with access to medicine, surgery and emergency care in the same hospital.',
    link: { to: '/specialities/dialysis', label: 'Dialysis services' },
  },
  {
    id: 'maternity',
    name: 'Maternity care & nursing room',
    icon: 'baby',
    photo: 'labour-room',
    text: 'Pregnancy care, delivery and postnatal care in a women-owned hospital. The labour room has a delivery table and a newborn baby warmer, and there is a nursing room for mothers and babies.',
    link: { to: '/treatments/maternity-delivery-care', label: 'Maternity & delivery care' },
  },
  {
    id: 'medical-store',
    name: 'Medical store at the entrance',
    icon: 'card',
    photo: 'hospital-at-night-24x7',
    text: 'A medical store, Gurudev Medical, is located at the hospital entrance on Yadav Nagar Road, so prescriptions can be collected on the way in or out.',
    link: null,
  },
  {
    id: 'imaging-physiotherapy',
    name: 'X-ray, C-arm & physiotherapy',
    icon: 'bone',
    photo: 'operation-theatre-c-arm',
    text: 'X-ray for injuries and chest problems, C-arm imaging in the operation theatre during fracture and other surgery, and physiotherapy to help patients recover strength and movement.',
    link: { to: '/patient-rooms-services', label: 'Patient rooms & services' },
  },
];

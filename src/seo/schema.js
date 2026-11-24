import { site, absoluteUrl } from '../config/site.js';
import { specialities } from '../data/specialities.js';
import { treatments } from '../data/treatments.js';
import { areas } from '../data/areas.js';
import { localPhotos, photoLargest } from '../data/photos.js';
import doctorPhotos from '../data/doctorPhotos.json';

/** Schema.org JSON-LD builders. Validate with https://validator.schema.org and the Rich Results Test. */

export const HOSPITAL_ID = `${site.url}/#hospital`;
export const WEBSITE_ID = `${site.url}/#website`;
const S = (v) => `https://schema.org/${v}`;

const postalAddress = () => ({
  '@type': 'PostalAddress',
  streetAddress: `${site.address.street}, ${site.address.locality}`,
  addressLocality: site.address.area,
  addressRegion: site.address.state,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
});

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function hospitalSchema() {
  const specialtyEnums = [...new Set(specialities.flatMap((s) => [s.schemaSpecialty, ...(s.schemaSpecialtyExtra || [])]))];
  return {
    '@type': 'Hospital',
    '@id': HOSPITAL_ID,
    name: site.name,
    alternateName: [site.nameMarathi, 'Gurudev Hospital Badlapur', 'Gurudev Multispeciality Hospital'],
    description: site.description,
    slogan: site.tagline,
    url: `${site.url}/`,
    logo: { '@type': 'ImageObject', url: absoluteUrl('/logo-512.png'), width: 512, height: 512 },
    image: [...localPhotos.slice(0, 6).map((p) => absoluteUrl(photoLargest(p))), absoluteUrl('/og-image.png')],
    telephone: site.phone.e164,
    address: postalAddress(),
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.google.mapsUrl,
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: DAYS.map((d) => S(d)), opens: '00:00', closes: '23:59' }],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.phone.e164,
        contactType: 'emergency',
        areaServed: 'IN',
        hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: DAYS.map((d) => S(d)), opens: '00:00', closes: '23:59' },
      },
      { '@type': 'ContactPoint', telephone: site.phone.e164, contactType: 'reservations', areaServed: 'IN' },
    ],
    isAcceptingNewPatients: true,
    publicAccess: true,
    medicalSpecialty: specialtyEnums.map(S),
    availableService: [
      ...treatments.map((t) => ({
        '@type': 'MedicalProcedure',
        name: t.name,
        url: absoluteUrl(`/treatments/${t.slug}`),
        ...(t.procedureType ? { procedureType: S(t.procedureType) } : {}),
      })),
      { '@type': 'MedicalTherapy', name: 'Haemodialysis', url: absoluteUrl('/specialities/dialysis') },
      { '@type': 'MedicalTherapy', name: 'Physiotherapy', url: absoluteUrl('/patient-rooms-services') },
      { '@type': 'ImagingTest', name: 'X-ray', imagingTechnique: S('Radiography'), url: absoluteUrl('/patient-rooms-services') },
    ],
    amenityFeature: [...site.attributes.accessibility, ...site.attributes.amenities].map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    paymentAccepted: 'Credit Card, Debit Card, NFC Mobile Payment',
    currenciesAccepted: 'INR',
    areaServed: [
      { '@type': 'City', name: 'Badlapur' },
      ...areas.map((a) => ({ '@type': 'Place', name: a.placeName })),
    ],
    sameAs: [site.google.mapsUrl, ...site.social],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.url}/`,
    name: site.name,
    alternateName: site.shortName,
    inLanguage: 'en-IN',
    publisher: { '@id': HOSPITAL_ID },
  };
}

/** Included on every page. */
export const baseGraph = () => [websiteSchema(), hospitalSchema()];

export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqSchema(faqs) {
  if (!faqs?.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function webPageSchema({ path, name, description, type = 'WebPage', specialty, about, mainEntity }) {
  const node = {
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    about: about || { '@id': HOSPITAL_ID },
    publisher: { '@id': HOSPITAL_ID },
  };
  if (specialty) node.specialty = S(specialty);
  if (mainEntity) node.mainEntity = mainEntity;
  return node;
}

export function procedureSchema(t) {
  return {
    '@type': 'MedicalProcedure',
    '@id': `${absoluteUrl(`/treatments/${t.slug}`)}#procedure`,
    name: t.name,
    description: t.lead,
    url: absoluteUrl(`/treatments/${t.slug}`),
    ...(t.procedureType ? { procedureType: S(t.procedureType) } : {}),
    bodyLocation: t.bodyLocation,
    relevantSpecialty: S(specialities.find((s) => s.slug === t.speciality)?.schemaSpecialty || 'Surgical'),
    signOrSymptom: (t.symptoms || []).map((name) => ({ '@type': 'MedicalSignOrSymptom', name })),
  };
}

export function physicianSchema(d) {
  const node = {
    // Person + IndividualPhysician: Person carries education/credentials/profile links, IndividualPhysician the practice.
    '@type': ['IndividualPhysician', 'Person'],
    '@id': `${absoluteUrl(`/doctors/${d.slug}`)}#physician`,
    name: d.name,
    jobTitle: d.role,
    description: d.bio?.[0],
    url: absoluteUrl(`/doctors/${d.slug}`),
    medicalSpecialty: S(d.schemaSpecialty),
    practicesAt: { '@id': HOSPITAL_ID },
    worksFor: { '@id': HOSPITAL_ID },
    telephone: site.phone.e164,
    address: postalAddress(),
    availableService: (d.treatments || [])
      .map((slug) => treatments.find((t) => t.slug === slug))
      .filter(Boolean)
      .map((t) => ({ '@type': 'MedicalProcedure', name: t.name, url: absoluteUrl(`/treatments/${t.slug}`) })),
  };
  if (d.education?.length) {
    node.alumniOf = d.education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution }));
    node.hasCredential = d.education.map((e) => ({
      '@type': 'EducationalOccupationalCredential',
      name: e.course,
      credentialCategory: e.course.toLowerCase().startsWith('fellowship') ? 'Fellowship' : 'Degree',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: e.institution },
    }));
  }
  if (d.linkedin) node.sameAs = [d.linkedin];
  const photo = doctorPhotos[d.slug];
  if (photo) node.image = absoluteUrl(`/images/doctors/${d.slug}-${photo.size}.webp`);
  return node;
}

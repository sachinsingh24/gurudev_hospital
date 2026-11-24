import { doctors } from '../data/doctors.js';
import { hospitalImage } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema } from '../seo/schema.js';
import { CtaBand, DoctorCard, PageHero } from '../components/Blocks.jsx';

export default function Doctors() {
  const title = 'Our Doctors | Gurudev Multi-Speciality Hospital, Badlapur East';
  const description =
    'Meet the doctors at Gurudev Multi-Speciality Hospital, Badlapur East — led by Dr. Mayur Rupavat, MS, FMAS, FIAGES, consulting general & laparoscopic surgeon.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Doctors', path: '/doctors' }];
  return (
    <>
      <Seo title={title} description={description} path="/doctors" schema={[webPageSchema({ path: '/doctors', name: title, description }), breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Our team"
        title="Doctors at Gurudev Multi-Speciality Hospital"
        lead="Experienced doctors, supported by trained nursing and ward staff, available round the clock in Badlapur East."
        image={hospitalImage('reception-opd')}
      />
      <section className="section">
        <div className="container">
          <h2 className="section__title section__title--sm">Our medical team</h2>
          <div className="grid grid--3">
            {doctors.map((d) => <DoctorCard key={d.slug} d={d} />)}
          </div>
          <p className="muted mt">
            Patients regularly thank our nurses, ward staff and reception team by name in their reviews. For OPD timings of a specific
            doctor or department, please call the hospital.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

import { Link } from 'react-router';
import { site } from '../config/site.js';
import { hospitalImage } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema, HOSPITAL_ID } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import { CheckList, CtaBand, PageHero } from '../components/Blocks.jsx';
import StockImage from '../components/StockImage.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';

export default function About() {
  const title = 'About Gurudev Multi-Speciality Hospital, Badlapur East';
  const description =
    'About Gurudev Multi-Speciality Hospital — a women-owned, 24×7 medical & surgical hospital in Shirgaon, Badlapur East. Compassionate care, affordable cost.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }];
  return (
    <>
      <Seo title={title} description={description} path="/about" schema={[webPageSchema({ path: '/about', name: title, description, type: 'AboutPage', about: { '@id': HOSPITAL_ID } }), breadcrumbSchema(crumbs)]} />
      <PageHero crumbs={crumbs} eyebrow="About us" title="Your trusted partner in health, in Badlapur East" lead={site.tagline + '.'} image={hospitalImage('hospital-at-night-24x7')} />

      <section className="section">
        <div className="container container--narrow prose">
          <p>
            <strong>{site.name}</strong> (<span lang="mr">{site.nameMarathi}</span>) is a hospital for medical and surgical illness in
            Shirgaon, Badlapur East, Thane district. We are open 24 hours a day, every day, with a surgeon on the floor round the clock.
          </p>
          <p>
            The Gurudev Multi-Speciality Hospital community believes in providing its members a true and compassionate partnership in health —
            by ensuring excellent attention and care with modern technology, at an affordable cost.
          </p>
          <p>
            Our surgical department is led by <Link to="/doctors/dr-mayur-rupavat">Dr. Mayur Rupavat</Link>, MBBS, MS (General Surgery), FMAS,
            FIAGES, consulting general &amp; laparoscopic surgeon. Alongside surgery, we provide{' '}
            <Link to="/specialities/emergency-trauma-care">24-hour emergency, trauma &amp; critical care</Link>,{' '}
            <Link to="/specialities/urology">urology</Link>, <Link to="/specialities/orthopaedics">orthopaedics</Link>,{' '}
            <Link to="/specialities/gynaecology-obstetrics">gynaecology &amp; obstetrics</Link>,{' '}
            <Link to="/specialities/gastroenterology">gastroenterology &amp; endoscopy</Link>,{' '}
            <Link to="/specialities/general-medicine">general medicine</Link>, <Link to="/specialities/paediatrics">paediatrics</Link>,{' '}
            <Link to="/specialities/neurology">neurology</Link> and <Link to="/specialities/dialysis">dialysis</Link>.
          </p>

          <div className="photo-pair">
            <StockImage img={hospitalImage('operation-theatre')} sizes="(min-width: 860px) 420px, 100vw" label="Our operation theatre" />
            <StockImage img={hospitalImage('reception-opd')} sizes="(min-width: 860px) 420px, 100vw" label="Reception & OPD rooms" />
          </div>

          {/* Wording exactly as on the hospital's Mission & Vision board (photo supplied by the hospital). */}
          <h2>Our mission &amp; vision</h2>
          <div className="mv">
            {[
              ['target', 'Mission', 'To be a provider of high quality patient focused health care that is readily accessible, cost effective and meets the needs of the communities we serve.', 'mv__card--mission'],
              ['eye', 'Vision', 'To lead the region as a best Healthcare Team by exceeding patient expectations through the advancement of quality medical services.', 'mv__card--vision'],
            ].map(([icon, t, x, mod]) => (
              <section key={t} className={`mv__card ${mod}`} aria-labelledby={`mv-${icon}`}>
                <span className="mv__icon"><Icon name={icon} size={24} /></span>
                <h3 id={`mv-${icon}`} className="mv__title">Our {t.toLowerCase()}</h3>
                <p className="mv__text">{x}</p>
              </section>
            ))}
          </div>

          <h2>Our values</h2>
          <div className="grid grid--2">
            {[
              ['heart', 'Compassion', 'Every patient is treated individually and personally, with time to explain the illness and the options.'],
              ['shield', 'Honesty', 'No exaggeration — clear advice on what treatment is really needed and what it will cost.'],
              ['clock', 'Always available', 'Emergencies do not keep office hours, and neither do we. Open 24×7.'],
              ['users', 'Teamwork', 'Doctors, nurses, ward and reception staff working together for your recovery.'],
            ].map(([icon, t, x]) => (
              <div key={t} className="feature feature--row">
                <span className="feature__icon"><Icon name={icon} size={22} /></span>
                <div><h3 className="feature__title">{t}</h3><p>{x}</p></div>
              </div>
            ))}
          </div>

          <h2>Facilities &amp; accessibility</h2>
          <p>
            See our <Link to="/facilities">hospital facilities</Link>: operation theatre, emergency and critical care, OPD rooms, endoscopy,
            dialysis and maternity care. In-patient rooms, nursing, mediclaim help and other support for families are described on our{' '}
            <Link to="/patient-rooms-services">patient rooms &amp; services</Link> page.
          </p>
          <CheckList items={[...site.attributes.accessibility, ...site.attributes.amenities]} />
          <p>Gurudev Multi-Speciality Hospital identifies as a <strong>women-owned</strong> business.</p>

          <h2>Payments &amp; insurance</h2>
          <CheckList items={[...site.attributes.payments, 'Support for major mediclaim policies (call to confirm your insurer / TPA)']} />
        </div>
      </section>
      <PhotoGallery id="about-photos" heading="Our hospital in pictures" limit={4} showAllLink tint google="fallback" exclude={['hospital-at-night-24x7', 'operation-theatre', 'reception-opd']} />
      <CtaBand />
    </>
  );
}

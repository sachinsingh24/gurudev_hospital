import { site, whatsappLink } from '../config/site.js';
import { hospitalImage } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema, HOSPITAL_ID } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';
import { PageHero } from '../components/Blocks.jsx';
import LandmarkPhoto from '../components/LandmarkPhoto.jsx';

export default function Contact() {
  const title = 'Contact Gurudev Hospital Badlapur East | Address, Phone, Map';
  const description =
    'Plot No 12, Yadav Nagar Road, Near Parsi Bungalow, Shirgaon, Badlapur East 421503. Open 24 hours. Call 080875\u00a034842 for directions & appointments.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }];
  const wa = whatsappLink('Hello, I have a query for Gurudev Multi-Speciality Hospital.');
  return (
    <>
      <Seo title={title} description={description} path="/contact" schema={[webPageSchema({ path: '/contact', name: title, description, type: 'ContactPage', about: { '@id': HOSPITAL_ID } }), breadcrumbSchema(crumbs)]} />
      <PageHero crumbs={crumbs} eyebrow="Contact" title="Contact & directions — Gurudev Hospital, Badlapur East" lead="We are open 24 hours, 7 days a week. Call, WhatsApp or visit us." image={hospitalImage('hospital-at-night-24x7')} />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-cards">
            <a href={site.phone.tel} className="card contact-card contact-card--red">
              <Icon name="phone" size={26} />
              <span><strong>Phone / Emergency</strong><span>{site.phone.displayIntl}</span></span>
            </a>
            {wa ? (
              <a href={wa} className="card contact-card" target="_blank" rel="noopener">
                <Icon name="whatsapp" size={26} />
                <span><strong>WhatsApp</strong><span>Message us</span></span>
              </a>
            ) : null}
            <div className="card contact-card">
              <Icon name="clock" size={26} />
              <span><strong>Hours</strong><span>{site.hours.label}</span></span>
            </div>
            <a href={site.google.directionsUrl} className="card contact-card" target="_blank" rel="noopener">
              <Icon name="pin" size={26} />
              <span>
                <strong>Address</strong>
                <address>
                  {site.name}<br />
                  {site.address.street},<br />
                  {site.address.locality}, {site.address.area},<br />
                  {site.address.state} {site.address.postalCode}
                </address>
              </span>
            </a>
            <LandmarkPhoto />
          </div>
          <div className="card">
            <h2 className="sidebar__title">Send an appointment request</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="map-title">
        <div className="container">
          <h2 id="map-title" className="section__title section__title--sm">Hospital location on Google Maps</h2>
          <MapEmbed height={440} />
          <div className="grid grid--3 mt">
            <div className="feature">
              <span className="feature__icon"><Icon name="train" size={22} /></span>
              <h3 className="feature__title">By train</h3>
              <p>Get off at Badlapur station (Central Railway, Karjat line), exit on the East side and take an auto-rickshaw to Yadav Nagar Road, Shirgaon — about 1.5 km.</p>
            </div>
            <div className="feature">
              <span className="feature__icon"><Icon name="car" size={22} /></span>
              <h3 className="feature__title">By road</h3>
              <p>Head to Shirgaon in Badlapur East and look for Yadav Nagar Road near Parsi Bungalow. Plus code: {site.geo.plusCode}.</p>
            </div>
            <div className="feature">
              <span className="feature__icon"><Icon name="accessibility" size={22} /></span>
              <h3 className="feature__title">Accessible</h3>
              <p>Wheelchair-accessible entrance, car park, seating and toilet. Assistive hearing loop available.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

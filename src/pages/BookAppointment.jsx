import { site } from '../config/site.js';
import { hospitalImage } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';
import { RatingBadge } from '../components/GoogleReviews.jsx';
import { PageHero } from '../components/Blocks.jsx';

export default function BookAppointment() {
  const title = 'Book Doctor Appointment in Badlapur East | Gurudev Hospital';
  const description =
    'Book an appointment with a surgeon, physician, gynaecologist, orthopaedic or child specialist at Gurudev Hospital, Badlapur East. Call 080875\u00a034842.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Book appointment', path: '/book-appointment' }];
  return (
    <>
      <Seo title={title} description={description} path="/book-appointment" schema={[webPageSchema({ path: '/book-appointment', name: title, description }), breadcrumbSchema(crumbs)]} />
      <PageHero crumbs={crumbs} eyebrow="Appointments" title="Book a doctor appointment in Badlapur East" lead="Fill in a few details and our team will call you to confirm a time. Walk-ins are also welcome, 24×7." image={hospitalImage('reception-opd')} />
      <section className="section">
        <div className="container book-grid">
          <div className="card">
            <AppointmentForm />
          </div>
          <aside className="book-aside">
            <div className="card">
              <h2 className="sidebar__title">Prefer to call?</h2>
              <a href={site.phone.tel} className="btn btn--emergency btn--block btn--lg"><Icon name="phone" size={20} /> {site.phone.display}</a>
              <p className="muted mt-sm">Lines open 24 hours for appointments and emergencies.</p>
            </div>
            <div className="card">
              <h2 className="sidebar__title">What to bring</h2>
              <ul className="plain-list">
                <li>Previous prescriptions and reports (sonography, CT, blood tests)</li>
                <li>List of current medicines</li>
                <li>Photo ID and mediclaim / insurance card, if any</li>
              </ul>
            </div>
            <RatingBadge />
          </aside>
        </div>
      </section>
    </>
  );
}

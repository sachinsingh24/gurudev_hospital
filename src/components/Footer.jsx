import { Link } from 'react-router';
import { site, whatsappLink } from '../config/site.js';
import { specialities } from '../data/specialities.js';
import { treatments } from '../data/treatments.js';
import { areas } from '../data/areas.js';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = whatsappLink('Hello, I would like to book an appointment at Gurudev Multi-Speciality Hospital.');
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" aria-label={`${site.name} home`}><Logo inverted /></Link>
          <p className="footer__lead">{site.tagline}. Compassionate care and modern technology at an affordable cost.</p>
          <p className="footer__mr" lang="mr">{site.nameMarathi}</p>
          {/* NAP block — must match the Google Business Profile exactly */}
          <address className="footer__nap">
            <strong>{site.name}</strong>
            <span>{site.address.street},</span>
            <span>{site.address.locality}, {site.address.area},</span>
            <span>{site.address.district}, {site.address.state} {site.address.postalCode}</span>
            <a href={site.phone.tel}><Icon name="phone" size={16} /> {site.phone.displayIntl}</a>
          </address>
          <h2 className="footer__title footer__title--sp">Timings</h2>
          <p className="footer__hours"><Icon name="clock" size={16} /> {site.hours.label}</p>
          <div className="footer__social">
            <a href={site.google.mapsUrl} target="_blank" rel="noopener">Google Maps</a>
            {wa ? <a href={wa} target="_blank" rel="noopener">WhatsApp</a> : null}
          </div>
        </div>

        <div>
          <h2 className="footer__title">Specialities</h2>
          <ul className="footer__links">
            {specialities.map((s) => (
              <li key={s.slug}><Link to={`/specialities/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Treatments</h2>
          <ul className="footer__links">
            {treatments.map((t) => (
              <li key={t.slug}><Link to={`/treatments/${t.slug}`}>{t.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Hospital</h2>
          <ul className="footer__links">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/patient-rooms-services">Patient rooms &amp; services</Link></li>
            <li><Link to="/health-guides">Health guides</Link></li>
            <li><Link to="/doctors">Our doctors</Link></li>
            <li><Link to="/reviews">Patient reviews</Link></li>
            <li><Link to="/photos">Hospital photos</Link></li>
            <li><Link to="/book-appointment">Book appointment</Link></li>
            <li><Link to="/contact">Contact &amp; directions</Link></li>
            <li><Link to="/areas-we-serve">Areas we serve</Link></li>
            {areas.map((a) => (
              <li key={a.slug}><Link to={`/areas-we-serve/${a.slug}`}>Hospital near {a.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} {site.name}, Badlapur East. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy">Privacy policy &amp; disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

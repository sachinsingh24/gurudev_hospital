import { Link } from 'react-router';
import { site, whatsappLink } from '../config/site.js';
import Icon from './Icon.jsx';

/** Sticky bottom bar on phones: the four actions that turn a search into a visit. */
export default function MobileActionBar() {
  const wa = whatsappLink('Hello, I would like to book an appointment at Gurudev Multi-Speciality Hospital.');
  return (
    <nav className="actionbar" aria-label="Quick actions">
      <a href={site.phone.tel} className="actionbar__item actionbar__item--call">
        <Icon name="phone" size={20} /> Call
      </a>
      {wa ? (
        <a href={wa} className="actionbar__item" target="_blank" rel="noopener">
          <Icon name="whatsapp" size={20} /> WhatsApp
        </a>
      ) : null}
      <a href={site.google.directionsUrl} className="actionbar__item" target="_blank" rel="noopener">
        <Icon name="navigation" size={20} /> Directions
      </a>
      <Link to="/book-appointment" className="actionbar__item">
        <Icon name="calendar" size={20} /> Book
      </Link>
    </nav>
  );
}

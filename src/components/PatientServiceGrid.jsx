import { Link } from 'react-router';
import Icon from './Icon.jsx';

/** Patient-service cards — the full list on /patient-rooms-services, the first few on the home page. */
export default function PatientServiceGrid({ items, headingLevel = 3, cols = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <div className={`grid grid--${cols}`}>
      {items.map((s) => (
        <div key={s.title} className="feature svc">
          <span className="feature__icon"><Icon name={s.icon} size={24} /></span>
          <H className="feature__title">{s.title}</H>
          <p>{s.text}</p>
          {s.link ? (
            <Link to={s.link.to} className="card__more">
              {s.link.label} <Icon name="arrowRight" size={16} />
            </Link>
          ) : null}
        </div>
      ))}
    </div>
  );
}

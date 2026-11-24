import { site } from '../config/site.js';
import AppointmentForm from './AppointmentForm.jsx';
import { RatingBadge } from './GoogleReviews.jsx';
import Icon from './Icon.jsx';

export default function Sidebar({ dept }) {
  return (
    <aside className="sidebar" aria-label="Book an appointment">
      <div className="card sidebar__card">
        <h2 className="sidebar__title">Book an appointment</h2>
        <AppointmentForm compact defaultDept={dept} />
      </div>
      <div className="card sidebar__card sidebar__contact">
        <h2 className="sidebar__title">Visit us</h2>
        <p><Icon name="clock" size={18} /> <span><strong>Open 24 hours</strong>, 7 days</span></p>
        <p><Icon name="pin" size={18} /> <span>{site.address.full}</span></p>
        <p><Icon name="phone" size={18} /> <a href={site.phone.tel}>{site.phone.displayIntl}</a></p>
        <RatingBadge compact />
      </div>
    </aside>
  );
}

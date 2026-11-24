import { Link } from 'react-router';
import { site } from '../config/site.js';
import { Seo } from '../seo/Head.jsx';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Gurudev Multi-Speciality Hospital" description="The page you are looking for does not exist." path="/404" noindex />
      <section className="section notfound">
        <div className="container container--narrow">
          <p className="eyebrow">Error 404</p>
          <h1>Sorry, this page could not be found</h1>
          <p>The link may be old or mistyped. If you need medical help, we are open 24×7.</p>
          <div className="hero-actions">
            <a href={site.phone.tel} className="btn btn--emergency"><Icon name="phone" size={18} /> {site.phone.display}</a>
            <Link to="/" className="btn btn--outline">Go to home page</Link>
            <Link to="/specialities" className="btn btn--outline">Specialities</Link>
          </div>
        </div>
      </section>
    </>
  );
}

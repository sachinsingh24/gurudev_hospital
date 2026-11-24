import { Link, useParams } from 'react-router';
import { areas, getArea } from '../data/areas.js';
import { site } from '../config/site.js';
import { hospitalImage } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema, HOSPITAL_ID } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { CtaBand, HeroActions, PageHero } from '../components/Blocks.jsx';
import NotFound from './NotFound.jsx';

const directionsFrom = (origin) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent('Gurudev Multi-Speciality Hospital Badlapur')}&destination_place_id=${site.google.placeId}`;

export function AreasIndex() {
  const title = 'Areas We Serve | Hospital for Badlapur, Ambernath & Vangani';
  const description =
    'Gurudev Hospital in Badlapur East serves patients from Badlapur East & West, Kulgaon, Katrap, Ambernath and Vangani. Directions and 24×7 care.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Areas we serve', path: '/areas-we-serve' }];
  return (
    <>
      <Seo title={title} description={description} path="/areas-we-serve" schema={[webPageSchema({ path: '/areas-we-serve', name: title, description }), breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Locations"
        title="Areas we serve around Badlapur"
        lead="Our hospital is in Shirgaon, Badlapur East — within easy reach of Kulgaon, Katrap, Badlapur station, Manjarli, Belavali, and by rail or road from Ambernath and Vangani."
        image={hospitalImage('hospital-building-signboard')}
      />
      <section className="section">
        <div className="container grid grid--3">
          {areas.map((a) => (
            <Link key={a.slug} to={`/areas-we-serve/${a.slug}`} className="card card--link area-card">
              <span className="spec-card__icon"><Icon name="pin" size={24} /></span>
              <h2 className="spec-card__title">Hospital near {a.name}</h2>
              <p className="spec-card__text">{a.distance}.</p>
              <span className="card__more">Directions &amp; details <Icon name="arrowRight" size={16} /></span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section section--tint">
        <div className="container"><MapEmbed /></div>
      </section>
      <CtaBand />
    </>
  );
}

export function AreaDetail() {
  const { slug } = useParams();
  const a = getArea(slug);
  if (!a) return <NotFound />;
  const path = `/areas-we-serve/${a.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Areas we serve', path: '/areas-we-serve' },
    { name: a.name, path },
  ];
  return (
    <>
      <Seo
        title={a.title}
        description={a.metaDescription}
        path={path}
        schema={[
          webPageSchema({ path, name: a.title, description: a.metaDescription, about: { '@id': HOSPITAL_ID } }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero crumbs={crumbs} eyebrow={`Serving ${a.name}`} title={a.h1} lead={a.intro} image={hospitalImage('hospital-building-signboard')}>
        <HeroActions />
      </PageHero>

      <div className="container with-sidebar">
        <article className="prose">
          <h2>How to reach us from {a.name}</h2>
          <p className="muted"><Icon name="car" size={16} /> Distance: {a.distance}.</p>
          <ul className="steps">
            {a.howToReach.map((h) => <li key={h.slice(0, 24)}>{h}</li>)}
          </ul>
          <p>
            <a className="btn btn--primary" href={directionsFrom(a.origin)} target="_blank" rel="noopener">
              <Icon name="navigation" size={18} /> Directions from {a.name}
            </a>
          </p>

          <h2>What {a.name} patients come to us for</h2>
          <div className="grid grid--1">
            {a.focus.map((f) => (
              <div key={f.label} className="feature feature--row">
                <span className="feature__icon"><Icon name="check" size={20} /></span>
                <div>
                  <h3 className="feature__title">{f.label}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Hospital address</h2>
          <address className="location__nap">
            <strong>{site.name}</strong>
            <span>{site.address.full}</span>
            <a href={site.phone.tel}>{site.phone.displayIntl}</a>
            <span>{site.hours.label}</span>
          </address>
          <MapEmbed height={320} />

          <p className="mt">
            See all <Link to="/specialities">specialities</Link> and <Link to="/treatments">treatments</Link>, or read{' '}
            <Link to="/reviews">patient reviews</Link>.
          </p>
        </article>
        <Sidebar />
      </div>
      <CtaBand />
    </>
  );
}

import { Link } from 'react-router';
import { site, absoluteUrl } from '../config/site.js';
import { facilities } from '../data/facilities.js';
import { hospitalImage, localPhotos, photoLargest, photoMedium, photoSrcSet } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema, HOSPITAL_ID } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import { Zoomable } from '../components/Zoom.jsx';
import { CheckList, CtaBand, HeroActions, PageHero } from '../components/Blocks.jsx';

export default function Facilities() {
  const title = 'Hospital Facilities in Badlapur East | Gurudev Hospital';
  const description =
    'Operation theatre, 24×7 emergency & critical care, OPD rooms, endoscopy, dialysis, maternity nursing room and medical store at Gurudev Hospital, Badlapur East.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Facilities', path: '/facilities' }];
  const photoOf = (slug) => localPhotos.find((p) => p.slug === slug);

  const page = webPageSchema({ path: '/facilities', name: title, description, about: { '@id': HOSPITAL_ID } });
  page.primaryImageOfPage = photoOf('operation-theatre') ? { '@type': 'ImageObject', contentUrl: absoluteUrl(photoLargest(photoOf('operation-theatre'))) } : undefined;

  return (
    <>
      <Seo title={title} description={description} path="/facilities" schema={[page, breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Facilities"
        title="Hospital facilities at Gurudev Multi-Speciality Hospital"
        lead="Everything you need for surgery, emergencies and everyday medical care, under one roof in Shirgaon, Badlapur East. Open 24×7."
        image={hospitalImage('hospital-building-signboard')}
      >
        <HeroActions />
      </PageHero>

      <section className="section">
        <div className="container facility-list">
          {facilities.map((f, i) => {
            const p = f.photo ? photoOf(f.photo) : null;
            return (
              <article key={f.id} id={f.id} className={`facility${p ? ' facility--photo' : ''}${i % 2 ? ' facility--flip' : ''}`}>
                {p ? (
                  <Zoomable className="facility__zoom" item={{ src: photoLargest(p), srcSet: photoSrcSet(p), alt: p.alt, caption: p.caption }}>
                  <img
                    className="facility__img"
                    src={photoMedium(p)}
                    srcSet={photoSrcSet(p)}
                    sizes="(min-width: 900px) 45vw, 100vw"
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    decoding="async"
                  />
                  </Zoomable>
                ) : null}
                <div className="facility__body">
                  <span className="feature__icon"><Icon name={f.icon} size={24} /></span>
                  <h2 className="facility__title">{f.name}</h2>
                  <p>{f.text}</p>
                  {f.link ? (
                    <Link to={f.link.to} className="card__more">
                      {f.link.label} <Icon name="arrowRight" size={16} />
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container grid grid--2">
          <div className="card">
            <h2 className="sidebar__title">Accessibility &amp; amenities</h2>
            <CheckList items={[...site.attributes.accessibility, ...site.attributes.amenities]} cols={1} />
          </div>
          <div className="card">
            <h2 className="sidebar__title">Payments &amp; insurance</h2>
            <CheckList items={[...site.attributes.payments, 'Support for major mediclaim policies (call to confirm your insurer / TPA)']} cols={1} />
            <p className="muted mt-sm">
              See <Link to="/patient-rooms-services">patient rooms &amp; services</Link>, all <Link to="/photos">hospital photos</Link> or{' '}
              <Link to="/contact">get directions</Link>.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

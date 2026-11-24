import { Link } from 'react-router';
import { site } from '../config/site.js';
import Icon from './Icon.jsx';
import Illustration from './Illustration.jsx';
import StockImage, { ImageMosaic } from './StockImage.jsx';
import { getPageImages, guideImageSlug, imgSrcSet } from '../data/pageImages.js';
import doctorPhotos from '../data/doctorPhotos.json';

export function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => (
          <li key={it.path}>
            {i < items.length - 1 ? <Link to={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ crumbs, eyebrow, title, lead, icon, image, mosaic, children }) {
  const hasMedia = Boolean(image || mosaic?.length);
  return (
    <section className={`page-hero${hasMedia ? ' page-hero--media' : ''}`}>
      <div className="container">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <div className="page-hero__body">
          {icon && !hasMedia ? <span className="page-hero__icon"><Icon name={icon} size={30} /></span> : null}
          {image ? <StockImage img={image} className="page-hero__media" sizes="(min-width: 1000px) 46vw, 100vw" priority /> : null}
          {!image && mosaic?.length ? <ImageMosaic images={mosaic} className="page-hero__media" /> : null}
          <div className="page-hero__text">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            {lead ? <p className="page-hero__lead">{lead}</p> : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroActions({ dept }) {
  return (
    <div className="hero-actions">
      <Link to={dept ? `/book-appointment?dept=${dept}` : '/book-appointment'} className="btn btn--primary">
        <Icon name="calendar" size={18} /> Book appointment
      </Link>
      <a href={site.phone.tel} className="btn btn--outline">
        <Icon name="phone" size={18} /> {site.phone.display}
      </a>
    </div>
  );
}

export function FaqList({ faqs, title = 'Frequently asked questions', id = 'faq' }) {
  if (!faqs?.length) return null;
  return (
    <section className="section" aria-labelledby={`${id}-title`}>
      <div className="container container--narrow">
        <h2 id={`${id}-title`} className="section__title">{title}</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q} className="faq__item">
              <summary className="faq__q">
                <span>{f.q}</span>
                <Icon name="chevronDown" size={20} />
              </summary>
              <div className="faq__a"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = 'Need a doctor now? We are open 24×7.', text }) {
  return (
    <section className="cta-band" aria-label="Contact the hospital">
      <div className="container cta-band__inner">
        <div>
          <h2 className="cta-band__title">{title}</h2>
          <p>{text || `Call ${site.phone.display} or visit us at ${site.address.full}.`}</p>
        </div>
        <div className="cta-band__actions">
          <a href={site.phone.tel} className="btn btn--white"><Icon name="phone" size={18} /> Call now</a>
          <a href={site.google.directionsUrl} className="btn btn--ghost-white" target="_blank" rel="noopener">
            <Icon name="navigation" size={18} /> Get directions
          </a>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items, cols = 2 }) {
  return (
    <ul className={`checklist checklist--${cols}`}>
      {items.map((it) => (
        <li key={it}><Icon name="check" size={18} /> <span>{it}</span></li>
      ))}
    </ul>
  );
}

export function SpecialityCard({ s }) {
  return (
    <Link to={`/specialities/${s.slug}`} className="card card--link spec-card">
      <Illustration slug={s.slug} size={76} className="spec-card__illus" />
      <h3 className="spec-card__title">{s.name}</h3>
      <p className="spec-card__text">{s.lead}</p>
      <span className="card__more">Learn more <Icon name="arrowRight" size={16} /></span>
    </Link>
  );
}

export function TreatmentCard({ t }) {
  return (
    <Link to={`/treatments/${t.slug}`} className="card card--link treat-card">
      <Illustration slug={t.slug} size={56} className="treat-card__illus" />
      <span className="treat-card__body">
        <span className="treat-card__title">
          {t.name}
          {t.tag ? <span className="treat-card__tag">{t.tag}</span> : null}
        </span>
        <span className="treat-card__sub">{t.symptoms[0]}</span>
      </span>
      <Icon name="chevronRight" size={18} className="treat-card__chev" />
    </Link>
  );
}

/** Health-guide card with a photo (the related treatment's in-article photo). */
export function GuideCard({ g, featured = false }) {
  const imgs = getPageImages(guideImageSlug(g));
  const img = imgs[1] || imgs[0];
  return (
    <Link to={`/health-guides/${g.slug}`} className={`card card--link guide-card guide-card--photo${featured ? ' guide-card--featured' : ''}`}>
      {img ? (
        <span className="guide-card__media">
          <img src={img.url(480)} srcSet={imgSrcSet(img)} sizes={featured ? '(min-width: 640px) 50vw, 100vw' : '(min-width: 1000px) 380px, (min-width: 640px) 50vw, 100vw'} alt="" width={img.width} height={img.height} loading="lazy" decoding="async" />
        </span>
      ) : null}
      <span className="guide-card__body">
        <span className="eyebrow">Health guide</span>
        <span className="guide-card__title">{g.title}</span>
        <span className="spec-card__text">{g.excerpt}</span>
        <span className="card__more">Read guide <Icon name="arrowRight" size={16} /></span>
      </span>
    </Link>
  );
}

/** Second (in-article) representative photo for a speciality / treatment page. */
export function InlinePhoto({ img }) {
  return img ? <StockImage img={img} className="stock--inline" sizes="(min-width: 1000px) 700px, 100vw" /> : null;
}

/** Doctor portrait (if one has been added with consent), otherwise an initials circle. */
export function DoctorAvatar({ d, size = 64, className = '', priority = false }) {
  const p = doctorPhotos[d.slug];
  if (!p) return <Initials name={d.name} />;
  const src = (s) => `/images/doctors/${d.slug}-${s}.webp`;
  const best = p.sizes.find((s) => s >= size * 2) || p.size;
  return (
    <img
      className={`avatar avatar--photo ${className}`}
      src={src(best)}
      srcSet={p.sizes.map((s) => `${src(s)} ${s}w`).join(', ')}
      sizes={`${size}px`}
      width={size}
      height={size}
      alt={`${d.name}, ${d.role}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

export function Initials({ name }) {
  const initials = name.replace(/^Dr\.?\s*/i, '').split(/\s+/).map((p) => p[0]).slice(0, 2).join('');
  return <span className="avatar" aria-hidden="true">{initials}</span>;
}

export function DoctorCard({ d }) {
  const inner = (
    <>
      <DoctorAvatar d={d} />
      <div className="doc-card__body">
        <h3 className="doc-card__name">{d.name}</h3>
        {d.qualifications?.length ? <p className="doc-card__quals">{d.qualifications.join(', ')}</p> : null}
        <p className="doc-card__role">{d.role}</p>
        {d.profile ? <span className="card__more">View profile <Icon name="arrowRight" size={16} /></span> : null}
      </div>
    </>
  );
  return d.profile ? (
    <Link to={`/doctors/${d.slug}`} className="card card--link doc-card">{inner}</Link>
  ) : (
    <div className="card doc-card">{inner}</div>
  );
}

export function InfoStrip() {
  return (
    <div className="info-strip">
      <a href={site.phone.tel} className="info-strip__item info-strip__item--red">
        <span className="info-strip__icon"><Icon name="ambulance" size={24} /></span>
        <span><strong>24×7 Emergency</strong><span>Call {site.phone.display}</span></span>
      </a>
      <div className="info-strip__item">
        <span className="info-strip__icon"><Icon name="clock" size={24} /></span>
        <span><strong>Open 24 hours</strong><span>Monday – Sunday, all holidays</span></span>
      </div>
      <a href={site.google.directionsUrl} target="_blank" rel="noopener" className="info-strip__item">
        <span className="info-strip__icon"><Icon name="pin" size={24} /></span>
        <span><strong>Shirgaon, Badlapur East</strong><span>Yadav Nagar Rd, near Parsi Bungalow</span></span>
      </a>
      <Link to="/book-appointment" className="info-strip__item">
        <span className="info-strip__icon"><Icon name="calendar" size={24} /></span>
        <span><strong>Book appointment</strong><span>Online, phone or WhatsApp</span></span>
      </Link>
    </div>
  );
}

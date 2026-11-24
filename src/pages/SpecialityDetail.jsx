import { Link, useParams } from 'react-router';
import { site, absoluteUrl } from '../config/site.js';
import { getPageImages, stockLargest } from '../data/pageImages.js';
import { specialities } from '../data/specialities.js';
import { getSpecialityPage } from '../data/specialityContent.js';
import { getTreatment, treatments } from '../data/treatments.js';
import { doctors } from '../data/doctors.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, faqSchema, webPageSchema, HOSPITAL_ID } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { CheckList, CtaBand, DoctorCard, FaqList, HeroActions, InlinePhoto, PageHero, TreatmentCard } from '../components/Blocks.jsx';
import NotFound from './NotFound.jsx';

export default function SpecialityDetail() {
  const { slug } = useParams();
  const s = getSpecialityPage(slug);
  if (!s) return <NotFound />;

  const path = `/specialities/${s.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Specialities', path: '/specialities' },
    { name: s.name, path },
  ];
  const related = s.treatments.map(getTreatment).filter(Boolean).sort((a, b) => treatments.indexOf(a) - treatments.indexOf(b));
  const docs = doctors.filter((d) => d.profile && d.specialities.includes(s.slug));
  const [banner, inline] = getPageImages(s.slug);
  const others = specialities.filter((x) => x.slug !== s.slug).slice(0, 6);

  return (
    <>
      <Seo
        title={s.title}
        description={s.metaDescription}
        path={path}
        schema={[
          { ...webPageSchema({ path, name: s.title, description: s.metaDescription, type: 'MedicalWebPage', specialty: s.schemaSpecialty, about: { '@id': HOSPITAL_ID } }), primaryImageOfPage: banner ? { '@type': 'ImageObject', contentUrl: absoluteUrl(stockLargest(banner)), caption: banner.alt } : undefined },
          breadcrumbSchema(crumbs),
          faqSchema(s.faqs),
        ].filter(Boolean)}
      />
      <PageHero crumbs={crumbs} eyebrow="Speciality" title={s.h1} lead={s.lead} icon={s.icon} image={banner}>
        <HeroActions dept={s.slug} />
      </PageHero>

      <div className="container with-sidebar">
        <article className="prose">
          {s.body.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
          <InlinePhoto img={inline} />

          <h2>Conditions we treat</h2>
          <CheckList items={s.conditions} />

          <h2>Services available</h2>
          <CheckList items={s.services} />

          <div className="alert">
            <Icon name="alert" size={22} />
            <div>
              <h2 className="alert__title">When to see a doctor</h2>
              <ul>
                {s.symptoms.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p>For any of these, call <a href={site.phone.tel}>{site.phone.display}</a> or come to the hospital — we are open 24×7.</p>
            </div>
          </div>

          {related.length ? (
            <>
              <h2>Related treatments</h2>
              <div className="grid grid--1 grid--tight">
                {related.map((t) => <TreatmentCard key={t.slug} t={t} />)}
              </div>
            </>
          ) : null}

          {docs.length ? (
            <>
              <h2>Doctor</h2>
              <div className="grid grid--1">
                {docs.map((d) => <DoctorCard key={d.slug} d={d} />)}
              </div>
            </>
          ) : null}
        </article>
        <Sidebar dept={s.slug} />
      </div>

      <FaqList faqs={s.faqs} title={`${s.short} — frequently asked questions`} />

      <section className="section section--tint" aria-labelledby="other-title">
        <div className="container">
          <h2 id="other-title" className="section__title section__title--sm">Other specialities</h2>
          <ul className="pill-links">
            {others.map((o) => (
              <li key={o.slug}><Link to={`/specialities/${o.slug}`}><Icon name={o.icon} size={16} /> {o.name}</Link></li>
            ))}
            <li><Link to="/specialities">All specialities <Icon name="arrowRight" size={16} /></Link></li>
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

import { Link, useParams } from 'react-router';
import { treatments } from '../data/treatments.js';
import { getTreatmentPage } from '../data/treatmentContent.js';
import { getSpeciality } from '../data/specialities.js';
import { getPageImages, stockLargest } from '../data/pageImages.js';
import { absoluteUrl } from '../config/site.js';
import { doctors } from '../data/doctors.js';
import { guides } from '../data/guides.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, faqSchema, procedureSchema, webPageSchema } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { CtaBand, DoctorCard, FaqList, HeroActions, InlinePhoto, PageHero, TreatmentCard } from '../components/Blocks.jsx';
import NotFound from './NotFound.jsx';

export default function TreatmentDetail() {
  const { slug } = useParams();
  const t = getTreatmentPage(slug);
  if (!t) return <NotFound />;

  const path = `/treatments/${t.slug}`;
  const spec = getSpeciality(t.speciality);
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: t.name, path },
  ];
  const docs = doctors.filter((d) => d.profile && d.treatments?.includes(t.slug));
  const siblings = treatments.filter((x) => x.slug !== t.slug && x.speciality === t.speciality).slice(0, 4);
  const procedure = procedureSchema(t);
  const [banner, inline] = getPageImages(t.slug);
  const guideLinks = guides.filter((g) => g.treatment === t.slug || (g.related || []).includes(t.slug));

  return (
    <>
      <Seo
        title={t.title}
        description={t.metaDescription}
        path={path}
        schema={[
          { ...webPageSchema({ path, name: t.title, description: t.metaDescription, type: 'MedicalWebPage', specialty: spec?.schemaSpecialty, about: { '@id': procedure['@id'] } }), primaryImageOfPage: banner ? { '@type': 'ImageObject', contentUrl: absoluteUrl(stockLargest(banner)), caption: banner.alt } : undefined },
          procedure,
          breadcrumbSchema(crumbs),
          faqSchema(t.faqs),
        ].filter(Boolean)}
      />
      <PageHero crumbs={crumbs} eyebrow={spec?.name} title={t.h1} lead={t.lead} icon={t.icon} image={banner}>
        <HeroActions dept={t.speciality} />
      </PageHero>

      <div className="container with-sidebar">
        <article className="prose">
          <div className="symptom-box">
            <h2 className="symptom-box__title">Common symptoms</h2>
            <ul>
              {t.symptoms.map((x) => <li key={x}><Icon name="check" size={16} /> {x}</li>)}
            </ul>
          </div>

          {t.sections.map((sec, i) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
              {i === 0 ? <InlinePhoto img={inline} /> : null}
            </section>
          ))}

          <p className="note">
            <Icon name="alert" size={18} /> This page is general information and not a substitute for a medical consultation. The right treatment
            depends on your examination and reports.
          </p>

          {guideLinks.length ? (
            <div className="guide-links">
              <h2 className="guide-links__title"><Icon name="book" size={20} /> Read our health guide</h2>
              <ul>
                {guideLinks.map((g) => (
                  <li key={g.slug}><Link to={`/health-guides/${g.slug}`}>{g.title}</Link></li>
                ))}
              </ul>
            </div>
          ) : null}

          {docs.length ? (
            <>
              <h2>Your surgeon</h2>
              <div className="grid grid--1">{docs.map((d) => <DoctorCard key={d.slug} d={d} />)}</div>
            </>
          ) : null}

          {spec ? (
            <p>
              This treatment is provided by our <Link to={`/specialities/${spec.slug}`}>{spec.name}</Link> department.
            </p>
          ) : null}
        </article>
        <Sidebar dept={t.speciality} />
      </div>

      <FaqList faqs={t.faqs} />

      {siblings.length ? (
        <section className="section section--tint" aria-labelledby="sib-title">
          <div className="container">
            <h2 id="sib-title" className="section__title section__title--sm">Related treatments</h2>
            <div className="grid grid--2 grid--tight">
              {siblings.map((x) => <TreatmentCard key={x.slug} t={x} />)}
            </div>
          </div>
        </section>
      ) : null}
      <CtaBand />
    </>
  );
}

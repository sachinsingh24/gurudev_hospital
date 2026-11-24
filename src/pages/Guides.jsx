import { Link, useParams } from 'react-router';
import { absoluteUrl } from '../config/site.js';
import { guides, getGuide } from '../data/guides.js';
import { getGuideContent } from '../data/guideContent.js';
import { getTreatment } from '../data/treatments.js';
import { getSpeciality } from '../data/specialities.js';
import { getPageImages, guideImageSlug } from '../data/pageImages.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, faqSchema, webPageSchema, HOSPITAL_ID } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { CtaBand, FaqList, GuideCard, PageHero, TreatmentCard } from '../components/Blocks.jsx';
import NotFound from './NotFound.jsx';

const fmtDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export function GuidesIndex() {
  const title = 'Health Guides | Gurudev Multi-Speciality Hospital, Badlapur';
  const description =
    'Patient guides from Gurudev Hospital, Badlapur East: appendix pain, piles vs fissure vs fistula, laparoscopic vs open surgery and kidney stone pain.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Health guides', path: '/health-guides' }];
  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/health-guides"
        schema={[
          webPageSchema({
            path: '/health-guides',
            name: title,
            description,
            type: 'CollectionPage',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.title, url: absoluteUrl(`/health-guides/${g.slug}`) })),
            },
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Health guides"
        title="Health guides from Gurudev Hospital"
        lead="Clear, practical information about common symptoms and treatments, so you know when to see a doctor and what to expect."
        mosaic={guides.slice(0, 4).map((x) => getPageImages(guideImageSlug(x))[0])} // cards below use [1], so no photo repeats
      />
      <section className="section">
        <div className="container grid grid--2">
          {guides.map((g, i) => <GuideCard key={g.slug} g={g} featured={i === 0 && guides.length % 2 === 1} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function GuideDetail() {
  const { slug } = useParams();
  const g = getGuide(slug);
  const c = g && getGuideContent(g.slug);
  if (!g || !c) return <NotFound />;

  const path = `/health-guides/${g.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Health guides', path: '/health-guides' },
    { name: g.title, path },
  ];
  const spec = getSpeciality(g.speciality);
  const related = [g.treatment, ...(g.related || [])].map(getTreatment).filter(Boolean);
  const others = guides.filter((x) => x.slug !== g.slug);
  const guideImages = getPageImages(guideImageSlug(g));
  const banner = guideImages[1] || guideImages[0];

  const page = webPageSchema({ path, name: g.title, description: g.metaDescription, type: 'MedicalWebPage', specialty: spec?.schemaSpecialty });
  Object.assign(page, {
    headline: g.h1,
    datePublished: g.datePublished,
    dateModified: g.dateModified,
    author: { '@id': HOSPITAL_ID },
    audience: 'https://schema.org/Patient',
    about: { '@type': 'MedicalCondition', name: g.condition },
    relatedLink: related.map((t) => absoluteUrl(`/treatments/${t.slug}`)),
  });
  if (g.reviewedBy) {
    page.reviewedBy = { '@type': 'Person', name: g.reviewedBy };
    page.lastReviewed = g.lastReviewed || g.dateModified;
  }

  return (
    <>
      <Seo title={g.title} description={g.metaDescription} path={path} type="article" schema={[page, breadcrumbSchema(crumbs), faqSchema(c.faqs)].filter(Boolean)} />
      <PageHero crumbs={crumbs} eyebrow="Health guide" title={g.h1} lead={g.excerpt} image={banner}>
        <p className="byline">
          <Icon name="hospital" size={16} /> Patient information from Gurudev Multi-Speciality Hospital, Badlapur East · Updated{' '}
          <time dateTime={g.dateModified}>{fmtDate(g.dateModified)}</time>
          {g.reviewedBy ? <> · Medically reviewed by {g.reviewedBy}</> : null}
        </p>
      </PageHero>

      <div className="container with-sidebar">
        <article className="prose">
          {c.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {(sec.paragraphs || []).map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
              {sec.list ? (
                <ul>
                  {sec.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              ) : null}
              {sec.table ? (
                <div className="table-wrap">
                  <table className="compare">
                    <thead>
                      <tr>{sec.table.headers.map((h, i) => <th key={h + i} scope="col">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((r) => (
                        <tr key={r[0]}>
                          <th scope="row">{r[0]}</th>
                          {r.slice(1).map((c, i) => <td key={i}>{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}

          <p className="note">
            <Icon name="alert" size={18} /> This guide is general information and not a substitute for a consultation. If you are worried
            about symptoms, call 080875&nbsp;34842. We are open 24×7.
          </p>

          {related.length ? (
            <>
              <h2>Treatment at Gurudev Hospital</h2>
              <div className="grid grid--1 grid--tight">
                {related.map((t) => <TreatmentCard key={t.slug} t={t} />)}
              </div>
            </>
          ) : null}
        </article>
        <Sidebar dept={g.speciality} />
      </div>

      <FaqList faqs={c.faqs} />

      <section className="section section--tint" aria-labelledby="more-guides">
        <div className="container">
          <h2 id="more-guides" className="section__title section__title--sm">More health guides</h2>
          <ul className="pill-links">
            {others.map((o) => (
              <li key={o.slug}><Link to={`/health-guides/${o.slug}`}><Icon name="book" size={16} /> {o.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

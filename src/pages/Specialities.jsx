import { useCallback, useMemo, useState } from 'react';
import { specialities } from '../data/specialities.js';
import { treatments } from '../data/treatments.js';
import { getPageImages } from '../data/pageImages.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema } from '../seo/schema.js';
import { absoluteUrl, site } from '../config/site.js';
import { matches, queryTerms, toHaystack } from '../lib/deptSearch.js';
import Icon from '../components/Icon.jsx';
import { CtaBand, PageHero, SpecialityCard, TreatmentCard } from '../components/Blocks.jsx';

// The detail-page content (conditions, services, symptoms, keywords) makes the search much better but is
// large, so it loads only when someone starts using the search box (the same files the detail pages use).
let contentPromise = null;
const loadSearchContent = () =>
  (contentPromise ||= Promise.all([import('../data/specialityContent.js'), import('../data/treatmentContent.js')]).then(
    ([sc, tc]) => ({ specs: sc.specialityContent, treats: tc.treatmentContent }),
    (err) => {
      contentPromise = null; // try again next time (e.g. after a network blip)
      throw err;
    },
  ));

const SUGGESTIONS = ['Kidney stone', 'Piles', 'Hernia', 'Pregnancy', 'Fracture', 'Fever'];

export default function Specialities() {
  const [q, setQ] = useState('');
  const [content, setContent] = useState(null);
  const loadContent = useCallback(() => {
    if (!content) loadSearchContent().then(setContent, () => {});
  }, [content]);
  const title = 'Specialities & Departments | Gurudev Hospital, Badlapur East';
  const description =
    'All departments at Gurudev Hospital, Badlapur East: surgery, emergency, medicine, gastro, gynaecology, paediatrics, ortho, neuro, urology & dialysis.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Specialities', path: '/specialities' }];

  // Search index: names, short descriptions and symptoms always; the full content once it has loaded.
  const index = useMemo(() => {
    const sc = content?.specs || {};
    const tc = content?.treats || {};
    return {
      specs: specialities.map((s) => {
        const c = sc[s.slug] || {};
        return { item: s, hay: toHaystack(s.name, s.short, s.lead, c.conditions, c.services, c.symptoms, c.keywords) };
      }),
      treats: treatments.map((t) => ({ item: t, hay: toHaystack(t.name, t.lead, t.symptoms, tc[t.slug]?.keywords) })),
    };
  }, [content]);

  const filtered = useMemo(() => {
    const terms = queryTerms(q);
    // Empty box, or only words like "doctor" / "hospital": show every department.
    if (!terms.length) return { specs: specialities, treats: [], all: true };
    return {
      specs: index.specs.filter((x) => matches(x.hay, terms)).map((x) => x.item),
      treats: index.treats.filter((x) => matches(x.hay, terms)).map((x) => x.item),
      all: false,
    };
  }, [q, index]);
  const searching = q.trim() !== '' && !filtered.all;

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/specialities"
        schema={[
          webPageSchema({
            path: '/specialities',
            name: title,
            description,
            type: 'CollectionPage',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: specialities.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: absoluteUrl(`/specialities/${s.slug}`) })),
            },
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Departments"
        title="Specialities at Gurudev Multi-Speciality Hospital"
        lead="Ten departments under one roof in Badlapur East — open 24 hours, with a surgeon on the floor round the clock."
        mosaic={['general-laparoscopic-surgery', 'emergency-trauma-care', 'urology', 'gynaecology-obstetrics'].map((s) => getPageImages(s)[0])}
      />
      <section className="section">
        <div className="container">
          <h2 className="section__title section__title--sm">Find the right department</h2>
          <form className="search-box" role="search" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="spec-search" className="search__label">
              Search a condition or symptom
            </label>
            <div className="search">
              <Icon name="search" size={20} />
              <input
                id="spec-search"
                type="search"
                placeholder="e.g. kidney stone, fever"
                autoComplete="off"
                enterKeyHint="search"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  loadContent();
                }}
                onFocus={loadContent}
                onPointerEnter={loadContent}
              />
              {q ? (
                <button type="button" className="search__clear" onClick={() => setQ('')} aria-label="Clear search">
                  <Icon name="x" size={18} />
                </button>
              ) : null}
            </div>
            <div className="search__suggest">
              <span className="search__suggest-label">Popular:</span>
              {SUGGESTIONS.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`search__chip${q.trim().toLowerCase() === t.toLowerCase() ? ' is-active' : ''}`}
                  onClick={() => {
                    setQ(t);
                    loadContent();
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </form>
          <p className="search__count" aria-live="polite">
            {searching
              ? `${filtered.specs.length} ${filtered.specs.length === 1 ? 'department' : 'departments'} and ${filtered.treats.length} ${
                  filtered.treats.length === 1 ? 'treatment' : 'treatments'
                } match “${q.trim()}”`
              : ''}
          </p>
          <div className="grid grid--3">
            {filtered.specs.map((s) => <SpecialityCard key={s.slug} s={s} />)}
          </div>
          {filtered.treats.length ? (
            <>
              <h2 className="section__title section__title--sm">Matching treatments</h2>
              <div className="grid grid--2 grid--tight">
                {filtered.treats.map((t) => <TreatmentCard key={t.slug} t={t} />)}
              </div>
            </>
          ) : null}
          {searching && !filtered.specs.length && !filtered.treats.length ? (
            <div className="empty">
              <p>
                <strong>No match for “{q.trim()}”.</strong> Try another word (for example a symptom such as “pain” or “fever”), or call
                us — our team will guide you to the right doctor.
              </p>
              <a href={site.phone.tel} className="btn btn--emergency btn--sm">
                <Icon name="phone" size={16} /> Call {site.phone.display}
              </a>
            </div>
          ) : null}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

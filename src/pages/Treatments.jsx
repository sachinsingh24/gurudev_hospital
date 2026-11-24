import { treatments } from '../data/treatments.js';
import { specialities } from '../data/specialities.js';
import { getPageImages } from '../data/pageImages.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema } from '../seo/schema.js';
import { absoluteUrl } from '../config/site.js';
import { CtaBand, PageHero, TreatmentCard } from '../components/Blocks.jsx';

export default function Treatments() {
  const title = 'Treatments & Surgeries in Badlapur East | Gurudev Hospital';
  const description =
    'Piles, fissure, fistula, hernia, gallbladder, appendix, hydrocele, kidney stone, fracture, jaundice & maternity care at Gurudev Hospital, Badlapur East.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Treatments', path: '/treatments' }];
  // Groups appear in treatment-priority order (surgery first), not alphabetical/department order.
  const groupOrder = [...new Set(treatments.map((t) => t.speciality))];
  const groups = groupOrder
    .map((slug) => ({ s: specialities.find((x) => x.slug === slug), items: treatments.filter((t) => t.speciality === slug) }))
    .filter((g) => g.s && g.items.length);

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/treatments"
        schema={[
          webPageSchema({
            path: '/treatments',
            name: title,
            description,
            type: 'CollectionPage',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: treatments.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, url: absoluteUrl(`/treatments/${t.slug}`) })),
            },
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Treatments"
        title="Treatments & Procedures in Badlapur East"
        lead="Understand your condition, your options and your recovery — then meet our doctors in person for advice that fits you."
        mosaic={['hernia-surgery', 'kidney-stone-treatment', 'endoscopy', 'maternity-delivery-care'].map((s) => getPageImages(s)[0])}
      />
      <section className="section">
        <div className="container">
          {groups.map(({ s, items }) => (
            <div key={s.slug} className="treat-group">
              <h2 className="section__title section__title--sm">{s.name}</h2>
              <div className="grid grid--2 grid--tight">
                {items.map((t) => <TreatmentCard key={t.slug} t={t} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

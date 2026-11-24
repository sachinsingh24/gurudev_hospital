import { site, absoluteUrl } from '../config/site.js';
import { localPhotos, photoLargest } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema, HOSPITAL_ID } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { CtaBand, PageHero } from '../components/Blocks.jsx';

export default function Photos() {
  const title = 'Gurudev Hospital Badlapur Photos | Building, Facilities & Team';
  const description =
    'Photos of Gurudev Multi-Speciality Hospital, Shirgaon, Badlapur East: the 24×7 building and signboard, operation theatre, reception and OPD rooms.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Photos', path: '/photos' }];
  const gallerySchema = webPageSchema({
    path: '/photos',
    name: title,
    description,
    type: 'ImageGallery',
    about: { '@id': HOSPITAL_ID },
  });
  if (localPhotos.length) {
    gallerySchema.image = localPhotos.map((p) => ({
      '@type': 'ImageObject',
      contentUrl: absoluteUrl(photoLargest(p)),
      caption: p.caption,
      description: p.alt,
      width: Math.min(p.width, 1600),
      height: Math.round((Math.min(p.width, 1600) / p.width) * p.height),
    }));
  }

  return (
    <>
      <Seo title={title} description={description} path="/photos" schema={[gallerySchema, breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Gallery"
        title="Photos of Gurudev Multi-Speciality Hospital, Badlapur East"
        lead="A look at our hospital on Yadav Nagar Road, Shirgaon: the building, facilities and the team who care for you 24×7."
      />
      <PhotoGallery id="photos" eyebrow="" heading="Hospital photo gallery" headingLevel={2} />
      <section className="section section--tint">
        <div className="container container--narrow prose">
          <h2>Visited us recently?</h2>
          <p>Add your photos and review to our Google Business Profile. It helps other families in Badlapur find the right care.</p>
          <p className="hero-actions">
            <a href={site.google.mapsUrl} target="_blank" rel="noopener" className="btn btn--primary">
              <Icon name="pin" size={18} /> Open on Google Maps
            </a>
            <a href={site.google.writeReviewUrl} target="_blank" rel="noopener" className="btn btn--outline">
              <Icon name="star" size={18} filled /> Write a review
            </a>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

import { site } from '../config/site.js';
import { hospitalImage } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema } from '../seo/schema.js';
import GoogleReviews from '../components/GoogleReviews.jsx';
import Icon from '../components/Icon.jsx';
import { CtaBand, PageHero } from '../components/Blocks.jsx';

export default function Reviews() {
  const title = 'Gurudev Hospital Badlapur Reviews | Google Patient Reviews';
  const description =
    'Read live Google reviews of Gurudev Hospital, Badlapur East — rated 4.8 by 130+ patients for supportive doctors, polite staff and surgical care.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews' }];
  return (
    <>
      <Seo title={title} description={description} path="/reviews" schema={[webPageSchema({ path: '/reviews', name: title, description }), breadcrumbSchema(crumbs)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Patient reviews"
        title="Gurudev Hospital Badlapur — Patient Reviews"
        lead="Real, unedited reviews from our Google Business Profile, updated live. Thank you to every patient and family who has shared their experience."
        image={hospitalImage('hospital-inauguration')}
      />
      <GoogleReviews heading="Latest Google reviews" />
      <section className="section">
        <div className="container container--narrow prose">
          <h2>Share your experience</h2>
          <p>
            Your review helps other families in Badlapur find the right care — and helps us improve. It takes less than a minute on Google.
          </p>
          <p>
            <a href={site.google.writeReviewUrl} target="_blank" rel="noopener" className="btn btn--primary">
              <Icon name="star" size={18} filled /> Write a Google review
            </a>
          </p>
          <p className="muted">
            We read every review. If something did not go well, please tell us directly on {site.phone.display} so we can make it right.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

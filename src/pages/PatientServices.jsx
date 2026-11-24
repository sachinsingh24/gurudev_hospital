import { Link } from 'react-router';
import { site, absoluteUrl } from '../config/site.js';
import { admissionChecklist, patientServiceFaqs, patientServices, roomsIntro } from '../data/patientServices.js';
import { imgLargest } from '../data/pageImages.js';
import { hospitalImage, localPhotos, photoLargest, photoMedium, photoSrcSet } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, faqSchema, webPageSchema, HOSPITAL_ID } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import { Zoomable } from '../components/Zoom.jsx';
import { CheckList, CtaBand, FaqList, HeroActions, PageHero } from '../components/Blocks.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import PatientServiceGrid from '../components/PatientServiceGrid.jsx';

const PATH = '/patient-rooms-services';


export default function PatientServices() {
  const title = 'Patient Rooms & Services | Gurudev Hospital, Badlapur East';
  const description =
    'General ward, twin-sharing & special-ward rooms, ICU, 24×7 nursing, physiotherapy, X-ray and mediclaim help at Gurudev Hospital, Badlapur East.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Patient rooms & services', path: PATH }];

  // The hospital's own photos — each shown once on this page.
  const ward = hospitalImage('general-ward');
  const room = localPhotos.find((p) => p.slug === 'single-patient-room');

  const page = webPageSchema({ path: PATH, name: title, description, about: { '@id': HOSPITAL_ID } });
  if (ward) page.primaryImageOfPage = { '@type': 'ImageObject', contentUrl: absoluteUrl(imgLargest(ward)) };

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={PATH}
        schema={[page, breadcrumbSchema(crumbs), faqSchema(patientServiceFaqs)].filter(Boolean)}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Patient care"
        title="Patient rooms & services at Gurudev Hospital, Badlapur"
        lead="General ward, twin-sharing and special-ward rooms, an ICU and round-the-clock nursing, with 24×7 admission and the support families need during a hospital stay in Shirgaon, Badlapur East."
        image={ward || hospitalImage('reception-opd')}
      >
        <HeroActions />
      </PageHero>

      <section className="section" aria-labelledby="stay-title">
        <div className="container">
          <article className={`facility${room ? ' facility--photo' : ''}`}>
            {room ? (
              <Zoomable className="facility__zoom" item={{ src: photoLargest(room), srcSet: photoSrcSet(room), alt: room.alt, caption: room.caption }}>
              <img
                className="facility__img facility__img--tall"
                src={photoMedium(room)}
                srcSet={photoSrcSet(room)}
                sizes="(min-width: 900px) 45vw, 100vw"
                alt={room.alt}
                width={room.width}
                height={room.height}
                loading="lazy"
                decoding="async"
              />
              </Zoomable>
            ) : null}
            <div className="facility__body">
              <span className="feature__icon"><Icon name="bed" size={24} /></span>
              <h2 id="stay-title" className="facility__title">Your stay at Gurudev Hospital</h2>
              {roomsIntro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <div className="hero-actions">
                <a href={site.phone.tel} className="btn btn--primary btn--sm">
                  <Icon name="phone" size={16} /> Ask about rooms
                </a>
                <Link to="/facilities" className="btn btn--outline btn--sm">Hospital facilities</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <PhotoGallery
        id="rooms-photos"
        eyebrow="Inside the hospital"
        heading="Emergency room, labour room & operation theatre"
        lead="Photos of the casualty room, labour room and operation theatre where our patients are treated."
        only={['casualty-emergency-room', 'casualty-room-beds', 'emergency-crash-cart', 'labour-room', 'operation-theatre-c-arm', 'reception-opd']}
        showAllLink
        tint
        google="fallback"
      />

      <section className="section" aria-labelledby="svc-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">For patients &amp; families</p>
            <h2 id="svc-title" className="section__title">Patient services</h2>
            <p className="section__lead">
              From the moment you arrive to the day you go home, these services make treatment and recovery easier for patients and their
              families.
            </p>
          </div>
          <PatientServiceGrid items={patientServices} />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="admit-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Admission</p>
            <h2 id="admit-title" className="section__title">Planning an admission</h2>
          </div>
          <div className="grid grid--2">
            <div className="card">
              <h3 className="sidebar__title">What to bring</h3>
              <CheckList items={admissionChecklist} cols={1} />
            </div>
            <div className="card">
              <h3 className="sidebar__title">Call us before admission to know</h3>
              <CheckList
                items={[
                  'Which room is available: general ward, twin sharing or special ward',
                  'The expected length of stay for your treatment',
                  'An estimate of the charges',
                  'Whether your mediclaim policy is eligible for cashless treatment',
                ]}
                cols={1}
              />
              <p className="mt-sm">
                <a href={site.phone.tel} className="btn btn--primary btn--sm">
                  <Icon name="phone" size={16} /> Call {site.phone.display}
                </a>
              </p>
              <p className="muted mt-sm">
                In an emergency, come straight to the hospital — we are open 24 hours. Calling while you are on the way helps our team get
                ready before you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqList faqs={patientServiceFaqs} title="Questions about rooms & admission" id="rooms-faq" />
      <CtaBand title="Planning a surgery or admission? Call us first." />
    </>
  );
}

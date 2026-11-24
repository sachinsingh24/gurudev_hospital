import { Link } from "react-router";
import { site } from "../config/site.js";
import { specialities } from "../data/specialities.js";
import { treatments } from "../data/treatments.js";
import { doctors } from "../data/doctors.js";
import { areas } from "../data/areas.js";
import { generalFaqs } from "../data/faqs.js";
import { guides } from "../data/guides.js";
import { Seo } from "../seo/Head.jsx";
import { faqSchema, webPageSchema, HOSPITAL_ID } from "../seo/schema.js";
import Icon from "../components/Icon.jsx";
import GoogleReviews, { RatingBadge } from "../components/GoogleReviews.jsx";
import MapEmbed from "../components/MapEmbed.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import LandmarkPhoto from "../components/LandmarkPhoto.jsx";
import { CtaBand, DoctorAvatar, FaqList, GuideCard, InfoStrip, SpecialityCard, TreatmentCard } from "../components/Blocks.jsx";
import StockImage from "../components/StockImage.jsx";
import Carousel from "../components/Carousel.jsx";
import { hospitalImage, localPhotos, photoSrc, photoSrcSet } from "../data/photos.js";
import { patientServices } from "../data/patientServices.js";
import PatientServiceGrid from "../components/PatientServiceGrid.jsx";

const WHY = [
  { icon: "scalpel", title: "Surgeon on floor 24×7", text: "Surgical emergencies like appendicitis, obstructed hernia or injuries are seen and operated on at any hour." },
  { icon: "award", title: "Laparoscopic expertise", text: "Keyhole surgery by Dr. Mayur Rupavat — MS (General Surgery), FMAS, FIAGES." },
  { icon: "heart", title: "Compassionate, personal care", text: "Patients describe our doctors as supportive and our staff as polite, cooperative and friendly." },
  { icon: "shield", title: "Affordable, mediclaim support", text: "Modern treatment at an affordable cost, with support for major mediclaim policies." },
  { icon: "users", title: "Women-owned hospital", text: "A women-owned hospital with a nursing room and a respectful, private environment." },
  { icon: "accessibility", title: "Accessible for everyone", text: "Wheelchair-accessible entrance, parking, seating and toilet, plus an assistive hearing loop." },
];

// Home shows six services; the full list lives on /patient-rooms-services.
const HOME_SERVICES = ["In-patient rooms", "Round-the-clock nursing", "OPD consultations", "Mediclaim & insurance help", "Diet & nutrition guidance", "Medical store at the entrance"];

const NEARBY = ["Shirgaon", "Katrap", "Kulgaon", "Badlapur station area", "Manjarli", "Belavali", "Kharvai", "Badlapur MIDC"];

export default function Home() {
  const heroPhoto = localPhotos.find((p) => p.slug === "hospital-building-signboard");
  const whyMain = hospitalImage("operation-theatre-c-arm");
  // Real photos under "Your trusted partner in health": one wide photo, three tall ones below.
  const whySide = [
    { slug: "reception-opd", label: "Reception & OPD" },
    { slug: "emergency-crash-cart", label: "Emergency crash cart" },
    { slug: "casualty-room-beds", label: "Casualty beds" },
  ].map((p) => ({ ...p, img: hospitalImage(p.slug) })).filter((p) => p.img);
  const lead = doctors[0];
  const roomPhoto = hospitalImage("general-ward");
  const title = "Gurudev Multi-Speciality Hospital, Badlapur East | 24×7 Hospital";
  const description = "Best surgery & multi-speciality hospital in Badlapur East, Thane. Open 24×7 with a surgeon on floor. Maternity, urology, dialysis. Call 080875\u00a034842.";

  return (
    <>
      <Seo title={title} description={description} path="/" schema={[webPageSchema({ path: "/", name: title, description, about: { "@id": HOSPITAL_ID } }), faqSchema(generalFaqs)].filter(Boolean)} />

      <section className="hero">
        {heroPhoto ? <img className="hero__photo" src={photoSrc(heroPhoto, heroPhoto.widths.find((w) => w >= 960) || heroPhoto.widths.at(-1))} srcSet={photoSrcSet(heroPhoto)} sizes="100vw" alt="" width={heroPhoto.width} height={heroPhoto.height} fetchPriority="high" decoding="async" /> : null}
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Multi-speciality hospital · Badlapur East, Thane</p>
            <h1 className="hero__title">
              Trusted <span className="hl">24×7 surgical &amp; multi-speciality</span> care in Badlapur
            </h1>
            <p className="hero__lead">{site.name} in Shirgaon, Badlapur East is known as the best surgery centre in Badlapur — with a surgeon on the floor round the clock, laparoscopic surgery, maternity care, dialysis and 10 specialities under one roof.</p>
            <div className="hero-actions">
              {/* White + red on the dark hero: the teal primary button was nearly invisible against the teal background. */}
              <Link to="/book-appointment" className="btn btn--white btn--lg">
                <Icon name="calendar" size={20} /> Book appointment
              </Link>
              <a href={site.phone.tel} className="btn btn--ghost-white btn--lg">
                <Icon name="phone" size={20} /> Call {site.phone.display}
              </a>
            </div>
            <div className="hero__trust">
              <RatingBadge />
              <span className="chip">
                <Icon name="check" size={16} /> Surgeon on floor 24×7
              </span>
              <span className="chip">
                <Icon name="check" size={16} /> Women-owned
              </span>
            </div>
          </div>

          <section className="hero__card card" aria-labelledby="hero-card-title">
            <p className="hero__card-status">
              <span className="pulse-dot" aria-hidden="true" /> Open now · 24 hours
            </p>
            <h2 id="hero-card-title" className="hero__card-title">Medical emergency?</h2>
            <p>Call while you are on the way so our team is ready when you arrive.</p>
            <a href={site.phone.tel} className="btn btn--emergency btn--block btn--lg">
              <Icon name="phone" size={20} /> Call {site.phone.display}
            </a>
            <a href={site.google.directionsUrl} className="btn btn--outline btn--block" target="_blank" rel="noopener">
              <Icon name="navigation" size={18} /> Get directions
            </a>
            <ul className="hero__card-list">
              <li>
                <Icon name="pin" size={18} /> {site.address.full}
              </li>
              <li>
                <Icon name="ambulance" size={18} /> Trauma, accident &amp; critical care
              </li>
            </ul>
          </section>
        </div>
      </section>

      <div className="container info-strip-wrap">
        <InfoStrip />
      </div>

      <section className="section" aria-labelledby="spec-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Departments</p>
            <h2 id="spec-title" className="section__title">
              Specialities at Gurudev Hospital, Badlapur
            </h2>
            <p className="section__lead">From emergency surgery to maternity, dialysis and child care — complete treatment close to home in Badlapur East.</p>
          </div>
          <div className="grid grid--3">
            {specialities.map((s) => (
              <SpecialityCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="why-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Why patients choose us</p>
            <h2 id="why-title" className="section__title">
              Your trusted partner in health
            </h2>
            <p className="section__lead">The Gurudev community believes in providing true and compassionate partnership in health — excellent attention and care with modern technology, at an affordable cost.</p>
          </div>
          <div className="why">
            <div className="why__media">
              <StockImage img={whyMain} className="why__main" sizes="(min-width: 1000px) 40vw, (min-width: 640px) 640px, 100vw" label="Our operation theatre" />
              {whySide.map((p) => (
                <StockImage key={p.slug} img={p.img} className="why__side" sizes="(min-width: 1000px) 13vw, (min-width: 640px) 210px, 33vw" label={p.label} />
              ))}
            </div>
            <div className="why__features">
              {WHY.map((w) => (
                <div key={w.title} className="feature">
                  <span className="feature__icon">
                    <Icon name={w.icon} size={24} />
                  </span>
                  <h3 className="feature__title">{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="doc-title">
        <div className="container spotlight">
          <div className="spotlight__media">
            <DoctorAvatar d={lead} size={240} />
            <span className="spotlight__badge">
              <Icon name="award" size={18} /> FMAS · FIAGES
            </span>
          </div>
          <div className="spotlight__copy">
            <p className="eyebrow">Lead surgeon</p>
            <h2 id="doc-title" className="section__title">
              {lead.name}
            </h2>
            <p className="spotlight__quals">
              {lead.qualifications.join(", ")} · {lead.role}
            </p>
            <p>{lead.bio[1]}</p>
            <ul className="tag-list">
              {lead.expertise.slice(0, 6).map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link to={`/doctors/${lead.slug}`} className="btn btn--primary">
                View profile
              </Link>
              <Link to="/book-appointment?dept=general-laparoscopic-surgery" className="btn btn--outline">
                Book with surgeon
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PhotoGallery id="home-photos" eyebrow="Photos" heading="Inside Gurudev Hospital, Badlapur East" lead="Our casualty room, labour room, patient rooms and operation theatre on Yadav Nagar Road, Shirgaon." limit={4} exclude={["hospital-building-signboard", "operation-theatre-c-arm", "reception-opd", "emergency-crash-cart", "casualty-room-beds", "general-ward"]} showAllLink tint google="fallback" />

      <section className="section section--tint section--join" aria-labelledby="svc-title">
        <div className="container">
          <div className="gallery-head">
            <div>
              <p className="eyebrow">Patient care</p>
              <h2 id="svc-title" className="section__title">
                Patient rooms &amp; services
              </h2>
              <p className="section__lead">In-patient rooms with nursing day and night, and the support families need during a hospital stay.</p>
            </div>
            <Link to="/patient-rooms-services" className="btn btn--outline btn--sm">
              All patient services <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          <div className="svc-band">
            <StockImage img={roomPhoto} className="svc-band__photo" sizes="(min-width: 1000px) 40vw, 100vw" />
            <PatientServiceGrid cols={2} items={HOME_SERVICES.map((t) => patientServices.find((s) => s.title === t)).filter(Boolean)} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="treat-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Best surgery centre in Badlapur</p>
            <h2 id="treat-title" className="section__title">
              Surgical treatments &amp; key procedures
            </h2>
            <p className="section__lead">Keyhole (laparoscopic) and general surgery by Dr. Mayur Rupavat, with a surgeon on the floor 24×7, plus trauma, maternity and medical care. Clear information on symptoms, options and recovery.</p>
          </div>
          <div className="grid grid--2 grid--tight">
            {treatments.map((t) => (
              <TreatmentCard key={t.slug} t={t} />
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section className="section" aria-labelledby="loc-title">
        <div className="container location">
          <div className="location__copy">
            <p className="eyebrow">Location</p>
            <h2 id="loc-title" className="section__title">
              Find us in Shirgaon, Badlapur East
            </h2>
            <address className="location__nap">
              <strong>{site.name}</strong>
              <span>{site.address.street},</span>
              <span>
                {site.address.locality}, {site.address.area}, {site.address.state} {site.address.postalCode}
              </span>
            </address>
            <ul className="location__list">
              <li>
                <Icon name="phone" size={18} /> <a href={site.phone.tel}>{site.phone.displayIntl}</a>
              </li>
              <li>
                <Icon name="clock" size={18} /> {site.hours.label}
              </li>
              <li>
                <Icon name="train" size={18} /> About 1.5 km from Badlapur railway station (East side)
              </li>
              <li>
                <Icon name="card" size={18} /> Credit / debit cards &amp; NFC mobile payments accepted
              </li>
            </ul>
          </div>
          {/* night view here: the day photo of the building is already the hero background */}
          <LandmarkPhoto slug="hospital-at-night-24x7" caption="Open 24×7: look for the lit signboard and Gurudev Medical at the entrance on Yadav Nagar Road" />
          <div className="location__areas">
            <h3 className="location__sub">Serving patients from</h3>
            <ul className="tag-list">
              <li>Badlapur East</li>
              <li className="is-link">
                <Link to="/areas-we-serve/badlapur-west">
                  Badlapur West <Icon name="arrowRight" size={14} />
                </Link>
              </li>
              {NEARBY.map((n) => (
                <li key={n}>{n}</li>
              ))}
              {areas
                .filter((a) => a.slug !== "badlapur-west")
                .map((a) => (
                  <li key={a.slug} className="is-link">
                    <Link to={`/areas-we-serve/${a.slug}`}>
                      {a.name} <Icon name="arrowRight" size={14} />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <MapEmbed height={440} />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="guides-title">
        <div className="container">
          <Carousel
            id="guides-carousel"
            label="Health guides"
            autoplay={1500}
            infinite
            head={
              <>
                <p className="eyebrow">Health guides</p>
                <h2 id="guides-title" className="section__title">
                  Know your symptoms
                </h2>
              </>
            }
            actions={
              <Link to="/health-guides" className="btn btn--outline btn--sm">
                All health guides <Icon name="arrowRight" size={16} />
              </Link>
            }
          >
            {guides.map((g) => (
              <GuideCard key={g.slug} g={g} />
            ))}
          </Carousel>
        </div>
      </section>

      <FaqList faqs={generalFaqs} title="Questions patients ask us" />
      <CtaBand />
    </>
  );
}

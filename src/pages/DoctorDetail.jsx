import { useParams } from 'react-router';
import { getDoctor } from '../data/doctors.js';
import { getTreatment, treatments } from '../data/treatments.js';
import { getSpeciality } from '../data/specialities.js';
import { hospitalImage } from '../data/photos.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, physicianSchema, webPageSchema } from '../seo/schema.js';
import Icon from '../components/Icon.jsx';
import Sidebar from '../components/Sidebar.jsx';
import GoogleReviews from '../components/GoogleReviews.jsx';
import { CheckList, CtaBand, DoctorAvatar, HeroActions, PageHero, TreatmentCard } from '../components/Blocks.jsx';
import NotFound from './NotFound.jsx';

export default function DoctorDetail() {
  const { slug } = useParams();
  const d = getDoctor(slug);
  if (!d) return <NotFound />;

  const path = `/doctors/${d.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: d.name, path },
  ];
  const physician = physicianSchema(d);
  const treats = (d.treatments || []).map(getTreatment).filter(Boolean).sort((a, b) => treatments.indexOf(a) - treatments.indexOf(b));

  return (
    <>
      <Seo
        title={d.title}
        description={d.metaDescription}
        path={path}
        type="profile"
        schema={[
          webPageSchema({ path, name: d.title, description: d.metaDescription, type: 'ProfilePage', about: { '@id': physician['@id'] }, mainEntity: { '@id': physician['@id'] } }),
          physician,
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero crumbs={crumbs} eyebrow={d.role} title={`${d.name} — Laparoscopic & General Surgeon in Badlapur`} lead={d.qualifications.join(' · ')} image={hospitalImage('operation-theatre')}>
        <HeroActions dept={d.specialities[0]} />
      </PageHero>

      <div className="container with-sidebar">
        <article className="prose">
          <div className="doc-hero">
            <DoctorAvatar d={d} size={96} />
            <div>
              <p className="doc-hero__name">{d.name}</p>
              <p className="doc-hero__role">{d.role}</p>
              <p className="doc-hero__at"><Icon name="hospital" size={16} /> Gurudev Multi-Speciality Hospital, Badlapur East</p>
            </div>
          </div>

          <h2>About {d.name}</h2>
          {d.bio.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}

          <h2>Qualifications</h2>
          <ul className="quals">
            {d.qualifications.map((q) => (
              <li key={q}>
                <strong>{q}</strong>
                {d.qualificationNotes?.[q] ? <span> — {d.qualificationNotes[q]}</span> : null}
                {q.startsWith('MS') ? <span> — Master of Surgery</span> : null}
                {q === 'MBBS' ? <span> — Bachelor of Medicine and Bachelor of Surgery</span> : null}
              </li>
            ))}
          </ul>

          {d.education?.length ? (
            <>
              <h2>Education &amp; training</h2>
              <ol className="timeline">
                {d.education.map((e) => (
                  <li key={e.course} className="timeline__item">
                    <span className="timeline__years">{e.years}</span>
                    <strong className="timeline__title">{e.course}</strong>
                    <span className="timeline__place">{e.institution}</span>
                  </li>
                ))}
              </ol>
            </>
          ) : null}

          {d.experience?.length ? (
            <>
              <h2>Experience</h2>
              <ol className="timeline">
                {d.experience.map((x) => (
                  <li key={x.role + x.place} className="timeline__item">
                    <span className="timeline__years">{x.years}</span>
                    <strong className="timeline__title">{x.role}</strong>
                    <span className="timeline__place">{x.place}</span>
                    {x.focus ? <span className="timeline__note">Focus: {x.focus}</span> : null}
                  </li>
                ))}
              </ol>
            </>
          ) : null}

          {d.linkedin ? (
            <p>
              <a href={d.linkedin} target="_blank" rel="noopener" className="btn btn--outline btn--sm" aria-label={`View ${d.name}'s LinkedIn profile (opens in a new tab)`}>
                LinkedIn profile <Icon name="external" size={14} />
              </a>
            </p>
          ) : null}

          <h2>Areas of expertise</h2>
          <CheckList items={d.expertise} />

          <h2>Treatments</h2>
          <div className="grid grid--1 grid--tight">
            {treats.map((t) => <TreatmentCard key={t.slug} t={t} />)}
          </div>

          <h2>Departments</h2>
          <p>
            {d.specialities.map(getSpeciality).filter(Boolean).map((s) => s.name).join(' · ')}
          </p>
        </article>
        <Sidebar dept={d.specialities[0]} />
      </div>

      <GoogleReviews heading={`What patients say about ${d.name} and team`} />
      <CtaBand title="Consult a laparoscopic surgeon in Badlapur" />
    </>
  );
}

import { matchRoutes } from 'react-router';
import { lazyPage } from './lib/lazyPage.jsx';

/**
 * Every page component, each in its own chunk (see src/lib/lazyPage.jsx).
 * `src` is the module path used by scripts/prerender.mjs to add <link rel="modulepreload"> for the page's chunk.
 */
export const PAGES = {
  Home: lazyPage(() => import('./pages/Home.jsx')),
  About: lazyPage(() => import('./pages/About.jsx')),
  Specialities: lazyPage(() => import('./pages/Specialities.jsx')),
  SpecialityDetail: lazyPage(() => import('./pages/SpecialityDetail.jsx')),
  Treatments: lazyPage(() => import('./pages/Treatments.jsx')),
  TreatmentDetail: lazyPage(() => import('./pages/TreatmentDetail.jsx')),
  Doctors: lazyPage(() => import('./pages/Doctors.jsx')),
  DoctorDetail: lazyPage(() => import('./pages/DoctorDetail.jsx')),
  AreasIndex: lazyPage(() => import('./pages/Areas.jsx'), (m) => m.AreasIndex),
  AreaDetail: lazyPage(() => import('./pages/Areas.jsx'), (m) => m.AreaDetail),
  Reviews: lazyPage(() => import('./pages/Reviews.jsx')),
  Photos: lazyPage(() => import('./pages/Photos.jsx')),
  Facilities: lazyPage(() => import('./pages/Facilities.jsx')),
  PatientServices: lazyPage(() => import('./pages/PatientServices.jsx')),
  GuidesIndex: lazyPage(() => import('./pages/Guides.jsx'), (m) => m.GuidesIndex),
  GuideDetail: lazyPage(() => import('./pages/Guides.jsx'), (m) => m.GuideDetail),
  Contact: lazyPage(() => import('./pages/Contact.jsx')),
  BookAppointment: lazyPage(() => import('./pages/BookAppointment.jsx')),
  Privacy: lazyPage(() => import('./pages/Privacy.jsx')),
  NotFound: lazyPage(() => import('./pages/NotFound.jsx')),
};

export const ROUTES = [
  { path: '/', page: 'Home', src: 'src/pages/Home.jsx' },
  { path: '/about', page: 'About', src: 'src/pages/About.jsx' },
  { path: '/specialities', page: 'Specialities', src: 'src/pages/Specialities.jsx' },
  { path: '/specialities/:slug', page: 'SpecialityDetail', src: 'src/pages/SpecialityDetail.jsx' },
  { path: '/treatments', page: 'Treatments', src: 'src/pages/Treatments.jsx' },
  { path: '/treatments/:slug', page: 'TreatmentDetail', src: 'src/pages/TreatmentDetail.jsx' },
  { path: '/doctors', page: 'Doctors', src: 'src/pages/Doctors.jsx' },
  { path: '/doctors/:slug', page: 'DoctorDetail', src: 'src/pages/DoctorDetail.jsx' },
  { path: '/areas-we-serve', page: 'AreasIndex', src: 'src/pages/Areas.jsx' },
  { path: '/areas-we-serve/:slug', page: 'AreaDetail', src: 'src/pages/Areas.jsx' },
  { path: '/reviews', page: 'Reviews', src: 'src/pages/Reviews.jsx' },
  { path: '/photos', page: 'Photos', src: 'src/pages/Photos.jsx' },
  { path: '/facilities', page: 'Facilities', src: 'src/pages/Facilities.jsx' },
  { path: '/patient-rooms-services', page: 'PatientServices', src: 'src/pages/PatientServices.jsx' },
  { path: '/health-guides', page: 'GuidesIndex', src: 'src/pages/Guides.jsx' },
  { path: '/health-guides/:slug', page: 'GuideDetail', src: 'src/pages/Guides.jsx' },
  { path: '/contact', page: 'Contact', src: 'src/pages/Contact.jsx' },
  { path: '/book-appointment', page: 'BookAppointment', src: 'src/pages/BookAppointment.jsx' },
  { path: '/privacy-policy', page: 'Privacy', src: 'src/pages/Privacy.jsx' },
  { path: '*', page: 'NotFound', src: 'src/pages/NotFound.jsx' },
];

/** The route entry that handles a URL path. */
export const routeFor = (pathname) => matchRoutes(ROUTES, pathname)?.at(-1)?.route || ROUTES.at(-1);

/** Fetch the chunk for the page at `pathname` (cached; safe to call repeatedly). */
export const preloadPath = (pathname) => PAGES[routeFor(pathname).page].preload();

/** Fetch every page chunk (prerendering renders all pages synchronously). */
export const preloadAll = () => Promise.all(Object.values(PAGES).map((p) => p.preload()));

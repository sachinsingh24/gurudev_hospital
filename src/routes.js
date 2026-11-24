import { specialities } from './data/specialities.js';
import { treatments } from './data/treatments.js';
import { profileDoctors } from './data/doctors.js';
import { areas } from './data/areas.js';
import { guides } from './data/guides.js';

/** Every indexable URL. Used by the prerenderer and to generate sitemap.xml. */
export function getAllRoutes() {
  return [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/specialities', priority: 0.9, changefreq: 'monthly' },
    ...specialities.map((s) => ({ path: `/specialities/${s.slug}`, priority: s.slug === 'emergency-trauma-care' ? 0.9 : 0.8, changefreq: 'monthly' })),
    { path: '/treatments', priority: 0.8, changefreq: 'monthly' },
    ...treatments.map((t, i) => ({ path: `/treatments/${t.slug}`, priority: i < 7 ? 0.8 : 0.7, changefreq: 'monthly' })),
    { path: '/doctors', priority: 0.7, changefreq: 'monthly' },
    ...profileDoctors.map((d) => ({ path: `/doctors/${d.slug}`, priority: 0.7, changefreq: 'monthly' })),
    { path: '/areas-we-serve', priority: 0.6, changefreq: 'monthly' },
    ...areas.map((a) => ({ path: `/areas-we-serve/${a.slug}`, priority: 0.6, changefreq: 'monthly' })),
    { path: '/reviews', priority: 0.6, changefreq: 'weekly' },
    { path: '/photos', priority: 0.6, changefreq: 'monthly', images: true },
    { path: '/facilities', priority: 0.7, changefreq: 'monthly' },
    { path: '/patient-rooms-services', priority: 0.7, changefreq: 'monthly' },
    { path: '/health-guides', priority: 0.6, changefreq: 'weekly' },
    ...guides.map((g) => ({ path: `/health-guides/${g.slug}`, priority: 0.6, changefreq: 'monthly' })),
    { path: '/about', priority: 0.6, changefreq: 'yearly' },
    { path: '/contact', priority: 0.8, changefreq: 'yearly' },
    { path: '/book-appointment', priority: 0.8, changefreq: 'yearly' },
    { path: '/privacy-policy', priority: 0.2, changefreq: 'yearly' },
  ];
}

import { createContext, useContext, useEffect } from 'react';
import { site, absoluteUrl } from '../config/site.js';
import { baseGraph } from './schema.js';

/**
 * Tiny, dependency-free head manager.
 * - During prerender (SSR) <Seo> writes the page's head into a collector passed via context.
 * - In the browser it updates <head> on every client-side navigation.
 * Managed tags carry data-head="1" so they can be replaced without touching static tags.
 */

const HeadContext = createContext(null);

export function HeadProvider({ collector = null, children }) {
  return <HeadContext.Provider value={collector}>{children}</HeadContext.Provider>;
}

const DEFAULT_IMAGE = '/og-image.png';

export function buildHead({ title, description, path = '/', image = DEFAULT_IMAGE, type = 'website', noindex = false, schema = [] }) {
  const url = absoluteUrl(path);
  const img = image.startsWith('http') ? image : absoluteUrl(image);
  const meta = [
    { name: 'description', content: description },
    { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1' },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: site.name },
    { property: 'og:locale', content: 'en_IN' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: img },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: `${site.name}, ${site.address.area}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: img },
  ];
  const links = noindex ? [] : [{ rel: 'canonical', href: url }];
  const jsonLd = noindex ? [] : [{ '@context': 'https://schema.org', '@graph': [...baseGraph(), ...schema] }];
  return { title, meta, links, jsonLd };
}

export function Seo(props) {
  const collector = useContext(HeadContext);
  const head = buildHead(props);
  if (collector) collector.head = head;
  const key = JSON.stringify(head);
  useEffect(() => {
    applyHead(head);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return null;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attrs = (o) => Object.entries(o).map(([k, v]) => `${k}="${esc(v)}"`).join(' ');
// JSON-LD must not contain a raw "</script"
const safeJson = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

export function headToString(head) {
  if (!head) return '';
  return [
    `<title>${esc(head.title)}</title>`,
    ...head.meta.map((m) => `<meta data-head="1" ${attrs(m)}>`),
    ...head.links.map((l) => `<link data-head="1" ${attrs(l)}>`),
    ...head.jsonLd.map((j) => `<script data-head="1" type="application/ld+json">${safeJson(j)}</script>`),
  ].join('\n    ');
}

function applyHead(head) {
  if (typeof document === 'undefined') return;
  document.title = head.title;
  document.head.querySelectorAll('[data-head="1"]').forEach((el) => el.remove());
  const frag = document.createDocumentFragment();
  head.meta.forEach((m) => {
    const el = document.createElement('meta');
    Object.entries(m).forEach(([k, v]) => el.setAttribute(k, v));
    el.setAttribute('data-head', '1');
    frag.appendChild(el);
  });
  head.links.forEach((l) => {
    const el = document.createElement('link');
    Object.entries(l).forEach(([k, v]) => el.setAttribute(k, v));
    el.setAttribute('data-head', '1');
    frag.appendChild(el);
  });
  head.jsonLd.forEach((j) => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-head', '1');
    el.textContent = JSON.stringify(j);
    frag.appendChild(el);
  });
  document.head.appendChild(frag);
}

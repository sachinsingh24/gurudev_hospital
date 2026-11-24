import { useMemo, useRef } from 'react';
import { Link } from 'react-router';
import { site } from '../config/site.js';
import { localPhotos, photoLargest, photoSrc, photoSrcSet } from '../data/photos.js';
import { photosStore } from '../lib/googlePlace.js';
import Icon from './Icon.jsx';
import { Zoomable } from './Zoom.jsx';

/**
 * Hospital photo gallery.
 * 1. Self-hosted photos (src/data/photos.json) — server-rendered, indexable, in schema + image sitemap.
 * 2. Live photos pulled from the Google Business Profile via Places API (New) — loaded when the
 *    gallery scrolls into view, shown with the contributor credit Google requires, never stored.
 */
export default function PhotoGallery({
  id = 'gallery',
  eyebrow = 'Photos',
  heading = 'Inside Gurudev Hospital',
  lead,
  headingLevel = 2,
  limit = 0,
  showAllLink = false,
  tint = false,
  // 'always' = local + Google photos · 'fallback' = Google photos only while no self-hosted photos exist
  // (keeps per-photo API cost at zero on high-traffic pages once the hospital adds its own photos).
  google = 'always',
  only = null, // slugs to show, in this order
  exclude = [], // slugs already shown elsewhere on the page (no duplicate photos)
}) {
  const ref = useRef(null);
  const useGoogle = site.google.showLivePhotos && (google === 'always' || localPhotos.length === 0);
  const s = photosStore.useLoadWhenVisible(ref, useGoogle);
  const H = `h${headingLevel}`;

  const items = useMemo(() => {
    const pool = only
      ? only.map((slug) => localPhotos.find((p) => p.slug === slug)).filter(Boolean)
      : localPhotos.filter((p) => !exclude.includes(p.slug));
    const local = pool.map((p) => ({
      key: p.slug,
      kind: 'local',
      thumb: photoSrc(p, p.widths[0]),
      srcSet: photoSrcSet(p),
      src: photoLargest(p),
      alt: p.alt,
      caption: p.caption,
      width: p.width,
      height: p.height,
    }));
    const selfHosted = (p) =>
      localPhotos.length > 0 &&
      (p.credits || []).some((c) => site.google.selfHostedPhotoAuthors.some((a) => c.name?.toLowerCase().startsWith(a.toLowerCase())));
    const google =
      useGoogle && s.status === 'ready'
        ? (s.data.photos || []).filter((p) => !selfHosted(p)).map((p, i) => ({
            key: p.id,
            kind: 'google',
            thumb: p.thumb,
            src: p.full,
            alt: `Photo ${i + 1} of ${site.name}, Badlapur East, from Google Maps`,
            caption: '',
            credits: p.credits,
            width: p.width,
            height: p.height,
          }))
        : [];
    const all = [...local, ...google];
    return limit ? all.slice(0, limit) : all;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s.status, s.data, limit, useGoogle, only?.join(','), exclude.join(',')]);

  const hasGoogle = items.some((i) => i.kind === 'google');
  // Layout that leaves no lonely photo on the last row: 5, 9, 13… photos lead with one large photo;
  // 6 (or another multiple of 3) use three columns on desktop.
  const n = items.length;
  const layout = n > 4 && n % 4 === 1 ? ' gallery--feature' : n % 4 !== 0 && n % 3 === 0 ? ' gallery--3' : '';
  const waiting = !localPhotos.length && (s.status === 'idle' || s.status === 'loading');
  const empty = !items.length && !waiting;

  return (
    <section id={id} ref={ref} className={`section${tint ? ' section--tint' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="gallery-head">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <H id={`${id}-title`} className="section__title">{heading}</H>
            {lead ? <p className="section__lead">{lead}</p> : null}
          </div>
          {showAllLink ? (
            <Link to="/photos" className="btn btn--outline btn--sm">
              View all photos <Icon name="arrowRight" size={16} />
            </Link>
          ) : null}
        </div>

        {items.length ? (
          <ul className={`gallery${layout}`}>
            {items.map((it, i) => (
              <li key={it.key} className="gallery__item">
                <Zoomable className="gallery__tile" item={{ src: it.src, srcSet: it.srcSet, alt: it.alt, caption: it.caption, credits: it.credits }}>
                  <img
                    src={it.thumb}
                    srcSet={it.srcSet}
                    sizes={layout === ' gallery--feature' && i === 0 ? '(min-width: 1000px) 50vw, 100vw' : '(min-width: 1000px) 25vw, (min-width: 640px) 33vw, 50vw'}
                    alt={it.alt}
                    width={it.width || undefined}
                    height={it.height || undefined}
                    loading="lazy"
                    decoding="async"
                  />
                  {it.caption ? <span className="gallery__cap">{it.caption}</span> : null}
                </Zoomable>
                {it.kind === 'google' && it.credits?.length ? (
                  <span className="gallery__credit">
                    {it.credits.map((c, j) => (
                      <span key={c.name + j}>
                        {j ? ', ' : ''}
                        {c.uri ? <a href={c.uri} target="_blank" rel="noopener nofollow">{c.name}</a> : c.name}
                      </span>
                    ))}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}

        {waiting ? (
          <ul className="gallery" aria-busy="true" aria-label="Loading photos from Google Maps">
            {Array.from({ length: limit || 8 }).map((_, i) => (
              <li key={i} className="gallery__item"><span className="gallery__tile gallery__tile--skeleton" /></li>
            ))}
          </ul>
        ) : null}

        {empty ? (
          <div className="gallery-empty card">
            <Icon name="hospital" size={28} />
            <div>
              <p><strong>See photos of {site.name}</strong> — the building, facilities and team — on our Google Business Profile.</p>
              <a href={site.google.mapsUrl} target="_blank" rel="noopener" className="btn btn--primary btn--sm">
                View photos on Google Maps <Icon name="external" size={14} />
              </a>
            </div>
          </div>
        ) : null}

        {hasGoogle ? (
          <p className="gallery-attrib">
            Photos from Google Maps, © their respective contributors.{' '}
            <a href={site.google.mapsUrl} target="_blank" rel="noopener">See all photos on Google Maps</a>
          </p>
        ) : null}
      </div>

    </section>
  );
}

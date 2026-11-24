import { imgMedium, imgSrcSet } from '../data/pageImages.js';
import Icon from './Icon.jsx';
import { Zoomable, zoomItem } from './Zoom.jsx';

/**
 * Framed photo with a small label:
 *  - stock photos  → "Representative image" (so patients don't mistake them for this hospital)
 *  - hospital's own photos → "Gurudev Hospital" (a trust signal)
 * No photographer names are shown. `priority` = above-the-fold (eager + high fetch priority for LCP).
 * Expects the normalised image shape { url(w), widths, alt, width, height, representative }.
 */
export default function StockImage({ img, className = '', sizes = '100vw', priority = false, label }) {
  if (!img) return null;
  const badge = label || (img.representative ? 'Representative image' : 'Gurudev Hospital');
  return (
    <figure className={`stock ${className}`}>
      <Zoomable item={zoomItem(img, label)}>
      <img
        src={imgMedium(img)}
        srcSet={imgSrcSet(img)}
        sizes={sizes}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
      </Zoomable>
      <span className={`stock__badge${img.representative ? '' : ' stock__badge--own'}`}>
        {img.representative ? null : <Icon name="hospital" size={12} />}
        {badge}
      </span>
    </figure>
  );
}

/**
 * 2×2 photo collage for list pages (first tile loads eagerly as the banner).
 * The label sits under the collage (not on top of the photos).
 */
export function ImageMosaic({ images, className = '' }) {
  const list = (images || []).filter(Boolean).slice(0, 4);
  if (!list.length) return null;
  const own = list.every((i) => !i.representative);
  const note = list.every((i) => i.representative)
    ? 'Representative images'
    : list.some((i) => i.representative)
      ? 'Includes representative images'
      : 'Gurudev Hospital';
  return (
    <figure className={`mosaic-fig ${className}`}>
      <div className="mosaic">
      {list.map((img, i) => (
        <Zoomable key={img.url(480)} item={zoomItem(img)}>
        <img
          className="mosaic__tile"
          src={img.url(img.widths.find((w) => w >= 480) || img.widths[0])}
          srcSet={imgSrcSet(img)}
          sizes="(min-width: 1000px) 23vw, 50vw"
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : undefined}
          decoding="async"
        />
        </Zoomable>
      ))}
      </div>
      <figcaption className={`photo-note${own ? ' photo-note--own' : ''}`}>
        <Icon name={own ? 'hospital' : 'image'} size={14} />
        {note}
      </figcaption>
    </figure>
  );
}

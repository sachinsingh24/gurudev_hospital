import { localPhotos, photoLargest, photoSrc, photoSrcSet } from '../data/photos.js';
import { Zoomable } from './Zoom.jsx';

/** "Look for this building" photo shown next to the address, so patients recognise the entrance. */
export default function LandmarkPhoto({ slug = 'hospital-building-signboard', caption = 'Look for this 24×7 signboard on Yadav Nagar Road, Shirgaon' }) {
  const p = localPhotos.find((x) => x.slug === slug);
  if (!p) return null;
  return (
    <figure className="landmark">
      <Zoomable item={{ src: photoLargest(p), srcSet: photoSrcSet(p), alt: p.alt, caption }}>
      <img
        src={photoSrc(p, p.widths.find((w) => w >= 960) || p.widths.at(-1))}
        srcSet={photoSrcSet(p)}
        sizes="(min-width: 1000px) 480px, 100vw"
        alt={p.alt}
        width={p.width}
        height={p.height}
        loading="lazy"
        decoding="async"
      />
      </Zoomable>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

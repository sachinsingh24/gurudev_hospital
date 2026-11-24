import { site } from '../config/site.js';
import Icon from './Icon.jsx';

/**
 * Google Map of the exact hospital location.
 * With an API key: official Maps Embed API (free, unlimited) pinned to the Place ID — shows the
 * business card with name, rating and "Directions". Without a key: keyless embed by name + coordinates.
 * loading="lazy" keeps the iframe off the critical path (Core Web Vitals).
 */
export default function MapEmbed({ height = 380, title }) {
  const key = site.api.googleMapsKey;
  // Keyless fallback uses Google's own "Share → Embed a map" format, pinned to the exact place by its
  // feature ID (a text search can resolve to the wrong spot). !1d = visible span in metres.
  const keyless =
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1800!2d${site.geo.lng}!3d${site.geo.lat}` +
    `!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(site.google.featureId)}` +
    `!2s${encodeURIComponent(site.name)}!5e0!3m2!1sen!2sin!4v1732350000000!5m2!1sen!2sin`;
  const src = key
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=place_id:${site.google.placeId}&zoom=16`
    : keyless;
  return (
    <div className="map">
      <iframe
        title={title || `Map showing ${site.name}, ${site.address.full}`}
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="map__bar">
        <span><Icon name="pin" size={16} /> {site.geo.plusCode}</span>
        <a href={site.google.directionsUrl} target="_blank" rel="noopener" className="btn btn--primary btn--sm">
          <Icon name="navigation" size={16} /> Get directions
        </a>
      </div>
    </div>
  );
}

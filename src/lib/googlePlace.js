import { useEffect, useState } from 'react';
import { site } from '../config/site.js';

/**
 * Live Google Business Profile data via the official Maps JavaScript API + Places API (New) `Place` class.
 *
 * Two independent requests, each made only when its widget scrolls into view, so each page pays only
 * for what it shows (see GOOGLE-PRICING.md):
 *   - reviews store → rating, count, 5 reviews   → SKU "Place Details Enterprise + Atmosphere"
 *   - photos store  → photo references           → SKU "Place Details Essentials (IDs Only)" (no charge);
 *                     each image is billed as "Place Details Photos" when an <img> actually loads it.
 * Content is never stored/cached (Google Maps Platform terms). Author attributions must be displayed.
 */

const hasKey = Boolean(site.api.googleMapsKey);

function loadMapsScript(key) {
  if (window.google?.maps?.importLibrary) return Promise.resolve();
  if (window.__gmapsLoading) return window.__gmapsLoading;
  window.__gmapsLoading = new Promise((resolve, reject) => {
    const cb = '__gmapsReady';
    window[cb] = () => resolve();
    const s = document.createElement('script');
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly&loading=async&callback=${cb}`;
    s.async = true;
    s.onerror = () => reject(new Error('Failed to load Google Maps JavaScript API'));
    document.head.appendChild(s);
  });
  return window.__gmapsLoading;
}

async function fetchPlace(fields) {
  await loadMapsScript(site.api.googleMapsKey);
  const { Place } = await window.google.maps.importLibrary('places');
  const place = new Place({ id: site.google.placeId, requestedLanguage: 'en' });
  await place.fetchFields({ fields });
  return place;
}

function createStore(name, fields, map) {
  const listeners = new Set();
  let state = { status: hasKey ? 'idle' : 'disabled', data: null, error: null };
  let inflight = null;
  const set = (next) => {
    state = { ...state, ...next };
    listeners.forEach((l) => l(state));
  };

  function load() {
    if (state.status === 'disabled' || typeof window === 'undefined') return Promise.resolve(state);
    if (inflight) return inflight;
    set({ status: 'loading' });
    inflight = fetchPlace(fields)
      .then((place) => set({ status: 'ready', data: map(place) }))
      .catch((err) => {
        console.warn(`[Google ${name}]`, err);
        set({ status: 'error', error: String(err?.message || err) });
      })
      .then(() => state);
    return inflight;
  }

  function useStore() {
    const [s, setS] = useState(state);
    useEffect(() => {
      listeners.add(setS);
      setS(state);
      return () => listeners.delete(setS);
    }, []);
    return s;
  }

  /** Subscribes, and starts the request when `ref` comes within 300px of the viewport. */
  function useLoadWhenVisible(ref, enabled = true) {
    const s = useStore();
    useEffect(() => {
      if (!enabled || s.status !== 'idle' || !ref.current) return undefined;
      if (!('IntersectionObserver' in window)) {
        load();
        return undefined;
      }
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            load();
            io.disconnect();
          }
        },
        { rootMargin: '300px' },
      );
      io.observe(ref.current);
      return () => io.disconnect();
    }, [s.status, ref, enabled]);
    return s;
  }

  return { load, useStore, useLoadWhenVisible };
}

export const reviewsStore = createStore('reviews', ['displayName', 'rating', 'userRatingCount', 'reviews', 'googleMapsURI'], (place) => ({
  rating: place.rating ?? null,
  count: place.userRatingCount ?? null,
  mapsUrl: place.googleMapsURI || site.google.mapsUrl,
  reviews: (place.reviews || [])
    .filter((r) => r && (r.text || r.rating))
    .map((r) => ({
      author: r.authorAttribution?.displayName || 'Google user',
      authorUrl: r.authorAttribution?.uri || null,
      photo: r.authorAttribution?.photoURI || null,
      rating: r.rating || 0,
      text: typeof r.text === 'string' ? r.text : r.text?.text || '',
      when: r.relativePublishTimeDescription || '',
      publishTime: r.publishTime ? new Date(r.publishTime).toISOString() : null,
    })),
}));

export const photosStore = createStore('photos', ['photos'], (place) => ({
  // getURI() only builds the URL; the billable image request happens when an <img> loads it.
  photos: (place.photos || []).slice(0, 10).map((p, i) => ({
    id: `g${i}`,
    thumb: p.getURI({ maxWidth: 640 }),
    full: p.getURI({ maxWidth: 1600 }),
    width: p.widthPx || null,
    height: p.heightPx || null,
    credits: (p.authorAttributions || []).map((a) => ({ name: a.displayName, uri: a.uri || null })),
  })),
}));

/** Rating to display: live if the reviews widget has loaded, otherwise the dated snapshot from the Google profile. */
export function useRatingSummary() {
  const s = reviewsStore.useStore();
  const live = s.status === 'ready' && s.data?.rating;
  return {
    live: Boolean(live),
    rating: live ? s.data.rating : site.google.ratingSnapshot.rating,
    count: live ? s.data.count : site.google.ratingSnapshot.count,
  };
}

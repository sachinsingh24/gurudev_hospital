import { useRef, useState } from 'react';
import { site } from '../config/site.js';
import { reviewsStore, useRatingSummary } from '../lib/googlePlace.js';
import Icon from './Icon.jsx';

export function Stars({ value, size = 18 }) {
  const full = Math.round(value);
  return (
    <span className="stars" role="img" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon key={i} name="star" size={size} filled={i <= full} className={i <= full ? 'star--on' : 'star--off'} />
      ))}
    </span>
  );
}

export function RatingBadge({ compact = false }) {
  const { rating, count, live } = useRatingSummary();
  return (
    <a href={site.google.reviewsUrl} target="_blank" rel="noopener" className={`rating-badge${compact ? ' rating-badge--compact' : ''}`}>
      <GoogleG />
      <span className="rating-badge__score">{rating.toFixed(1)}</span>
      <Stars value={rating} size={compact ? 14 : 16} />
      <span className="rating-badge__count">
        {count}
        {live ? '' : '+'} Google reviews
      </span>
    </a>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function ReviewCard({ r }) {
  const [expanded, setExpanded] = useState(false);
  const long = r.text.length > 260;
  const text = !long || expanded ? r.text : `${r.text.slice(0, 260).trimEnd()}…`;
  return (
    <article className="review">
      <header className="review__head">
        {r.photo ? (
          <img className="review__avatar" src={r.photo} alt="" width="40" height="40" loading="lazy" referrerPolicy="no-referrer" />
        ) : (
          <span className="review__avatar review__avatar--ph" aria-hidden="true">{r.author[0]}</span>
        )}
        <div>
          {r.authorUrl ? (
            <a className="review__author" href={r.authorUrl} target="_blank" rel="noopener nofollow">{r.author}</a>
          ) : (
            <span className="review__author">{r.author}</span>
          )}
          <div className="review__meta">
            <Stars value={r.rating} size={14} />
            {r.when ? <span>{r.when}</span> : null}
          </div>
        </div>
      </header>
      {r.text ? <p className="review__text">{text}</p> : null}
      {long ? (
        <button type="button" className="link-btn" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
      ) : null}
    </article>
  );
}

/**
 * Live Google reviews. Server-rendered HTML shows the dated rating summary + links (crawlable, no CLS);
 * once the section scrolls into view, the browser fetches live data from Google and renders the latest reviews.
 */
export default function GoogleReviews({ heading = 'What our patients say on Google', headingLevel = 2 }) {
  const ref = useRef(null);
  const s = reviewsStore.useLoadWhenVisible(ref);
  const { rating, count, live } = useRatingSummary();
  const H = `h${headingLevel}`;

  const reviews = s.status === 'ready' ? s.data.reviews : [];

  return (
    <section className="section section--tint" aria-labelledby="reviews-title" ref={ref}>
      <div className="container">
        <div className="reviews-head">
          <div>
            <p className="eyebrow">Patient reviews</p>
            <H id="reviews-title" className="section__title">{heading}</H>
          </div>
          <div className="reviews-summary">
            <div className="reviews-summary__score">
              <span className="reviews-summary__num">{rating.toFixed(1)}</span>
              <div>
                <Stars value={rating} size={20} />
                <p className="reviews-summary__count">
                  Based on {count}
                  {live ? '' : '+'} Google reviews
                </p>
              </div>
            </div>
            <div className="reviews-summary__actions">
              <a href={site.google.reviewsUrl} target="_blank" rel="noopener" className="btn btn--outline btn--sm">
                Read all reviews <Icon name="external" size={14} />
              </a>
              <a href={site.google.writeReviewUrl} target="_blank" rel="noopener" className="btn btn--primary btn--sm">
                Write a review
              </a>
            </div>
          </div>
        </div>

        <p className="reviews-intro">
          Patients most often mention our <strong>supportive doctors</strong>, <strong>polite and cooperative staff</strong> and
          care for procedures such as <strong>kidney stone treatment</strong> and <strong>fissure surgery</strong>. Read every review — and
          share your own experience — on our Google Business Profile.
        </p>

        {s.status === 'idle' || s.status === 'loading' ? (
          <div className="reviews-grid" aria-busy="true" aria-label="Loading reviews from Google">
            {[0, 1, 2].map((i) => <div key={i} className="review review--skeleton" />)}
          </div>
        ) : null}

        {reviews.length ? (
          <>
            <div className="reviews-grid">
              {reviews.map((r, i) => <ReviewCard key={`${r.author}-${i}`} r={r} />)}
            </div>
            <p className="reviews-attrib">
              <GoogleG /> Live reviews from Google. Reviews are the opinions of individual patients and are shown unedited.
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
}

import { site } from '../config/site.js';

/** Text logo. Replace with the hospital's official logo artwork when available (see MISSING-INFO.md). */
export default function Logo({ inverted = false }) {
  return (
    <span className={`logo${inverted ? ' logo--inverted' : ''}`}>
      <svg className="logo__mark" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <rect width="40" height="40" rx="11" fill="currentColor" />
        <path d="M16.5 9h7v7.5H31v7h-7.5V31h-7v-7.5H9v-7h7.5z" fill="#fff" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">Gurudev</span>
        <span className="logo__sub">Multi-Speciality Hospital</span>
      </span>
      <span className="sr-only">{site.name}, Badlapur East — home</span>
    </span>
  );
}

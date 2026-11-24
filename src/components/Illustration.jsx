/**
 * Original medical illustrations (drawn for this site, no licensing needed) used on speciality and
 * treatment cards. Flat, brand-coloured, decorative (aria-hidden): the card text carries the meaning.
 * No gradients/ids, so many can appear on one page without id clashes.
 */

const C = {
  teal: '#0b5e73',
  tealLight: '#5fb8c9',
  mint: '#3ddc97',
  mintSoft: '#c9f2e3',
  bg: '#ecf6f8',
  organ: '#e8705f',
  organSoft: '#f6b0a4',
  pink: '#f4a7b9',
  pinkDeep: '#d8647f',
  skin: '#f3c9a3',
  bone: '#fff6e6',
  white: '#ffffff',
  yellow: '#f5c443',
  steel: '#d3e4ea',
  red: '#d94b3d',
};

const S = { stroke: C.teal, strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

// `compact` (small sizes such as menu icons): plain circle, no decorative dots, so the subject stays legible.
const Bg = ({ compact }) => (
  <>
    <circle cx="48" cy="48" r="44" fill={C.bg} />
    {compact ? null : (
      <>
        <circle cx="80" cy="18" r="5" fill={C.mintSoft} />
        <circle cx="14" cy="30" r="3" fill={C.mintSoft} />
        <path d="M16 74h8M20 70v8" stroke={C.mint} strokeWidth="2.5" strokeLinecap="round" />
      </>
    )}
  </>
);

// Large intestine + rectum, shared by the three ano-rectal illustrations (each adds its own highlight).
const rectum = (
  <>
    <path d={'M30 72V42c0-9 7-14 18-14s18 5 18 14v20c0 6-5 8-10 8'} stroke="#f6b0a4" strokeWidth="11" strokeLinecap="round" fill="none" />
    <path d="M56 70c-4 0-8 2-8 8" stroke="#f6b0a4" strokeWidth="11" strokeLinecap="round" fill="none" />
    <path d={'M30 72V42c0-9 7-14 18-14s18 5 18 14v20c0 6-5 8-10 8'} stroke="#0b5e73" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="2 5" />
  </>
);

const kidneyL = 'M33 28c-9 0-14 8-14 17s5 17 13 17c5 0 8-4 8-8s-3-5-3-9 3-4 3-8-2-9-7-9z';
const kidneyR = 'M63 28c9 0 14 8 14 17s-5 17-13 17c-5 0-8-4-8-8s3-5 3-9-3-4-3-8 2-9 7-9z';
const boneG = (
  <>
    <circle cx="27" cy="42" r="7" fill={C.bone} {...S} />
    <circle cx="27" cy="54" r="7" fill={C.bone} {...S} />
    <circle cx="69" cy="42" r="7" fill={C.bone} {...S} />
    <circle cx="69" cy="54" r="7" fill={C.bone} {...S} />
    <rect x="26" y="43" width="44" height="10" fill={C.bone} stroke="none" />
    <path d="M30 43h36M30 53h36" {...S} />
  </>
);
const colon = 'M30 72V42c0-9 7-14 18-14s18 5 18 14v20c0 6-5 8-10 8';

const ART = {
  surgery: (
    <>
      <path d="M28 68 52 44" stroke={C.teal} strokeWidth="8" strokeLinecap="round" />
      <path d="M52 44l14-14c4 2 5 7 1 11L56 52z" fill={C.steel} {...S} />
      <path d="M70 70 40 40" stroke={C.tealLight} strokeWidth="4" strokeLinecap="round" />
      <circle cx="71" cy="71" r="6" fill={C.teal} />
      <circle cx="39" cy="39" r="3" fill={C.yellow} />
    </>
  ),
  emergency: (
    <>
      <rect x="18" y="38" width="44" height="26" rx="4" fill={C.white} {...S} />
      <path d="M62 46h8l8 9v9H62z" fill={C.white} {...S} />
      <path d="M65 49h5l5 6h-10z" fill={C.tealLight} />
      <path d="M36 44v14M29 51h14" stroke={C.red} strokeWidth="4" strokeLinecap="round" />
      <rect x="36" y="31" width="10" height="7" rx="2" fill={C.red} />
      <circle cx="30" cy="65" r="5.5" fill={C.teal} />
      <circle cx="68" cy="65" r="5.5" fill={C.teal} />
      <path d="M50 26l3-4M41 25v-5M32 26l-3-4" stroke={C.red} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  kidney: (
    <>
      <path d={kidneyL} fill={C.organ} {...S} />
      <path d={kidneyR} fill={C.organ} {...S} />
      <path d="M38 52c3 8 6 12 10 16M58 52c-3 8-6 12-10 16" stroke={C.organSoft} strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="48" cy="72" rx="7" ry="5" fill={C.organSoft} {...S} />
    </>
  ),
  kidneyStone: (
    <>
      <path d={kidneyL} fill={C.organ} {...S} />
      <path d={kidneyR} fill={C.organ} {...S} />
      <circle cx="29" cy="40" r="3" fill={C.yellow} />
      <circle cx="26" cy="49" r="2" fill={C.yellow} />
      <circle cx="68" cy="45" r="3" fill={C.yellow} />
      <path d="M38 52c3 8 6 12 10 16M58 52c-3 8-6 12-10 16" stroke={C.organSoft} strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="44" cy="62" r="2.5" fill={C.yellow} />
    </>
  ),
  bone: <g transform="rotate(-35 48 48)">{boneG}</g>,
  fracture: (
    <>
      <g transform="rotate(-35 48 48)">{boneG}</g>
      <path d="M44 36l6 6-5 4 7 6-3 5" stroke={C.red} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M62 26l4-4M68 32l5-2" stroke={C.red} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  uterus: (
    <>
      <path d="M48 32c-10 0-15 6-15 14 0 9 7 13 11 21h8c4-8 11-12 11-21 0-8-5-14-15-14z" fill={C.pink} {...S} />
      <path d="M34 40c-6-6-11-6-15-2M62 40c6-6 11-6 15-2" stroke={C.pinkDeep} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="18" cy="41" r="4.5" fill={C.pinkDeep} />
      <circle cx="78" cy="41" r="4.5" fill={C.pinkDeep} />
      <rect x="44" y="67" width="8" height="8" rx="2" fill={C.pink} {...S} />
      <path d="M44 46c2 3 6 3 8 0" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </>
  ),
  baby: (
    <>
      <path d="M30 56c0-10 8-16 18-16s18 6 18 16-8 18-18 18-18-8-18-18z" fill={C.tealLight} {...S} />
      <path d="M36 56c6 4 18 4 24 0" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="48" cy="36" r="11" fill={C.skin} {...S} />
      <circle cx="44" cy="36" r="1.5" fill={C.teal} />
      <circle cx="52" cy="36" r="1.5" fill={C.teal} />
      <path d="M45 41c2 1.5 4 1.5 6 0" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M72 30c-2-3-7-2-7 2 0 3 4 5 7 8 3-3 7-5 7-8 0-4-5-5-7-2z" fill={C.organ} />
    </>
  ),
  stomach: (
    <>
      <path d="M42 18v10" stroke={C.organSoft} strokeWidth="6" strokeLinecap="round" />
      <path d="M42 28c0 8 2 12-2 18-6 8-7 21 4 25 12 4 25-2 29-12 3-8-2-14-8-14-6 0-8 6-13 4-5-2-3-10-3-21z" fill={C.organ} {...S} />
      <path d="M50 58c4 2 10 1 13-3" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </>
  ),
  ear: (
    <>
      <path d="M52 22c-12 0-20 9-20 20 0 7 3 10 6 13s2 8 6 11c4 3 10 1 12-4 2-4 5-6 8-10s6-8 6-14c0-9-8-16-18-16z" fill={C.skin} {...S} />
      <path d="M46 36c4-4 11-2 12 4 1 4-2 6-4 8-2 1-2 4-1 6" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M76 38c3 4 3 10 0 14M82 33c6 7 6 18 0 25" stroke={C.mint} strokeWidth="3" strokeLinecap="round" fill="none" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M32 20v14c0 10 7 17 15 17s15-7 15-17V20" stroke={C.teal} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="19" r="3" fill={C.teal} />
      <circle cx="62" cy="19" r="3" fill={C.teal} />
      <path d="M47 51v6c0 9 6 14 13 14s11-5 11-11v-4" stroke={C.tealLight} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="71" cy="51" r="8" fill={C.steel} {...S} />
      <circle cx="71" cy="51" r="3" fill={C.teal} />
    </>
  ),
  teddy: (
    <>
      <circle cx="33" cy="33" r="8" fill="#c98b52" {...S} />
      <circle cx="63" cy="33" r="8" fill="#c98b52" {...S} />
      <circle cx="48" cy="51" r="20" fill="#d9a066" {...S} />
      <ellipse cx="48" cy="58" rx="9" ry="7" fill="#f3d3a5" />
      <circle cx="41" cy="47" r="2" fill={C.teal} />
      <circle cx="55" cy="47" r="2" fill={C.teal} />
      <path d="M45 56h6l-3 3z" fill={C.teal} />
      <rect x="52" y="34" width="14" height="6" rx="3" fill={C.white} stroke={C.tealLight} strokeWidth="1.5" transform="rotate(-25 59 37)" />
    </>
  ),
  brain: (
    <>
      <path d="M47 26c-6-4-14-1-15 5-6 1-9 7-7 12-4 4-3 11 2 13 0 6 6 10 12 8 3 3 8 2 8-2z" fill={C.pink} stroke={C.pinkDeep} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M49 26c6-4 14-1 15 5 6 1 9 7 7 12 4 4 3 11-2 13 0 6-6 10-12 8-3 3-8 2-8-2z" fill={C.pink} stroke={C.pinkDeep} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M35 40c4 0 6 3 6 6M33 52c4-1 8 1 9 4M61 40c-4 0-6 3-6 6M63 52c-4-1-8 1-9 4" stroke={C.pinkDeep} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M48 70v8" stroke={C.pinkDeep} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  dialysis: (
    <>
      <path d="M36 24c-8 12-13 18-13 26a13 13 0 0 0 26 0c0-8-5-14-13-26z" fill={C.organ} {...S} />
      <path d="M30 52a6 6 0 0 0 6 6" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <rect x="60" y="26" width="13" height="40" rx="6.5" fill={C.steel} {...S} />
      <path d="M60 36h13M60 46h13M60 56h13" stroke={C.tealLight} strokeWidth="2" />
      <path d="M49 50c6 0 6-14 11-14M60 60c-6 0-8 10-14 10" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </>
  ),
  hernia: (
    <>
      <path d="M30 22c-2 14-4 22-4 32 0 12 9 20 22 20s22-8 22-20c0-10-2-18-4-32" fill={C.skin} {...S} />
      <circle cx="48" cy="44" r="1.8" fill={C.teal} />
      <rect x="50" y="54" width="16" height="13" rx="3" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <path d="M50 58.5h16M50 63h16M55 54v13M61 54v13" stroke={C.mint} strokeWidth="1.5" />
    </>
  ),
  gallbladder: (
    <>
      <path d="M20 36c10-8 34-12 54-6 6 2 6 8 2 12-8 8-26 10-40 8-10-2-20-6-16-14z" fill="#c4574a" {...S} />
      <path d="M50 50c-2 8 0 16 7 18 7 2 11-4 10-11-1-5-5-8-10-9" fill="#7cc47f" {...S} />
      <circle cx="58" cy="60" r="2.5" fill={C.yellow} />
      <circle cx="63" cy="57" r="2" fill={C.yellow} />
    </>
  ),
  appendix: (
    <>
      <path d={colon} stroke={C.organSoft} strokeWidth="11" strokeLinecap="round" fill="none" />
      <path d={colon} stroke={C.teal} strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="2 5" />
      <path d="M30 74c-2 6-6 9-11 7" stroke={C.red} strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="19" cy="81" r="6" fill="none" stroke={C.red} strokeWidth="1.5" strokeDasharray="2 3" />
    </>
  ),
  colon: (
    <>
      <path d={colon} stroke={C.organSoft} strokeWidth="11" strokeLinecap="round" fill="none" />
      <path d="M56 70c-4 0-8 2-8 8" stroke={C.organSoft} strokeWidth="11" strokeLinecap="round" fill="none" />
      <path d={colon} stroke={C.teal} strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="2 5" />
      <circle cx="48" cy="80" r="7" fill="none" stroke={C.red} strokeWidth="2" />
      <path d="M44 80h8M48 76v8" stroke={C.red} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  // Piles: cluster of swollen vessels at the anal end
  piles: (
    <>
      {rectum}
      <circle cx="41" cy="83" r="5" fill={C.organ} {...S} strokeWidth="1.8" />
      <circle cx="55" cy="83" r="5" fill={C.organ} {...S} strokeWidth="1.8" />
      <circle cx="48" cy="88" r="4.5" fill={C.organ} {...S} strokeWidth="1.8" />
    </>
  ),
  // Fissure: a small tear (zig-zag) at the anal end
  fissure: (
    <>
      {rectum}
      <circle cx="48" cy="84" r="8" fill={C.white} {...S} strokeWidth="2" />
      <path d="M45 78l4 3-3 3 4 3-2 3" stroke={C.red} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  // Fistula: a tunnel branching from the anal canal to the skin
  fistula: (
    <>
      {rectum}
      <path d="M50 80c7 1 13-1 18 6" stroke={C.red} strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" fill="none" />
      <circle cx="70" cy="88" r="4" fill={C.red} />
      <circle cx="48" cy="81" r="3" fill={C.white} stroke={C.red} strokeWidth="2" />
    </>
  ),
  endoscope: (
    <>
      <path d="M42 34c0 8 2 12-2 18-6 8-7 21 4 25 12 4 25-2 29-12 3-8-2-14-8-14-6 0-8 6-13 4-5-2-3-10-3-21z" fill={C.organSoft} opacity="0.7" {...S} />
      <path d="M20 14c10 4 22 6 22 18 0 10-2 14-2 20 0 6 6 10 12 8" stroke={C.teal} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="53" cy="60" r="3.5" fill={C.yellow} />
      <path d="M58 57l6-3M58 62l7 1" stroke={C.yellow} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  liver: (
    <>
      <path d="M18 40c12-12 40-16 60-8 6 3 5 10 0 14-10 10-30 14-44 12-12-2-22-8-16-18z" fill="#c4574a" {...S} />
      <path d="M48 32c2 8 0 16-4 24" stroke="#e58b80" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M68 54c-5 8-8 12-8 16a8 8 0 0 0 16 0c0-4-3-8-8-16z" fill={C.yellow} {...S} />
    </>
  ),
  fluid: (
    <>
      <path d="M44 20c-11 16-18 24-18 34a18 18 0 0 0 36 0c0-10-7-18-18-34z" fill={C.tealLight} {...S} />
      <path d="M32 56c4 3 8 3 12 0s8-3 12 0" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M64 70 78 56" stroke={C.teal} strokeWidth="6" strokeLinecap="round" />
      <path d="M78 56l6-6c2 2 2 5 0 7l-4 3z" fill={C.steel} {...S} />
    </>
  ),
};

/** Which illustration each speciality / treatment uses. */
export const ILLUSTRATION_FOR = {
  'general-laparoscopic-surgery': 'surgery',
  'emergency-trauma-care': 'emergency',
  urology: 'kidney',
  orthopaedics: 'bone',
  'gynaecology-obstetrics': 'uterus',
  gastroenterology: 'stomach',
  ent: 'ear',
  'general-medicine': 'stethoscope',
  paediatrics: 'teddy',
  neurology: 'brain',
  dialysis: 'dialysis',
  'hernia-surgery': 'hernia',
  'gallbladder-stone-surgery': 'gallbladder',
  'appendix-surgery': 'appendix',
  'piles-treatment': 'piles',
  'fissure-treatment': 'fissure',
  'fistula-treatment': 'fistula',
  'kidney-stone-treatment': 'kidneyStone',
  'hydrocele-surgery': 'fluid',
  endoscopy: 'endoscope',
  'fracture-treatment': 'fracture',
  'maternity-delivery-care': 'baby',
  'jaundice-hepatitis-treatment': 'liver',
};

export default function Illustration({ slug, name, size = 72, className = '', compact = size < 48 }) {
  const key = name || ILLUSTRATION_FOR[slug];
  const art = ART[key];
  if (!art) return null;
  return (
    <svg
      className={`illus ${className}`}
      width={size}
      height={size}
      viewBox="0 0 96 96"
      aria-hidden="true"
      focusable="false"
    >
      <Bg compact={compact} />
      {art}
    </svg>
  );
}

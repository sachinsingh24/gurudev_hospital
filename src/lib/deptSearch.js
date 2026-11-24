/**
 * Department / treatment search for the Specialities page.
 *
 * - Matches the start of words ("ston" finds "stone"), ignores case, accents and punctuation,
 *   and treats singular/plural alike ("kidney stones" = "kidney stone").
 * - Every meaningful word of the query must match ("kidney pain" ≠ every page that mentions pain).
 * - Everyday English / Hindi / Marathi words also match the terms used on the site ("pathri" → stone).
 * - The basic index (names, short descriptions, treatment symptoms) is always available; the detail-page
 *   content (conditions, services, symptoms, keywords) is added once it has loaded, so the Specialities
 *   page's own download stays small.
 */

// Words that carry no meaning for the search ("piles doctor in Badlapur" → "piles").
const STOP = new Set([
  'a', 'an', 'and', 'the', 'of', 'in', 'on', 'for', 'to', 'with', 'my', 'me', 'near', 'best', 'good', 'top',
  'doctor', 'doctors', 'dr', 'hospital', 'clinic', 'specialist', 'badlapur', 'east', 'west', 'thane',
  'treatment', 'treatments', 'ka', 'ki', 'ke', 'ilaj', 'upchar', 'problem', 'problems',
]);

// Extra words a search term should also find (the term itself always counts too).
const ALSO = {
  pathri: ['stone'], pathari: ['stone'], mutkhada: ['stone'],
  pregnant: ['pregnancy'], garbh: ['pregnancy'], garbhavastha: ['pregnancy'], prasuti: ['delivery'], labor: ['labour', 'delivery'],
  cesarean: ['caesarean'], csection: ['caesarean'], lscs: ['caesarean'],
  kid: ['child'], children: ['child'], baby: ['child', 'newborn'], infant: ['child', 'newborn'], bacha: ['child'],
  sugar: ['diabetes'], bp: ['blood pressure'], hypertension: ['blood pressure'],
  accident: ['trauma', 'injury'], broken: ['fracture'], haddi: ['bone', 'fracture'],
  gall: ['gallbladder'], pitta: ['gallbladder'],
  pet: ['abdominal', 'stomach'], stomach: ['abdominal'], tummy: ['abdominal', 'stomach'], belly: ['abdominal', 'stomach'], abdomen: ['abdominal'], dard: ['pain'],
  bukhar: ['fever'], taap: ['fever'], jwar: ['fever'],
  kamla: ['jaundice'], piliya: ['jaundice'], kavil: ['jaundice'],
  haemorrhoid: ['piles'], hemorrhoid: ['piles'],
  appendicitis: ['appendix'], appendix: ['appendicitis'],
  bawaseer: ['piles'], bavasir: ['piles'], mulvyadh: ['piles'], bhagandar: ['fistula'],
  icu: ['critical care', 'intensive care'],
  keyhole: ['laparoscopic'], laparoscopy: ['laparoscopic'],
  urine: ['urinary'], peshab: ['urine', 'urinary'],
  kaan: ['ear'], naak: ['nose'], gala: ['throat'],
  paralysis: ['stroke'], lakwa: ['stroke', 'paralysis'], fit: ['seizure'], mirgi: ['seizure'], epilepsy: ['seizure'],
};

const normalise = (s) =>
  String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/c-section/g, 'csection')
    .replace(/gall bladder/g, 'gallbladder')
    .replace(/[^a-z0-9\u0900-\u097f]+/g, ' ')
    .trim();

// Light stemming, applied to both the query and the content: plurals → the same stem (stones → stone,
// injuries → injury); words ending in -ss keep their ending.
const stem = (w) => (w.length > 3 ? w.replace(/ies$/, 'y').replace(/([^s])s$/, '$1') : w);
const stems = (s) => normalise(s).split(' ').filter(Boolean).map(stem).join(' ');

/** Query → one entry per meaningful word, each a list of alternatives (any one may match). */
export function queryTerms(q) {
  return normalise(q)
    .split(' ')
    .filter((w) => w && !STOP.has(w))
    .map((w) => [stem(w), ...(ALSO[w] || ALSO[stem(w)] || []).map(stems)]);
}

/** Text → " stem stem stem " (spaces at the ends, so a term matches only at the start of a word). */
export const toHaystack = (...parts) => ` ${parts.flat(Infinity).filter(Boolean).map(stems).join(' ')} `;

/**
 * Every query word must match (any of its alternatives) at the start of a word. Short words (≤ 3 letters,
 * e.g. "ear", "bp", "kid") must match a whole word, so "ear" doesn't find "early" and "kid" doesn't find "kidney".
 */
const hit = (haystack, a) => haystack.includes(a.length <= 3 ? ` ${a} ` : ` ${a}`);
export const matches = (haystack, terms) => terms.length > 0 && terms.every((alts) => alts.some((a) => hit(haystack, a)));

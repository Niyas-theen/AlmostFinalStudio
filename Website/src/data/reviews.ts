/**
 * Client reviews. SINGLE SOURCE OF TRUTH for the home-page "Real Success, Real Stories" section.
 *
 * AUTHENTICITY RULES (enforced in `getReviews`):
 *  - Only entries with `authentic: true` AND a name, rating (1-5) and text are ever shown in production.
 *  - Never invent names, ratings, text, dates or Google verification. Copy real reviews verbatim.
 *  - Use `source: 'google'` only for reviews genuinely posted on Google; the Google label/logo appears only then.
 *  - No aggregate rating or total review count is shown anywhere.
 *  - In the dev server (`astro dev`) empty slots are filled with clearly labelled SAMPLE cards for design preview only.
 *    They never appear in a production build.
 */
export type ReviewSource = 'google' | 'direct';

export interface Review {
  id: string;
  /** Reviewer name exactly as published. */
  name: string;
  /** 1-5. */
  rating: number;
  /** The review text, verbatim. */
  text: string;
  /** Display date, only if known (e.g. "March 2026"). */
  date?: string;
  source: ReviewSource;
  /** Set to true ONLY for a genuine review you have permission to display. */
  authentic: boolean;
  /** Optional link to the original review. */
  url?: string;
}

/** Seven clearly marked placeholder slots. Fill them in with real reviews and set `authentic: true`. */
const slot = (n: number): Review => ({ id: `review-${n}`, name: '', rating: 0, text: '', source: 'google', authentic: false });

export const reviews: Review[] = [1, 2, 3, 4, 5, 6, 7].map(slot);

/* Example of a real entry (keep commented until a genuine review is supplied):
   { id: 'review-1', name: '<reviewer name>', rating: 5, text: '<review text>', date: '<Month YYYY>', source: 'google', authentic: true, url: '<link>' },
*/

export const reviewsHeading = 'Real Success, Real Stories';
export const reviewsSubtitle = 'Experiences shared by the people we’ve had the opportunity to work with.';

/** Dev-only preview content. NEVER shown in production. */
const samples: Pick<Review, 'text' | 'rating'>[] = [
  { rating: 5, text: 'Sample review text. This card only previews the layout and typography. It is not real client feedback.' },
  { rating: 5, text: 'Sample review text. Replace this slot with an authentic review in src/data/reviews.ts to publish it.' },
  { rating: 4, text: 'Sample review text, a little longer, to preview how a multi-line review wraps inside the card and where it is clamped.' },
  { rating: 5, text: 'Sample review text. Names, ratings and dates here are placeholders and carry no meaning.' },
  { rating: 5, text: 'Sample review text. The Google label is not shown on samples because they are not Google reviews.' },
  { rating: 5, text: 'Sample review text. A shorter sample.' },
  { rating: 4, text: 'Sample review text. Seven slots are previewed so the two scrolling rows can be judged.' },
];

export interface DisplayReview extends Review { sample?: boolean; }

const isPublishable = (r: Review) => r.authentic && r.name.trim() !== '' && r.text.trim() !== '' && r.rating >= 1 && r.rating <= 5;

/** Reviews to render. In production only authentic, complete entries. In dev, empty slots get labelled samples. */
export function getReviews(isDev: boolean): { items: DisplayReview[]; hasSamples: boolean } {
  const real: DisplayReview[] = reviews.filter(isPublishable);
  if (!isDev) return { items: real, hasSamples: false };
  const items: DisplayReview[] = [...real];
  for (let i = real.length; i < 7; i++) {
    items.push({ id: `sample-${i + 1}`, name: `Sample client ${i + 1}`, source: 'direct', authentic: false, sample: true, ...samples[i] });
  }
  return { items, hasSamples: items.some((r) => r.sample) };
}

/**
 * Photo registry. Files live in public/images/cards, public/images/banners.
 * `pos` / `posM` are object-position focal points (desktop/tablet and phone), so crops keep the subject.
 * `w`/`h` are the intrinsic pixel size of the large file (used for width/height attributes and aspect ratio).
 */
export interface Photo { w: number; h: number; pos: string; posM: string; alt: string; }

export const cardPhotos: Record<string, Photo> = {
  'graphic-design': { w: 1600, h: 533, pos: '50% 12%', posM: '88% 30%', alt: 'A designer unrolls a paper scroll that becomes a navy-to-green colour ribbon, with a brand sheet, swatches and a pencil.' },
  'fashion-design': { w: 1600, h: 900, pos: '50% 50%', posM: '30% 50%', alt: 'A fashion designer sketching menswear at a studio desk, with a mannequin, fabric swatches and a moodboard.' },
  'ui-ux-design': { w: 1600, h: 900, pos: '50% 50%', posM: '50% 50%', alt: 'A UI/UX workspace with a laptop, tablet wireframes, a phone and floating interface elements in soft purple.' },
  'website-development': { w: 1600, h: 900, pos: '58% 50%', posM: '58% 50%', alt: 'A desktop monitor showing a website design beside floating code and layout panels.' },
  'mobile-app-development': { w: 1600, h: 900, pos: '50% 50%', posM: '50% 50%', alt: 'Two smartphones showing app screens on a pedestal, with floating charts and media cards.' },
  'video-editing': { w: 1600, h: 900, pos: '40% 50%', posM: '38% 50%', alt: 'A video editor with headphones at a monitor showing a timeline, with a film strip, clapperboard and light.' },
  'social-media-marketing': { w: 1600, h: 400, pos: '50% 50%', posM: '47% 50%', alt: 'A social media manager at a laptop in a calm green studio, with a content calendar, floating like and message icons, and a phone showing a feed.' },
};

/** Photo for the "Build your stack" card (full-bleed background, portrait). */
export const stackPhoto = { w: 1122, h: 1402, pos: '50% 92%', posM: '50% 55%', alt: '' };

/** Service-page banners (16:7 crop). Falls back to the card photo when no banner-specific file exists. */
export const bannerPhotos: Record<string, Photo & { file?: string; file1200?: string }> = {
  'graphic-design': { file: '/images/banners/graphic-design.webp', file1200: '/images/banners/graphic-design-1200.webp', w: 2172, h: 724, pos: '90% 40%', posM: '90% 40%', alt: 'A designer unrolls a long paper scroll that becomes a navy-to-green colour ribbon, with a brand identity sheet, swatches and a pencil.' },
  'fashion-design': { ...cardPhotos['fashion-design'], pos: '50% 38%', posM: '30% 38%' },
  'ui-ux-design': { ...cardPhotos['ui-ux-design'], pos: '50% 60%', posM: '50% 60%' },
  'website-development': { ...cardPhotos['website-development'], pos: '50% 55%', posM: '55% 55%' },
  'mobile-app-development': { ...cardPhotos['mobile-app-development'], pos: '50% 50%', posM: '50% 50%' },
  'video-editing': { ...cardPhotos['video-editing'], pos: '50% 45%', posM: '40% 45%' },
  'social-media-marketing': { ...cardPhotos['social-media-marketing'], pos: '47% 50%', posM: '47% 50%' },
};

export const aboutPhoto = { w: 1672, h: 941, alt: 'A designer at a studio desk, thinking over a moodboard of colour swatches, paper textures and design references.' };

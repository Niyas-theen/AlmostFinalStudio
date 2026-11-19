/** Art direction for the editorial collage posters (viewBox 800x600). Cutout sits right of centre. */
export interface PosterArt { bg: string; accent: string; shapes: string; }

const bars = ['#273674', '#1d4a6e', '#316564', '#3c785c', '#478f53', '#56a54b', '#7fc467', '#b4daa0', '#edf6e8'];

export const posterArt: Record<string, PosterArt> = {
  'graphic-design': {
    bg: '#e4f1e8', accent: '#68bd6b',
    shapes: `<circle cx="250" cy="170" r="110" fill="#68bd6b"/>` +
      bars.map((c, i) => `<rect x="${40 + i * 34}" y="${520 - (60 + i * 38)}" width="26" height="${60 + i * 38}" rx="4" fill="${c}"/>`).join('') +
      `<g transform="translate(150 470) rotate(-18)">${['#0b263d', '#075392', '#3a8b7e', '#68bd6b', '#edf6e8'].map((c, i) => `<rect x="${i * 20}" y="-110" width="40" height="120" rx="8" fill="${c}" transform="rotate(${i * 14} 0 0)"/>`).join('')}</g>`,
  },
  'fashion-design': {
    bg: '#e8e0f4', accent: '#e1457a',
    shapes: `<circle cx="520" cy="330" r="230" fill="#e1457a"/>` +
      `<path d="M60 420 c80 -90 160 60 240 -30 s120 60 200 -20" fill="none" stroke="#6a2fb3" stroke-width="5" stroke-dasharray="2 12" stroke-linecap="round"/>` +
      `<g transform="rotate(-35 150 200)"><rect x="60" y="196" width="250" height="8" rx="4" fill="#0b263d"/><ellipse cx="88" cy="200" rx="6" ry="3" fill="#e8e0f4"/></g>`,
  },
  'ui-ux-design': {
    bg: '#ede7ff', accent: '#7a4bd6',
    shapes: `<circle cx="540" cy="300" r="210" fill="#7a4bd6"/>` +
      `<rect x="50" y="90" width="220" height="130" rx="22" fill="#fff" transform="rotate(-6 160 155)"/><rect x="70" y="112" width="110" height="12" rx="6" fill="#c9b6ee" transform="rotate(-6 160 155)"/><rect x="70" y="140" width="160" height="10" rx="5" fill="#e6dcfa" transform="rotate(-6 160 155)"/>` +
      `<rect x="80" y="330" width="200" height="120" rx="22" fill="#ff7ab6" transform="rotate(5 180 390)"/>` +
      `<path d="M330 150 l0 70 l18 -16 l16 34 l14 -6 l-16 -33 l24 -3z" fill="#111"/>`,
  },
  'website-development': {
    bg: '#fbf0c9', accent: '#ff7a3d',
    shapes: `<circle cx="560" cy="170" r="120" fill="#ff7a3d"/>` +
      `<g transform="rotate(-4 220 260)"><rect x="40" y="110" width="400" height="280" rx="20" fill="#fff"/><rect x="40" y="110" width="400" height="36" rx="18" fill="#f0e6dc"/><circle cx="64" cy="128" r="5" fill="#ff6b5b"/><circle cx="82" cy="128" r="5" fill="#ffc044"/><circle cx="100" cy="128" r="5" fill="#4cd07d"/><rect x="66" y="170" width="190" height="22" rx="8" fill="#0b263d"/><rect x="66" y="204" width="150" height="22" rx="8" fill="#0b263d"/><rect x="290" y="168" width="120" height="120" rx="18" fill="#ffd166"/></g>` +
      `<g stroke="#0b263d" stroke-width="6" stroke-linecap="round"><path d="M70 560 L150 330"/><path d="M130 560 L210 330"/>${[0, 1, 2, 3].map((i) => `<path d="M${88 + i * 18} ${510 - i * 60} L${150 + i * 18} ${510 - i * 60}"/>`).join('')}</g>`,
  },
  'mobile-app-development': {
    bg: '#d4f1ee', accent: '#1fd1c1',
    shapes: `<circle cx="540" cy="320" r="210" fill="#1fd1c1"/>` +
      `<g transform="rotate(-8 170 300)"><rect x="70" y="110" width="200" height="400" rx="38" fill="#0a1a2b"/><rect x="82" y="124" width="176" height="372" rx="28" fill="#f1fbfa"/><rect x="102" y="160" width="136" height="80" rx="16" fill="#38d6c4"/><rect x="102" y="260" width="136" height="42" rx="12" fill="#fff"/><rect x="102" y="314" width="136" height="42" rx="12" fill="#fff"/></g>` +
      `<circle cx="330" cy="130" r="28" fill="#ff7ab6"/><circle cx="360" cy="210" r="18" fill="#ffd166"/><circle cx="310" cy="480" r="22" fill="#7a4bd6"/>`,
  },
  'video-editing': {
    bg: '#fbe3d2', accent: '#ff7a3d',
    shapes: `<circle cx="540" cy="300" r="215" fill="#ff7a3d"/>` +
      `<g transform="rotate(-14 200 380)"><rect x="-20" y="330" width="560" height="110" fill="#1b0f2b"/>${Array.from({ length: 16 }).map((_, i) => `<rect x="${i * 34}" y="338" width="16" height="12" rx="3" fill="#fbe3d2"/><rect x="${i * 34}" y="420" width="16" height="12" rx="3" fill="#fbe3d2"/>`).join('')}${[0, 1, 2, 3].map((i) => `<rect x="${12 + i * 132}" y="358" width="116" height="56" rx="6" fill="${['#ffd166', '#38d6c4', '#ff7ab6', '#7a4bd6'][i]}"/>`).join('')}</g>` +
      `<circle cx="170" cy="170" r="62" fill="#fff"/><path d="M152 138 L204 170 L152 202z" fill="#e0382f"/>`,
  },
  'social-media-marketing': {
    bg: '#fbddea', accent: '#ff4f9a',
    shapes: `<circle cx="540" cy="320" r="210" fill="#ff4f9a"/>` +
      `<g transform="rotate(-6 170 150)"><rect x="50" y="80" width="250" height="110" rx="30" fill="#fff"/><path d="M110 190 l-10 40 l46 -40z" fill="#fff"/><rect x="80" y="110" width="150" height="12" rx="6" fill="#222"/><rect x="80" y="136" width="110" height="10" rx="5" fill="#ccc"/></g>` +
      `<path d="M110 360 c-30 -40 -90 -8 -56 40 l56 52 56 -52 c34 -48 -26 -80 -56 -40z" fill="#e0245e"/>` +
      `<g transform="rotate(8 250 470)"><rect x="170" y="430" width="180" height="80" rx="26" fill="#7a4bd6"/><circle cx="215" cy="470" r="14" fill="#fff"/><rect x="242" y="462" width="90" height="12" rx="6" fill="#fff" opacity=".8"/></g>`,
  },
};

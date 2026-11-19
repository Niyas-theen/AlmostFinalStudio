export type LayerId = 'identity' | 'experience' | 'motion';

export interface Layer {
  id: LayerId;
  name: string;
  outcome: string;
}

export interface Service {
  slug: string;
  name: string;
  layer: LayerId;
  outcome: string;
  summary: string;
  includes: string[];
  steps: { title: string; text: string }[];
  model: string;
  related: string[];
  faq: { q: string; a: string }[];
  quoteOnly?: boolean;
}

export const layers: Layer[] = [
  { id: 'identity', name: 'Identity', outcome: 'A brand people recognise' },
  { id: 'experience', name: 'Experience', outcome: 'A product people use' },
  { id: 'motion', name: 'Motion & Reach', outcome: 'A brand people see and share' },
];

const stdSteps = (a: string, b: string, c: string) => [
  { title: 'Brief', text: a },
  { title: 'Build', text: b },
  { title: 'Deliver', text: c },
];

export const services: Service[] = [
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    layer: 'identity',
    outcome: 'A visual identity that is recognisable everywhere it appears.',
    summary: 'Logo and identity systems, visual language, packaging and marketing creatives.',
    includes: ['Logo and identity systems', 'Visual language and brand guidelines', 'Packaging design', 'Marketing creatives and templates'],
    steps: stdSteps('We agree goals, audience and the visual direction.', 'We design, refine and document the system.', 'You receive production-ready files and guidelines.'),
    model: 'Monthly subscription plus fixed-price packs.',
    related: ['social-media-marketing', 'fashion-design'],
    faq: [
      { q: 'Can I start with a single logo?', a: 'Yes. Start with one pack and add services in layers as the brand grows.' },
      { q: 'Who owns the final files?', a: 'Ownership terms are confirmed in the project agreement. Final terms are pending the studio’s legal review.' },
    ],
  },
  {
    slug: 'fashion-design',
    name: 'Fashion Design',
    layer: 'identity',
    outcome: 'Collections, tech packs and lookbooks delivered on a predictable monthly rhythm.',
    summary: 'Trend research, collections, silhouettes, tech packs, lookbooks and e-commerce mockups.',
    includes: ['Trend research', 'Collections and silhouettes', 'Tech packs', 'Lookbooks and e-commerce mockups'],
    steps: stdSteps('We define the season, customer and price point.', 'We design the collection and prepare technical documents.', 'You receive designs, tech packs and presentation assets.'),
    model: 'Subscription plans: Premium, Premium + and Pro.',
    related: ['video-editing', 'social-media-marketing'],
    faq: [
      { q: 'What counts as a design?', a: 'Each plan states its monthly design allowance. Detailed scope is confirmed before you subscribe.' },
      { q: 'Is revision included?', a: 'Revision rounds are stated per month in each plan. Exact figures are pending confirmation.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    layer: 'experience',
    outcome: 'Interfaces people understand on the first visit.',
    summary: 'Research, flows, wireframes, interface design, design systems and prototypes.',
    includes: ['User research and flows', 'Wireframes', 'Interface design', 'Design systems and prototypes'],
    steps: stdSteps('We map users, goals and key journeys.', 'We wireframe, design and prototype.', 'You receive tested designs and a system developers can use.'),
    model: 'Fixed-price sprints plus a design subscription (drafts).',
    related: ['website-development', 'mobile-app-development'],
    faq: [
      { q: 'How long is a design sprint?', a: 'The draft sprint is two weeks. Scope and price are pending confirmation.' },
      { q: 'Do you also build the product?', a: 'Yes. Website and mobile development follow naturally from the design.' },
    ],
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    layer: 'experience',
    outcome: 'A fast, accessible website your team can manage.',
    summary: 'Shopify stores and custom websites, built for speed, accessibility and search.',
    includes: ['Shopify store setup and theming', 'Custom website development', 'Performance and accessibility work', 'Launch and handover'],
    steps: stdSteps('We confirm scope, content and technical needs.', 'We design and build with regular previews.', 'We test, launch and hand over.'),
    model: 'Project pricing. Complex builds are quoted.',
    related: ['ui-ux-design', 'mobile-app-development'],
    faq: [
      { q: 'Shopify or custom?', a: 'Shopify suits most stores. Choose custom when you need bespoke features or content structures.' },
      { q: 'Are complex sites priced upfront?', a: 'Complex and enterprise work is quoted after a short scoping conversation.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    layer: 'experience',
    outcome: 'An app that moves from first idea to store launch.',
    summary: 'iOS, Android and cross-platform apps, from MVP to launch.',
    includes: ['Discovery workshop', 'iOS, Android and cross-platform builds', 'MVP scoping', 'Store submission'],
    steps: stdSteps('A discovery workshop defines scope and priorities.', 'We design and build in short, reviewable cycles.', 'We test and support store launch.'),
    model: 'Quote only.',
    related: ['ui-ux-design', 'website-development'],
    quoteOnly: true,
    faq: [
      { q: 'How is an app priced?', a: 'Every app is quoted. A paid discovery workshop (draft) can define scope first.' },
      { q: 'Which platforms?', a: 'iOS, Android or cross-platform, depending on your audience and budget.' },
    ],
  },
  {
    slug: 'video-editing',
    name: 'Video Editing',
    layer: 'motion',
    outcome: 'Video that holds attention and fits every channel.',
    summary: 'Short-form and long-form editing, ads, brand films and motion graphics.',
    includes: ['Short-form and long-form editing', 'Ads and brand films', 'Motion graphics', 'Channel-ready formats'],
    steps: stdSteps('You share footage and a short creative brief.', 'We edit, grade and add motion.', 'You receive channel-ready exports.'),
    model: 'Monthly subscription plus per-video packs (drafts).',
    related: ['social-media-marketing', 'fashion-design'],
    faq: [
      { q: 'Do you shoot footage?', a: 'We edit footage you provide. Production is not part of this service.' },
      { q: 'Which formats?', a: 'Vertical, square and landscape exports for the channels you use.' },
    ],
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    layer: 'motion',
    outcome: 'A consistent presence that builds an audience.',
    summary: 'Content calendars, campaigns, community and influencer collaboration.',
    includes: ['Content calendars', 'Campaign planning', 'Community management', 'Influencer collaboration'],
    steps: stdSteps('We agree goals, channels and tone.', 'We plan and publish content on a calendar.', 'We review results and adjust each month.'),
    model: 'Monthly subscription (draft).',
    related: ['graphic-design', 'video-editing'],
    faq: [
      { q: 'Which platforms?', a: 'Platforms are agreed during onboarding to match your audience.' },
      { q: 'Do you guarantee results?', a: 'No. We commit to a clear process and transparent reporting.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;

/** Price entry. `inr` / `usd` are numbers; `confirmed.inr` true only for owner-confirmed INR figures. USD is always draft. */
export interface Plan {
  id: string;
  service: string;
  name: string;
  unit: 'mo' | 'project' | 'sprint' | 'once';
  inr: number | null;
  usd: number | null;
  from?: boolean;
  confirmed: boolean; // INR confirmed by owner
  detail?: string;
}

export const plans: Plan[] = [
  { id: 'fashion-premium', service: 'fashion-design', name: 'Fashion Premium', unit: 'mo', inr: 39999, usd: 499, confirmed: true, detail: '15 designs per month' },
  { id: 'fashion-premium-plus', service: 'fashion-design', name: 'Fashion Premium +', unit: 'mo', inr: 69999, usd: 899, confirmed: true, detail: '25–30 designs per month' },
  { id: 'fashion-pro', service: 'fashion-design', name: 'Fashion Pro', unit: 'mo', inr: 79999, usd: 999, confirmed: true, detail: 'Up to 50 designs per month' },
  { id: 'customizable', service: 'graphic-design', name: 'Customizable plan', unit: 'project', inr: 14999, usd: 199, from: true, confirmed: true, detail: 'Scoped to your project' },
  { id: 'shopify', service: 'website-development', name: 'Shopify website', unit: 'project', inr: 29999, usd: 399, from: true, confirmed: true },
  { id: 'custom-site', service: 'website-development', name: 'Custom website', unit: 'project', inr: 54999, usd: 699, from: true, confirmed: true },
  { id: 'gd-starter', service: 'graphic-design', name: 'Graphic Design Starter', unit: 'mo', inr: 24999, usd: 299, confirmed: false },
  { id: 'gd-growth', service: 'graphic-design', name: 'Graphic Design Growth', unit: 'mo', inr: 44999, usd: 549, confirmed: false },
  { id: 'gd-scale', service: 'graphic-design', name: 'Graphic Design Scale', unit: 'mo', inr: 74999, usd: 899, confirmed: false },
  { id: 've-starter', service: 'video-editing', name: 'Video Editing Starter', unit: 'mo', inr: 19999, usd: 249, confirmed: false },
  { id: 've-growth', service: 'video-editing', name: 'Video Editing Growth', unit: 'mo', inr: 39999, usd: 499, confirmed: false },
  { id: 've-scale', service: 'video-editing', name: 'Video Editing Scale', unit: 'mo', inr: 69999, usd: 849, confirmed: false },
  { id: 'sm-starter', service: 'social-media-marketing', name: 'Social Media Starter', unit: 'mo', inr: 29999, usd: 349, confirmed: false },
  { id: 'sm-growth', service: 'social-media-marketing', name: 'Social Media Growth', unit: 'mo', inr: 54999, usd: 649, confirmed: false },
  { id: 'sm-scale', service: 'social-media-marketing', name: 'Social Media Scale', unit: 'mo', inr: 89999, usd: 1099, confirmed: false },
  { id: 'ux-sprint', service: 'ui-ux-design', name: 'UI/UX design sprint (2 weeks)', unit: 'sprint', inr: 59999, usd: 699, from: true, confirmed: false },
  { id: 'ux-sub', service: 'ui-ux-design', name: 'UI/UX design subscription', unit: 'mo', inr: 79999, usd: 999, from: true, confirmed: false },
  { id: 'app-discovery', service: 'mobile-app-development', name: 'App discovery workshop', unit: 'once', inr: 24999, usd: 299, confirmed: false },
];

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

/** Seasonal Christmas theme switch. Set to false to remove all festive decoration site-wide. */
export const XMAS = true;

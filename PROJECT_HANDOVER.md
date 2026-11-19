# Almost Final Studio: Project Handover

Prepared for a technical review by another developer or AI assistant. Everything below was taken from the actual files in this repository (read on 2026-11-19). Where something could not be verified, it says so. Nothing here is invented functionality.

**No secrets are present or documented.** There are no `.env` files, API keys, tokens or credentials in the project, and none are needed by the current code.

---

## 1. Project overview and objectives

- **What it is:** a marketing website for **Almost Final** (planned domain `almostfinalstudio.com`), a multidisciplinary creative and digital studio based in India serving global clients. The studio grew out of freelance creative work begun in 2021 (do not imply formal incorporation in 2021).
- **Owner:** Niyastheen N (Niyas). GitHub handle noted in `CLAUDE.md`: `Niyas-Designer`.
- **Positioning:** "Built in layers, delivered in style." Seven equal services in three layers:
  - **Identity:** Graphic Design, Fashion Design
  - **Experience:** UI/UX Design, Website Development, Mobile App Development
  - **Motion & Reach:** Video Editing, Social Media Marketing
- **Objectives (from `CLAUDE.md` and the strategy plan):** sell the seven services with published prices (INR and USD switch), a quote path for quote-only work, a layered "start small, add services" story, formal tone, honest content (no invented clients, testimonials, awards or metrics).
- **Targets:** WCAG 2.2 AA, Lighthouse mobile 90+ (95+ for Accessibility, Best Practices, SEO), LCP 2.5 s or better. **None of these has been measured yet.**
- **Governing documents (read first):**
  - `CLAUDE.md` (repo root): brand rules, confirmed prices, working rules.
  - `Inputs/Docs/Almost Final — Website Strategy & Implementation Plan.md` (and `.pdf`): master plan for positioning, sitemap, design system, motion, stack and roadmap.

### Working rules that apply to any change (from `CLAUDE.md`)
1. Never invent clients, testimonials, awards, press, metrics, years of experience or projects. Missing content is hidden or shown as a clearly labelled empty state.
2. Do not alter the wordmark, bars or mascot. Use the original files in `Inputs/Logo/`.
3. Draft prices must be labelled draft (all USD and all non-fashion plans).
4. Ask for approval before pushing to GitHub, deploying, connecting the domain, creating Firebase/Resend/Vercel resources, enabling payments, or using paid services.
5. Every animation needs a reduced-motion fallback.
6. All seven services get equal visual and navigational weight (see known issue about the wide cards in section 10).
7. `Inputs/Reference website/` (a saved NetBounce page, 29 MB) is **inspiration only**. Never copy its code, copy, images, fonts, logos or branding.

---

## 2. Folder and file structure

Project root: `Almost Final Studio/`. It is **not a git repository** (no `.git`). The app lives in `Website/`.

```
Almost Final Studio/
├── CLAUDE.md                          project rules, brand facts, confirmed prices
├── PROJECT_HANDOVER.md                this file
├── .claude/launch.json                dev-server launch config (npm --prefix Website run dev, port 4321)
├── Inputs/                            source material, never overwrite
│   ├── Docs/                          strategy plan (.md and .pdf)
│   ├── Logo/                          Logo-01 (mascot) and Logo-02 (wordmark + bars), .svg/.png/.jpg
│   └── Reference website/             saved NetBounce site, inspiration only (29 MB)
└── Website/                           the Astro application
    ├── astro.config.mjs               Astro config (React + sitemap + Tailwind vite plugin)
    ├── tsconfig.json                  extends astro/tsconfigs/strict, React JSX
    ├── package.json / package-lock.json
    ├── .gitignore                     node_modules, dist, .astro, .env*, .DS_Store
    ├── image-prompts.md               art-direction brief and AI/photo prompts for card imagery
    ├── public/                        static files served as-is
    │   ├── robots.txt
    │   ├── brand/                     mascot.svg, wordmark.svg (copies of Inputs/Logo SVGs, unmodified)
    │   └── images/
    │       ├── banner-hero.svg        hero background artwork (approved by owner)
    │       ├── cat-<slug>.svg         7 vector placeholder posters (used on service pages only)
    │       ├── cards/README.txt       slot for home service-card images (empty)
    │       ├── cutouts/README.txt     slot for service-page poster cutouts (empty)
    │       ├── tools/                 23 tool logos (SVG) + README
    │       └── fashion/               13 fashion brand logos (SVG) + README
    └── src/
        ├── data/
        │   ├── site.ts                layers, services, plans/prices, nav, XMAS flag
        │   └── posters.ts             art direction (colours + shape SVG) for the Poster component
        ├── layouts/Base.astro         HTML shell, header, footer, global scripts (menu, reveal, snow)
        ├── pages/
        │   ├── index.astro            home page (14 sections)
        │   ├── services/index.astro   services overview
        │   ├── services/[slug].astro  one template, 7 static pages
        │   ├── pricing.astro
        │   ├── work.astro             empty state
        │   ├── about.astro
        │   ├── contact.astro
        │   ├── legal/[page].astro     privacy, terms, cookies (placeholders)
        │   └── 404.astro
        ├── components/                see section 11 for the full list
        └── styles/global.css          the single stylesheet (about 530 lines)
```

Generated (not source): `Website/dist/`, `Website/.astro/`, `Website/node_modules/`.

Built routes (17 HTML pages): `/`, `/services`, `/services/{graphic-design, fashion-design, ui-ux-design, website-development, mobile-app-development, video-editing, social-media-marketing}`, `/pricing`, `/work`, `/about`, `/contact`, `/legal/{privacy, terms, cookies}`, `/404.html`. Sitemap: `sitemap-index.xml` + `sitemap-0.xml` generated by `@astrojs/sitemap`.

---

## 3. Technology stack and dependencies

- **Runtime used in this environment:** Node v24.22.1, npm, Astro v7.4.13. Platform: macOS (Apple Silicon).
- **Framework:** Astro (static output, `site: 'https://almostfinalstudio.com'`) with React islands (`@astrojs/react`), TypeScript (strict base config), `@astrojs/sitemap`, `@astrojs/check`.
- **Styling:** one hand-written stylesheet `src/styles/global.css` (CSS custom properties, no CSS framework in practice). Tailwind v4 is installed and imported (`@import 'tailwindcss'`) through `@tailwindcss/vite`, but **no Tailwind utility classes are used in any template** (the class `grid grid--2` is custom CSS). Only Tailwind's base/preflight layer is effectively active.
- **Fonts:** system stack `'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif` plus `ui-monospace`. No webfont is loaded.
- **Client JavaScript:** React 19 for three islands (Pricing, StackBuilder, QuoteForm); small vanilla scripts in `Base.astro` and `index.astro`.

`package.json` scripts: `dev` (astro dev), `build` (`astro check && astro build`), `preview`, `check`.

**Dependencies:** `@astrojs/check`, `@astrojs/react`, `@astrojs/sitemap`, `astro`, `react`, `react-dom`, `typescript`, `tailwindcss`, `@tailwindcss/vite`, `@types/react`, `@types/react-dom`, and three `@fontsource-variable/*` packages (inter, outfit, jetbrains-mono).

**Dev dependencies:** `@iconify-json/{logos, simple-icons, devicon, vscode-icons}`, `@iconify/utils`, `simple-icons`. These were used once to export logo SVGs into `public/images/{tools,fashion}/`; the site does not import them at runtime.

**Planned in the strategy plan but NOT present:** GSAP/ScrollTrigger, Three.js, Firebase/Firestore, Resend, Razorpay/Stripe, Playwright/axe/Lighthouse CI, GitHub Actions, MDX content collections, analytics. (GSAP was installed briefly and removed.)

---

## 4. Existing features and completed development

**Site-wide**
- Fixed glass "pill" header that adapts like a Dynamic Island: full bar while the homepage hero is visible, a compact logo-only island after it, expanding on hover, click/tap, keyboard focus (state on `header[data-nav]`: full / compact / expanded; controller script in `Base.astro`); Services dropdown (desktop), Menu toggle (mobile) and "Get started" button; skip link; dark footer with service and legal links, a large centred closing brand image (`/images/Footer%20logo-03.png`, the full lockup with mascot) and a string of lights below it; per-page title, description, canonical URL, Open Graph tags and an Organization JSON-LD block.
- Scroll "reveal" animation via IntersectionObserver (visible without JS through a `.no-js` fallback class).
- Seasonal Christmas theme controlled by one flag (`XMAS` in `src/data/site.ts`): hero scene, string lights, ornaments, snow, footer snow edge. See section 11.

**Home page (`index.astro`) sections, in order:** Hero (rotating headline, side tool graphics, glass cards, snowy scene) → Tools strip → About + four value cards → "Why" three columns → Fashion brands strip → Services grid (7 cards + stack card, with photos) → Success timeline (clients per year 2021–2026 plus two summary metrics; owner-supplied figures in `src/data/journey.ts`) → Client reviews ("Real Success, Real Stories": two scrolling rows; production shows only authentic reviews from `src/data/reviews.ts`, otherwise an empty state) → Mission → closing CTA card.

**Other pages**
- `/services`: grid of seven text cards grouped by layer.
- `/services/[slug]`: for each service: hero, included list, "how it works in layers" steps, pricing island or quote CTA, related-work empty state, FAQ, cross-links. Banner uses the `Poster` component (falls back to vector placeholder).
- `/pricing`: INR/USD switch, all plan cards grouped by service (draft badges), quote-only card, "Build your stack" estimator.
- `/contact`: quote form (client-side validation only; see limitations).
- `/work`, `/about`, `/legal/*`, `/404`.

**Interactive pieces**
- Currency switch (`useCurrency`): defaults to INR when the browser timezone is `Asia/Kolkata`/`Asia/Calcutta`, else USD; saved in `localStorage` key `af-currency` and broadcast through a `CustomEvent('af-currency')`.
- Stack builder: sums the lowest monthly plan of each selected service; services without a monthly plan count as quote-only.
- Count-up numbers (timeline summary metrics), animated year progress bars, review marquee with pause control.
- Snow: two `<canvas data-snow>` layers driven by one script in `Base.astro`.

**Content/data facts (`src/data/site.ts`)**
- 7 services, 3 layers, 18 plan rows: **6 owner-confirmed INR plans** (Fashion Premium ₹39,999/mo, Premium + ₹69,999/mo, Pro ₹79,999/mo, Customizable from ₹14,999/project, Shopify from ₹29,999, Custom website from ₹54,999) and **12 draft plans**. All USD figures are draft and set by hand.
- Quote-only: Mobile App Development (and complex websites/enterprise).

---

## 5. Frontend and backend architecture

**Frontend (all there is):** static-first Astro site. Pages are `.astro` files rendered at build time. React is hydrated only for `Pricing` (`client:load`), `StackBuilder` (`client:visible`) and `QuoteForm` (`client:load`). Data is typed TypeScript in `src/data/` (services, plans, nav, poster art) and rendered by pages and components. Build output is plain static files in `dist/` (about 1.7 MB total; React client chunk about 213 KB raw, gzip not measured).

**Backend:** **none.** No server code, serverless functions, middleware or API routes exist. The quote form does not send data anywhere.

---

## 6. Database structure and integrations

- **Database:** none. No Firebase/Firestore, no SQL, no files written at runtime.
- **Integrations in code:** none (no analytics, email, payments, CMS, maps, fonts CDN or third-party scripts). The only outbound URLs in `src/` are the canonical site URL and the schema.org context string.
- **Browser storage:** `localStorage['af-currency']` only (wrapped in try/catch).
- **Planned (not built):** Vercel serverless endpoints, Firestore (Admin SDK server-side only), Resend for email, Razorpay (INR) and Stripe (USD) after launch. Each requires the owner's approval and accounts.

---

## 7. API endpoints and functionality

**There are no API endpoints.** The nearest things:
- `QuoteForm` validates fields (service, scope, budget, timeline, email) on submit and then shows a "Form checked, nothing has been sent" message. It includes a hidden honeypot field (`website`) that silently stops submission.
- Links carry query strings to `/contact`: `?plan=<id|quote>`, `?stack=<slugs>`, `?service=<slug>`. **Only `plan` is read** (by `QuoteForm`); `stack` and `service` are currently ignored.

---

## 8. Current development status

| Area | Status |
| --- | --- |
| Static pages, routing, templates | Done and building (17 pages) |
| Design system and responsive layout | Done for home; partially verified elsewhere (see 10) |
| Home grid for services | Done (12-column reference structure), **image slots intentionally empty** |
| Pricing, currency switch, stack estimator | Done (draft data labelled) |
| Quote form | UI and validation only, **not connected** |
| Christmas theme (hero, snow, ornaments, CTA, footer) | Done, behind `XMAS` flag |
| Unified blue gradient system | Done (tokens in `global.css`) |
| Tools strip (23 logos) and fashion strip (13 logos) | Done, with optional slots for missing logos |
| Category/banner imagery | **Not done**: owner will supply photo-collage assets; only vector placeholders exist |
| Backend, database, email, payments, analytics | Not started |
| Testing (unit, e2e, a11y, Lighthouse) | Not started |
| Version control, CI, deployment | Not set up; nothing pushed or deployed |

Build status at time of writing: `npm run build` passes with 0 errors, 0 warnings and 2 hints. `astro check` prints two deprecation warnings for `FormEvent` in `QuoteForm.tsx`.

---

## 9. Pending tasks and incomplete features

1. **Imagery (owner-supplied):** seven service-card images and seven service-page banners in the approved photo-collage style (brief in `Website/image-prompts.md`). Also optional: closing-CTA and mission images, journal thumbnails, real project visuals and consented client stories.
2. **Logos to add when available:** tools `final-cut-pro`, `adobe-firefly`, `magnific`; fashion `hrx`, `frozen-fox`, `roadster`, `the-souled-store`, `bewakoof`, `snitch` (they appear automatically once a file exists).
3. **Quote/contact backend:** serverless endpoint, server-side validation, spam protection (the honeypot is client-side only), storage, confirmation email, stated reply time.
4. **Owner decisions still open (from the plan):** confirm non-fashion plans and all USD prices; payment providers; legal/tax pages (GST, cancellation); business email and mailboxes; social handles; tagline comma; hex colours and original brand font; real projects/clients/testimonials; language plan.
5. **Placeholder content to replace:** `/legal/*` pages, footer "Business email to be confirmed", disabled subscribe form, empty Work page; client reviews (`src/data/reviews.ts` has 7 placeholder slots, none authentic yet, so production shows the empty state).
6. **Quality work:** accessibility audit (axe plus manual keyboard pass), Lighthouse and Core Web Vitals measurement, cross-browser and real-device checks, reduced-motion verification, contrast measurements.
7. **Production prep:** GitHub repo, Vercel project and domain, security headers/CSP, analytics with consent banner, OG images, structured data review.

---

## 10. Known issues, bugs, and limitations

**Functional**
- The quote form never submits. A `?service=` or `?stack=` link does not pre-select anything.
- `StackBuilder` totals use draft entry plans and ignore the planned 10% bundle discount (not decided).
- Currency detection is a timezone heuristic, not geolocation.

**Content/brand**
- The home services grid uses two wide cards (Graphic Design and Social Media Marketing) to match the reference layout. This conflicts with the `CLAUDE.md` equal-weight rule; the owner was asked and has not answered.
- Fashion brand logos and tool logos are third-party trademarks shown for illustration. A disclaimer is shown under the fashion strip, but a legal review is advisable. HRX/Frozen Fox and similar logos are not included (no accurate source). Adobe XD is listed although Adobe discontinued it.
- Single-colour marks (CorelDRAW, Cinema 4D, DaVinci Resolve, Freepik, Midjourney, ChatGPT/OpenAI, GitHub, Vercel) are simplified glyphs, not full-colour brand art.
- Service pages still show the vector placeholder banners the owner rejected for the cards.

- **Owner-supplied timeline figures need confirmation:** `src/data/journey.ts` holds 6/9/12/14/16/18 clients for 2021–2026 (sum 75) but the summary metric says "120+ Clients Served", and the heading says "Establishment" while `CLAUDE.md` says to describe the studio as a growing studio that evolved from freelancing. These numbers are not verified by the developer.

**Technical debt**
- **Dead CSS** remains in `global.css` (selectors with no matching template): `.oval*`, `.bento`, `.bcard*`, `.marquee*`, `.xmas__bauble`, `.xmas__snow`, `.page-banner`, `.bimg`, `.sidetext__kicker`, `.oval__text`.
- **Unused components:** `Bow.astro` and `Wreath.astro` (no importers).
- **Unused dependencies:** the three `@fontsource-variable/*` packages (fonts are not imported); Tailwind is imported but no utilities are used.
- Inline `style=""` attributes are common in pages for one-off spacing and widths.
- `Poster.astro` checks `public/images/cutouts/<slug>.png` at build/request time via `fs`; no cutouts exist, so it always uses the SVG fallback.
- `.reveal` content depends on JS unless the `no-js` class is present on `<html>` (set by an inline script that swaps it to `js`).
- The fixed header may cover in-page anchor targets (no `scroll-margin-top` set; not verified).

**Verification gaps (not tested)**
- No automated tests, axe, Lighthouse, or cross-browser runs.
- Browser checks were done by hand in the desktop app's built-in browser, mostly the **home page** at about 1440, 1120, 820 and 375 px. The service pages, pricing, contact, about, work and legal pages were checked at desktop width only (and only partly).
- `prefers-reduced-motion` behaviour is coded but was **not exercised in a browser**.
- Pages with no JavaScript were not tested.

---

## 11. UI/UX architecture and design system

### Tokens (`:root` in `global.css`)
- **Neutrals:** `--bg #fff`, `--card #f2f7f4` (overridden to `#edf4fb` by `.xmas-theme`), `--text #0b0b0b`, `--text-2 #475862`, `--line rgba(0,0,0,.12)`.
- **Brand:** navy `#0b263d`, raised navy `#162f44`, blue `#075392`, teal `#3a8b7e` (variable still defined), accent green `#68bd6b` (buttons, small labels), ink `#05080c`.
- **Blue gradient system (reference = the featured "Seven disciplines, one roof" card):** `--grad-blue: linear-gradient(155deg, #0a2a52 0%, #075392 58%, #2a79bd 118%)`, `--blue-glow`, `--blue-surface` (glow + gradient), `--blue-surface-deep` (first two stops, used on text-dense dark areas), `--shadow-blue`, `--shadow-blue-hover`. `--grad` (redefined to a blue line gradient `#075392 → #4ea3e6`) is used for rules, dividers and progress bars. Applied to: hero, "What makes us different" column, "Build your stack" tile, CTA card, stories section, footer, mission disc, active tabs/switch/stat pills.
- **Motion tokens:** durations 120/240/480/800 ms (`--d1..--d4`), easing `--ease`.
- **Type:** headings weight 500-700, tight tracking; fluid sizes with `clamp()`; body 1rem/1.5; mono for labels.
- **Layout:** `.container` max 1440 px, side padding 5% (`--pad`); sections use `clamp(56px, 8vw, 112px)` vertical padding; cards 24-28 px radius.
- **Breakpoints in use:** 640, 699 (snow resolution), 899/900 (ornaments hidden), 1024 (desktop nav), 1099/1100 (side hero graphics and 12-column grid), 1400 (reserved for wide-screen extras).
- **Accessibility features present:** skip link, landmarks, `aria-label`s, visible `:focus-visible` outline, form labels and error text, `aria-live` estimate, reduced-motion CSS rules, 44-48 px tap targets on buttons. Not measured.

### Home hero composition
Rotating three-line headline (CSS `@keyframes rot`, first headline is the accessible text via `.sr-only`), two side blocks with custom SVG tool graphics (`HeroToolsLeft`/`HeroToolsRight`), two glass cards, "Season's greetings" pill. Behind: gradient field, faint `banner-hero.svg` overlay, clouds, stars, snow canvas, hills and trees; string lights and blue/silver/white baubles on top. Side blocks and glass cards hide below 1100 px.

### Services grid
`components/ServiceGrid.astro`: 12-column CSS grid. Rows: wide 8 + side 4 (Graphic Design, Fashion Design), four 3-column cards (UI/UX, Website, Mobile App, Video), wide 8 + side 4 (Social Media Marketing, "Build your stack"). Tablet: 2 columns (first and stack cards full width). Mobile: 1 column, 4:3 slots. Each card: category badge, title, description, arrow chip and an empty `.svc-slot` image area. Text blocks reserve equal minimum height per row so slots align. Dropping `public/images/cards/<slug>.(webp|avif|jpg|jpeg|png|svg)` fills the slot automatically.

### Component inventory (`src/components/`)
| Component | Role | Used by |
| --- | --- | --- |
| `ServiceGrid.astro` | Home services grid with image slots | index |
| `ServiceCard.astro` | Text card for `/services` | services/index |
| `Poster.astro` + `data/posters.ts` | Collage poster (pastel field + shapes + optional cutout) with vector fallback | services/[slug] |
| `ReviewsSection.astro`, `ReviewCard.astro` + `data/reviews.ts` | Two-row marquee of Google-review-style cards. Production: authentic entries only (or an empty state). Dev server: labelled sample cards. Pause button, hover/focus pause, native touch scroll on phones, reduced-motion static rows | index |
| `FloatingAIAssistant.astro` | Fixed bottom-right mascot (visual only: no chat, API or click action). Optional `interactive` prop renders a real button for a future chat trigger. Images: `public/images/assistant/` (optimised from `Footer logo-01.png`) | Base layout (every page) |
| `ToolsStrip.astro` | Scrolling tool logos (hides optional tools without files) | index |
| `FashionStrip.astro` | Scrolling fashion logos + disclaimer (hides optional brands without files) | index |
| `Pricing.tsx`, `CurrencySwitch.tsx`, `useCurrency.ts` | INR/USD pricing island | pricing, services/[slug] |
| `StackBuilder.tsx` | Service multi-select estimator | pricing |
| `QuoteForm.tsx` | Quote request form (UI only) | contact |
| `Faq.astro`, `Icon.astro` | FAQ accordion (`<details>`), small icon set | services/[slug], index |
| `HeroToolsLeft/Right.astro` | Custom SVG tool graphics | index |
| `XmasDecor`, `XmasLights`, `XmasSnowEdge`, `HangingOrnaments` | Christmas decoration | index, Base |
| `Bow.astro`, `Wreath.astro` | Old hero ornaments | **unused** |

### Christmas theme switch
`XMAS` (boolean) in `src/data/site.ts`. When `false`: no snow canvases, ornaments, lights, footer snow edge, greeting pill, hero scene, icy-blue tint class (`xmas-theme`). Snow is drawn on a fixed canvas at `z-index: -1` (body background is transparent and `html` is white) plus a second canvas inside the hero; it is disabled under reduced motion.

---

## 12. Local development and deployment configuration

**Run locally** (from the project root):
```bash
cd Website
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check && astro build -> Website/dist
npm run preview
```
`.claude/launch.json` defines a dev-server entry `af-dev` (`npm --prefix Website run dev -- --port 4321`) used by the desktop app's preview.

**Environment variables:** none are read anywhere in `src/` (no `import.meta.env` or `process.env` usage), and no `.env` files exist.

**Deployment:** not configured. No `vercel.json`, no CI, no GitHub remote, no domain connected, no preview deployments. The strategy plan proposes Vercel hosting; per project rules, deployment, pushing, domain and any cloud resources need the owner's explicit approval.

**Hosting notes for whoever deploys:** output is fully static; `public/robots.txt` points to `https://almostfinalstudio.com/sitemap-index.xml`; do not publish `Inputs/` (including the 29 MB reference site).

---

## 13. Recommended next development steps

1. **Version control first:** `git init`, commit the current state, and exclude `Inputs/Reference website/` (large, third-party). Ask the owner before pushing anywhere.
2. **Integrate owner-supplied imagery:** place card images in `public/images/cards/` and banner cutouts in `public/images/cutouts/`, then check crop and contrast per card. Replace the rejected vector service-page banners.
3. **Decide the grid weighting:** keep the two wide cards or return to seven equal cards (rule 5 conflict).
4. **Backend for the quote form** (needs owner approval and accounts): serverless function with server-side validation, rate limiting and spam protection, storage (Firestore rules tested in the emulator), and email via Resend. Wire `?service=` and `?stack=` prefill.
5. **Confirm content with the owner:** prices (non-fashion and all USD), legal/tax pages, business email, social links, tagline comma, real projects and testimonials.
6. **Quality gate:** add axe + Playwright (keyboard, reduced motion, 375/768/1440 viewports), run Lighthouse, measure LCP/CLS/INP and JS size. Audit every page on a phone, not only the home page.
7. **Cleanup:** remove dead CSS and `Bow`/`Wreath`, drop unused `@fontsource-variable/*` packages, decide whether to keep Tailwind (currently only its base layer), fix the `FormEvent` deprecation, reduce inline styles.
8. **SEO and trust:** OG/social images, review structured data, sitemap/robots on the real domain, cookie banner and consent-based analytics if analytics is added.
9. **Seasonal maintenance:** set `XMAS = false` after the season (or schedule it) and re-check the hero without the festive layers.
10. **Legal check** for third-party logos shown on the home page strips.

## Hero headline rotation (refined)
- Markup: `h1.hero__title` holds a screen-reader-only static headline plus an `aria-hidden` `.rot` with three `.rot__state` spans (Built in layers. Delivered in style. / One studio. Seven disciplines. Zero hand-offs. / Design it. Build it. Make it move.). Phrases are `.ph` nowrap spans, so line breaks only fall between phrases.
- CSS-only cycle (15.6 s, 5.2 s per message): 650 ms fade-in with 12 px rise, ~3.9 s hold, 500 ms fade-out, no overlap. All states share one grid cell, so the box sizes to the tallest state; description and CTAs never move.
- `index.astro` script pauses the cycle when the tab is hidden or the hero is off-screen (`.is-paused`). Reduced motion shows the first headline only.
- Verified at 1440/1024/768/375: description and CTA positions identical across states, no horizontal overflow or clipping.

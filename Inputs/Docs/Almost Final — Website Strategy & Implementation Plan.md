# Almost Final — Website Strategy & Implementation Plan

Nov 19, 2026 · @Niyastheen N

## Executive summary and decisions for you

Almost Final becomes a seven-discipline creative and digital agency, and the website sells it as one connected stack: Graphic Design, Fashion Design, UI/UX Design, Video Editing, Website Development, Mobile App Development and Social Media Marketing. Fashion subscriptions stay a flagship offer, but they are one of seven equal services.

The plan keeps what already works in your brand (navy-to-green gradient, the barcode bars inside the "I" of FINAL, glass cards, the monkey mascot, "Built in layers, delivered in style") and pushes it toward a more premium, futuristic look. It borrows proven patterns from the agencies we studied: ustwo's lean static-first build, Clay's plain-language positioning and persistent contact button, Pentagram's variable-driven grid, Resn's input-aware interactions (but not its performance or accessibility problems), and VML's accessible carousels.

**Decisions that genuinely need your input** (my recommended default is in the second column, so I can proceed without waiting):

| Decision | My default | Why it needs you |
| --- | --- | --- |
| Subscription prices for the six non-fashion services | Draft ranges in the pricing section | Depends on your capacity and margins |
| USD prices | Set by hand per plan (not live FX) | A business policy, not a technical one |
| Payment provider | Razorpay for INR, Stripe for USD, enabled after launch | Needs your accounts, KYC and approval |
| Business entity, GST and terms | Placeholder legal pages, clearly marked | Must be written or reviewed by you or a lawyer |
| Business email and domain | almostfinalstudio.com with domain-based mailboxes | Replaces the Gmail addresses shown in the PDF |
| Original logo, mascot and font files | See the asset audit | I can only see them inside the PDF |
| Real projects, clients and testimonials | Empty states and sample-labelled templates | I will not invent any |
| Languages | English only at launch, built so Tamil can be added | Your call on timing |

## Brand positioning and messaging

**Positioning statement:** Almost Final is a multidisciplinary creative and digital studio that designs, builds and markets brands, from the first sketch to the live product, delivered in layers so clients can start small and grow.

**Master idea: "Layers."** Your tagline, logo bars and PDF headline already say it. The website turns it into the organising system: seven services grouped into three layers that stack into one brand.

| Layer | Services | Client outcome |
| --- | --- | --- |
| Identity | Graphic Design, Fashion Design | A brand people recognise |
| Experience | UI/UX Design, Website Development, Mobile App Development | A product people use |
| Motion & Reach | Video Editing, Social Media Marketing | A brand people see and share |

This grouping replaces the old Designing / Branding / Marketing trio, which was fashion-specific. Fashion subscriptions stay visible as a flagship plan inside the Identity layer.

**Audience (global):** direct-to-consumer and fashion brands, startups and scale-ups needing design plus build, small and mid-size businesses needing one partner instead of five freelancers, and agencies needing overflow capacity.

**Differentiators we can honestly claim today:** seven disciplines under one roof, subscription plans with published prices, a layered way of working that lets clients add services over time, and an India-based team serving global clients. Claims such as awards, client counts or years of experience stay out until you can document them.

**Voice:** confident, clear, a little playful. The mascot carries the playfulness; the copy stays plain and outcome-led, as Clay and ustwo do.

**Headline candidates for the hero** (pick one in review):

1. Built in layers. Delivered in style.
2. One studio. Seven disciplines. Zero hand-offs.
3. Design it. Build it. Make it move.

## Brand asset audit: keep, supply or recreate

The identity stays. Only your PDF is available to me, so every asset below is read from a rendered image; colours are sampled from pixels and are close approximations until they are confirmed from your source files.

| Asset | Observed in your PDF | Decision | Action needed |
| --- | --- | --- | --- |
| Wordmark "ALMOST FINAL." | White geometric wordmark; the "I" in FINAL is a bar set graded blue to green | Keep unchanged | Supply vector (SVG/AI). Otherwise I trace it, and you approve the result |
| Tagline | "Built in layers delivered in style" | Keep; add the missing comma | Confirm the comma |
| Navy | About #0B263D page, #162F44 cards | Keep as the base | Confirm hex values |
| Green accent | About #68BD6B | Keep as the single accent | Confirm hex |
| Gradient bars | About #075392 to #3A8B7E to #68BD6B | Keep; becomes the signature motif | Confirm hex |
| Near-black | About #0D0D0D | Keep for depth sections | None |
| Display typeface | Rounded, wide geometric face in headlines | Keep the feel; font not identified | Tell me the font name or supply the file. Otherwise I choose a licensed or open look-alike |
| Body typeface | Helvetica-like sans | Replace with a webfont (Inter or similar) | None, unless you have a preference |
| Mascot | Monkey with green glasses; seated on a beanbag with a laptop (footer) and a head-only version | Keep; animate as a guide character | Supply the vector or layered source; name the mascot |
| Glass cards, 24px-plus rounded corners, soft 3D backdrop | Used throughout | Keep, with higher contrast and a lighter backdrop | None |
| Photography and video | None in the PDF | Not available | Supply real work, or the site uses clearly labelled placeholders |
| Social handles | Instagram, X, YouTube, Pinterest icons without usernames | Link when handles are provided | Supply handles |

**Deliberate changes, with reasons:**

1. Body text becomes a webfont with proper contrast. The PDF uses mid-grey on navy for some copy, which would fail accessibility checks.
2. The 3D backdrop becomes a small, lazy-loaded WebGL scene with a still fallback, so the hero loads fast.
3. Gmail addresses are replaced by domain addresses once you have them, because a premium agency should not show consumer email.

## Service architecture: seven equal services

Each service gets its own page, the same page template, and the same visual weight in navigation and on the homepage. Fashion is not placed above the others; its subscription appears as a plan inside Fashion Design and on the Pricing page.

| Service | Layer | Core offer (drawn from your PDF where it exists) | Commercial model | Public price? |
| --- | --- | --- | --- | --- |
| Graphic Design | Identity | Logo and identity systems, visual language, packaging, marketing creatives | Monthly subscription plus fixed-price packs | Yes |
| Fashion Design | Identity | Trend research, collections, silhouettes, tech packs, lookbooks, e-commerce mockups | Your existing Premium, Premium + and Pro plans | Yes |
| UI/UX Design | Experience | Research, flows, wireframes, interface design, design systems, prototypes | Fixed-price sprints plus a design subscription | Sprints yes, subscription yes |
| Website Development | Experience | Shopify store (from ₹29,999), custom website (from ₹54,999) | Project | Starter tiers yes; complex builds by quote |
| Mobile App Development | Experience | iOS, Android and cross-platform apps, from MVP to launch | Project | Quote only |
| Video Editing | Motion & Reach | Short-form and long-form editing, ads, brand films, motion graphics | Monthly subscription plus per-video packs | Yes |
| Social Media Marketing | Motion & Reach | Content calendars, campaigns, community and influencer collaboration | Monthly subscription | Yes |

**How a visitor moves through services:**

- Every service page follows one structure: outcome headline, what is included, how it works in layers, pricing or quote path, related work, FAQ, one clear call to action.
- A "Build your stack" selector lets visitors tick several services and see a combined monthly estimate, or request a custom quote when any selected service is quote-only.
- Cross-links connect natural pairs: Graphic Design with Social Media, UI/UX with Website and Mobile, Fashion with Video and Social.

**What is new and needs your validation:** the non-fashion subscriptions and sprints are my proposals, not something in your PDF. Their scope and prices are drafted in the next section and are marked as drafts in the site content until you confirm them.

## Subscription model and pricing strategy (INR and USD)

Three tiers per subscription service, the same names everywhere, and a monthly price that is always visible. Quote-only work (mobile apps, complex websites, enterprise) goes through "Get a Custom Quote".

**Confirmed prices from your PDF (INR):**

| Offer | INR | Draft USD |
| --- | --- | --- |
| Fashion Premium (15 designs/month) | ₹39,999/mo | $499/mo |
| Fashion Premium + (25–30 designs/month) | ₹69,999/mo | $899/mo |
| Fashion Pro (up to 50 designs/month) | ₹79,999/mo | $999/mo |
| Customizable plan | from ₹14,999/project | from $199 |
| Shopify website | from ₹29,999/project | from $399 |
| Custom website | from ₹54,999/project | from $699 |

**Proposed new plans (my drafts, not from your PDF; scope and prices need your confirmation):**

| Service | Starter | Growth | Scale |
| --- | --- | --- | --- |
| Graphic Design | ₹24,999 / $299 | ₹44,999 / $549 | ₹74,999 / $899 |
| Video Editing | ₹19,999 / $249 | ₹39,999 / $499 | ₹69,999 / $849 |
| Social Media Marketing | ₹29,999 / $349 | ₹54,999 / $649 | ₹89,999 / $1,099 |
| UI/UX Design | Design sprint (2 weeks) from ₹59,999 / $699 | Design subscription from ₹79,999 / $999 per month | Quote |
| Mobile App Development | Paid discovery workshop, ₹24,999 / $299 | Quote | Quote |

All rows are per month except sprints and the discovery workshop.

**Strategy rules:**

1. **USD is set by hand, not by live exchange rate.** The drafts above are rounded to clean figures and were not checked against the current rate or against competitors; I could not confirm today's exchange rate. Please decide whether USD should sit at a premium over converted INR.
2. **Currency detection:** default to INR for visitors in India and USD elsewhere, with a visible switch. The choice is remembered, and prices never change mid-session.
3. **Consistent plan language:** every plan states deliverables per month, revision rounds per month (your PDF mixes "per batch" and "per month"; I standardise on per month), turnaround, and what is excluded.
4. **Anchoring:** the middle tier is highlighted as "most chosen" only after real sales data exists; until then it is labelled "Recommended for growing brands".
5. **Bundles:** a "Layer Stack" discount for two or more subscriptions is proposed at 10%. This is your margin decision.
6. **Tax and terms:** GST for Indian clients and treatment of exports must be confirmed by your accountant; the site shows "taxes extra" until then. Cancellation and pause terms are placeholders pending your policy.
7. **Custom Quote path:** a short form (service, scope, budget range, timeline, links) that gives an immediate confirmation, a reply promise you must be able to keep, and an optional booking link.

## Sitemap and page structure

&#91;embedded content: sitemap · 5 areas, 7 service pages\]

All seven service pages sit side by side under Services, and "Get started" (quote, call, sign-up) is reachable from every page. Legal pages (privacy, terms, cookies) live in the footer.

**Homepage, top to bottom:**

1. **Hero:** one headline, one line of proof-free promise, two buttons (Get started, See pricing), the mascot and gradient bars in a lightweight WebGL scene with a still fallback.
2. **Seven services in three layers:** an interactive index; hovering a service previews its outcome.
3. **Selected work:** a project grid; shows a clearly labelled empty state until real projects exist.
4. **How layers work:** a pinned, scroll-driven process section.
5. **Pricing preview:** plans with the INR / USD switch.
6. **Build your stack:** pick services, see an estimate or the quote path.
7. **Trust:** logos, testimonials and numbers appear only when real ones are supplied; the component hides itself when empty.
8. **FAQ:** pricing, revisions, timelines, working across time zones.
9. **Closing call to action:** mascot, "Have a cool idea? Let's collaborate", Get started.

**Reusable templates:** service page, case study, pricing page, quote form, journal article, legal page. A new service or project is added by content only, with no new code.

## Design system

The direction is "Layered Glass": dark navy depth, translucent glass layers that stack as visitors scroll, and one green accent used sparingly for action. It is your current look, with more contrast, more discipline and more depth.

**Colour (approximate; confirm hex from source files):**

| Role | Value | Use |
| --- | --- | --- |
| Ink (deepest) | #05080C | Page background in depth sections |
| Navy base | #0B263D | Primary background |
| Navy raised | #162F44 | Cards and glass panels |
| Accent green | #68BD6B | Buttons, links, highlights; one accent per view |
| Gradient | #075392 to #3A8B7E to #68BD6B | The bars motif, progress, key moments |
| Text | #F4F7FA, with #A9B8C6 for secondary | Body copy, checked at 4.5:1 or better |

**Typography:** the existing rounded geometric display face for headlines (file or name needed; fallback is an open-licensed look-alike), a clean variable sans for body text, and a mono face for labels, prices and metadata. A fluid scale between mobile and desktop, tight tracking on large headings (as Clay and ustwo do), and body text never below 16px.

**Layout and spacing:**

- A 6-column grid on mobile and 12 columns from tablet up, expressed as CSS variables for columns, gutter and container width (the Pentagram approach), with a development-only grid overlay.
- An 8px spacing scale, a 1440px content container, and breakpoints at 640, 1024 and 1440.
- Glass cards: 24px radius, 1px translucent border, blur only where it adds depth, because blur is costly on low-end phones.

**Components (built once, documented in a living style page):** button (primary, secondary, ghost), glass card, service tile, pricing card with currency switch, plan comparison table, project card, case-study blocks, form fields with clear error and success states, accordion, tabs, command palette, toast, mascot callout, cookie banner (compact, never covering the hero).

**Imagery and the mascot:** the mascot is a recurring guide (hero, empty states, 404, form success) in a small set of poses. Project visuals use a consistent aspect-ratio system so mixed content still looks curated.

**States every component must have:** default, hover, focus-visible, active, disabled, loading, empty, error, success.

## Animation and interaction architecture

Motion is layered by cost: CSS first, GSAP for choreography, WebGL for one hero moment only. Resn showed that a site built entirely on canvas becomes heavy and inaccessible; ustwo showed that one scoped WebGL scene on a lean page works.

| Moment | Technique | Fallback |
| --- | --- | --- |
| Hero scene: gradient bars and glass layers reacting to the cursor | Small Three.js scene, loaded after the page is interactive | Still poster image; used for reduced motion and low-power devices |
| Layers stacking on scroll | GSAP ScrollTrigger with pinned sections | Static stacked sections |
| Service index preview | CSS transitions plus a lightweight crossfade | Plain list with links |
| Page transitions | Native View Transitions API | Instant navigation |
| Process section (Layers) | Pinned horizontal scroll | Vertical steps on mobile |
| Magnetic buttons, custom cursor | Pointer events on devices with hover only | Standard controls |
| Mascot guide | Small Lottie or sprite animation on key states | Static pose |
| Build your stack | React island with animated total | Same logic, no animation |
| Sound | Off by default; one optional toggle (input-aware prompts, as Resn does) | Silent |

**Motion tokens:** one set of durations (120, 240, 480, 800 ms) and a small set of easing curves shared by CSS and GSAP, so the site feels like one hand.

**Rules:**

1. Animate only transform and opacity; never layout properties.
2. Honour the reduced-motion setting everywhere (several studied sites did not).
3. Load heavy motion on idle, never before first paint, and pause it when off-screen or in a background tab.
4. Touch devices get touch-appropriate interactions; hover effects never hide essential content.
5. Every animated section stays understandable with all animation switched off.
6. A performance budget is enforced in the build (see the performance section).

**What is observed versus assumed:** the inventory of libraries on the reference sites is observed. How their scroll effects work internally is not, and we are not copying any code. Our implementations are written from scratch.

## Technology stack and architecture

The site is static-first: pages are built ahead of time and served from a CDN, and only the forms and interactive tools run code on demand. This is why ustwo's homepage loaded in about 20 requests while heavier stacks sent tens of megabytes. It also stays inside your existing skills (React, TypeScript, Vercel, Firebase).

&#91;embedded content: architecture · static front end, serverless back end\]

Visitors get static pages from the CDN. Quote and contact requests go to a small serverless function that validates them and saves them to Firestore. Email and payments are later steps that need your accounts and approval.

| Layer | Choice | Reason |
| --- | --- | --- |
| Framework | Astro with React islands, TypeScript | Static HTML by default; React only where interactive |
| Styling | Tailwind with CSS variables for tokens and grid | Fast, consistent, easy to theme |
| Motion | GSAP with ScrollTrigger; native View Transitions | Mature, controllable, good fallbacks |
| 3D | Three.js, hero only, lazy-loaded | Keeps first load small |
| Content | MDX and typed JSON collections in the repo | Services, plans and projects are data, not code |
| Forms and leads | Vercel serverless functions, Firestore (Admin SDK, server-side only) | Secrets never reach the browser; validation on the server |
| Spam and abuse | Honeypot, rate limiting, optional Turnstile | Protects the inbox without hurting conversion |
| Email | Resend, after you approve the account | Reliable transactional email |
| Payments | Razorpay (INR), Stripe (USD), after launch | Needs your accounts and compliance steps |
| Hosting | Vercel, with preview deployments per change | Your existing platform |
| Analytics | Privacy-friendly analytics with a consent banner | International visitors, including GDPR regions |
| Quality | Playwright, axe, Lighthouse CI, GitHub Actions | Evidence for every performance and accessibility claim |

**Internationalisation:** routes are language-ready from day one (English at launch); prices and dates format by currency and locale.

**Security:** a strict content security policy, security headers, validated inputs, no secrets in the client, and Firestore rules written and tested in the emulator.

**Alternative considered:** Next.js would also work; Astro is recommended because most pages are content and static delivery is the performance goal.

## Portfolio system

Projects are content, not code: add one file and it appears in the grid, in the right service pages, and in search. Nothing in the portfolio is invented; until you supply real projects, the grid shows an honest empty state and a "Start the first project with us" prompt.

**Project content model** (each project is one MDX file with typed fields):

| Field | Purpose |
| --- | --- |
| Title, client name or "Confidential client", year | Identification; permission to name the client is a required yes/no |
| Services (one or more of the seven) | Drives filters and the "related work" block on service pages |
| Summary and outcome line | The one-line result shown on cards (the Wolff Olins pattern) |
| Cover (image or short muted loop), gallery, optional video | Visual showcase |
| Challenge, approach, deliverables, results | Case-study narrative |
| Metrics | Optional, shown only when real and sourced |
| Testimonial | Optional; requires the client's written consent and name |
| Status flag: sample or real | Sample projects are visibly labelled and removed before launch |

**Layouts:**

- **Index:** a filterable grid (by service and year), a list view for fast scanning, and consistent aspect ratios so mixed work stays tidy.
- **Case study:** hero, summary strip, narrative blocks, full-width media, next project. Built from reusable blocks so each story can be paced differently.
- **Service pages:** automatically show related work, or a gentle empty state.

**Performance rules for media:** modern image formats, lazy loading below the fold, short muted loops instead of long autoplay video, and a size budget per project page.

**Trust rules:**

1. No invented clients, testimonials, awards, press or metrics, anywhere, including placeholder text that could be mistaken for real.
2. Client logos appear only with permission.
3. Testimonials need the client's name, role and consent on file.
4. Anything missing is hidden, not faked.

**Scaling:** the repository holds content at launch. When publishing becomes frequent, a visual editor (Keystatic, Sanity or similar) can sit on the same content model without changing the front end.

## Conversion, SEO, accessibility and performance targets

The studied sites showed where the field is weak: missing page headings, missing image descriptions, a cookie banner marked up as the main heading, undersized tap targets, and homepages of 14 to 26 MB (We Are Social, Wolff Olins and Resn on desktop and mobile emulation). Getting these basics right is a real advantage, and each one becomes a test that must pass before launch.

| Area | Target | How it is checked |
| --- | --- | --- |
| Largest Contentful Paint | 2.5 s or better on a throttled mid-range mobile profile | Lighthouse CI |
| Layout shift / interaction | CLS 0.1 or less; INP 200 ms or less | Lighthouse CI, Playwright |
| Initial JavaScript | About 170 KB gzipped or less, with hero 3D loaded later | Build budget fails the build |
| Initial page weight (mobile) | 1.5 MB or less before scrolling | Network audit |
| Lighthouse (mobile) | Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+ | Lighthouse CI |
| Accessibility | WCAG 2.2 AA; zero serious or critical axe findings | axe in Playwright, plus a manual keyboard pass |
| Basics | One H1 per page, skip link, alt text, visible focus, 4.5:1 text contrast, 44px tap targets, captions or transcripts for video | Automated plus manual review |
| Motion | Reduced-motion fully honoured | Playwright with the setting emulated |

**Measurement honesty:** I can run these checks in a controlled environment. Scores on real phones and real networks, especially mid-range Android, must be confirmed by you or a device lab before launch.

**Conversion design:**

1. One persistent primary action, "Get started", always visible (the Clay pattern).
2. Public prices on plan pages, with a short "what happens next" under every button.
3. The quote form asks five questions or fewer first (service, scope, budget range, timeline, email), then offers optional detail.
4. Immediate confirmation with a stated reply time you can actually meet, and an optional booking link.
5. Events tracked from pricing view to quote start to quote sent, so improvements come from evidence.

**SEO:** one page per service for search intent, clean URLs, sitemap and canonical tags, social preview images, and structured data only for facts that are true (organisation, services, FAQ, breadcrumbs). Review and rating markup is excluded until real reviews exist. ustwo's homepage, for example, carried none.

## Development roadmap, testing and deployment

Eight phases, each ending in a gate that must pass before the next begins. Sizes are relative effort, not calendar dates, because the pace depends on how quickly decisions and assets arrive.

| Phase | Work | Size | Gate to pass |
| --- | --- | --- | --- |
| 0. Decisions and assets | You answer the decision table; supply logo, mascot and font files and any real projects | Small (you) | Decisions confirmed, or placeholders approved |
| 1. Foundation | Repository, design tokens, grid, fonts, core components, a living style page | Medium | Style page passes automated accessibility and contrast checks |
| 2. Core pages | Home, Services index and seven service pages, Pricing, About, Contact and quote | Large | Content reviewed; screenshots at 375, 768 and 1440 px approved by you |
| 3. Motion | Scroll choreography, page transitions, hero scene with fallbacks | Medium | Reduced motion works; performance budget holds |
| 4. Portfolio and journal | Project index, case-study template, journal, sample-labelled content | Medium | Empty and filled states both look right |
| 5. Forms and backend | Quote and contact functions, Firestore rules, spam protection | Medium | Rules tested in the emulator; no secret reachable from the client |
| 6. Quality hardening | End-to-end tests, axe, Lighthouse CI, cross-browser runs, content freeze | Medium | All targets in the performance section met, or exceptions documented |
| 7. Production preparation | Headers, security policy, analytics with consent, sitemap, 404, legal placeholders, environment variables | Small | Preview deployment signed off by you |

**Review rhythm:** after phase 1 you see the style page and the direction, after phase 2 a full preview of the main pages, and after phase 3 the animated site. Changes are cheapest before phase 2 completes.

**What needs your explicit approval before it happens:** pushing code to GitHub, deploying to Vercel, connecting the domain, creating Firebase or Resend resources, enabling payments, or any paid service.

**Risks and mitigations:**

1. **Missing brand files:** work proceeds with traced or look-alike assets, flagged for replacement.
2. **Seven services means seven sets of copy:** I draft all copy from your PDF and the plan above; you approve it, and unverified claims are removed.
3. **Motion cost on low-end phones:** every effect has a fallback and a budget; real-device checks are yours.
4. **Pricing uncertainty:** non-fashion plans and all USD prices ship as drafts until confirmed.
5. **Legal and tax text:** placeholders only; real terms need your accountant or lawyer.

**Recommended next step:** review the decision table at the top. Then tell me to start phase 1, and I will build the foundation and style page first so you can judge the look before the rest is built.

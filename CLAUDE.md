# CLAUDE.md — Almost Final Studio

## Who we are
- **Almost Final** (almostfinalstudio.com) is a multidisciplinary creative and digital studio based in India, serving global clients. It grew out of the founder's freelance creative work (graphic design, fashion design, video editing, branding), which began in 2021.
- It designs, builds and markets brands, from first sketch to live product, "in layers" so clients can start small and add services over time.
- Seven equal services, grouped into three layers:
  - **Identity:** Graphic Design, Fashion Design
  - **Experience:** UI/UX Design, Website Development, Mobile App Development
  - **Motion & Reach:** Video Editing, Social Media Marketing
- Fashion subscriptions are a flagship offer but sit alongside the other six services, never above them.
- Brand identity: Almost Final name, wordmark "ALMOST FINAL." with the graded-bar "I", navy-to-green palette, monkey mascot (green glasses), tagline "Built in layers, delivered in style" (confirm the comma with the owner).
- Owner: Niyastheen N (Niyas). GitHub: `Niyas-Designer`.

## Audience & tone
- **Audience (no single priority):** fashion and direct-to-consumer brands, startups and scale-ups needing design plus build, small and mid-size businesses wanting one partner instead of five freelancers, and agencies needing overflow capacity. Global market.
- **Tone: formal.** Polished, professional, clear and outcome-led. Keep playfulness minimal; no slang, jokes or heavy exclamation. Let the mascot, not the copy, carry any personality.
- Write in professional English. Plain language over jargon.

## Facts
- **Confirmed prices (INR):**
  - Fashion Premium (15 designs/month): ₹39,999/mo
  - Fashion Premium + (25–30 designs/month): ₹69,999/mo
  - Fashion Pro (up to 50 designs/month): ₹79,999/mo
  - Customizable plan: from ₹14,999/project
  - Shopify website: from ₹29,999/project
  - Custom website: from ₹54,999/project
- **Unconfirmed drafts:** all USD prices and all non-fashion subscription plans (Graphic Design, Video Editing, Social Media Marketing, UI/UX sprints and subscription, Mobile App discovery workshop) are proposals from the strategy plan. Never present them as final; label them draft until the owner confirms.
- Mobile apps, complex websites and enterprise work are quote-only ("Get a Custom Quote").
- Prices are shown in INR for India and USD elsewhere, with a visible switch. USD is set by hand, not by live exchange rate.
- Colours (approximate, from the strategy plan; hex values still to be confirmed from source files): navy #0B263D, raised navy #162F44, green accent #68BD6B, gradient #075392 → #3A8B7E → #68BD6B. The logo SVG uses #045192 (blue) and #69BE6C (green).
- Planned stack: Astro with React islands, TypeScript, Tailwind, GSAP, Three.js (hero only), Vercel, Firebase/Firestore (server-side only), Resend, Razorpay (INR) and Stripe (USD) after launch.
- Standards targets: WCAG 2.2 AA, Lighthouse mobile 90+ (95+ for Accessibility, Best Practices, SEO), LCP 2.5 s or better.

## Files
- `Inputs/Docs/Almost Final — Website Strategy & Implementation Plan.md` (and `.pdf`, the same plan, 18 pages): the master reference for positioning, services, pricing, sitemap, design system, motion, stack, portfolio rules and roadmap. Read it before any website work.
- `Inputs/Logo/Logo-01` (.png/.jpg/.svg): the monkey mascot on a beanbag with a laptop, navy/blue/green, on a transparent or white background.
- `Inputs/Logo/Logo-02` (.png/.jpg/.svg): the wordmark and graded bar set (navy to pale green). The wordmark text is white, so it is invisible on white backgrounds; use on dark backgrounds.
- `Inputs/Reference website/`: a saved copy of NetBounce (a US staffing firm's Webflow site). **Inspiration only.** Study layout and motion patterns; never copy its code, copy, images, fonts, logos or branding.
- `Website/`: empty; the site build goes here.

## Rules
1. **Never invent** clients, testimonials, awards, press, metrics, years of experience or projects. Missing content is hidden or shown as a clearly labelled empty state or sample.
2. Describe the company as a growing studio that evolved from freelancing, with a creative journey from 2021. Do not imply formal incorporation in 2021. Name past brands (e.g. HRX, Glitches) or show logos only after the owner confirms and gives permission.
3. Treat draft prices as drafts (see Facts). Tax (GST), cancellation and legal pages are placeholders until the owner or a lawyer supplies them.
4. Keep the Almost Final identity: do not alter the wordmark, bars or mascot. Use the original vector files in `Inputs/Logo/`.
5. All seven services get equal visual and navigational weight.
6. Inspect existing files before changing anything; preserve existing work; never overwrite originals in `Inputs/`.
7. Ask for approval before pushing to GitHub, deploying, connecting the domain, creating Firebase/Resend/Vercel resources, enabling payments, or using any paid service.
8. Never expose secrets, keys or service-account credentials; Firebase Admin and privileged work stay server-side.
9. Every animation needs a reduced-motion fallback and must respect the performance budget.
10. Do not claim anything is tested, deployed or complete without evidence; separate done, prepared, unverified and assumed.

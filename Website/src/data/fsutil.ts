import fs from 'node:fs';
import path from 'node:path';

/**
 * True when a file exists under `public/` (e.g. publicHas('/images/cards/x.webp')).
 * Uses the project folder (process.cwd()) instead of import.meta.url, because bundled pages
 * resolve import.meta.url inside dist/ during `astro build`, which made these checks fail in production.
 * Run `astro dev` / `astro build` from the Website/ folder (the npm scripts do).
 */
export const publicHas = (rel: string): boolean => fs.existsSync(path.join(process.cwd(), 'public', rel));

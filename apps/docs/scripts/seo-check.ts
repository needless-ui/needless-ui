/**
 * Runs after `ng build docs`. Reads every prerendered page, fails the build on
 * any SEO problem, then writes sitemap.xml (with hreflang alternates) and a
 * `<page>.html` twin of every page for static hosts (see the end of the file).
 *
 * Run: node apps/docs/scripts/seo-check.ts
 */
import { copyFile, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_LOCALE,
  LOCALE_INFO,
  LOCALES,
  type Locale,
  localeOf,
  localizePath,
  stripLocale,
} from '../src/app/i18n/locales.ts';
import { textWidth } from './text-width.ts';

const DIST = fileURLToPath(new URL('../../../dist/docs/browser/', import.meta.url));
const SITE_URL = 'https://www.needlessui.com';
/** Snippet limits, in rendered width (see text-width.ts), not code units. */
const DESCRIPTION = { min: 50, max: 160 };
const TITLE_MAX = 70;

interface Page {
  path: string;
  locale: Locale;
  html: string;
}

const absolute = (p: string) => (p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`);
const isNotFound = (p: string) => stripLocale(p) === '/404';

async function findPages(dir: string, base = ''): Promise<Page[]> {
  const pages: Page[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) pages.push(...(await findPages(full, `${base}/${entry.name}`)));
    else if (entry.name === 'index.html') {
      const pagePath = base || '/';
      pages.push({
        path: pagePath,
        locale: localeOf(pagePath),
        html: await readFile(full, 'utf8'),
      });
    }
  }
  return pages;
}

const decode = (s: string) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&nbsp;/g, '\u00a0')
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

function attr(tag: string, name: string): string | undefined {
  const match = new RegExp(`\\s${name}="([^"]*)"`).exec(tag);
  return match ? decode(match[1]) : undefined;
}

function tags(html: string, name: string): string[] {
  return html.match(new RegExp(`<${name}\\b[^>]*>`, 'g')) ?? [];
}

function meta(html: string, key: 'name' | 'property', value: string): string | undefined {
  const tag = tags(html, 'meta').find((t) => attr(t, key) === value);
  return tag ? attr(tag, 'content') : undefined;
}

const pages = await findPages(DIST);
const known = new Set(pages.map((p) => p.path));
const problems: string[] = [];
const seen = { title: new Map<string, string>(), description: new Map<string, string>() };

for (const page of pages) {
  const fail = (message: string) => problems.push(`${page.path}: ${message}`);
  const { html } = page;
  const noindex = isNotFound(page.path);

  const { tag, dir } = LOCALE_INFO[page.locale];
  const htmlTag = tags(html, 'html')[0] ?? '';
  if (attr(htmlTag, 'lang') !== tag)
    fail(`<html lang="${attr(htmlTag, 'lang')}"> should be "${tag}"`);
  if (attr(htmlTag, 'dir') !== dir) fail(`<html dir="${attr(htmlTag, 'dir')}"> should be "${dir}"`);

  const title = decode(/<title>([^<]*)<\/title>/.exec(html)?.[1]?.trim() ?? '');
  if (!title) fail('missing <title>');
  else if (textWidth(title) > TITLE_MAX)
    fail(`title is ${textWidth(title)} wide (max ${TITLE_MAX}): "${title}"`);

  const description = meta(html, 'name', 'description') ?? '';
  const width = textWidth(description);
  if (width < DESCRIPTION.min || width > DESCRIPTION.max) {
    fail(`description is ${width} wide (${DESCRIPTION.min}–${DESCRIPTION.max}): "${description}"`);
  }

  if ((html.match(/<h1\b/g) ?? []).length !== 1) fail('needs exactly one <h1>');

  const robots = meta(html, 'name', 'robots');
  if (noindex) {
    if (!robots?.includes('noindex')) fail('the 404 page must be noindex');
  } else {
    if (robots !== 'index, follow') fail(`robots is "${robots}"`);

    // Unique within a language; translations of one page may share a title across languages.
    for (const [kind, value] of [
      ['title', title],
      ['description', description],
    ] as const) {
      const key = `${page.locale} ${value}`;
      const other = seen[kind].get(key);
      if (other) fail(`${kind} duplicates ${other}`);
      seen[kind].set(key, page.path);
    }

    const links = tags(html, 'link');
    const canonical = links.find((l) => attr(l, 'rel') === 'canonical');
    const url = absolute(page.path);
    if (attr(canonical ?? '', 'href') !== url) fail(`canonical should be ${url}`);

    const neutral = stripLocale(page.path);
    const expected = [
      ...LOCALES.map((l) => [LOCALE_INFO[l].tag, absolute(localizePath(neutral, l))]),
      ['x-default', absolute(localizePath(neutral, DEFAULT_LOCALE))],
    ];
    for (const [hreflang, href] of expected) {
      const link = links.find(
        (l) => attr(l, 'rel') === 'alternate' && attr(l, 'hreflang') === hreflang,
      );
      if (attr(link ?? '', 'href') !== href) fail(`hreflang="${hreflang}" should point to ${href}`);
    }

    if (meta(html, 'property', 'og:url') !== url) fail('og:url should equal the canonical URL');
    for (const property of ['og:title', 'og:description', 'og:image', 'og:locale']) {
      if (!meta(html, 'property', property)) fail(`missing ${property}`);
    }
    if (meta(html, 'name', 'twitter:card') !== 'summary_large_image') fail('missing twitter:card');

    const jsonLd = [
      ...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
    ];
    if (!jsonLd.length) fail('missing JSON-LD');
    for (const [, json] of jsonLd) {
      try {
        JSON.parse(json);
      } catch {
        fail('JSON-LD is not valid JSON');
      }
    }
  }

  for (const anchor of tags(html, 'a')) {
    const href = attr(anchor, 'href');
    if (!href?.startsWith('/') || href.startsWith('//')) continue;
    const target = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (!known.has(target)) fail(`broken link to ${href}`);
  }
}

if (problems.length) {
  console.error(`SEO check failed:\n  ${problems.join('\n  ')}`);
  process.exit(1);
}

// sitemap.xml: one <url> per page, each listing its language alternates.
const today = new Date().toISOString().slice(0, 10);
const indexable = pages
  .filter((p) => !isNotFound(p.path))
  .sort((a, b) => a.path.localeCompare(b.path));
const entries = indexable.map((page) => {
  const neutral = stripLocale(page.path);
  const alternates = [
    ...LOCALES.map((l) => [LOCALE_INFO[l].tag, absolute(localizePath(neutral, l))]),
    ['x-default', absolute(localizePath(neutral, DEFAULT_LOCALE))],
  ]
    .map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`)
    .join('\n');
  return `  <url>\n    <loc>${absolute(page.path)}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`;
});
await writeFile(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`,
);

// Canonical URLs have no trailing slash. Static hosts, Amplify included, serve
// /components/button from components/button.html, but answer it with a redirect to
// /components/button/ when only components/button/index.html exists. So every page
// gets a twin; the one for /404 is the 404.html that hosts serve for unknown paths.
for (const page of pages) {
  if (page.path === '/') continue;
  await copyFile(path.join(DIST, page.path, 'index.html'), path.join(DIST, `${page.path}.html`));
}

console.log(
  `docs: SEO check passed for ${pages.length} pages; sitemap.xml lists ${indexable.length} URLs`,
);

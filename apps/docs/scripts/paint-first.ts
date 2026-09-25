/**
 * Runs after seo-check.ts. Makes every prerendered page paint before Angular
 * hydrates it.
 *
 * Angular loads the app with `<script src="main-*.js" type="module">`. When that
 * file arrives fast (a warm cache, a quick network), the browser runs it before
 * its first paint, and hydration holds the paint back. This swaps the tag for a
 * module preload, so the download still starts at once, and an inline script that
 * imports the file after the first contentful paint (right away where the browser
 * does not report paints). Angular's event replay covers clicks in between.
 *
 * Run: node apps/docs/scripts/paint-first.ts
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../../../dist/docs/browser/', import.meta.url));
const MAIN_SCRIPT = /<script src="(main-[\w-]+\.js)" type="module"><\/script>/g;

/**
 * Inline script: import the app once the first contentful paint is on screen.
 * The address resolves against `<base href>` (`document.baseURI`), as the preload
 * does: WebKit resolves an inline module's relative `import()` against the page
 * instead, so `/components/menu` asked for `/components/main-*.js`, a 404, and
 * Safari never hydrated a page below the root.
 */
const hydrateAfterPaint = (src: string) =>
  `const load = () => import(new URL('${src}', document.baseURI).href);` +
  "if (PerformanceObserver.supportedEntryTypes.includes('paint')) {" +
  'new PerformanceObserver((list, observer) => {' +
  "if (list.getEntriesByName('first-contentful-paint').length) { observer.disconnect(); load(); }" +
  "}).observe({ type: 'paint', buffered: true });" +
  '} else load();';

const files = (await readdir(DIST, { recursive: true })).filter((file) => file.endsWith('.html'));

for (const file of files) {
  const full = path.join(DIST, file);
  const html = await readFile(full, 'utf8');
  const tags = [...html.matchAll(MAIN_SCRIPT)];
  const [tag, src] = tags[0] ?? [];
  if (tags.length !== 1 || !tag || !src || !html.includes('</head>')) {
    throw new Error(
      `paint-first: ${file} has ${tags.length} Angular main scripts, expected 1. ` +
        'Run it once, right after the build; if it still fails, the build output changed.',
    );
  }
  const loader = `<script type="module">${hydrateAfterPaint(src)}</script>`;
  await writeFile(
    full,
    html.replace(tag, loader).replace('</head>', `<link rel="modulepreload" href="${src}"></head>`),
  );
}

console.log(`docs: ${files.length} HTML files paint before they hydrate`);

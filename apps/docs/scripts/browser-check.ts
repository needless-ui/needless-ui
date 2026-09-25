/**
 * Opens every component page of the built docs site in Chromium, Firefox and
 * WebKit, on a computer screen and on a phone-sized touch screen, and fails if a
 * page doesn't start (hydrate), throws, fails a request, is wider than the
 * screen, or has a popup that doesn't open, or close again on Escape. On touch
 * screens, the popups open with taps.
 *
 * Run it before a release, after `pnpm build:docs`, with the three browsers
 * installed (`pnpm exec playwright install chromium firefox webkit`):
 *
 *   node apps/docs/scripts/browser-check.ts [chromium,firefox,webkit] [component ids]
 *
 * specs/browser-support.md lists what's supported and what this checks.
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import type { AddressInfo } from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium, devices, firefox, webkit, type BrowserContextOptions } from 'playwright';
import { COMPONENT_IDS } from '../src/app/docs/ids.ts';

const DIST = fileURLToPath(new URL('../../../dist/docs/browser/', import.meta.url));
const ENGINES = { chromium, firefox, webkit };
type Engine = keyof typeof ENGINES;
const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

/** The screens each engine is checked on: a computer, and a phone with touch. */
function screens(engine: Engine): [string, BrowserContextOptions][] {
  const phone: BrowserContextOptions =
    engine === 'chromium'
      ? devices['Pixel 7']
      : engine === 'webkit'
        ? devices['iPhone 15']
        : // Firefox has no mobile emulation: a phone-sized touch screen.
          { viewport: { width: 412, height: 839 }, deviceScaleFactor: 2.625, hasTouch: true };
  return [
    ['computer', { viewport: { width: 1280, height: 900 } }],
    ['touch', phone],
  ];
}

const isFile = (file: string) =>
  stat(file).then(
    (s) => s.isFile(),
    () => false,
  );

/** Serves the build as a static host would: `/a/b` from `a/b.html`, else `a/b/index.html`. */
async function serve(): Promise<{ origin: string; close: () => void }> {
  const server = createServer(async (request, response) => {
    const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://x').pathname);
    const clean = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
    const candidates = path.extname(clean)
      ? [path.join(DIST, clean)]
      : [path.join(DIST, `${clean.replace(/\/$/, '')}.html`), path.join(DIST, clean, 'index.html')];
    let file: string | undefined;
    for (const candidate of candidates) if (await isFile(candidate)) file = file ?? candidate;
    const status = file ? 200 : 404;
    file ??= path.join(DIST, '404.html');
    response.writeHead(status, {
      'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream',
    });
    response.end(await readFile(file));
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  // localhost is a secure context, so clipboard and crypto work as on the real site.
  const origin = `http://localhost:${(server.address() as AddressInfo).port}`;
  return { origin, close: () => server.close() };
}

const engines = (process.argv[2]?.split(',') ?? Object.keys(ENGINES)) as Engine[];
const ids = process.argv[3]?.split(',') ?? [...COMPONENT_IDS];
const { origin, close } = await serve();
let failures = 0;

for (const engine of engines) {
  const browser = await ENGINES[engine].launch();
  for (const [screen, options] of screens(engine)) {
    const context = await browser.newContext(options);
    const touch = screen === 'touch';
    for (const id of ids) {
      const page = await context.newPage();
      const problems: string[] = [];
      page.on('pageerror', (error) => problems.push(`error: ${error.message.split('\n')[0]}`));
      page.on('response', (r) => {
        if (r.status() >= 400) problems.push(`${r.status()} ${r.url().replace(origin, '')}`);
      });
      try {
        await page.goto(`${origin}/components/${id}`, { waitUntil: 'networkidle' });
        // Deferred examples render near the viewport.
        for (const example of await page.$$('.example')) {
          await example.scrollIntoViewIfNeeded();
          await page.waitForTimeout(300);
        }
        await page.waitForTimeout(500);
        const state = await page.evaluate(() => ({
          // Hydration removes the markers the server left.
          hydrated: !document.querySelector('[ngh]'),
          overflow: document.documentElement.scrollWidth - window.innerWidth,
        }));
        if (!state.hydrated) problems.push('never started (still not hydrated)');
        if (state.overflow > 1) problems.push(`${state.overflow}px wider than the screen`);

        const openers = await page.$$(
          '.example-demo :is(button[popovertarget], [aria-haspopup]:not([aria-haspopup="false"]), button[aria-expanded="false"])',
        );
        const open = () =>
          page.evaluate(
            () => document.querySelectorAll('[popover]:popover-open, dialog[open]').length,
          );
        for (const opener of openers) {
          if (!(await opener.isVisible())) continue;
          const name = (
            (await opener.getAttribute('aria-label')) ??
            (await opener.textContent()) ??
            ''
          )
            .trim()
            .slice(0, 30);
          const before = await open();
          await opener.scrollIntoViewIfNeeded();
          if (touch) await opener.tap();
          else await opener.click();
          await page.waitForTimeout(450);
          const opened =
            (await open()) > before || (await opener.getAttribute('aria-expanded')) === 'true';
          await page.keyboard.press('Escape');
          await page.waitForTimeout(450);
          if (!opened) problems.push(`"${name}" doesn't open`);
          else if ((await open()) > before) problems.push(`"${name}" doesn't close on Escape`);
        }
      } catch (error) {
        problems.push(`failed: ${(error as Error).message.split('\n')[0]}`);
      }
      await page.close();
      const where = `${engine} ${screen} ${id}`;
      if (problems.length) {
        failures++;
        console.log(`✗ ${where}: ${problems.join('; ')}`);
      } else console.log(`✓ ${where}`);
    }
    await context.close();
  }
  await browser.close();
}

close();
if (failures) {
  console.error(`docs: ${failures} page checks failed`);
  process.exit(1);
}
console.log(`docs: every page works in ${engines.join(', ')}, on a computer and on a touch screen`);

/**
 * Renders the PNG brand assets with Playwright, using the real stylesheet:
 * the social preview image and the raster icons. The outputs are committed, so
 * this only needs to run when the brand changes.
 *
 * Run: pnpm build:css && node apps/docs/scripts/brand-assets.ts
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const PUBLIC = new URL('../public/', import.meta.url);
const CSS = fileURLToPath(
  new URL('../../../packages/css/dist/needless-ui.min.css', import.meta.url),
);
const MARK = await readFile(new URL('favicon.svg', PUBLIC), 'utf8');
/** The logo's paper and ink colors. */
const PAPER = '#fefcf8';
const INK = '#214f3e';

const OG = `
<html>
  <body style="margin:0;width:1200px;height:630px;display:flex;align-items:center;gap:64px;padding:0 96px;
               box-sizing:border-box;background:${PAPER};color:${INK};font-family:var(--nui-font-family-sans)">
    <div style="width:360px;flex:none">${MARK}</div>
    <div>
      <h1 style="margin:0;font-size:88px;line-height:1;letter-spacing:-0.03em">Needless UI</h1>
      <p style="margin:24px 0 0;font-size:36px;line-height:1.25">The Needlessly Engineered<br>Styling Toolkit</p>
      <p style="margin:32px 0 0;font-size:26px;opacity:0.8">Accessible Angular components · MIT</p>
    </div>
  </body>
</html>`;

/** The mark on the logo's paper, so it reads on light and dark tabs alike. */
const tile = (size: number, radius: number) => `
<html><body style="margin:0;width:${size}px;height:${size}px;background:transparent">
  <div style="width:100%;height:100%;display:grid;place-items:center;border-radius:${radius}px;background:${PAPER}">
    <div style="width:86%">${MARK}</div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
// Reduced motion collapses the duration tokens, so nothing is caught mid-transition.
await page.emulateMedia({ reducedMotion: 'reduce' });

async function render(
  html: string,
  width: number,
  height: number,
  file: string,
  transparent = false,
) {
  await page.setViewportSize({ width, height });
  await page.setContent(html);
  await page.addStyleTag({ path: CSS });
  await page.screenshot({
    path: fileURLToPath(new URL(file, PUBLIC)),
    omitBackground: transparent,
  });
  console.log(`docs: wrote public/${file}`);
}

await render(OG, 1200, 630, 'og-image.png');
// iOS rounds the touch icon's corners itself.
await render(tile(180, 0), 180, 180, 'apple-touch-icon.png');
await render(tile(48, 10), 48, 48, 'favicon-48.png', true);
await browser.close();

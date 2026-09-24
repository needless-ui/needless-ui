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

const OG = `
<html data-nui-theme="dark">
  <body style="margin:0;width:1200px;height:630px;display:flex;align-items:center;gap:64px;padding:0 80px;
               box-sizing:border-box;background:var(--nui-color-bg-canvas);color:var(--nui-color-text-default);
               font-family:var(--nui-font-family-sans)">
    <div style="flex:1.25">
      <div style="width:112px;height:112px">${MARK}</div>
      <h1 style="margin:40px 0 0;font-size:84px;line-height:1;letter-spacing:-0.03em">Needless UI</h1>
      <p style="margin:20px 0 0;font-size:34px;line-height:1.25;color:var(--nui-color-text-muted)">
        The Needlessly Engineered<br>Styling Toolkit
      </p>
      <p style="margin:28px 0 0;font-size:24px;color:var(--nui-color-accent-text)">
        Accessible Angular components · MIT
      </p>
    </div>
    <div style="flex:1;display:grid;gap:28px;justify-items:start">
      <div style="display:flex;gap:12px">
        <span class="nui-button" data-size="lg">Save</span>
        <span class="nui-button" data-size="lg" data-variant="soft" data-tone="neutral">Cancel</span>
      </div>
      <div class="nui-menu" style="width:280px;font-size:18px">
        <div class="nui-menu-item" style="min-height:40px">Edit <span class="nui-menu-shortcut">⌘E</span></div>
        <div class="nui-menu-item" style="min-height:40px" data-active="true">Duplicate <span class="nui-menu-shortcut">⌘D</span></div>
        <div class="nui-menu-separator"></div>
        <div class="nui-menu-item" style="min-height:40px" data-tone="danger">Delete</div>
      </div>
    </div>
  </body>
</html>`;

const icon = (size: number, padding: number) => `
<html><body style="margin:0;width:${size}px;height:${size}px;display:grid;place-items:center;background:transparent">
  <div style="width:${size - 2 * padding}px;height:${size - 2 * padding}px">${MARK}</div>
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
await render(icon(180, 0), 180, 180, 'apple-touch-icon.png');
await render(icon(48, 0), 48, 48, 'favicon-48.png', true);
await browser.close();

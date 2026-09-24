/**
 * Bundles src/index.css (tokens included) into dist/needless-ui.css and a
 * minified copy. Run: node scripts/build.ts
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { bundle } from './bundle.ts';

const dist = new URL('../dist/', import.meta.url);
await mkdir(dist, { recursive: true });

const [full, min] = await Promise.all([bundle(), bundle({ minify: true })]);
await writeFile(new URL('needless-ui.css', dist), full);
await writeFile(new URL('needless-ui.min.css', dist), min);

const kb = (s: string) => (Buffer.byteLength(s) / 1024).toFixed(1);
console.log(
  `@needless-ui/css: wrote dist/needless-ui.css (${kb(full)} kB) and needless-ui.min.css (${kb(min)} kB)`,
);

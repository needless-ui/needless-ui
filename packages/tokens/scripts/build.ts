/**
 * Compiles src/**.tokens.json into dist/tokens.css and dist/tokens.json.
 * Run: node scripts/build.ts
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { buildCss, buildJson } from './lib.ts';
import { loadSources } from './sources.ts';

const sources = await loadSources();
const dist = new URL('../dist/', import.meta.url);

await mkdir(dist, { recursive: true });
await writeFile(new URL('tokens.css', dist), buildCss(sources));
await writeFile(new URL('tokens.json', dist), JSON.stringify(buildJson(sources), null, 2) + '\n');

const count = sources.base.length + sources.modes.light.length;
console.log(
  `@needless-ui/tokens: wrote dist/tokens.css and dist/tokens.json (${count} tokens per mode)`,
);

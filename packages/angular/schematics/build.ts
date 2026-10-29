/**
 * ng-packagr doesn't build schematics: this compiles them into the package's
 * dist next to their collection and schemas. Runs after `ng build`, which
 * empties dist. Run: node packages/angular/schematics/build.ts
 */
import { execFileSync } from 'node:child_process';
import { copyFile, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const src = new URL('./', import.meta.url);
const dist = new URL('../../../dist/needless-ui/angular/schematics/', import.meta.url);

const tsc = createRequire(import.meta.url).resolve('typescript/bin/tsc');
execFileSync(process.execPath, [tsc, '-p', fileURLToPath(new URL('tsconfig.json', src))], {
  stdio: 'inherit',
});

for (const file of ['collection.json', 'ng-add/schema.json']) {
  await mkdir(new URL('./', new URL(file, dist)), { recursive: true });
  await copyFile(new URL(file, src), new URL(file, dist));
}

console.log('@needless-ui/angular: built the ng-add schematic');

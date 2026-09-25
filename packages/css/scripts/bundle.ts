import { bundleAsync, Features, type Targets } from 'lightningcss';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ENTRY = fileURLToPath(new URL('../src/index.css', import.meta.url));
const LAYERS = new URL('../src/layers.css', import.meta.url);

const version = (major: number, minor = 0) => (major << 16) | (minor << 8);

/**
 * The oldest browsers Needless UI supports (specs/browser-support.md): Firefox
 * 125 and Safari 17 bring the Popover API, Chrome and Edge 120 unprefixed masks
 * and `:dir()`. Used for vendor prefixes.
 */
export const TARGETS: Targets = {
  chrome: version(120),
  edge: version(120),
  firefox: version(125),
  safari: version(17),
  ios_saf: version(17),
};

/** Inlines every @import, resolving bare specifiers through package `exports`. */
export async function bundle({ minify = false } = {}): Promise<string> {
  const { code, warnings } = await bundleAsync({
    filename: ENTRY,
    minify,
    targets: TARGETS,
    // We never use light-dark(), so skip the polyfill variables it would add.
    exclude: Features.LightDark,
    resolver: {
      resolve(specifier, from) {
        if (specifier.startsWith('.') || path.isAbsolute(specifier)) {
          return path.resolve(path.dirname(from), specifier);
        }
        return createRequire(from).resolve(specifier);
      },
    },
  });
  for (const warning of warnings) {
    console.warn(`${warning.loc.filename}:${warning.loc.line}: ${warning.message}`);
  }
  // lightningcss drops layer statements whose order is already implied by the
  // bundle. Keep ours so consumers can see and rely on the full layer order.
  return `${await layerOrder()}\n${code.toString()}`;
}

async function layerOrder(): Promise<string> {
  const css = (await readFile(LAYERS, 'utf8')).replace(/\/\*[\s\S]*?\*\//g, '');
  const statement = /@layer [^;{]+;/.exec(css)?.[0];
  if (!statement) throw new Error('src/layers.css must contain the @layer order statement');
  return statement;
}

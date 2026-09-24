import { readFile } from 'node:fs/promises';
import { flatten, type Token, type TokenSources } from './lib.ts';

/** Token files, relative to `src/`. Mode files must define the same token names. */
export const FILES = {
  base: [
    'dimension.tokens.json',
    'typography.tokens.json',
    'motion.tokens.json',
    'elevation.tokens.json',
    'color/static.tokens.json',
    'semantic.tokens.json',
  ],
  light: 'color/light.tokens.json',
  dark: 'color/dark.tokens.json',
};

async function load(file: string): Promise<Token[]> {
  const text = await readFile(new URL(`../src/${file}`, import.meta.url), 'utf8');
  return flatten(JSON.parse(text), file);
}

export async function loadSources(): Promise<TokenSources> {
  const base = (await Promise.all(FILES.base.map(load))).flat();
  const [light, dark] = await Promise.all([load(FILES.light), load(FILES.dark)]);
  return { base, modes: { light, dark } };
}

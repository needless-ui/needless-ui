/**
 * Highlights every example and snippet at build time, so pages ship static,
 * already-colored code and no highlighter. Writes:
 *
 *   src/app/generated/code.ts           snippet key → { name, language, source, html },
 *                                       and the list of example files
 *   src/app/generated/examples-code.ts  example key → the same, loaded on “Show code”
 *   src/app/generated/code.css          one class per token color, for both themes
 *
 * It also fails when a token color is below 4.5:1 contrast against the code
 * background, so the docs keep a perfect accessibility score.
 *
 * Run: node apps/docs/scripts/generate-code.ts
 */
import { transformerStyleToClass } from '@shikijs/transformers';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHighlighter } from 'shiki';

const SRC = fileURLToPath(new URL('../src/', import.meta.url));
const OUT = path.join(SRC, 'app/generated');
const TOKENS_JSON = fileURLToPath(
  new URL('../../../packages/tokens/dist/tokens.json', import.meta.url),
);

const ROOTS = [
  { dir: 'app/examples', key: 'examples' },
  { dir: 'snippets', key: 'snippets' },
];
const LANGUAGES: Record<string, string> = {
  '.ts': 'angular-ts',
  '.html': 'angular-html',
  '.css': 'css',
  '.sh': 'shellscript',
};
const THEMES = { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' } as const;
const MIN_CONTRAST = 4.5;

async function listFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(full) : Promise.resolve([full]);
    }),
  );
  return nested.flat().sort();
}

// --- contrast check ---------------------------------------------------------

type Rgb = [number, number, number];

function hexToRgb(hex: string): Rgb {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? [...value].map((c) => c + c).join('') : value.slice(0, 6);
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255) as Rgb;
}

function luminance([r, g, b]: Rgb): number {
  const lin = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrast(a: Rgb, b: Rgb): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** The code background is the `bg.subtle` token (neutral step 2) in each mode. */
async function codeBackgrounds(): Promise<Record<'light' | 'dark', Rgb>> {
  const tokens = JSON.parse(await readFile(TOKENS_JSON, 'utf8'));
  const hex = (mode: 'light' | 'dark') => {
    const oklch = tokens[mode]['color.neutral.2'].value as string;
    return oklchToRgb(oklch);
  };
  return { light: hex('light'), dark: hex('dark') };
}

function oklchToRgb(css: string): Rgb {
  const [l, c, h] = /oklch\(([\d.]+) ([\d.]+) ([\d.]+)/.exec(css)!.slice(1).map(Number);
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);
  const L = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const M = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const S = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const linear = [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ];
  const encode = (v: number) => {
    const x = Math.min(1, Math.max(0, v));
    return x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
  };
  return linear.map(encode) as Rgb;
}

// --- generation -------------------------------------------------------------

const highlighter = await createHighlighter({
  themes: Object.values(THEMES),
  langs: [...new Set(Object.values(LANGUAGES))],
});
const toClasses = transformerStyleToClass({ classPrefix: 'sk-' });

const files: Record<string, { name: string; language: string; source: string; html: string }> = {};
for (const root of ROOTS) {
  const base = path.join(SRC, root.dir);
  for (const file of await listFiles(base)) {
    const language = LANGUAGES[path.extname(file)];
    if (!language) continue;
    const source = (await readFile(file, 'utf8')).replace(/\s+$/, '') + '\n';
    const key = `${root.key}/${path.relative(base, file).split(path.sep).join('/')}`;
    const html = highlighter.codeToHtml(source.replace(/\n$/, ''), {
      lang: language,
      themes: THEMES,
      defaultColor: false,
      structure: 'inline',
      transformers: [toClasses],
    });
    files[key] = { name: path.basename(file), language: path.extname(file).slice(1), source, html };
  }
}

// Every token color must stay readable on the code background.
const backgrounds = await codeBackgrounds();
const css = toClasses.getCSS();
const failures: string[] = [];
for (const [, declarations] of css.matchAll(/\{([^}]*)\}/g)) {
  for (const mode of ['light', 'dark'] as const) {
    const color = new RegExp(`--shiki-${mode}:\\s*(#[0-9a-fA-F]{3,8})`).exec(declarations)?.[1];
    if (!color) continue;
    const ratio = contrast(hexToRgb(color), backgrounds[mode]);
    if (ratio < MIN_CONTRAST) failures.push(`${mode} ${color}: ${ratio.toFixed(2)}:1`);
  }
}
if (failures.length) {
  console.error(
    `Code colors below ${MIN_CONTRAST}:1 on the code background:\n  ${[...new Set(failures)].join('\n  ')}`,
  );
  process.exit(1);
}

await mkdir(OUT, { recursive: true });
// Snippets appear on pages and load with them; example sources wait for “Show code”.
const pick = (prefix: string) =>
  Object.fromEntries(Object.entries(files).filter(([key]) => key.startsWith(prefix)));
const examples = pick('examples/');
await writeFile(
  path.join(OUT, 'code.ts'),
  [
    '/* Generated by apps/docs/scripts/generate-code.ts. Do not edit. */',
    'export interface CodeFile {',
    '  readonly name: string;',
    '  readonly language: string;',
    '  readonly source: string;',
    '  readonly html: string;',
    '}',
    '',
    `export const CODE: Readonly<Record<string, CodeFile>> = ${JSON.stringify(pick('snippets/'), null, 2)};`,
    '',
    '/** Every example source file; their code is in `examples-code.ts`, loaded on demand. */',
    `export const EXAMPLE_FILES: readonly string[] = ${JSON.stringify(Object.keys(examples), null, 2)};`,
    '',
  ].join('\n'),
);
await writeFile(
  path.join(OUT, 'examples-code.ts'),
  [
    '/* Generated by apps/docs/scripts/generate-code.ts. Do not edit. */',
    "import type { CodeFile } from './code';",
    '',
    `export const EXAMPLES_CODE: Readonly<Record<string, CodeFile>> = ${JSON.stringify(examples, null, 2)};`,
    '',
  ].join('\n'),
);
await writeFile(
  path.join(OUT, 'code.css'),
  `/* Generated by apps/docs/scripts/generate-code.ts. Do not edit. */\n${css}\n`,
);
console.log(`docs: highlighted ${Object.keys(files).length} files`);

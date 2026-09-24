/**
 * Generates the 12-step color scales in `src/color/{light,dark}.tokens.json`.
 *
 * Every palette shares one lightness/chroma curve per mode, so each step keeps
 * the same role everywhere:
 *
 *   1–2  backgrounds        6–8  borders (subtle, default, hovered)
 *   3–5  element states     9–10 solid fills (default, hovered)
 *   11   low-contrast text  12   high-contrast text
 *
 * The generator fits every color into sRGB and nudges lightness until the
 * WCAG pairs below pass, then prints a contrast report.
 *
 * Run: node scripts/palette.ts
 */
import { writeFile } from 'node:fs/promises';
import { contrastRatio, fitToSrgb, round, toHex, type Oklch } from './color.ts';

type Mode = 'light' | 'dark';

interface Step {
  /** OKLCH lightness. */
  l: number;
  /** Share of the palette's peak chroma, 0–1. */
  c: number;
}

interface Palette {
  name: string;
  hue: number;
  /** Peak chroma, reached at step 9. */
  chroma: number;
  /** Text color used on the solid steps (9–10). */
  onSolid: 'white' | 'ink';
  /** Per-mode lightness overrides for steps 9 and 10. */
  solid?: Record<Mode, [step9: number, step10: number]>;
}

const STEPS: Record<Mode, Step[]> = {
  light: [
    { l: 0.99, c: 0.02 },
    { l: 0.975, c: 0.05 },
    { l: 0.95, c: 0.1 },
    { l: 0.925, c: 0.16 },
    { l: 0.895, c: 0.22 },
    { l: 0.86, c: 0.28 },
    { l: 0.81, c: 0.36 },
    { l: 0.74, c: 0.5 },
    { l: 0.55, c: 1 },
    { l: 0.5, c: 0.98 },
    { l: 0.47, c: 0.85 },
    { l: 0.26, c: 0.45 },
  ],
  dark: [
    { l: 0.18, c: 0.08 },
    { l: 0.205, c: 0.1 },
    { l: 0.245, c: 0.16 },
    { l: 0.275, c: 0.22 },
    { l: 0.31, c: 0.28 },
    { l: 0.35, c: 0.32 },
    { l: 0.41, c: 0.4 },
    { l: 0.49, c: 0.55 },
    { l: 0.5, c: 1 },
    { l: 0.555, c: 0.98 },
    { l: 0.78, c: 0.65 },
    { l: 0.95, c: 0.2 },
  ],
};

const PALETTES: Palette[] = [
  { name: 'neutral', hue: 262, chroma: 0.02, onSolid: 'white' },
  { name: 'accent', hue: 264, chroma: 0.22, onSolid: 'white' },
  { name: 'danger', hue: 25, chroma: 0.21, onSolid: 'white' },
  { name: 'success', hue: 152, chroma: 0.16, onSolid: 'white' },
  {
    name: 'warning',
    hue: 78,
    chroma: 0.17,
    onSolid: 'ink',
    solid: { light: [0.8, 0.76], dark: [0.8, 0.76] },
  },
];

export const STATIC_COLORS = {
  white: { l: 1, c: 0, h: 0 },
  ink: { l: 0.22, c: 0.02, h: 262 },
} satisfies Record<string, Oklch>;

/** Mode-specific colors that sit outside the 12-step scales. */
interface Extra {
  color: Oklch;
  alpha?: number;
  description: string;
}

const EXTRAS: Record<Mode, Record<'raised' | 'backdrop' | 'shadow', Extra>> = {
  light: {
    raised: {
      color: { l: 1, c: 0, h: 0 },
      description: 'Surfaces that float above the canvas: dialogs, menus.',
    },
    backdrop: {
      color: { l: 0.22, c: 0.02, h: 262 },
      alpha: 0.45,
      description: 'Scrim behind modal dialogs.',
    },
    shadow: {
      color: { l: 0.22, c: 0.02, h: 262 },
      alpha: 0.16,
      description: 'Base color of elevation shadows.',
    },
  },
  dark: {
    raised: {
      color: { l: 0.225, c: 0.004, h: 262 },
      description: 'Surfaces that float above the canvas: dialogs, menus.',
    },
    backdrop: {
      color: { l: 0, c: 0, h: 0 },
      alpha: 0.6,
      description: 'Scrim behind modal dialogs.',
    },
    shadow: {
      color: { l: 0, c: 0, h: 0 },
      alpha: 0.5,
      description: 'Base color of elevation shadows.',
    },
  },
};

const MIN = { text: 4.5, strongText: 7, onSolid: 4.5 } as const;
const NUDGE = 0.005;

function buildScale(palette: Palette, mode: Mode): Oklch[] {
  const scale = STEPS[mode].map((step, i): Oklch => {
    const override = palette.solid?.[mode];
    const l = override && (i === 8 || i === 9) ? override[i - 8] : step.l;
    return fitToSrgb({ l, c: palette.chroma * step.c, h: palette.hue });
  });

  const towardContrast = (color: Oklch, against: Oklch, min: number): Oklch => {
    // Move lightness away from the background until the pair passes.
    const direction = against.l > color.l ? -1 : 1;
    let next = color;
    while (contrastRatio(next, against) < min && next.l > 0 && next.l < 1) {
      next = fitToSrgb({ ...next, l: next.l + direction * NUDGE });
    }
    return next;
  };

  const bg = scale[2]; // step 3: the strongest background text sits on
  scale[10] = towardContrast(scale[10], bg, MIN.text);
  scale[11] = towardContrast(scale[11], bg, MIN.strongText);

  const onSolid = STATIC_COLORS[palette.onSolid];
  for (const i of [8, 9]) {
    // Darken (or lighten) the fill, never the text, to keep the on-solid color fixed.
    const direction = onSolid.l > scale[i].l ? -1 : 1;
    while (contrastRatio(scale[i], onSolid) < MIN.onSolid) {
      scale[i] = fitToSrgb({ ...scale[i], l: scale[i].l + direction * NUDGE });
    }
  }
  return scale;
}

function toToken(color: Oklch, description?: string, alpha = 1) {
  return {
    $value: {
      colorSpace: 'oklch',
      components: [round(color.l), round(color.c), color.h],
      ...(alpha === 1 ? {} : { alpha }),
      hex: toHex(color),
    },
    ...(description ? { $description: description } : {}),
  };
}

async function writeTokens(file: string, tokens: object) {
  await writeFile(
    new URL(`../src/color/${file}`, import.meta.url),
    JSON.stringify(tokens, null, 2) + '\n',
  );
}

async function main() {
  await writeTokens('static.tokens.json', {
    $description: 'Generated by scripts/palette.ts. Colors that stay the same in every mode.',
    color: {
      $type: 'color',
      static: {
        white: toToken(STATIC_COLORS.white, 'Text on dark solid fills.'),
        ink: toToken(STATIC_COLORS.ink, 'Text on bright solid fills, such as warning.'),
      },
    },
  });

  const report: string[] = [];
  for (const mode of ['light', 'dark'] as const) {
    const color: Record<string, unknown> = { $type: 'color' };
    for (const palette of PALETTES) {
      const scale = buildScale(palette, mode);
      color[palette.name] = Object.fromEntries(scale.map((c, i) => [String(i + 1), toToken(c)]));

      const onSolid = STATIC_COLORS[palette.onSolid];
      const fmt = (n: number) => n.toFixed(2).padStart(5);
      report.push(
        `${mode.padEnd(5)} ${palette.name.padEnd(8)}` +
          ` text11/bg3 ${fmt(contrastRatio(scale[10], scale[2]))}` +
          ` text12/bg3 ${fmt(contrastRatio(scale[11], scale[2]))}` +
          ` ${palette.onSolid}/solid9 ${fmt(contrastRatio(onSolid, scale[8]))}` +
          ` ${palette.onSolid}/solid10 ${fmt(contrastRatio(onSolid, scale[9]))}` +
          ` solid9/bg1 ${fmt(contrastRatio(scale[8], scale[0]))}`,
      );
    }
    const extras = EXTRAS[mode];
    const extra = (e: Extra) => toToken(e.color, e.description, e.alpha);
    color['bg'] = { raised: extra(extras.raised) };
    color['backdrop'] = extra(extras.backdrop);
    color['shadow'] = extra(extras.shadow);
    report.push(
      `${mode.padEnd(5)} raised   text12/raised ${contrastRatio(buildScale(PALETTES[0], mode)[11], extras.raised.color).toFixed(2)}`,
    );

    await writeTokens(`${mode}.tokens.json`, {
      $description: `Generated by scripts/palette.ts (${mode} mode). Edit the generator, not this file.`,
      color,
    });
  }
  console.log(report.join('\n'));
}

await main();

/**
 * Minimal OKLCH ↔ sRGB math for the palette generator and token build.
 * Formulas: Björn Ottosson, "A perceptual color space for image processing" (OKLab),
 * and WCAG 2.2 relative luminance / contrast ratio.
 */

export interface Oklch {
  /** Perceptual lightness, 0–1. */
  l: number;
  /** Chroma, 0–~0.4. */
  c: number;
  /** Hue angle in degrees. */
  h: number;
}

type Rgb = [r: number, g: number, b: number];

/** OKLCH → linear-light sRGB (channels may fall outside 0–1 when out of gamut). */
export function oklchToLinearSrgb({ l, c, h }: Oklch): Rgb {
  const hr = (h * Math.PI) / 180;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;

  const L = l_ ** 3;
  const M = m_ ** 3;
  const S = s_ ** 3;

  return [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ];
}

const GAMUT_EPSILON = 1e-4;

export function isInSrgbGamut(color: Oklch): boolean {
  return oklchToLinearSrgb(color).every((v) => v >= -GAMUT_EPSILON && v <= 1 + GAMUT_EPSILON);
}

/** Reduces chroma (keeping lightness and hue) until the color fits in sRGB. */
export function fitToSrgb(color: Oklch): Oklch {
  if (isInSrgbGamut(color)) return color;
  let low = 0;
  let high = color.c;
  for (let i = 0; i < 32; i++) {
    const mid = (low + high) / 2;
    if (isInSrgbGamut({ ...color, c: mid })) low = mid;
    else high = mid;
  }
  return { ...color, c: low };
}

/** WCAG 2.2 relative luminance of an in-gamut color. */
export function relativeLuminance(color: Oklch): number {
  const [r, g, b] = oklchToLinearSrgb(color).map((v) => Math.min(1, Math.max(0, v)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** WCAG 2.2 contrast ratio, 1–21. */
export function contrastRatio(a: Oklch, b: Oklch): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

function encodeSrgb(linear: number): number {
  const v = Math.min(1, Math.max(0, linear));
  return v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
}

/** Nearest sRGB hex, used as the DTCG `hex` fallback. */
export function toHex(color: Oklch): string {
  return (
    '#' +
    oklchToLinearSrgb(color)
      .map((v) =>
        Math.round(encodeSrgb(v) * 255)
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')
  );
}

export function round(value: number, digits = 4): number {
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}

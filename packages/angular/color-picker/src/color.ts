/**
 * A color in OKLCH: lightness from 0 to 1, chroma from 0 (gray) up to about 0.4,
 * hue in degrees, and alpha from 0 to 1. OKLCH is perceptual: equal steps look
 * equal, and a hue keeps its look from light to dark.
 */
export interface NuiColor {
  l: number;
  c: number;
  h: number;
  alpha: number;
}

/** How a color is written: `#3b82f6`, `rgb(59 130 246)`, `hsl(217 91% 60%)`, `oklch(62.3% 0.188 259.8)` or `color(display-p3 …)`. */
export type NuiColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch' | 'p3';

/** The colors a screen can show: sRGB everywhere, Display P3 on wide-gamut screens. */
export type NuiGamut = 'srgb' | 'p3';

type Vec = readonly [number, number, number];
type Matrix = readonly [Vec, Vec, Vec];

const mul = (m: Matrix, [x, y, z]: Vec): Vec => [
  m[0][0] * x + m[0][1] * y + m[0][2] * z,
  m[1][0] * x + m[1][1] * y + m[1][2] * z,
  m[2][0] * x + m[2][1] * y + m[2][2] * z,
];

const times = (a: Matrix, b: Matrix): Matrix =>
  [0, 1, 2].map((i) =>
    [0, 1, 2].map((j) => a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j]),
  ) as unknown as Matrix;

// The matrices of CSS Color 4: linear RGB to CIE XYZ (D65 white), and back.
const SRGB_TO_XYZ: Matrix = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
];
const XYZ_TO_SRGB: Matrix = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
];
const P3_TO_XYZ: Matrix = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976],
];
const XYZ_TO_P3: Matrix = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872],
];
// Bradford chromatic adaptation between the D65 and D50 whites.
const D65_TO_D50: Matrix = [
  [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
  [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
  [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008],
];
const D50_TO_D65: Matrix = [
  [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
  [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
  [0.012314001688319899, -0.020507696433477912, 1.3303659366080753],
];
// OKLab (Björn Ottosson): linear sRGB to cone responses, and cone responses to Lab.
const SRGB_TO_LMS: Matrix = [
  [0.4122214708, 0.5363325363, 0.0514459929],
  [0.2119034982, 0.6806995451, 0.1073969566],
  [0.0883024619, 0.2817188376, 0.6299787005],
];
const LMS_TO_SRGB: Matrix = [
  [4.0767416621, -3.3077115913, 0.2309699292],
  [-1.2684380046, 2.6097574011, -0.3413193965],
  [-0.0041960863, -0.7034186147, 1.707614701],
];
const LMS_TO_OKLAB: Matrix = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766],
];
const OKLAB_TO_LMS: Matrix = [
  [1, 0.3963377774, 0.2158037573],
  [1, -0.1055613458, -0.0638541728],
  [1, -0.0894841775, -1.291485548],
];
const P3_TO_SRGB = times(XYZ_TO_SRGB, P3_TO_XYZ);
const SRGB_TO_P3 = times(XYZ_TO_P3, SRGB_TO_XYZ);

/** sRGB and Display P3 share a transfer curve: encoded 0–1 to linear light, and back. */
const toLinear = (v: number) =>
  Math.sign(v) *
  (Math.abs(v) <= 0.04045 ? Math.abs(v) / 12.92 : ((Math.abs(v) + 0.055) / 1.055) ** 2.4);
const toGamma = (v: number) =>
  Math.sign(v) *
  (Math.abs(v) <= 0.0031308 ? Math.abs(v) * 12.92 : 1.055 * Math.abs(v) ** (1 / 2.4) - 0.055);

const linearSrgbToOklab = (rgb: Vec): Vec =>
  mul(LMS_TO_OKLAB, mul(SRGB_TO_LMS, rgb).map(Math.cbrt) as unknown as Vec);
const oklabToLinearSrgb = (lab: Vec): Vec =>
  mul(LMS_TO_SRGB, mul(OKLAB_TO_LMS, lab).map((v) => v ** 3) as unknown as Vec);

function oklabToColor([l, a, b]: Vec, alpha: number): NuiColor {
  const c = Math.hypot(a, b);
  const h = c < 1e-6 ? 0 : ((Math.atan2(b, a) * 180) / Math.PI + 360) % 360;
  return { l, c, h, alpha };
}

function colorToOklab({ l, c, h }: NuiColor): Vec {
  const radians = (h * Math.PI) / 180;
  return [l, c * Math.cos(radians), c * Math.sin(radians)];
}

/** A color from linear sRGB channels. */
const fromLinearSrgb = (rgb: Vec, alpha: number) => oklabToColor(linearSrgbToOklab(rgb), alpha);

/** A color's channels in a gamut's RGB, encoded (0–1 where it's in the gamut), without mapping. */
export function nuiColorToRgb(color: NuiColor, gamut: NuiGamut = 'srgb'): Vec {
  const linear = oklabToLinearSrgb(colorToOklab(color));
  return (gamut === 'p3' ? mul(SRGB_TO_P3, linear) : linear).map(toGamma) as unknown as Vec;
}

/** A color from encoded RGB channels (0–1) in a gamut. */
export function nuiColorFromRgb(rgb: Vec, gamut: NuiGamut = 'srgb', alpha = 1): NuiColor {
  const linear = rgb.map(toLinear) as unknown as Vec;
  return fromLinearSrgb(gamut === 'p3' ? mul(P3_TO_SRGB, linear) : linear, alpha);
}

const EPSILON = 1e-4;

/** Whether a gamut holds a color. */
export function nuiInGamut(color: NuiColor, gamut: NuiGamut = 'srgb'): boolean {
  return nuiColorToRgb(color, gamut).every((v) => v >= -EPSILON && v <= 1 + EPSILON);
}

/** The most chroma a lightness and hue have in a gamut. */
export function nuiMaxChroma(l: number, h: number, gamut: NuiGamut = 'srgb'): number {
  if (l <= 0 || l >= 1) return 0;
  let low = 0;
  let high = 0.5;
  for (let i = 0; i < 20; i++) {
    const mid = (low + high) / 2;
    if (nuiInGamut({ l, c: mid, h, alpha: 1 }, gamut)) low = mid;
    else high = mid;
  }
  return low;
}

/**
 * A color brought into a gamut the way CSS Color 4 does: lightness and hue kept,
 * chroma lowered until it fits, then clipped.
 */
export function nuiToGamut(color: NuiColor, gamut: NuiGamut = 'srgb'): NuiColor {
  if (color.l >= 1) return { l: 1, c: 0, h: color.h, alpha: color.alpha };
  if (color.l <= 0) return { l: 0, c: 0, h: color.h, alpha: color.alpha };
  if (nuiInGamut(color, gamut)) return color;
  const c = Math.min(color.c, nuiMaxChroma(color.l, color.h, gamut));
  const clipped = nuiColorToRgb({ ...color, c }, gamut).map((v) =>
    Math.min(1, Math.max(0, v)),
  ) as unknown as Vec;
  return { ...nuiColorFromRgb(clipped, gamut, color.alpha), h: color.h };
}

// Parsing.

/** A number, a percentage of `percent`, or `none`. */
function channel(text: string, percent: number): number {
  if (text === 'none') return 0;
  const value = Number.parseFloat(text);
  if (!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?%?$/.test(text)) return Number.NaN;
  return text.endsWith('%') ? (value / 100) * percent : value;
}

/** An angle in degrees, from any CSS angle unit. */
function angle(text: string): number {
  if (text === 'none') return 0;
  const match = /^([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)(deg|rad|grad|turn)?$/.exec(text);
  if (!match) return Number.NaN;
  const value = +match[1];
  const factor = { deg: 1, rad: 180 / Math.PI, grad: 0.9, turn: 360 }[match[2] ?? 'deg']!;
  return (((value * factor) % 360) + 360) % 360;
}

function hslToRgb(h: number, s: number, l: number): Vec {
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - s * Math.min(l, 1 - l) * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return [f(0), f(8), f(4)];
}

function hwbToRgb(h: number, w: number, b: number): Vec {
  if (w + b >= 1) {
    const gray = w / (w + b);
    return [gray, gray, gray];
  }
  return hslToRgb(h, 1, 0.5).map((v) => v * (1 - w - b) + w) as unknown as Vec;
}

const KAPPA = 24389 / 27;
const E = 216 / 24389;
const D50: Vec = [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585];

function labToXyzD50([l, a, b]: Vec): Vec {
  const fy = (l + 16) / 116;
  const fx = a / 500 + fy;
  const fz = fy - b / 200;
  const x = fx ** 3 > E ? fx ** 3 : (116 * fx - 16) / KAPPA;
  const y = l > KAPPA * E ? fy ** 3 : l / KAPPA;
  const z = fz ** 3 > E ? fz ** 3 : (116 * fz - 16) / KAPPA;
  return [x * D50[0], y * D50[1], z * D50[2]];
}

function xyzD65ToColor(xyz: Vec, alpha: number): NuiColor {
  return fromLinearSrgb(mul(XYZ_TO_SRGB, xyz), alpha);
}

function hex(text: string): NuiColor | null {
  const digits = text.slice(1);
  if (!/^([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/.test(digits)) return null;
  const long = digits.length <= 4 ? [...digits].map((d) => d + d).join('') : digits;
  const values = long.match(/../g)!.map((pair) => Number.parseInt(pair, 16) / 255);
  return nuiColorFromRgb([values[0], values[1], values[2]], 'srgb', values[3] ?? 1);
}

/**
 * Reads a CSS color: hex, `rgb()`, `hsl()`, `hwb()`, `lab()`, `lch()`, `oklab()`,
 * `oklch()`, and `color()` in `srgb`, `srgb-linear`, `display-p3`, `xyz`,
 * `xyz-d65` or `xyz-d50`; modern or legacy (comma) syntax, `none` and all. Null
 * for anything else. Named colors need a browser: see the color picker's field.
 */
export function nuiParseColor(text: string): NuiColor | null {
  const input = text.trim().toLowerCase();
  if (input.startsWith('#')) return hex(input);
  if (input === 'transparent') return { l: 0, c: 0, h: 0, alpha: 0 };
  const match = /^([a-z-]+)\(\s*([^()]*?)\s*\)$/.exec(input);
  if (!match) return null;
  const [, name, body] = match;
  let parts: string[];
  let alphaText: string | undefined;
  if (body.includes(',')) {
    parts = body.split(/\s*,\s*/);
    if (parts.length === 4) alphaText = parts.pop();
  } else {
    const [main, alpha, extra] = body.split(/\s*\/\s*/);
    if (extra !== undefined) return null;
    parts = main.split(/\s+/);
    alphaText = alpha;
  }
  let space = name;
  if (name === 'color') space = parts.shift() ?? '';
  if (parts.length !== 3) return null;
  const alpha = alphaText === undefined ? 1 : channel(alphaText, 1);
  if (Number.isNaN(alpha)) return null;
  const a = Math.min(1, Math.max(0, alpha));
  const [p, q, r] = parts;
  let color: NuiColor;
  switch (space) {
    case 'rgb':
    case 'rgba':
      color = nuiColorFromRgb(
        [channel(p, 255) / 255, channel(q, 255) / 255, channel(r, 255) / 255],
        'srgb',
        a,
      );
      break;
    case 'hsl':
    case 'hsla':
      color = nuiColorFromRgb(
        hslToRgb(angle(p), channel(q, 100) / 100, channel(r, 100) / 100),
        'srgb',
        a,
      );
      break;
    case 'hwb':
      color = nuiColorFromRgb(
        hwbToRgb(angle(p), channel(q, 100) / 100, channel(r, 100) / 100),
        'srgb',
        a,
      );
      break;
    case 'lab':
    case 'lch': {
      const l = channel(p, 100);
      let lab: Vec;
      if (space === 'lab') lab = [l, channel(q, 125), channel(r, 125)];
      else {
        const c = channel(q, 150);
        const h = (angle(r) * Math.PI) / 180;
        lab = [l, c * Math.cos(h), c * Math.sin(h)];
      }
      color = xyzD65ToColor(mul(D50_TO_D65, labToXyzD50(lab)), a);
      break;
    }
    case 'oklab':
      color = oklabToColor([channel(p, 1), channel(q, 0.4), channel(r, 0.4)], a);
      break;
    case 'oklch':
      color = { l: channel(p, 1), c: Math.max(0, channel(q, 0.4)), h: angle(r), alpha: a };
      break;
    case 'srgb':
    case 'display-p3':
      color = nuiColorFromRgb(
        [channel(p, 1), channel(q, 1), channel(r, 1)],
        space === 'srgb' ? 'srgb' : 'p3',
        a,
      );
      break;
    case 'srgb-linear':
      color = fromLinearSrgb([channel(p, 1), channel(q, 1), channel(r, 1)], a);
      break;
    case 'xyz':
    case 'xyz-d65':
    case 'xyz-d50': {
      const xyz: Vec = [channel(p, 1), channel(q, 1), channel(r, 1)];
      color = xyzD65ToColor(space === 'xyz-d50' ? mul(D50_TO_D65, xyz) : xyz, a);
      break;
    }
    default:
      return null;
  }
  return [color.l, color.c, color.h].some(Number.isNaN) ? null : color;
}

// Writing.

const round = (value: number, digits: number) => {
  const factor = 10 ** digits;
  // Rounds halves up, and never writes -0.
  return Math.round(value * factor) / factor + 0;
};

const withAlpha = (text: string, alpha: number) =>
  alpha < 1 ? `${text.slice(0, -1)} / ${round(alpha, 3)})` : text;

/** Writes a color. Formats of sRGB (hex, rgb, hsl) and P3 bring it into their gamut first. */
export function nuiFormatColor(color: NuiColor, format: NuiColorFormat = 'hex'): string {
  if (format === 'oklch') {
    const { l, c, h, alpha } = color;
    return withAlpha(
      `oklch(${round(l * 100, 2)}% ${round(c, 4)} ${round(c < 1e-4 ? 0 : h, 2)})`,
      alpha,
    );
  }
  if (format === 'p3') {
    const rgb = nuiColorToRgb(nuiToGamut(color, 'p3'), 'p3').map((v) =>
      round(Math.min(1, Math.max(0, v)), 4),
    );
    return withAlpha(`color(display-p3 ${rgb.join(' ')})`, color.alpha);
  }
  const [r, g, b] = nuiColorToRgb(nuiToGamut(color, 'srgb'), 'srgb').map((v) =>
    Math.min(1, Math.max(0, v)),
  );
  if (format === 'hex') {
    const bytes = [r, g, b, ...(color.alpha < 1 ? [color.alpha] : [])];
    return `#${bytes
      .map((v) =>
        Math.round(v * 255)
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')}`;
  }
  if (format === 'rgb') {
    return withAlpha(
      `rgb(${Math.round(r * 255)} ${Math.round(g * 255)} ${Math.round(b * 255)})`,
      color.alpha,
    );
  }
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  if (d > 1e-6) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
  }
  const s = d > 1e-6 ? d / (1 - Math.abs(2 * l - 1)) : 0;
  return withAlpha(
    `hsl(${Math.round((h * 60 + 360) % 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`,
    color.alpha,
  );
}

/** Relative luminance (WCAG 2), from sRGB. */
function luminance(color: NuiColor): number {
  const [r, g, b] = nuiColorToRgb(nuiToGamut(color, 'srgb'), 'srgb')
    .map((v) => Math.min(1, Math.max(0, v)))
    .map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * The WCAG 2 contrast ratio of a color on a background, from 1 to 21. A color
 * with alpha is laid over the background first, as a browser draws it.
 */
export function nuiContrast(color: NuiColor | string, background: NuiColor | string): number {
  const fg = typeof color === 'string' ? nuiParseColor(color) : color;
  const bg = typeof background === 'string' ? nuiParseColor(background) : background;
  if (!fg || !bg) return 1;
  let top = fg;
  if (fg.alpha < 1) {
    const over = nuiColorToRgb(nuiToGamut(fg), 'srgb');
    const under = nuiColorToRgb(nuiToGamut(bg), 'srgb');
    top = nuiColorFromRgb(
      [0, 1, 2].map((i) => over[i] * fg.alpha + under[i] * (1 - fg.alpha)) as unknown as Vec,
    );
  }
  const [a, b] = [luminance(top), luminance(bg)];
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

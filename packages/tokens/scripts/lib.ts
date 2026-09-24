/**
 * A small compiler for W3C Design Tokens (DTCG 2025.10) → CSS custom properties.
 *
 * It supports only the token types Needless UI uses and fails loudly on anything
 * else, so a typo in a token file breaks the build instead of shipping bad CSS.
 */

export type Mode = 'light' | 'dark';

export type TokenType =
  | 'color'
  | 'dimension'
  | 'duration'
  | 'fontFamily'
  | 'fontWeight'
  | 'number'
  | 'cubicBezier'
  | 'shadow'
  | 'transition';

export interface Token {
  /** Dot path, e.g. `color.accent.9`. */
  name: string;
  /** Declared or inherited `$type`. Aliases may omit it and take their target's type. */
  type?: TokenType;
  /** Raw `$value`: either a `{reference}` string or a literal. */
  value: unknown;
  description?: string;
  /** Raw `$extensions`: vendor data, such as a spring for a transition. */
  extensions?: Record<string, unknown>;
  /** File the token came from, used in error messages. */
  source: string;
}

export interface TokenSources {
  /** Tokens that are the same in every mode: primitives and semantic aliases. */
  base: Token[];
  /** Literal values that change per mode. Every mode must define the same names. */
  modes: Record<Mode, Token[]>;
}

export interface ResolvedToken {
  type: TokenType;
  var: string;
  value: string;
}

export const CSS_PREFIX = 'nui';
export const LAYER_ORDER = '@layer nui.tokens, nui.base, nui.components, nui.utilities;';
const REDUCED_MOTION_DURATION = '0.01ms';
const REDUCED_MOTION_TRANSITION = `${REDUCED_MOTION_DURATION} linear`;
/** `$extensions` key that turns a transition into a spring. */
export const SPRING_EXTENSION = 'com.needlessui.spring';

const TYPES: ReadonlySet<string> = new Set<TokenType>([
  'color',
  'dimension',
  'duration',
  'fontFamily',
  'fontWeight',
  'number',
  'cubicBezier',
  'shadow',
  'transition',
]);
const NAME_SEGMENT = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const REFERENCE = /^\{([^{}]+)\}$/;

type Group = Record<string, unknown>;
const isGroup = (value: unknown): value is Group =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export function referenceOf(value: unknown): string | undefined {
  return typeof value === 'string' ? REFERENCE.exec(value)?.[1] : undefined;
}

export function cssVar(name: string): string {
  return `--${CSS_PREFIX}-${name.replaceAll('.', '-')}`;
}

/** Walks a DTCG tree and returns its tokens with group `$type`s applied. */
export function flatten(tree: unknown, source: string): Token[] {
  if (!isGroup(tree)) throw new Error(`${source}: expected a JSON object at the root`);
  const tokens: Token[] = [];

  const walk = (group: Group, path: string[], inheritedType: TokenType | undefined) => {
    const groupType = readType(group, path, source) ?? inheritedType;
    for (const [key, child] of Object.entries(group)) {
      if (key.startsWith('$')) continue;
      const childPath = [...path, key];
      const name = childPath.join('.');
      if (!NAME_SEGMENT.test(key)) {
        throw new Error(`${source}: "${name}": names must be lowercase kebab-case`);
      }
      if (!isGroup(child)) throw new Error(`${source}: "${name}" must be a token or a group`);
      if ('$value' in child) {
        tokens.push({
          name,
          type: readType(child, childPath, source) ?? groupType,
          value: child.$value,
          description: typeof child.$description === 'string' ? child.$description : undefined,
          extensions: isGroup(child.$extensions) ? child.$extensions : undefined,
          source,
        });
      } else {
        walk(child, childPath, groupType);
      }
    }
  };

  walk(tree, [], undefined);
  return tokens;
}

function readType(node: Group, path: string[], source: string): TokenType | undefined {
  const type = node.$type;
  if (type === undefined) return undefined;
  if (typeof type !== 'string' || !TYPES.has(type)) {
    throw new Error(
      `${source}: "${path.join('.') || '(root)'}" has unsupported $type ${JSON.stringify(type)}`,
    );
  }
  return type as TokenType;
}

export function index(tokens: Token[]): Map<string, Token> {
  const byName = new Map<string, Token>();
  for (const token of tokens) {
    const existing = byName.get(token.name);
    if (existing) {
      throw new Error(`"${token.name}" is defined in both ${existing.source} and ${token.source}`);
    }
    byName.set(token.name, token);
  }
  return byName;
}

/** Follows references until it reaches a literal token. */
export function resolve(name: string, tokens: Map<string, Token>, chain: string[] = []): Token {
  if (chain.includes(name)) throw new Error(`Circular reference: ${[...chain, name].join(' → ')}`);
  const token = tokens.get(name);
  if (!token) {
    const from = chain.length ? ` (referenced by "${chain.at(-1)}")` : '';
    throw new Error(`Unknown token "${name}"${from}`);
  }
  const target = referenceOf(token.value);
  if (!target) {
    if (!token.type) throw new Error(`${token.source}: "${name}" has no $type`);
    return token;
  }
  const literal = resolve(target, tokens, [...chain, name]);
  if (token.type && token.type !== literal.type) {
    throw new Error(
      `${token.source}: "${name}" is ${token.type} but references ${literal.type} "${literal.name}"`,
    );
  }
  return literal;
}

/**
 * Turns a `{reference}` nested inside a composite value (such as a shadow's
 * color) into CSS. The CSS output keeps it live as `var()`; the JSON output
 * resolves it to a literal.
 */
export type ReferenceResolver = (name: string, expectedType: TokenType, from: string) => string;

const liveReference: ReferenceResolver = (name) => `var(${cssVar(name)})`;

/** References nested inside a composite value (not the token's own alias). */
export function nestedReferences(value: unknown): string[] {
  if (typeof value === 'string') return [];
  const found: string[] = [];
  const walk = (node: unknown) => {
    if (Array.isArray(node)) node.forEach(walk);
    else if (isGroup(node)) Object.values(node).forEach(walk);
    else {
      const target = referenceOf(node);
      if (target) found.push(target);
    }
  };
  walk(value);
  return found;
}

/** Formats a literal token as a CSS value. */
export function toCss(token: Token, reference: ReferenceResolver = liveReference): string {
  const { name, type, value } = token;
  switch (type) {
    case 'shadow':
      return shadowToCss(value, name, reference);
    case 'transition':
      return transitionToCss(token, reference);
    case 'color':
      return colorToCss(value, name);
    case 'dimension':
      return measureToCss(value, name, ['px', 'rem']);
    case 'duration':
      return measureToCss(value, name, ['ms', 's']);
    case 'fontFamily':
      return fontFamilyToCss(value, name);
    case 'fontWeight':
      return String(fontWeight(value, name));
    case 'number':
      return String(expectNumber(value, name));
    case 'cubicBezier':
      return cubicBezierToCss(value, name);
    default:
      throw new Error(`"${name}" has no $type`);
  }
}

function expectNumber(value: unknown, name: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`"${name}": expected a number, got ${JSON.stringify(value)}`);
  }
  return value;
}

function colorToCss(value: unknown, name: string): string {
  if (!isGroup(value) || typeof value.colorSpace !== 'string' || !Array.isArray(value.components)) {
    throw new Error(
      `"${name}": a color $value must be a DTCG color object { colorSpace, components }`,
    );
  }
  const components = value.components.map((c) =>
    c === 'none' ? 'none' : String(expectNumber(c, name)),
  );
  const alpha = value.alpha === undefined ? 1 : expectNumber(value.alpha, name);
  const channels = components.join(' ') + (alpha === 1 ? '' : ` / ${alpha}`);
  switch (value.colorSpace) {
    case 'oklch':
    case 'oklab':
    case 'lch':
    case 'lab':
      return `${value.colorSpace}(${channels})`;
    case 'srgb':
    case 'srgb-linear':
    case 'display-p3':
    case 'rec2020':
      return `color(${value.colorSpace} ${channels})`;
    default:
      throw new Error(`"${name}": unsupported colorSpace "${value.colorSpace}"`);
  }
}

function shadowToCss(value: unknown, name: string, reference: ReferenceResolver): string {
  const layers = Array.isArray(value) ? value : [value];
  if (layers.length === 0) throw new Error(`"${name}": a shadow needs at least one layer`);
  return layers
    .map((layer) => {
      if (!isGroup(layer)) {
        throw new Error(
          `"${name}": each shadow layer must be { color, offsetX, offsetY, blur, spread }`,
        );
      }
      const length = (key: string) => measureToCss(layer[key], `${name}.${key}`, ['px', 'rem']);
      const target = referenceOf(layer.color);
      const color = target ? reference(target, 'color', name) : colorToCss(layer.color, name);
      const inset = layer.inset === true ? 'inset ' : '';
      return `${inset}${length('offsetX')} ${length('offsetY')} ${length('blur')} ${length('spread')} ${color}`;
    })
    .join(', ');
}

function measureToCss(value: unknown, name: string, units: string[]): string {
  if (!isGroup(value) || typeof value.unit !== 'string') {
    throw new Error(`"${name}": $value must be an object { value, unit }`);
  }
  if (!units.includes(value.unit))
    throw new Error(`"${name}": unit must be one of ${units.join(', ')}`);
  return `${expectNumber(value.value, name)}${value.unit}`;
}

const GENERIC_FAMILIES = new Set([
  'serif',
  'sans-serif',
  'monospace',
  'cursive',
  'fantasy',
  'system-ui',
  'ui-serif',
  'ui-sans-serif',
  'ui-monospace',
  'ui-rounded',
  'math',
  'emoji',
  'fangsong',
]);

function fontFamilyToCss(value: unknown, name: string): string {
  const families = typeof value === 'string' ? [value] : value;
  if (
    !Array.isArray(families) ||
    families.length === 0 ||
    !families.every((f) => typeof f === 'string')
  ) {
    throw new Error(`"${name}": a fontFamily $value must be a string or a list of strings`);
  }
  return families
    .map((family: string) =>
      GENERIC_FAMILIES.has(family) || /^-?[A-Za-z][A-Za-z0-9-]*$/.test(family)
        ? family
        : `"${family.replaceAll('"', '\\"')}"`,
    )
    .join(', ');
}

const WEIGHT_KEYWORDS: Record<string, number> = {
  thin: 100,
  hairline: 100,
  'extra-light': 200,
  'ultra-light': 200,
  light: 300,
  normal: 400,
  regular: 400,
  book: 400,
  medium: 500,
  'semi-bold': 600,
  'demi-bold': 600,
  bold: 700,
  'extra-bold': 800,
  'ultra-bold': 800,
  black: 900,
  heavy: 900,
  'extra-black': 950,
  'ultra-black': 950,
};

function fontWeight(value: unknown, name: string): number {
  if (typeof value === 'string' && Object.hasOwn(WEIGHT_KEYWORDS, value))
    return WEIGHT_KEYWORDS[value];
  const weight = expectNumber(value, name);
  if (weight < 1 || weight > 1000) throw new Error(`"${name}": font weight must be within 1–1000`);
  return weight;
}

function cubicBezierToCss(value: unknown, name: string): string {
  if (!Array.isArray(value) || value.length !== 4) {
    throw new Error(`"${name}": a cubicBezier $value must be [x1, y1, x2, y2]`);
  }
  const [x1, y1, x2, y2] = value.map((v) => expectNumber(v, name));
  if (x1 < 0 || x1 > 1 || x2 < 0 || x2 > 1) {
    throw new Error(`"${name}": cubicBezier x values must be within 0–1`);
  }
  return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
}

/**
 * A DTCG transition becomes the time and easing part of a CSS `transition`
 * (`200ms cubic-bezier(…)`), so it works as `transition: transform var(--nui-…)`.
 *
 * A transition can carry a spring in `$extensions["com.needlessui.spring"]`.
 * Its `$value` stays a valid DTCG transition, a cubic-bezier stand-in for other
 * tools, and this compiler replaces its duration and easing with the spring's
 * own: the time it takes to settle and its exact curve as `linear()`.
 */
function transitionToCss(token: Token, reference: ReferenceResolver): string {
  const { name, value } = token;
  if (!isGroup(value)) {
    throw new Error(`"${name}": a transition $value must be { duration, delay, timingFunction }`);
  }
  const part = (
    key: string,
    type: TokenType,
    literal: (value: unknown, name: string) => string,
  ) => {
    const target = referenceOf(value[key]);
    return target ? reference(target, type, name) : literal(value[key], `${name}.${key}`);
  };
  const time = (v: unknown, n: string) => measureToCss(v, n, ['ms', 's']);
  const duration = part('duration', 'duration', time);
  const delay = part('delay', 'duration', time);
  const easing = part('timingFunction', 'cubicBezier', cubicBezierToCss);

  const spring = token.extensions?.[SPRING_EXTENSION];
  const motion =
    spring === undefined ? `${duration} ${easing}` : springToCss(readSpring(spring, name));
  return /^0m?s$/.test(delay) ? motion : `${motion} ${delay}`;
}

function readSpring(value: unknown, name: string): Spring {
  const where = `"${name}": $extensions["${SPRING_EXTENSION}"]`;
  if (!isGroup(value)) throw new Error(`${where} must be { stiffness, damping, mass? }`);
  const positive = (key: string) => {
    const n = expectNumber(value[key], `${name}.${key}`);
    if (n <= 0) throw new Error(`${where}.${key} must be greater than 0`);
    return n;
  };
  return {
    stiffness: positive('stiffness'),
    damping: positive('damping'),
    mass: value.mass === undefined ? 1 : positive('mass'),
  };
}

/** A damped spring pulling from 0 to 1. Mass defaults to 1. */
export interface Spring {
  stiffness: number;
  damping: number;
  mass?: number;
}

/** Settled means staying within this fraction of the distance for good. */
const SPRING_REST = 0.001;
/** Largest gap allowed between the spring and its `linear()` approximation. */
const SPRING_TOLERANCE = 0.004;
/** Springs that take longer than this are rejected rather than cut short. */
const SPRING_MAX_MS = 10_000;

/** Where a spring released at 0, at rest, is after `t` seconds on its way to 1. */
export function springAt({ stiffness: k, damping: c, mass: m = 1 }: Spring, t: number): number {
  const w0 = Math.sqrt(k / m);
  const zeta = c / (2 * Math.sqrt(k * m));
  if (Math.abs(zeta - 1) < 1e-9) return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
  if (zeta < 1) {
    const wd = w0 * Math.sqrt(1 - zeta * zeta);
    return (
      1 - Math.exp(-zeta * w0 * t) * (Math.cos(wd * t) + ((zeta * w0) / wd) * Math.sin(wd * t))
    );
  }
  const spread = w0 * Math.sqrt(zeta * zeta - 1);
  const slow = -zeta * w0 + spread;
  const fast = -zeta * w0 - spread;
  return 1 - (fast * Math.exp(slow * t) - slow * Math.exp(fast * t)) / (fast - slow);
}

/**
 * Compiles a spring to `<duration> linear(…)`. It samples the exact solution
 * every millisecond until the spring settles, then keeps only the stops needed to
 * stay within SPRING_TOLERANCE of it (Ramer–Douglas–Peucker, measured vertically).
 * `springTransition` in @needless-ui/angular is the same function for runtime
 * springs; a test keeps the two identical.
 */
export function springToCss(spring: Spring): string {
  let unsettled = 0;
  for (let ms = 0; ms <= SPRING_MAX_MS; ms++) {
    if (Math.abs(springAt(spring, ms / 1000) - 1) >= SPRING_REST) unsettled = ms;
  }
  if (unsettled === SPRING_MAX_MS) {
    throw new Error(
      `The spring ${JSON.stringify(spring)} doesn't settle within ${SPRING_MAX_MS}ms`,
    );
  }
  const end = unsettled + 1;
  const samples = Array.from({ length: end + 1 }, (_, ms) => springAt(spring, ms / 1000));
  samples[end] = 1;

  const kept = [0, end];
  const simplify = (from: number, to: number) => {
    let worst = -1;
    let error = SPRING_TOLERANCE;
    for (let i = from + 1; i < to; i++) {
      const line = samples[from] + ((samples[to] - samples[from]) * (i - from)) / (to - from);
      if (Math.abs(samples[i] - line) > error) {
        error = Math.abs(samples[i] - line);
        worst = i;
      }
    }
    if (worst < 0) return;
    kept.push(worst);
    simplify(from, worst);
    simplify(worst, to);
  };
  simplify(0, end);
  kept.sort((a, b) => a - b);

  const round = (n: number, digits: number) => String(+n.toFixed(digits));
  const stops = kept
    .slice(1, -1)
    .map((ms) => `${round(samples[ms], 3)} ${round((ms / end) * 100, 2)}%`);
  return `${end}ms linear(${['0', ...stops, '1'].join(', ')})`;
}

function checkModeParity(modes: Record<Mode, Token[]>): void {
  const [[firstMode, firstTokens], ...others] = Object.entries(modes) as [Mode, Token[]][];
  const expected = new Set(firstTokens.map((t) => t.name));
  for (const [mode, tokens] of others) {
    const actual = new Set(tokens.map((t) => t.name));
    const missing = [...expected].filter((n) => !actual.has(n));
    const extra = [...actual].filter((n) => !expected.has(n));
    if (missing.length || extra.length) {
      throw new Error(
        `Mode "${mode}" differs from "${firstMode}": missing [${missing.join(', ')}], extra [${extra.join(', ')}]`,
      );
    }
  }
}

/** Resolves every token in every mode to a CSS value, validating the whole set. */
export function buildJson(sources: TokenSources): Record<Mode, Record<string, ResolvedToken>> {
  checkModeParity(sources.modes);
  const result = {} as Record<Mode, Record<string, ResolvedToken>>;
  for (const mode of Object.keys(sources.modes) as Mode[]) {
    const tokens = index([...sources.base, ...sources.modes[mode]]);
    const resolveNested: ReferenceResolver = (name, expectedType, from) => {
      const literal = resolve(name, tokens, [from]);
      if (literal.type !== expectedType) {
        throw new Error(
          `"${from}" needs a ${expectedType} but references ${literal.type} "${name}"`,
        );
      }
      return toCss(literal, resolveNested);
    };
    result[mode] = {};
    for (const name of [...tokens.keys()].sort()) {
      const literal = resolve(name, tokens);
      result[mode][name] = {
        type: literal.type!,
        var: cssVar(name),
        value: toCss(literal, resolveNested),
      };
    }
  }
  return result;
}

/**
 * Emits one stylesheet: light values on `:root`, dark values behind both
 * `prefers-color-scheme` and `[data-nui-theme='dark']`, and aliases kept live as
 * `var()` references that are redeclared on every themed subtree.
 */
export function buildCss(sources: TokenSources): string {
  buildJson(sources); // validates references, types and mode parity

  const declare = (token: Token): string => {
    const target = referenceOf(token.value);
    return `${cssVar(token.name)}: ${target ? `var(${cssVar(target)})` : toCss(token)};`;
  };
  const rule = (selector: string, lines: string[], indent: string): string =>
    [`${indent}${selector} {`, ...lines.map((l) => `${indent}  ${l}`), `${indent}}`].join('\n');
  const mode = (m: Mode): string[] => [`color-scheme: ${m};`, ...sources.modes[m].map(declare)];

  // A token that leads to a mode's value is recomputed on every themed subtree.
  // The rest are declared once, so a subtree can still override them for its own
  // descendants (the customization attributes rely on that).
  const modal = new Set(sources.modes.light.map((t) => t.name));
  const byName = index(sources.base);
  const referencesOf = (t: Token) =>
    [referenceOf(t.value), ...nestedReferences(t.value)].filter((r) => r !== undefined);
  const followsMode = (t: Token, seen = new Set<string>()): boolean =>
    referencesOf(t).some((target) => {
      if (modal.has(target)) return true;
      const next = byName.get(target);
      if (!next || seen.has(target)) return false;
      seen.add(target);
      return followsMode(next, seen);
    });
  const themed = sources.base.filter((t) => followsMode(t));
  const shared = sources.base.filter((t) => !followsMode(t));
  const motion = shared.filter(
    (t) => referencesOf(t).length === 0 && (t.type === 'duration' || t.type === 'transition'),
  );

  const body = [
    rule(":root, [data-nui-theme='light']", mode('light'), '  '),
    [
      '  @media (prefers-color-scheme: dark) {',
      rule(":root:not([data-nui-theme='light'])", mode('dark'), '    '),
      '  }',
    ].join('\n'),
    rule("[data-nui-theme='dark']", mode('dark'), '  '),
    rule(':root', shared.map(declare), '  '),
    rule(':root, [data-nui-theme]', themed.map(declare), '  '),
  ];
  if (motion.length) {
    const collapsed = motion.map(
      (t) =>
        `${cssVar(t.name)}: ${t.type === 'duration' ? REDUCED_MOTION_DURATION : REDUCED_MOTION_TRANSITION};`,
    );
    body.push(
      ['  @media (prefers-reduced-motion: reduce) {', rule(':root', collapsed, '    '), '  }'].join(
        '\n',
      ),
    );
  }

  return [
    '/* @needless-ui/tokens: generated by scripts/build.ts from the files in src/. Do not edit. */',
    LAYER_ORDER,
    '',
    '@layer nui.tokens {',
    body.join('\n\n'),
    '}',
    '',
  ].join('\n');
}

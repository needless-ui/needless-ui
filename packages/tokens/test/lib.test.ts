import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  buildCss,
  buildJson,
  flatten,
  index,
  resolve,
  SPRING_EXTENSION,
  springAt,
  springToCss,
  toCss,
  type Spring,
  type Token,
  type TokenSources,
} from '../scripts/lib.ts';
import { loadSources } from '../scripts/sources.ts';

const token = (name: string, type: Token['type'], value: unknown): Token => ({
  name,
  type,
  value,
  source: 'test',
});

describe('flatten', () => {
  it('applies group $type and keeps descriptions', () => {
    const tokens = flatten(
      {
        space: {
          $type: 'dimension',
          '1': { $value: { value: 4, unit: 'px' }, $description: 'one' },
        },
      },
      'test',
    );
    assert.deepEqual(tokens, [
      {
        name: 'space.1',
        type: 'dimension',
        value: { value: 4, unit: 'px' },
        description: 'one',
        extensions: undefined,
        source: 'test',
      },
    ]);
  });

  it('keeps $extensions', () => {
    const [spring] = flatten(
      {
        s: {
          $type: 'number',
          $value: 1,
          $extensions: { [SPRING_EXTENSION]: { stiffness: 1, damping: 1 } },
        },
      },
      'test',
    );
    assert.deepEqual(spring.extensions, { [SPRING_EXTENSION]: { stiffness: 1, damping: 1 } });
  });

  it('rejects names that are not kebab-case', () => {
    assert.throws(
      () => flatten({ Space: { $type: 'number', a: { $value: 1 } } }, 'test'),
      /kebab-case/,
    );
  });

  it('rejects token types the compiler does not support', () => {
    assert.throws(
      () => flatten({ a: { $type: 'gradient', $value: [] } }, 'test'),
      /unsupported \$type "gradient"/,
    );
  });
});

describe('resolve', () => {
  it('follows alias chains and lets aliases omit $type', () => {
    const tokens = index([
      token('a', 'number', 1),
      token('b', undefined, '{a}'),
      token('c', 'number', '{b}'),
    ]);
    assert.equal(resolve('c', tokens).name, 'a');
  });

  it('reports circular references', () => {
    const tokens = index([token('x', 'number', '{y}'), token('y', 'number', '{x}')]);
    assert.throws(() => resolve('x', tokens), /Circular reference: x → y → x/);
  });

  it('names the referrer of an unknown token', () => {
    const tokens = index([token('b', 'number', '{missing}')]);
    assert.throws(() => resolve('b', tokens), /Unknown token "missing" \(referenced by "b"\)/);
  });

  it('rejects an alias whose type differs from its target', () => {
    const tokens = index([
      token('size', 'dimension', { value: 1, unit: 'px' }),
      token('n', 'number', '{size}'),
    ]);
    assert.throws(() => resolve('n', tokens), /"n" is number but references dimension "size"/);
  });

  it('rejects duplicate names across files', () => {
    assert.throws(
      () => index([token('a', 'number', 1), token('a', 'number', 2)]),
      /defined in both/,
    );
  });
});

describe('toCss', () => {
  it('formats DTCG color objects', () => {
    assert.equal(
      toCss(token('c', 'color', { colorSpace: 'oklch', components: [0.5, 0.1, 264] })),
      'oklch(0.5 0.1 264)',
    );
    assert.equal(
      toCss(token('c', 'color', { colorSpace: 'srgb', components: [1, 0, 0], alpha: 0.5 })),
      'color(srgb 1 0 0 / 0.5)',
    );
    assert.throws(() => toCss(token('c', 'color', '#ff0000')), /DTCG color object/);
  });

  it('formats dimensions and durations, and rejects other units', () => {
    assert.equal(toCss(token('d', 'dimension', { value: 0.25, unit: 'rem' })), '0.25rem');
    assert.equal(toCss(token('t', 'duration', { value: 120, unit: 'ms' })), '120ms');
    assert.throws(
      () => toCss(token('d', 'dimension', { value: 1, unit: 'em' })),
      /unit must be one of px, rem/,
    );
  });

  it('quotes font family names only when needed', () => {
    assert.equal(
      toCss(
        token('f', 'fontFamily', [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ]),
      ),
      'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    );
  });

  it('maps font weight keywords to numbers', () => {
    assert.equal(toCss(token('w', 'fontWeight', 'semi-bold')), '600');
    assert.equal(toCss(token('w', 'fontWeight', 450)), '450');
  });

  it('formats cubic Bézier curves', () => {
    assert.equal(toCss(token('e', 'cubicBezier', [0.2, 0, 0, 1])), 'cubic-bezier(0.2, 0, 0, 1)');
  });

  it('formats layered shadows and keeps nested color references live', () => {
    const px = (value: number) => ({ value, unit: 'px' });
    const layer = { offsetX: px(0), offsetY: px(4), blur: px(12), spread: px(-2) };
    const shadow = token('shadow.md', 'shadow', [
      { ...layer, color: '{color.shadow}' },
      { ...layer, color: { colorSpace: 'oklch', components: [0, 0, 0], alpha: 0.2 }, inset: true },
    ]);
    assert.equal(
      toCss(shadow),
      '0px 4px 12px -2px var(--nui-color-shadow), inset 0px 4px 12px -2px oklch(0 0 0 / 0.2)',
    );
  });
});

const ms = (value: number) => ({ value, unit: 'ms' });
const transition = (value: unknown, spring?: Spring): Token => ({
  ...token('motion.x', 'transition', value),
  extensions: spring ? { [SPRING_EXTENSION]: spring } : undefined,
});
const standIn = { duration: ms(200), delay: ms(0), timingFunction: [0.2, 0, 0, 1] };
const BOUNCY = { stiffness: 300, damping: 14 };
const MECHANICAL = { stiffness: 320, damping: 40 };

/** Parses `<n>ms linear(…)` into its duration and [progress, value] stops. */
function parseSpring(css: string): { duration: number; stops: [number, number][] } {
  const match = /^(\d+)ms linear\((.*)\)$/.exec(css);
  assert.ok(match, `not a spring: ${css}`);
  const parts = match[2].split(', ');
  const stops = parts.map((part, i): [number, number] => {
    const [value, percent] = part.split(' ');
    const at = percent === undefined ? i / (parts.length - 1) : parseFloat(percent) / 100;
    return [at, Number(value)];
  });
  return { duration: Number(match[1]), stops };
}

function valueAt(stops: [number, number][], at: number): number {
  const next = stops.findIndex(([x]) => x >= at);
  if (next <= 0) return stops[Math.max(next, 0)][1];
  const [[x0, y0], [x1, y1]] = [stops[next - 1], stops[next]];
  return y0 + ((y1 - y0) * (at - x0)) / (x1 - x0);
}

describe('transitions', () => {
  it('format as the time and easing of a CSS transition', () => {
    assert.equal(toCss(transition(standIn)), '200ms cubic-bezier(0.2, 0, 0, 1)');
    assert.equal(
      toCss(transition({ ...standIn, delay: ms(50) })),
      '200ms cubic-bezier(0.2, 0, 0, 1) 50ms',
    );
    assert.equal(
      toCss(
        transition({
          duration: '{duration.fast}',
          delay: ms(0),
          timingFunction: '{easing.standard}',
        }),
      ),
      'var(--nui-duration-fast) var(--nui-easing-standard)',
    );
    assert.throws(
      () => toCss(transition('200ms')),
      /must be \{ duration, delay, timingFunction \}/,
    );
  });
});

describe('springs', () => {
  it('compile to the time they take to settle and their exact curve', () => {
    const { duration, stops } = parseSpring(springToCss(BOUNCY));
    // Within the simplification tolerance (0.004) plus rounding, at every millisecond…
    for (let t = 0; t <= duration; t++) {
      const error = Math.abs(valueAt(stops, t / duration) - springAt(BOUNCY, t / 1000));
      assert.ok(error < 0.005, `off by ${error} at ${t}ms`);
    }
    // …and settled for good once it ends.
    for (let t = duration; t < duration + 2000; t += 10) {
      assert.ok(Math.abs(springAt(BOUNCY, t / 1000) - 1) < 0.001);
    }
  });

  it('overshoot when underdamped, and never when overdamped', () => {
    const peak = (spring: Spring) =>
      Math.max(...parseSpring(springToCss(spring)).stops.map(([, y]) => y));
    assert.ok(peak(BOUNCY) > 1.2);
    assert.equal(peak(MECHANICAL), 1);
  });

  it('replace the stand-in of a transition that carries one', () => {
    assert.equal(toCss(transition(standIn, BOUNCY)), springToCss(BOUNCY));
    assert.equal(
      toCss(transition({ ...standIn, delay: ms(50) }, BOUNCY)),
      `${springToCss(BOUNCY)} 50ms`,
    );
  });

  it('reject physics that cannot settle', () => {
    assert.throws(
      () => toCss(transition(standIn, { stiffness: 100, damping: 0 })),
      /damping must be greater than 0/,
    );
    assert.throws(() => springToCss({ stiffness: 1, damping: 0.01 }), /doesn't settle within/);
  });

  it('match springTransition in @needless-ui/angular exactly', async () => {
    // Imported by URL: that package is compiled by Angular, not by this tsconfig.
    const angular = new URL('../../angular/src/spring.ts', import.meta.url);
    const { springTransition }: { springTransition: (spring: Spring) => string } = await import(
      angular.href
    );
    const springs: Spring[] = [
      BOUNCY,
      MECHANICAL,
      { stiffness: 170, damping: 7 },
      { stiffness: 60, damping: 12, mass: 1.6 },
      { stiffness: 100, damping: 20 }, // critically damped
      { stiffness: 900, damping: 5, mass: 0.5 },
    ];
    for (const spring of springs) assert.equal(springTransition(spring), springToCss(spring));
  });
});

describe('composite tokens', () => {
  const px = (value: number) => ({ value, unit: 'px' });
  const shadow = (color: string) =>
    token('shadow.sm', 'shadow', {
      color,
      offsetX: px(0),
      offsetY: px(1),
      blur: px(2),
      spread: px(0),
    });
  const black = token('color.shadow', 'color', { colorSpace: 'oklch', components: [0, 0, 0] });

  it('resolve nested references to literals in the JSON output', () => {
    const json = buildJson({
      base: [shadow('{color.shadow}')],
      modes: { light: [black], dark: [black] },
    });
    assert.equal(json.light['shadow.sm'].value, '0px 1px 2px 0px oklch(0 0 0)');
  });

  it('are redeclared on themed subtrees when they reference other tokens', () => {
    const css = buildCss({
      base: [shadow('{color.shadow}')],
      modes: { light: [black], dark: [black] },
    });
    assert.match(
      css,
      /:root, \[data-nui-theme\] \{\n\s+--nui-shadow-sm: 0px 1px 2px 0px var\(--nui-color-shadow\);/,
    );
  });

  it('reject nested references of the wrong type', () => {
    const size = token('size.1', 'dimension', px(1));
    assert.throws(
      () => buildJson({ base: [shadow('{size.1}'), size], modes: { light: [], dark: [] } }),
      /"shadow.sm" needs a color but references dimension "size.1"/,
    );
  });
});

describe('buildCss', () => {
  const sources: TokenSources = {
    base: [
      token('space.1', 'dimension', { value: 4, unit: 'px' }),
      token('duration.fast', 'duration', { value: 100, unit: 'ms' }),
      token('color.bg', 'color', '{color.gray.1}'),
      { ...transition(standIn, BOUNCY), name: 'spring.bouncy' },
      token('motion', 'transition', '{spring.bouncy}'),
    ],
    modes: {
      light: [token('color.gray.1', 'color', { colorSpace: 'oklch', components: [1, 0, 0] })],
      dark: [token('color.gray.1', 'color', { colorSpace: 'oklch', components: [0.2, 0, 0] })],
    },
  };
  const css = buildCss(sources);

  it('puts light values on :root and dark values behind the media query and the attribute', () => {
    assert.match(
      css,
      /:root, \[data-nui-theme='light'\] \{\n\s+color-scheme: light;\n\s+--nui-color-gray-1: oklch\(1 0 0\);/,
    );
    assert.match(
      css,
      /prefers-color-scheme: dark\) \{\n\s+:root:not\(\[data-nui-theme='light'\]\) \{\n\s+color-scheme: dark;\n\s+--nui-color-gray-1: oklch\(0\.2 0 0\);/,
    );
    assert.match(
      css,
      /\[data-nui-theme='dark'\] \{\n\s+color-scheme: dark;\n\s+--nui-color-gray-1: oklch\(0\.2 0 0\);/,
    );
  });

  it('keeps aliases live and redeclares them on themed subtrees', () => {
    assert.match(
      css,
      /:root, \[data-nui-theme\] \{\n\s+--nui-color-bg: var\(--nui-color-gray-1\);/,
    );
  });

  it('declares aliases that no mode affects once, on :root', () => {
    assert.match(
      css,
      /\n {2}:root \{\n(?: {4}.+\n)*? {4}--nui-motion: var\(--nui-spring-bouncy\);/,
    );
    assert.doesNotMatch(css, /\[data-nui-theme\] \{\n(?: {4}.+\n)*? {4}--nui-motion:/);
  });

  it('collapses durations and springs when reduced motion is preferred', () => {
    assert.match(
      css,
      /prefers-reduced-motion: reduce\) \{\n\s+:root \{\n\s+--nui-duration-fast: 0\.01ms;\n\s+--nui-spring-bouncy: 0\.01ms linear;\n\s+\}/,
    );
  });

  it('fails when modes define different tokens', () => {
    assert.throws(
      () => buildCss({ ...sources, modes: { ...sources.modes, dark: [] } }),
      /Mode "dark" differs from "light": missing \[color\.gray\.1\]/,
    );
  });
});

describe('Needless UI token files', () => {
  it('resolve completely in both modes', async () => {
    const json = buildJson(await loadSources());
    for (const mode of ['light', 'dark'] as const) {
      const solid = json[mode]['color.accent.solid'];
      assert.equal(solid.var, '--nui-color-accent-solid');
      assert.match(solid.value, /^oklch\(/);
    }
    assert.notEqual(json.light['color.bg.canvas'].value, json.dark['color.bg.canvas'].value);
    assert.equal(json.light.motion.value, json.light['spring.snappy'].value);
    assert.match(json.light['spring.jelly'].value, /^\d+ms linear\(0, .+, 1\)$/);
  });
});

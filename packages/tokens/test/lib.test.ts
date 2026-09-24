import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  buildCss,
  buildJson,
  flatten,
  index,
  resolve,
  toCss,
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
        source: 'test',
      },
    ]);
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

  it('collapses durations when reduced motion is preferred', () => {
    assert.match(
      css,
      /prefers-reduced-motion: reduce\) \{\n\s+:root \{\n\s+--nui-duration-fast: 0\.01ms;/,
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
  });
});

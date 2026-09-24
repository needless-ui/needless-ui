import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { before, describe, it } from 'node:test';
import { bundle } from '../scripts/bundle.ts';

const COMPONENTS = new URL('../src/components/', import.meta.url);

describe('@needless-ui/css bundle', () => {
  let css = '';
  before(async () => {
    css = await bundle();
  });

  it('declares the layer order before any styles', () => {
    assert.match(
      css.trimStart(),
      /^@layer nui\.tokens, nui\.base, nui\.components, nui\.utilities;/,
    );
  });

  it('inlines every import', () => {
    assert.doesNotMatch(css, /@import/);
    assert.match(css, /--nui-color-accent-solid:/);
    assert.match(css, /\.nui-button\b/);
  });

  it('keeps component styles inside the components layer', () => {
    assert.match(css, /@layer nui\.components\s*\{\s*\.nui-button\s*\{/);
  });

  it('has a preset for every customization value the Angular types allow, and no others', async () => {
    const types = await readFile(new URL('../../angular/src/types.ts', import.meta.url), 'utf8');
    const union = (type: string) => {
      const body = new RegExp(`export type ${type} =([^;]+);`).exec(types)?.[1] ?? '';
      return [...body.matchAll(/'([a-z]+)'/g)].map((m) => m[1]).sort();
    };
    const presets = (attribute: string) => {
      const selector = new RegExp(`\\[data-nui-${attribute}=["']([a-z]+)["']\\]`, 'g');
      return [...new Set([...css.matchAll(selector)].map((m) => m[1]))].sort();
    };
    const pairs = [
      ['motion', 'NuiMotion'],
      ['press', 'NuiPress'],
      ['enter', 'NuiEnter'],
      ['corners', 'NuiCorners'],
      ['radius', 'NuiRadius'],
      ['density', 'NuiDensity'],
    ];
    for (const [attribute, type] of pairs) {
      assert.notDeepEqual(union(type), [], `${type} not found`);
      assert.deepEqual(presets(attribute), union(type), `data-nui-${attribute} vs ${type}`);
    }
  });

  it('only references tokens that exist', async () => {
    const defined = new Set([...css.matchAll(/(--nui-[a-z0-9-]+)\s*:/g)].map((m) => m[1]));
    for (const file of await readdir(COMPONENTS)) {
      const source = await readFile(new URL(file, COMPONENTS), 'utf8');
      const used = [...source.matchAll(/var\((--nui-[a-z0-9-]+)/g)].map((m) => m[1]);
      const missing = [...new Set(used)].filter((name) => !defined.has(name));
      assert.deepEqual(missing, [], `${file} uses undefined tokens`);
    }
  });
});

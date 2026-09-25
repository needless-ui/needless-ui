import { describe, expect, it } from 'vitest';
import {
  nuiContrast,
  nuiFormatColor,
  nuiInGamut,
  nuiMaxChroma,
  nuiParseColor,
  nuiToGamut,
} from './color';

const parse = (text: string) => {
  const color = nuiParseColor(text);
  if (!color) throw new Error(`Not a color: ${text}`);
  return color;
};

describe('colors', () => {
  it('converts sRGB to OKLCH', () => {
    const red = parse('#ff0000');
    expect(red.l).toBeCloseTo(0.628, 3);
    expect(red.c).toBeCloseTo(0.2577, 3);
    expect(red.h).toBeCloseTo(29.23, 1);
    expect(nuiFormatColor(parse('#3b82f6'), 'oklch')).toBe('oklch(62.31% 0.188 259.81)');
  });

  it('reads every CSS syntax', () => {
    const red = [
      '#f00',
      '#ff0000ff',
      'rgb(255 0 0)',
      'rgb(255, 0, 0)',
      'rgb(100% 0% 0%)',
      'hsl(0 100% 50%)',
      'hsla(0, 100%, 50%, 1)',
      'hsl(1turn 100% 50%)',
      'hwb(0 0% 0%)',
      'lab(54.29% 80.8 69.89)',
      'lch(54.29 106.84 40.85)',
      'oklch(62.8% 0.2577 29.23)',
      'oklab(0.628 0.2249 0.1258)',
      'color(srgb 1 0 0)',
      'color(srgb-linear 1 0 0)',
      'color(xyz-d65 0.4124 0.2126 0.0193)',
      'color(xyz-d50 0.4360 0.2225 0.0139)',
      'RGB(255 0 0)',
    ];
    for (const text of red) expect(nuiFormatColor(parse(text)), text).toBe('#ff0000');
    expect(parse('rgb(255 0 0 / 50%)').alpha).toBe(0.5);
    expect(parse('hsl(120deg 100% 50% / 0.25)').alpha).toBe(0.25);
    expect(nuiFormatColor(parse('hsl(2.0944rad 100% 50%)'))).toBe('#00ff00');
    expect(parse('transparent').alpha).toBe(0);
    expect(parse('oklch(70% none 120)').c).toBe(0);
    for (const text of ['#12', 'rgb(1 2)', 'rgb(1 2 3 / 4 / 5)', 'nope', 'rgb(a b c)']) {
      expect(nuiParseColor(text), text).toBeNull();
    }
  });

  it('writes every format, alpha included', () => {
    const blue = parse('#3b82f6');
    expect(nuiFormatColor(blue, 'hex')).toBe('#3b82f6');
    expect(nuiFormatColor(blue, 'rgb')).toBe('rgb(59 130 246)');
    expect(nuiFormatColor(blue, 'hsl')).toBe('hsl(217 91% 60%)');
    const faded = { ...blue, alpha: 0.5 };
    expect(nuiFormatColor(faded, 'hex')).toBe('#3b82f680');
    expect(nuiFormatColor(faded, 'rgb')).toBe('rgb(59 130 246 / 0.5)');
    expect(nuiFormatColor(parse('color(display-p3 1 0 0)'), 'p3')).toBe('color(display-p3 1 0 0)');
  });

  it('knows gamuts, and maps colors into them', () => {
    const p3red = parse('color(display-p3 1 0 0)');
    expect(nuiInGamut(p3red, 'srgb')).toBe(false);
    expect(nuiInGamut(p3red, 'p3')).toBe(true);
    const mapped = nuiToGamut(p3red, 'srgb');
    expect(nuiInGamut(mapped, 'srgb')).toBe(true);
    expect(mapped.l).toBeCloseTo(p3red.l, 2);
    expect(nuiMaxChroma(0.628, 29.23, 'srgb')).toBeCloseTo(0.2577, 2);
    expect(nuiMaxChroma(0.628, 29.23, 'p3')).toBeGreaterThan(0.26);
    expect(nuiFormatColor({ l: 1.2, c: 0.1, h: 30, alpha: 1 })).toBe('#ffffff');
  });

  it('measures contrast as WCAG 2 does', () => {
    expect(nuiContrast('#000', '#fff')).toBeCloseTo(21, 5);
    expect(nuiContrast('#777', '#fff')).toBeCloseTo(4.48, 2);
    expect(nuiContrast('rgb(0 0 0 / 0.5)', '#fff')).toBeCloseTo(nuiContrast('#808080', '#fff'), 1);
  });
});

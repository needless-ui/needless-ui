import { springTransition } from './spring';

describe('springTransition', () => {
  it('compiles a spring to its settling time and a linear() curve', () => {
    const css = springTransition({ stiffness: 170, damping: 7 });
    expect(css).toMatch(/^\d+ms linear\(0, .+, 1\)$/);
    // Jelly overshoots: some stop goes past 1.
    const values = css
      .slice(css.indexOf('(') + 1, -1)
      .split(', ')
      .map(parseFloat);
    expect(Math.max(...values)).toBeGreaterThan(1.3);
  });

  it('takes longer to settle when heavier', () => {
    const duration = (mass: number) =>
      parseInt(springTransition({ stiffness: 300, damping: 20, mass }));
    expect(duration(3)).toBeGreaterThan(duration(1));
  });

  it('rejects physics that cannot move or settle', () => {
    expect(() => springTransition({ stiffness: 0, damping: 10 })).toThrow(/stiffness/);
    expect(() => springTransition({ stiffness: 100, damping: -1 })).toThrow(/damping/);
    expect(() => springTransition({ stiffness: 1, damping: 0.01 })).toThrow(/settle/);
  });
});

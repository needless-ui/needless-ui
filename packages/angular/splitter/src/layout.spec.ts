import { nuiFitPanes, nuiPaneSize, nuiResizePanes, type NuiPaneLimits } from './layout';

const free: NuiPaneLimits = { min: 0, max: 100, collapsible: false, collapsedSize: 0 };
const limit = (min: number, max = 100, collapsible = false): NuiPaneLimits => ({
  min,
  max,
  collapsible,
  collapsedSize: 0,
});

describe('splitter layout', () => {
  it('moves a boundary, pushing the panes beyond once the nearest reaches its limit', () => {
    expect(nuiResizePanes([30, 70], [free, free], 0, 10)).toEqual([40, 60]);
    // The middle pane stops at 20; the last one gives the rest.
    expect(nuiResizePanes([30, 30, 40], [free, limit(20), free], 0, 25)).toEqual([55, 20, 25]);
    // Nothing gives past every minimum.
    expect(nuiResizePanes([30, 30, 40], [free, limit(25), limit(35)], 0, 50)).toEqual([40, 25, 35]);
    // Toward the start, the panes before shrink in turn.
    expect(nuiResizePanes([30, 30, 40], [limit(10), limit(20), free], 1, -30)).toEqual([
      10, 20, 70,
    ]);
    // A pane at its maximum stops the boundary.
    expect(nuiResizePanes([30, 70], [limit(0, 40), free], 0, 30)).toEqual([40, 60]);
  });

  it('fits sizes to the limits, sharing what’s missing', () => {
    expect(nuiFitPanes([], [free, free, free, free])).toEqual([25, 25, 25, 25]);
    expect(nuiFitPanes([60], [free, free])).toEqual([60, 40]);
    expect(nuiFitPanes([90, 10], [limit(0, 70), limit(20)])).toEqual([70, 30]);
  });

  it('reads pixels, rems and percent', () => {
    expect(nuiPaneSize('240px', 800)).toBe(30);
    expect(nuiPaneSize('10rem', 800)).toBe(20);
    expect(nuiPaneSize('25%', 800)).toBe(25);
    expect(nuiPaneSize('240px', 0)).toBeNull();
    expect(nuiPaneSize('wide', 800)).toBeNull();
  });
});

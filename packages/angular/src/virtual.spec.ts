import { NuiVirtualizer } from './virtual';

describe('NuiVirtualizer', () => {
  it('lays out estimates, then measured sizes', () => {
    const list = new NuiVirtualizer({ count: 5, estimate: 10, overscan: 0 });
    expect(list.total()).toBe(50);
    expect(list.offsetOf(3)).toBe(30);
    expect(list.measure(1, 30)).toBe(true);
    expect(list.measure(1, 30)).toBe(false);
    expect(list.offsetOf(3)).toBe(50);
    expect(list.total()).toBe(70);
  });

  it('finds the item at an offset', () => {
    const list = new NuiVirtualizer({ count: 5, estimate: (i) => (i + 1) * 10, overscan: 0 });
    // Offsets: 0, 10, 30, 60, 100; total 150.
    expect(list.indexAt(0)).toBe(0);
    expect(list.indexAt(9)).toBe(0);
    expect(list.indexAt(10)).toBe(1);
    expect(list.indexAt(59)).toBe(2);
    expect(list.indexAt(60)).toBe(3);
    expect(list.indexAt(1000)).toBe(4);
  });

  it('renders the items in view plus overscan, even for 100,000 of them', () => {
    const list = new NuiVirtualizer({ count: 100_000, estimate: 36, overscan: 72 });
    expect(list.total()).toBe(3_600_000);
    expect(list.range(36_000, 360)).toEqual({ start: 998, end: 1013 });
    expect(list.range(0, 360)).toEqual({ start: 0, end: 13 });
  });

  it('works out the scroll offset that brings an item into view', () => {
    const list = new NuiVirtualizer({ count: 100, estimate: 20 });
    expect(list.scrollTo(50, 0, 200)).toBe(1020 - 200);
    expect(list.scrollTo(5, 500, 200)).toBe(100);
    expect(list.scrollTo(30, 500, 200)).toBe(500);
  });
});

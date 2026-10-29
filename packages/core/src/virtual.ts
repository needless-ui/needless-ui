/**
 * Works out which items of a long list to render: the ones in view, plus some
 * overscan. Every item starts at an estimated size and switches to its real size
 * once measured, so items can be any height. Offsets live in a Fenwick tree:
 * measuring an item, or finding the item at a scroll offset, costs O(log n), so
 * 100,000 rows cost the same as 100.
 *
 * ```ts
 * const list = new NuiVirtualizer({ count: rows.length, estimate: 36 });
 * const { start, end } = list.range(element.scrollTop, element.clientHeight);
 * // render rows start…end-1 between spacers of list.offsetOf(start) and
 * // list.total() - list.offsetOf(end), then list.measure(i, height) for each.
 * ```
 */
export class NuiVirtualizer {
  private sizes: Float64Array = new Float64Array(0);
  private tree: Float64Array = new Float64Array(1);
  private count = 0;
  private readonly estimate: (index: number) => number;
  private readonly overscan: number;

  constructor(options: {
    count: number;
    /** Size before measuring: a number, or one per index. */
    estimate: number | ((index: number) => number);
    /** Pixels rendered beyond each edge of the view. Defaults to 240. */
    overscan?: number;
  }) {
    const { estimate } = options;
    this.estimate = typeof estimate === 'number' ? () => estimate : estimate;
    this.overscan = options.overscan ?? 240;
    this.reset(options.count);
  }

  /** Starts over with a new number of items, all back to estimates. */
  reset(count: number): void {
    this.count = count;
    this.sizes = new Float64Array(count);
    this.tree = new Float64Array(count + 1);
    // Linear-time Fenwick build.
    for (let i = 0; i < count; i++) {
      this.sizes[i] = this.estimate(i);
      this.tree[i + 1] += this.sizes[i];
      const parent = i + 1 + ((i + 1) & -(i + 1));
      if (parent <= count) this.tree[parent] += this.tree[i + 1];
    }
  }

  get length(): number {
    return this.count;
  }

  /** Records an item's real size. Returns whether it changed anything. */
  measure(index: number, size: number): boolean {
    if (index < 0 || index >= this.count) return false;
    const delta = size - this.sizes[index];
    if (Math.abs(delta) < 0.5) return false;
    this.sizes[index] = size;
    for (let i = index + 1; i <= this.count; i += i & -i) this.tree[i] += delta;
    return true;
  }

  sizeOf(index: number): number {
    return this.sizes[index] ?? 0;
  }

  /** Distance from the top of the list to the start of `index`. */
  offsetOf(index: number): number {
    let sum = 0;
    for (let i = Math.min(index, this.count); i > 0; i -= i & -i) sum += this.tree[i];
    return sum;
  }

  /** Height of the whole list. */
  total(): number {
    return this.offsetOf(this.count);
  }

  /** The item that covers `offset`. */
  indexAt(offset: number): number {
    if (offset <= 0 || this.count === 0) return 0;
    let index = 0;
    let remaining = offset;
    for (let step = 1 << Math.floor(Math.log2(this.count)); step > 0; step >>= 1) {
      const next = index + step;
      if (next <= this.count && this.tree[next] <= remaining) {
        index = next;
        remaining -= this.tree[next];
      }
    }
    return Math.min(index, this.count - 1);
  }

  /** Items to render for a view of `height` scrolled to `scrollTop`: `start` inclusive, `end` exclusive. */
  range(scrollTop: number, height: number): { start: number; end: number } {
    if (this.count === 0) return { start: 0, end: 0 };
    const start = this.indexAt(Math.max(0, scrollTop - this.overscan));
    const end = this.indexAt(scrollTop + height + this.overscan) + 1;
    return { start, end: Math.min(end, this.count) };
  }

  /**
   * What to render for a view: the items in range, plus items that must stay
   * rendered wherever they are (the active one, which `aria-activedescendant` or
   * focus needs). Runs of skipped items become gaps of their total size, so each
   * rendered item sits at its true offset and nothing between them is rendered.
   */
  slice(
    scrollTop: number,
    height: number,
    keep: readonly number[] = [],
  ): ({ index: number } | { gap: number; at: number })[] {
    const { start, end } = this.range(scrollTop, height);
    const extra = keep.filter((i) => i >= 0 && i < this.count && (i < start || i >= end));
    const indices = [...new Set(extra)].sort((a, b) => a - b);
    const items: ({ index: number } | { gap: number; at: number })[] = [];
    let next = 0;
    const add = (index: number) => {
      if (index > next) items.push({ gap: this.offsetOf(index) - this.offsetOf(next), at: next });
      items.push({ index });
      next = index + 1;
    };
    for (const index of indices.filter((i) => i < start)) add(index);
    for (let index = start; index < end; index++) add(index);
    for (const index of indices.filter((i) => i >= end)) add(index);
    if (next < this.count) items.push({ gap: this.total() - this.offsetOf(next), at: next });
    return items;
  }

  /** The scroll offset that brings `index` fully into a view of `height` scrolled to `scrollTop`. */
  scrollTo(index: number, scrollTop: number, height: number): number {
    const top = this.offsetOf(index);
    const bottom = top + this.sizeOf(index);
    if (top < scrollTop) return top;
    if (bottom > scrollTop + height) return bottom - height;
    return scrollTop;
  }
}

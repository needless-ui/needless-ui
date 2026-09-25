/** A pane's limits, in percent of the splitter. */
export interface NuiPaneLimits {
  min: number;
  max: number;
  /** It can fold to `collapsedSize`: by dragging below half its minimum, or with Enter. */
  collapsible: boolean;
  collapsedSize: number;
}

const EPSILON = 1e-6;

/**
 * Moves the boundary after pane `index` by `delta` percent: toward the end when
 * positive. The pane on each side gives or takes first; when it reaches its limit,
 * the panes beyond it are pushed in turn, and the boundary stops when none can move.
 */
export function nuiResizePanes(
  sizes: readonly number[],
  limits: readonly NuiPaneLimits[],
  index: number,
  delta: number,
): number[] {
  const next = [...sizes];
  if (!delta || index < 0 || index >= sizes.length - 1) return next;
  // The panes that grow are on one side of the boundary, those that shrink on the other.
  const growing = delta > 0 ? [index] : [index + 1];
  const shrinking = delta > 0 ? range(index + 1, sizes.length - 1) : range(index, 0);
  const room = shrinking.reduce((sum, i) => sum + Math.max(0, next[i] - floor(limits[i])), 0);
  const want = Math.min(Math.abs(delta), room);
  let grown = 0;
  for (const i of growing) {
    const take = Math.min(want - grown, Math.max(0, limits[i].max - next[i]));
    next[i] += take;
    grown += take;
  }
  let left = grown;
  for (const i of shrinking) {
    if (left <= EPSILON) break;
    const take = Math.min(left, Math.max(0, next[i] - floor(limits[i])));
    next[i] -= take;
    left -= take;
  }
  return next;
}

/** The smallest a pane gets while it isn't collapsed. */
function floor(limits: NuiPaneLimits): number {
  return limits.min;
}

function range(from: number, to: number): number[] {
  const step = from <= to ? 1 : -1;
  const out: number[] = [];
  for (let i = from; step > 0 ? i <= to : i >= to; i += step) out.push(i);
  return out;
}

/**
 * Sizes that respect every pane's limits and add up to 100: the given ones where
 * they can, the rest shared out evenly.
 */
export function nuiFitPanes(
  sizes: readonly (number | null)[],
  limits: readonly NuiPaneLimits[],
): number[] {
  const count = limits.length;
  const given = sizes.slice(0, count);
  const known = given.reduce<number>((sum, s) => sum + (s ?? 0), 0);
  const unknown = given.filter((s) => s == null).length + Math.max(0, count - given.length);
  const share = unknown ? Math.max(0, 100 - known) / unknown : 0;
  let next = limits.map((limit, i) => {
    const size = given[i] ?? share;
    if (limit.collapsible && size <= limit.collapsedSize + EPSILON) return limit.collapsedSize;
    return Math.min(limit.max, Math.max(limit.min, size));
  });
  // Spread what's over or under 100 across the panes that still have room.
  for (let pass = 0; pass < 4; pass++) {
    const diff = 100 - next.reduce((sum, s) => sum + s, 0);
    if (Math.abs(diff) < EPSILON) break;
    const open = next
      .map((s, i) => i)
      .filter((i) => {
        const limit = limits[i];
        if (limit.collapsible && next[i] === limit.collapsedSize && limit.collapsedSize < limit.min)
          return false;
        return diff > 0 ? next[i] < limit.max - EPSILON : next[i] > limit.min + EPSILON;
      });
    if (!open.length) break;
    const each = diff / open.length;
    next = next.map((s, i) =>
      open.includes(i) ? Math.min(limits[i].max, Math.max(limits[i].min, s + each)) : s,
    );
  }
  return next;
}

/** Reads a size such as `240px`, `30%` or `12rem` as percent of `total` pixels. */
export function nuiPaneSize(
  value: string | number | null | undefined,
  total: number,
  rem = 16,
): number | null {
  if (value == null || value === '') return null;
  if (typeof value === 'number') return value;
  const match = /^\s*(-?\d*\.?\d+)\s*(px|%|rem|em)?\s*$/.exec(value);
  if (!match) return null;
  const amount = +match[1];
  switch (match[2]) {
    case 'px':
      return total ? (amount / total) * 100 : null;
    case 'rem':
    case 'em':
      return total ? ((amount * rem) / total) * 100 : null;
    default:
      return amount;
  }
}

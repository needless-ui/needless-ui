/** A box in viewport coordinates, as `getBoundingClientRect()` returns it. */
export interface NuiRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

/** The side of its anchor a floating element goes on. Start and end follow the text direction. */
export type NuiSide = 'top' | 'bottom' | 'start' | 'end';

/** How a floating element lines up along its anchor's edge. */
export type NuiAlign = 'start' | 'center' | 'end';

export interface NuiPlaceRequest {
  anchor: NuiRect;
  /** The floating element's natural size. */
  floating: { width: number; height: number };
  viewport: { width: number; height: number };
  /** Defaults to bottom. */
  side?: NuiSide;
  /** Defaults to start. */
  align?: NuiAlign;
  /** Gap between the anchor and the floating element. Defaults to 4. */
  offset?: number;
  /** Distance kept from the viewport edges. Defaults to 8. */
  margin?: number;
  direction?: 'ltr' | 'rtl';
}

export interface NuiPlacement {
  top: number;
  left: number;
  /** The side it ended up on, after flipping, as a physical side. */
  side: 'top' | 'bottom' | 'left' | 'right';
  /** Room on that side; the floating element scrolls beyond it. */
  maxHeight: number;
  maxWidth: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(min, max));

/**
 * Places a floating element next to its anchor, inside the viewport. It flips to
 * the opposite side when that side has more room than a too-small preferred side,
 * goes below (or above) when it fits beside the anchor on neither side, slides
 * along the edge to stay on screen, and says how much room it got. Pure, so it's
 * tested without a DOM.
 */
export function nuiPlace(request: NuiPlaceRequest): NuiPlacement {
  const { anchor, floating, viewport } = request;
  const offset = request.offset ?? 4;
  const margin = request.margin ?? 8;
  const rtl = request.direction === 'rtl';
  const align = request.align ?? 'start';
  const side = request.side ?? 'bottom';
  const right = anchor.left + anchor.width;
  const bottom = anchor.top + anchor.height;

  if (side === 'top' || side === 'bottom') {
    const below = viewport.height - bottom - offset - margin;
    const above = anchor.top - offset - margin;
    const preferred = side === 'bottom' ? below : above;
    const other = side === 'bottom' ? above : below;
    const flipped = floating.height > preferred && other > preferred;
    const placed = (side === 'bottom') !== flipped ? 'bottom' : 'top';
    const room = Math.max(0, placed === 'bottom' ? below : above);
    const height = Math.min(floating.height, room);
    // Start and end are the leading and trailing edges in the text direction.
    const leading = rtl ? right - floating.width : anchor.left;
    const trailing = rtl ? anchor.left : right - floating.width;
    const left =
      align === 'center'
        ? anchor.left + (anchor.width - floating.width) / 2
        : align === 'start'
          ? leading
          : trailing;
    return {
      top: placed === 'bottom' ? bottom + offset : anchor.top - offset - height,
      left: clamp(left, margin, viewport.width - margin - floating.width),
      side: placed,
      maxHeight: room,
      maxWidth: Math.max(0, viewport.width - 2 * margin),
    };
  }

  const toRight = (side === 'end') !== rtl;
  const spaceRight = viewport.width - right - offset - margin;
  const spaceLeft = anchor.left - offset - margin;
  // No room beside the anchor on either side (a phone): below it, or above, instead.
  if (floating.width > Math.max(spaceRight, spaceLeft)) {
    return nuiPlace({ ...request, side: 'bottom', align: 'center' });
  }
  const preferred = toRight ? spaceRight : spaceLeft;
  const other = toRight ? spaceLeft : spaceRight;
  const flipped = floating.width > preferred && other > preferred;
  const placedRight = toRight !== flipped;
  const room = Math.max(0, placedRight ? spaceRight : spaceLeft);
  const width = Math.min(floating.width, room);
  const top =
    align === 'center'
      ? anchor.top + (anchor.height - floating.height) / 2
      : align === 'start'
        ? anchor.top
        : bottom - floating.height;
  return {
    top: clamp(top, margin, viewport.height - margin - floating.height),
    left: placedRight ? right + offset : anchor.left - offset - width,
    side: placedRight ? 'right' : 'left',
    maxHeight: Math.max(0, viewport.height - 2 * margin),
    maxWidth: room,
  };
}

export interface NuiFollowOptions extends Pick<
  NuiPlaceRequest,
  'side' | 'align' | 'offset' | 'margin'
> {
  /** Makes the floating element at least as wide as its anchor, as selects do. */
  matchWidth?: boolean;
}

/**
 * Keeps a fixed-position `floating` element (a popover in the top layer) next to
 * `anchor` while the page scrolls or resizes, or either element changes size. It
 * writes `top`, `left`, the max sizes, `data-side`, `data-overflow` (when it's
 * taller than the room it has), and `--nui-anchor-center` (where the anchor's
 * middle falls along the floating element's edge, for arrows).
 * Returns a function that stops following.
 */
export function nuiFollow(
  anchor: HTMLElement,
  floating: HTMLElement,
  options: NuiFollowOptions = {},
): () => void {
  const view = floating.ownerDocument.defaultView;
  if (!view) return () => undefined;
  const root = floating.ownerDocument.documentElement;
  let frame = 0;

  const update = () => {
    frame = 0;
    const style = floating.style;
    style.maxHeight = '';
    style.maxWidth = '';
    if (options.matchWidth) style.minWidth = `${anchor.getBoundingClientRect().width}px`;
    const box = anchor.getBoundingClientRect();
    // What's visible of the page: the on-screen keyboard (and pinch zoom) leave a
    // smaller visual viewport inside the layout one that fixed positions use.
    const visual = view.visualViewport;
    const x = visual?.offsetLeft ?? 0;
    const y = visual?.offsetTop ?? 0;
    const height = floating.offsetHeight;
    const placement = nuiPlace({
      ...options,
      anchor: { top: box.top - y, left: box.left - x, width: box.width, height: box.height },
      floating: { width: floating.offsetWidth, height },
      viewport: {
        width: Math.min(root.clientWidth, visual?.width ?? Infinity),
        height: Math.min(root.clientHeight, visual?.height ?? Infinity),
      },
      direction: view.getComputedStyle(anchor).direction === 'rtl' ? 'rtl' : 'ltr',
    });
    style.top = `${placement.top + y}px`;
    style.left = `${placement.left + x}px`;
    style.maxHeight = `${placement.maxHeight}px`;
    style.maxWidth = `${placement.maxWidth}px`;
    floating.dataset['side'] = placement.side;
    // Taller than the room it has: it scrolls (and an arrow, which needs overflow, goes).
    floating.toggleAttribute('data-overflow', height > placement.maxHeight);
    const vertical = placement.side === 'top' || placement.side === 'bottom';
    const center = vertical
      ? box.left - x + box.width / 2 - placement.left
      : box.top - y + box.height / 2 - placement.top;
    style.setProperty('--nui-anchor-center', `${Math.round(center)}px`);
  };
  const schedule = () => {
    if (!frame) frame = view.requestAnimationFrame(update);
  };

  update();
  view.addEventListener('scroll', schedule, { capture: true, passive: true });
  view.addEventListener('resize', schedule);
  // The keyboard coming up or going resizes and moves the visual viewport alone.
  view.visualViewport?.addEventListener('resize', schedule);
  view.visualViewport?.addEventListener('scroll', schedule);
  const observer = new ResizeObserver(schedule);
  observer.observe(anchor);
  observer.observe(floating);
  return () => {
    view.cancelAnimationFrame(frame);
    view.removeEventListener('scroll', schedule, { capture: true });
    view.removeEventListener('resize', schedule);
    view.visualViewport?.removeEventListener('resize', schedule);
    view.visualViewport?.removeEventListener('scroll', schedule);
    observer.disconnect();
  };
}

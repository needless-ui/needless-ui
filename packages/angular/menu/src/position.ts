export interface Box {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface MenuPlacement {
  /** The trigger, or the parent item for a submenu, in viewport coordinates. */
  anchor: Box;
  /** The menu's natural size. */
  menu: { width: number; height: number };
  viewport: { width: number; height: number };
  /** `below` for menus opened by a trigger, `beside` for submenus. */
  placement: 'below' | 'beside';
  direction: 'ltr' | 'rtl';
  /** Gap between the anchor and the menu. */
  offset: number;
  /** Shift along the anchor's edge; submenus use it to line up their first item. */
  crossOffset?: number;
  /** Minimum distance kept from the viewport edges. */
  margin: number;
}

export interface MenuPosition {
  top: number;
  left: number;
  /** Height available on the chosen side; the menu scrolls beyond it. */
  maxHeight: number;
  /** The side of the anchor the menu ended up on. It grows out of that side. */
  side: 'top' | 'bottom' | 'left' | 'right';
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(min, max));

/**
 * Places a menu next to its anchor inside the viewport. Menus open below the
 * trigger and flip above when there's more room there; submenus open toward the
 * inline end and flip to the start side. Pure, so it can be tested without a DOM.
 */
export function positionMenu(request: MenuPlacement): MenuPosition {
  const { anchor, menu, viewport, offset, margin, direction } = request;
  const crossOffset = request.crossOffset ?? 0;
  const right = anchor.left + anchor.width;
  const bottom = anchor.top + anchor.height;

  if (request.placement === 'below') {
    const spaceBelow = viewport.height - bottom - offset - margin;
    const spaceAbove = anchor.top - offset - margin;
    const below = menu.height <= spaceBelow || spaceBelow >= spaceAbove;
    const maxHeight = Math.max(0, below ? spaceBelow : spaceAbove);
    const height = Math.min(menu.height, maxHeight);
    const start =
      direction === 'rtl' ? right - menu.width - crossOffset : anchor.left + crossOffset;
    return {
      top: below ? bottom + offset : anchor.top - offset - height,
      left: clamp(start, margin, viewport.width - margin - menu.width),
      maxHeight,
      side: below ? 'bottom' : 'top',
    };
  }

  const spaceRight = viewport.width - right - offset - margin;
  const spaceLeft = anchor.left - offset - margin;
  const [spaceEnd, spaceStart] =
    direction === 'rtl' ? [spaceLeft, spaceRight] : [spaceRight, spaceLeft];
  const toEnd = menu.width <= spaceEnd || spaceEnd >= spaceStart;
  const toRight = (direction === 'ltr') === toEnd;
  const maxHeight = Math.max(0, viewport.height - 2 * margin);
  const height = Math.min(menu.height, maxHeight);
  return {
    top: clamp(anchor.top + crossOffset, margin, viewport.height - margin - height),
    left: clamp(
      toRight ? right + offset : anchor.left - offset - menu.width,
      margin,
      viewport.width - margin - menu.width,
    ),
    maxHeight,
    side: toRight ? 'right' : 'left',
  };
}

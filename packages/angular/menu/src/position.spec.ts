import { positionMenu, type MenuPlacement } from './position';

const viewport = { width: 1000, height: 800 };
const menu = { width: 200, height: 300 };
const below = (anchor: MenuPlacement['anchor'], overrides: Partial<MenuPlacement> = {}) =>
  positionMenu({
    anchor,
    menu,
    viewport,
    placement: 'below',
    direction: 'ltr',
    offset: 4,
    margin: 8,
    ...overrides,
  });
const beside = (anchor: MenuPlacement['anchor'], overrides: Partial<MenuPlacement> = {}) =>
  positionMenu({
    anchor,
    menu,
    viewport,
    placement: 'beside',
    direction: 'ltr',
    offset: 2,
    margin: 8,
    ...overrides,
  });

describe('positionMenu', () => {
  describe('below a trigger', () => {
    it('opens below, aligned to the start edge', () => {
      expect(below({ top: 100, left: 50, width: 120, height: 36 })).toEqual({
        top: 140,
        left: 50,
        maxHeight: 800 - 136 - 4 - 8,
      });
    });

    it('flips above when the space below is too small and above is larger', () => {
      const position = below({ top: 700, left: 50, width: 120, height: 36 });
      expect(position.top).toBe(700 - 4 - 300);
      expect(position.maxHeight).toBe(700 - 4 - 8);
    });

    it('stays below and scrolls when neither side fits but below is larger', () => {
      const position = below(
        { top: 300, left: 50, width: 120, height: 36 },
        { menu: { width: 200, height: 900 } },
      );
      expect(position.top).toBe(340);
      expect(position.maxHeight).toBe(800 - 336 - 4 - 8);
    });

    it('keeps the menu inside the viewport horizontally', () => {
      expect(below({ top: 100, left: 900, width: 80, height: 36 }).left).toBe(1000 - 8 - 200);
      expect(below({ top: 100, left: 2, width: 80, height: 36 }).left).toBe(8);
    });

    it('aligns end edges in right-to-left text', () => {
      expect(
        below({ top: 100, left: 500, width: 120, height: 36 }, { direction: 'rtl' }).left,
      ).toBe(620 - 200);
    });
  });

  describe('beside a parent item', () => {
    it('opens toward the inline end, shifted by the cross offset', () => {
      expect(beside({ top: 200, left: 100, width: 180, height: 28 }, { crossOffset: -5 })).toEqual({
        top: 195,
        left: 282,
        maxHeight: 784,
      });
    });

    it('flips to the start side when the end side is too narrow', () => {
      expect(beside({ top: 200, left: 700, width: 180, height: 28 }).left).toBe(700 - 2 - 200);
    });

    it('opens to the left in right-to-left text', () => {
      expect(
        beside({ top: 200, left: 500, width: 180, height: 28 }, { direction: 'rtl' }).left,
      ).toBe(298);
    });

    it('moves up to stay inside the viewport', () => {
      expect(beside({ top: 700, left: 100, width: 180, height: 28 }).top).toBe(800 - 8 - 300);
    });
  });
});

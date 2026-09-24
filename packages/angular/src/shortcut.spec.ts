import { nuiIsApple, nuiMatchesShortcut, nuiShortcutKeys } from './shortcut';

const key = (init: KeyboardEventInit) => new KeyboardEvent('keydown', init);

describe('shortcuts', () => {
  it('matches mod as ⌘ on Apple devices and Ctrl elsewhere, modifiers exactly', () => {
    expect(nuiMatchesShortcut(key({ key: 'k', code: 'KeyK', metaKey: true }), 'mod+k', true)).toBe(
      true,
    );
    expect(nuiMatchesShortcut(key({ key: 'k', code: 'KeyK', ctrlKey: true }), 'mod+k', true)).toBe(
      false,
    );
    expect(nuiMatchesShortcut(key({ key: 'k', code: 'KeyK', ctrlKey: true }), 'mod+k', false)).toBe(
      true,
    );
    expect(
      nuiMatchesShortcut(
        key({ key: 'K', code: 'KeyK', ctrlKey: true, shiftKey: true }),
        'mod+k',
        false,
      ),
    ).toBe(false);
    expect(
      nuiMatchesShortcut(
        key({ key: 'P', code: 'KeyP', metaKey: true, shiftKey: true }),
        'mod+shift+p',
        true,
      ),
    ).toBe(true);
  });

  it('finds letters by position when the layout or Alt changes them', () => {
    expect(nuiMatchesShortcut(key({ key: 'л', code: 'KeyK', ctrlKey: true }), 'mod+k', false)).toBe(
      true,
    );
    expect(nuiMatchesShortcut(key({ key: '†', code: 'KeyT', altKey: true }), 'alt+t', true)).toBe(
      true,
    );
    expect(
      nuiMatchesShortcut(key({ key: 'Dead', code: 'KeyN', altKey: true }), 'alt+n', true),
    ).toBe(true);
  });

  it('matches symbols and named keys', () => {
    expect(nuiMatchesShortcut(key({ key: '?', code: 'Slash', shiftKey: true }), '?')).toBe(true);
    expect(nuiMatchesShortcut(key({ key: 'Escape', code: 'Escape' }), 'esc')).toBe(true);
    expect(nuiMatchesShortcut(key({ key: 'Enter', ctrlKey: true }), 'ctrl+enter', true)).toBe(true);
  });

  it('shows the keys each platform prints on its keyboard', () => {
    expect(nuiShortcutKeys('mod+shift+p', true)).toEqual(['⇧', '⌘', 'P']);
    expect(nuiShortcutKeys('mod+shift+p', false)).toEqual(['Ctrl', 'Shift', 'P']);
    expect(nuiShortcutKeys('alt+enter', false)).toEqual(['Alt', '↵']);
    expect(nuiShortcutKeys('mod++', true)).toEqual(['⌘', '+']);
    expect(nuiShortcutKeys('f2', false)).toEqual(['F2']);
  });

  it('knows Apple platforms', () => {
    expect(nuiIsApple({ platform: 'MacIntel' } as Navigator)).toBe(true);
    expect(nuiIsApple({ platform: 'Win32' } as Navigator)).toBe(false);
    expect(nuiIsApple(null)).toBe(false);
  });
});

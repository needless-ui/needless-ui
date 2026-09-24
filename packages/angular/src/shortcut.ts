/**
 * Keyboard shortcuts written as text: `mod+k`, `alt+shift+p`, `ctrl+enter`, `?`.
 * `mod` is ⌘ on Apple devices and Ctrl elsewhere. Parts are joined with `+`;
 * the last one is the key, the others modifiers (`ctrl`, `alt`, `shift`, `meta`, `mod`).
 */

interface Parsed {
  key: string;
  ctrl: boolean;
  alt: boolean;
  shift: boolean;
  meta: boolean;
}

/** Whether the browser runs on an Apple platform, where `mod` means ⌘. */
export function nuiIsApple(navigator: Navigator | null = globalThis.navigator ?? null): boolean {
  if (!navigator) return false;
  const data = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData;
  return /mac|iphone|ipad|ipod/i.test(data?.platform || navigator.platform || '');
}

function parse(shortcut: string, apple: boolean): Parsed {
  // "mod++" is mod and the plus key.
  const parts = shortcut.toLowerCase().split(/\+(?!$)/);
  const key = parts.pop() ?? '';
  const has = (name: string) => parts.includes(name);
  return {
    key,
    ctrl: has('ctrl') || (!apple && has('mod')),
    alt: has('alt') || has('option'),
    shift: has('shift'),
    meta: has('meta') || has('cmd') || (apple && has('mod')),
  };
}

/** The key an event is about, for matching: letters and digits by `code` when the layout isn't Latin. */
function pressed(event: KeyboardEvent): string {
  const key = event.key.toLowerCase();
  if (/^[a-z0-9]$/.test(key)) return key;
  // Alt on a Mac turns T into † (and N into a dead key), a Cyrillic layout turns K into л:
  // fall back on the key's position.
  const code = /^(?:Key([A-Z])|Digit([0-9]))$/.exec(event.code);
  if (code && (key.length === 1 || key === 'dead')) return (code[1] ?? code[2]).toLowerCase();
  return key;
}

const ALIASES: Record<string, string> = {
  esc: 'escape',
  space: ' ',
  up: 'arrowup',
  down: 'arrowdown',
  left: 'arrowleft',
  right: 'arrowright',
  return: 'enter',
};

/** Whether a keyboard event is the given shortcut, modifiers exactly. */
export function nuiMatchesShortcut(
  event: KeyboardEvent,
  shortcut: string,
  apple: boolean = nuiIsApple(),
): boolean {
  const want = parse(shortcut, apple);
  const key = ALIASES[want.key] ?? want.key;
  // A symbol like "?" already carries its Shift.
  const symbol = key.length === 1 && !/[a-z0-9 ]/.test(key);
  return (
    pressed(event) === key &&
    event.ctrlKey === want.ctrl &&
    event.altKey === want.alt &&
    event.metaKey === want.meta &&
    (symbol || event.shiftKey === want.shift)
  );
}

const APPLE: Record<string, string> = { ctrl: '⌃', alt: '⌥', shift: '⇧', meta: '⌘' };
const OTHER: Record<string, string> = { ctrl: 'Ctrl', alt: 'Alt', shift: 'Shift', meta: 'Win' };
const KEYS: Record<string, string> = {
  enter: '↵',
  escape: 'Esc',
  ' ': 'Space',
  arrowup: '↑',
  arrowdown: '↓',
  arrowleft: '←',
  arrowright: '→',
  backspace: '⌫',
  delete: 'Del',
  tab: 'Tab',
};

/**
 * The keys of a shortcut as people see them on their keyboard: `mod+shift+p` is
 * ⌘ ⇧ P on Apple devices and Ctrl Shift P elsewhere.
 */
export function nuiShortcutKeys(shortcut: string, apple: boolean = nuiIsApple()): string[] {
  const parsed = parse(shortcut, apple);
  const names = apple ? APPLE : OTHER;
  // In the order each platform lists them.
  const order = apple ? ['ctrl', 'alt', 'shift', 'meta'] : ['ctrl', 'meta', 'alt', 'shift'];
  const keys = order.filter((name) => parsed[name as keyof Parsed]).map((name) => names[name]);
  const key = ALIASES[parsed.key] ?? parsed.key;
  keys.push(
    KEYS[key] ?? (key.length === 1 ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)),
  );
  return keys;
}

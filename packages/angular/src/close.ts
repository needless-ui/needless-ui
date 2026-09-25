/** What's used of the CloseWatcher API. TypeScript's DOM types don't have it yet. */
interface CloseWatcherLike {
  onclose: (() => void) | null;
  destroy(): void;
}
type WithCloseWatcher = typeof globalThis & { CloseWatcher: new () => CloseWatcherLike };

/**
 * Runs `close` on a close request: Android's back gesture or back button, or an
 * Escape that no keydown listener prevented. Browsers do this themselves for
 * dialogs and `popover="auto"`, but not for manual popovers. Call it when a popup
 * opens; it returns a function that stops listening, to call however the popup
 * closes.
 *
 * It needs the CloseWatcher API (Chrome and Edge 126, Firefox 149). Elsewhere,
 * and on the server, it does nothing, and Escape alone closes the popup.
 *
 * A close request goes to the newest watcher, so a submenu closes before the menu
 * it opens from. (Watchers made with no click, tap or key press in between can
 * share a group, and one request closes a whole group.) The watcher also gets Escape,
 * after every keydown listener, unless one of them prevented the key's default:
 * an Escape handler that closes the popup prevents it, or leaves the watcher until
 * the key is done. Stopped during the keydown, the watcher would pass the Escape
 * on to the next one, and a parent menu or a dialog would close too.
 */
export function nuiOnCloseRequest(close: () => void): () => void {
  if (!('CloseWatcher' in globalThis)) return () => undefined;
  const watcher = new (globalThis as WithCloseWatcher).CloseWatcher();
  watcher.onclose = () => close();
  return () => watcher.destroy();
}

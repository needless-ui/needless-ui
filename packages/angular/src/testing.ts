/*
 * Helpers for the spec files. Not part of the package: ng-packagr compiles from
 * src/index.ts, which doesn't import this.
 */
import { userEvent } from 'vitest/browser';

/** Whether this browser has the CloseWatcher API. */
export const hasCloseWatcher = 'CloseWatcher' in globalThis;

/**
 * Sends a close request that no keydown listener sees, as Android's back gesture
 * is: a real Escape, hidden from the page's listeners. Its default action, the
 * close request, still reaches the close watchers.
 */
export async function closeRequest(): Promise<void> {
  const hide = (event: KeyboardEvent) => {
    if (event.key === 'Escape') event.stopImmediatePropagation();
  };
  window.addEventListener('keydown', hide, true);
  try {
    await userEvent.keyboard('{Escape}');
  } finally {
    window.removeEventListener('keydown', hide, true);
  }
}

/** Runs `body` as a browser without the CloseWatcher API would (Safari, Firefox before 149). */
export async function withoutCloseWatcher(body: () => Promise<void>): Promise<void> {
  const api = Object.getOwnPropertyDescriptor(globalThis, 'CloseWatcher');
  Reflect.deleteProperty(globalThis, 'CloseWatcher');
  try {
    await body();
  } finally {
    if (api) Object.defineProperty(globalThis, 'CloseWatcher', api);
  }
}

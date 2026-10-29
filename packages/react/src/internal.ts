'use client';

import { nuiNow } from '@needless-ui/core';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';

/**
 * A value that the parent can control (`value` and `onChange`) or leave to the
 * component (`defaultValue`), as React's own form elements do. As with Angular's
 * `model()`, setting the value it has already reports nothing. The third item
 * reads the latest value, set but not yet rendered too, so a handler or a `ref`
 * method can change it twice in a row (`next(); next()`).
 */
export function useControllable<T>(
  value: T | undefined,
  initial: T | (() => T),
  onChange: ((value: T) => void) | undefined,
): [T, (next: T) => void, () => T] {
  const [own, setOwn] = useState(initial);
  const controlled = value !== undefined;
  const current = controlled ? value : own;
  const latest = useRef(current);
  useLayoutEffect(() => {
    latest.current = current;
  });
  const set = useCallback(
    (next: T) => {
      // Unchanged both as rendered and as last set: a parent that turned a value
      // down still hears it asked for again.
      if (Object.is(next, current) && Object.is(next, latest.current)) return;
      latest.current = next;
      if (!controlled) setOwn(next);
      onChange?.(next);
    },
    [current, controlled, onChange],
  );
  const get = useCallback(() => latest.current, []);
  return [current, set, get];
}

/**
 * A value the component writes, which follows the parent's `value` whenever the
 * parent passes a new one, as Angular's `model()` does: the grid's rows, edited
 * in place until the app sends new ones.
 */
export function useModel<T>(
  value: T,
  onChange: ((value: T) => void) | undefined,
): [T, (next: T) => void] {
  const [own, setOwn] = useState({ from: value, value });
  let current = own.value;
  if (own.from !== value) {
    current = value;
    setOwn({ from: value, value });
  }
  const set = useCallback(
    (next: T) => {
      setOwn((state) => ({ from: state.from, value: next }));
      onChange?.(next);
    },
    [onChange],
  );
  return [current, set];
}

const subscribeClock = (tick: () => void) => {
  const timer = setInterval(tick, 30_000);
  return () => clearInterval(timer);
};
const serverClock = () => null;

/**
 * Now, to the minute, where the reader is; it moves every half minute. The server
 * can't know the reader's time, so it renders without it, and hydration fills it in.
 */
export function useNow(): string | null {
  return useSyncExternalStore(subscribeClock, nuiNow, serverClock);
}

/** Listens for nothing; its presence is what counts (see below). */
const touches = () => undefined;

/**
 * Safari on iOS matches :active, which presses style, only on pages that listen
 * for touches. The same listener added twice is one.
 */
export function useTouchActive(): void {
  useEffect(() => {
    document.addEventListener('touchstart', touches, { passive: true });
  }, []);
}

/** Whether an element lays out right to left. */
export function isRtl(element: Element): boolean {
  return element.ownerDocument.defaultView?.getComputedStyle(element).direction === 'rtl';
}

import { userEvent } from 'vitest/browser';
import { nuiOnCloseRequest } from './close';
import { closeRequest, hasCloseWatcher, withoutCloseWatcher } from './testing';

describe('nuiOnCloseRequest', () => {
  it.runIf(hasCloseWatcher)('runs once on a close request, and never after it stops', async () => {
    let closes = 0;
    const stop = nuiOnCloseRequest(() => closes++);
    await closeRequest();
    await closeRequest();
    expect(closes).toBe(1);
    stop();

    nuiOnCloseRequest(() => closes++)();
    await closeRequest();
    expect(closes).toBe(1);
  });

  it.runIf(hasCloseWatcher)('closes the newest first, one per request', async () => {
    const closed: string[] = [];
    const stopOuter = nuiOnCloseRequest(() => closed.push('outer'));
    // A click in between, as opening a popup takes: without one, the two would share a group.
    const button = document.body.appendChild(document.createElement('button'));
    button.textContent = 'Open';
    await userEvent.click(button);
    button.remove();
    const stopInner = nuiOnCloseRequest(() => closed.push('inner'));
    await closeRequest();
    expect(closed).toEqual(['inner']);
    await closeRequest();
    expect(closed).toEqual(['inner', 'outer']);
    stopInner();
    stopOuter();
  });

  it.runIf(hasCloseWatcher)('never gets an Escape that a keydown listener prevented', async () => {
    let closes = 0;
    const stop = nuiOnCloseRequest(() => closes++);
    const handle = (event: KeyboardEvent) => event.preventDefault();
    document.addEventListener('keydown', handle);
    await userEvent.keyboard('{Escape}');
    document.removeEventListener('keydown', handle);
    expect(closes).toBe(0);
    // Unprevented, Escape is a close request.
    await userEvent.keyboard('{Escape}');
    expect(closes).toBe(1);
    stop();
  });

  it('does nothing without the CloseWatcher API', async () => {
    await withoutCloseWatcher(async () => {
      let closes = 0;
      const stop = nuiOnCloseRequest(() => closes++);
      await userEvent.keyboard('{Escape}');
      expect(closes).toBe(0);
      expect(stop).not.toThrow();
    });
  });
});

import type { ReactNode } from 'react';
import { createRoot, type Root } from 'react-dom/client';

const roots: { root: Root; container: HTMLElement }[] = [];

afterEach(() => {
  for (const { root, container } of roots.splice(0)) {
    root.unmount();
    container.remove();
  }
});

/** Waits for React to render what the last input changed, and for its effects to run. */
export async function settle(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 20));
  await new Promise((resolve) => requestAnimationFrame(resolve));
}

/** Renders into the page, as an app would, and waits for the first render. */
export async function render(ui: ReactNode): Promise<{
  container: HTMLElement;
  rerender(next: ReactNode): Promise<void>;
}> {
  const container = document.body.appendChild(document.createElement('div'));
  const root = createRoot(container);
  roots.push({ root, container });
  root.render(ui);
  await settle();
  return {
    container,
    async rerender(next) {
      root.render(next);
      await settle();
    },
  };
}

import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

/**
 * The tests run in a real browser: Chromium, Firefox and WebKit by default, or the
 * ones `NUI_BROWSERS` lists (`NUI_BROWSERS=chromium,webkit pnpm test`). Files named
 * `*.server.test.tsx` run in Node instead, where there's no DOM, as on a server.
 */
const browsers = (process.env['NUI_BROWSERS'] ?? 'chromium,firefox,webkit')
  .split(',')
  .map((name) => name.trim())
  .filter(Boolean) as ('chromium' | 'firefox' | 'webkit')[];

export default defineConfig({
  oxc: { jsx: { runtime: 'automatic' } },
  // Found up front, so Vite doesn't reload the page halfway through the first test.
  optimizeDeps: {
    include: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client', 'react-dom/server'],
  },
  test: {
    globals: true,
    projects: [
      {
        extends: true,
        test: {
          name: 'browser',
          include: ['src/**/*.test.{ts,tsx}'],
          exclude: ['src/**/*.server.test.{ts,tsx}'],
          setupFiles: ['test/setup.ts'],
          // One test file at a time per browser: Firefox gives focus to one page at a time,
          // so files running side by side would steal each other's focus.
          fileParallelism: false,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: browsers.map((browser) => ({ browser })),
          },
        },
      },
      {
        extends: true,
        test: {
          name: 'server',
          include: ['src/**/*.server.test.{ts,tsx}'],
          environment: 'node',
        },
      },
    ],
  },
});

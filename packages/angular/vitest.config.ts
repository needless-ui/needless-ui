import { defineConfig } from 'vitest/config';

/**
 * Merged into the Angular unit-test builder's config (`runnerConfig` in
 * angular.json). The tests run in Chromium, Firefox and WebKit.
 */
export default defineConfig({
  test: {
    // One test file at a time per browser. Test files open pages in the same
    // browser, and Firefox gives focus to one page at a time: in parallel, a
    // test's focus moves were stolen by another file's, and focus tests flaked.
    fileParallelism: false,
  },
});

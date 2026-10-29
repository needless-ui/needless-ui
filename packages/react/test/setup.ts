// The tests drive real input through the browser (userEvent from vitest/browser) and
// wait for React to render, rather than wrapping each step in act().
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = false;

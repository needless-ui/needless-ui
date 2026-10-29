/** Every documented page id. Server routes import this file, so it stays free of components. */
export const COMPONENT_IDS = [
  'avatar',
  'breadcrumbs',
  'button',
  'calendar',
  'carousel',
  'chat',
  'color-picker',
  'combobox',
  'command',
  'date-picker',
  'dialog',
  'dropzone',
  'editor',
  'empty',
  'grid',
  'markdown',
  'mask',
  'menu',
  'number-field',
  'otp',
  'phone-field',
  'popover',
  'rating',
  'scheduler',
  'select',
  'skeleton',
  'splitter',
  'toast',
  'tour',
] as const;
export type ComponentId = (typeof COMPONENT_IDS)[number];

export const GUIDE_IDS = [
  'getting-started',
  'react',
  'theming',
  'customization',
  'booking-calendar',
  'from-fullcalendar',
  'from-ag-grid',
  'browser-support',
] as const;
export type GuideId = (typeof GUIDE_IDS)[number];

export const isComponentId = (id: string): id is ComponentId =>
  (COMPONENT_IDS as readonly string[]).includes(id);

export const isGuideId = (id: string): id is GuideId =>
  (GUIDE_IDS as readonly string[]).includes(id);

/** Components that are also in `@needless-ui/react`: their API pages have a React twin. */
export const REACT_IDS = ['scheduler', 'grid'] as const satisfies readonly ComponentId[];
export type ReactId = (typeof REACT_IDS)[number];

export const isReactId = (id: string): id is ReactId =>
  (REACT_IDS as readonly string[]).includes(id);

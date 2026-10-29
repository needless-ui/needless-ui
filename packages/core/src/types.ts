/** Color palette a component paints with. Mirrors `data-tone` in @needless-ui/css. */
export type NuiTone = 'accent' | 'neutral' | 'danger';

/** Control size. Mirrors `data-size` in @needless-ui/css. */
export type NuiSize = 'sm' | 'md' | 'lg';

/** The spring components move with. Mirrors `data-nui-motion`. */
export type NuiMotion = 'snappy' | 'bouncy' | 'jelly' | 'elastic' | 'lazy' | 'mechanical' | 'none';

/** What a button does while it's held down. Mirrors `data-nui-press`. */
export type NuiPress = 'sink' | 'squish' | 'pop' | 'wobble' | 'rubber' | 'tilt' | 'none';

/** How dialogs and menus arrive. Mirrors `data-nui-enter`. */
export type NuiEnter =
  'zoom' | 'fade' | 'drop' | 'rise' | 'unfold' | 'flip' | 'swing' | 'slide' | 'none';

/** The shape of rounded corners. Mirrors `data-nui-corners`. */
export type NuiCorners = 'round' | 'squircle' | 'bevel' | 'scoop' | 'notch' | 'square';

/** How big corners are. Mirrors `data-nui-radius`. */
export type NuiRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

/** How much room controls take. Mirrors `data-nui-density`. */
export type NuiDensity = 'compact' | 'regular' | 'roomy';

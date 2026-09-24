import { Directive, input } from '@angular/core';

/** Mirrors `data-shape` in @needless-ui/css: a text line (the default), a circle or a block. */
export type NuiSkeletonShape = 'text' | 'circle' | 'block';

/**
 * A placeholder for content that is still loading. It's hidden from assistive
 * technology; mark the loading region with `aria-busy="true"` instead.
 *
 * ```html
 * <article aria-busy="true">
 *   <span nuiSkeleton shape="circle"></span>
 *   <span nuiSkeleton></span>
 *   <span nuiSkeleton style="inline-size: 60%"></span>
 * </article>
 * ```
 */
@Directive({
  selector: '[nuiSkeleton]',
  host: {
    class: 'nui-skeleton',
    'aria-hidden': 'true',
    '[attr.data-shape]': 'shape() === "text" ? null : shape()',
  },
})
export class NuiSkeleton {
  readonly shape = input<NuiSkeletonShape>('text');
}

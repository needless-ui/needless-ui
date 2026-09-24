import { Directive, input } from '@angular/core';

/** Built-in pictures. Mirrors `data-illustration` in @needless-ui/css. */
export type NuiEmptyIllustration = 'search' | 'inbox' | 'files' | 'error';

/**
 * What a list, table or page shows when there is nothing in it yet: a picture,
 * a title, a line of help and what to do next.
 *
 * ```html
 * <div nuiEmpty>
 *   <div nuiEmptyMedia illustration="search"></div>
 *   <h3 nuiEmptyTitle>No results for "llama"</h3>
 *   <p nuiEmptyDescription>Check the spelling, or search all projects.</p>
 *   <div nuiEmptyActions><button nuiButton (click)="clear()">Clear filters</button></div>
 * </div>
 * ```
 *
 * Use the heading level that fits the page; the styles don't depend on it.
 */
@Directive({ selector: '[nuiEmpty]', host: { class: 'nui-empty' } })
export class NuiEmpty {}

/** The picture: your own content, or a built-in `illustration`. Hidden from assistive technology. */
@Directive({
  selector: '[nuiEmptyMedia]',
  host: {
    class: 'nui-empty-media',
    'aria-hidden': 'true',
    '[attr.data-illustration]': 'illustration() ?? null',
  },
})
export class NuiEmptyMedia {
  readonly illustration = input<NuiEmptyIllustration>();
}

@Directive({ selector: '[nuiEmptyTitle]', host: { class: 'nui-empty-title' } })
export class NuiEmptyTitle {}

@Directive({ selector: '[nuiEmptyDescription]', host: { class: 'nui-empty-description' } })
export class NuiEmptyDescription {}

@Directive({ selector: '[nuiEmptyActions]', host: { class: 'nui-empty-actions' } })
export class NuiEmptyActions {}

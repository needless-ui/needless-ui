import {
  booleanAttribute,
  Component,
  computed,
  Directive,
  input,
  linkedSignal,
} from '@angular/core';
import type { NuiSize } from '@needless-ui/angular';

/** A presence dot. Mirrors `data-status` in @needless-ui/css. */
export type NuiAvatarStatus = 'online' | 'away' | 'busy' | 'offline';

const words = new Intl.Segmenter(undefined, { granularity: 'word' });
const letters = new Intl.Segmenter(undefined, { granularity: 'grapheme' });

/**
 * Up to two initials: the first letters of the first and last words. Works on
 * graphemes, so accents, emoji and combining marks stay whole, and a name in a
 * script without word spaces gives its first character.
 */
export function nuiInitials(name: string): string {
  const parts = [...words.segment(name.trim())]
    .filter((part) => part.isWordLike)
    .map((part) => part.segment);
  const first = (part: string | undefined) => [...letters.segment(part ?? '')][0]?.segment ?? '';
  const initials = parts.length > 1 ? first(parts[0]) + first(parts.at(-1)) : first(parts[0]);
  return initials.toLocaleUpperCase();
}

/** A stable hue (0–359) for a name, so the same person always gets the same color. */
export function nuiNameHue(name: string): number {
  // FNV-1a, 32 bit.
  let hash = 0x811c9dc5;
  for (const char of name.trim().toLowerCase()) {
    hash ^= char.codePointAt(0)!;
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0) % 360;
}

/**
 * A person's picture, or their initials on a color picked from their name when
 * there is no picture or it fails to load.
 *
 * ```html
 * <span nuiAvatar name="Ada Lovelace" src="/ada.jpg" status="online"></span>
 * ```
 *
 * It's an image named after the person (`role="img"`). Next to their visible
 * name, set `decorative` so screen readers don't hear the name twice.
 */
@Component({
  selector: '[nuiAvatar]',
  host: {
    class: 'nui-avatar',
    '[attr.role]': 'decorative() ? null : "img"',
    '[attr.aria-label]': 'decorative() ? null : accessibleName()',
    '[attr.aria-hidden]': 'decorative() ? "true" : null',
    '[attr.data-size]': 'size() === "md" ? null : size()',
    '[attr.data-shape]': 'shape() === "circle" ? null : shape()',
    '[style.--_hue]': 'hue()',
  },
  template: `
    @if (src() && !failed()) {
      <img
        class="nui-avatar-image"
        alt=""
        loading="lazy"
        decoding="async"
        [src]="src()"
        (error)="failed.set(true)"
      />
    } @else {
      <span class="nui-avatar-initials" aria-hidden="true">{{ initials() }}</span>
    }
    @if (status(); as status) {
      <span class="nui-avatar-status" [attr.data-status]="status"></span>
    }
  `,
})
export class NuiAvatar {
  /** The person's name: the accessible name, the initials and the color come from it. */
  readonly name = input.required<string>();
  /** Picture URL. */
  readonly src = input<string>();
  readonly size = input<NuiSize>('md');
  readonly shape = input<'circle' | 'square'>('circle');
  readonly status = input<NuiAvatarStatus>();
  /** Accessible name, when it should say more than the name ("Ada Lovelace, online"). */
  readonly label = input<string>();
  /** Hides it from assistive technology, for avatars next to the visible name. */
  readonly decorative = input(false, { transform: booleanAttribute });

  /** Whether the picture failed; resets when the source changes. */
  protected readonly failed = linkedSignal({ source: this.src, computation: () => false });
  protected readonly initials = computed(() => nuiInitials(this.name()));
  protected readonly hue = computed(() => nuiNameHue(this.name()));
  protected readonly accessibleName = computed(() => this.label() || this.name());
}

/** A row of overlapping avatars. */
@Directive({
  selector: '[nuiAvatarGroup]',
  host: { class: 'nui-avatar-group', role: 'group' },
})
export class NuiAvatarGroup {}

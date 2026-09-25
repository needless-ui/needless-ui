# Carousel

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A carousel (`nui-carousel`, a named region with `aria-roledescription="carousel"`): a row of slides (`nui-carousel-track`) that scrolls and snaps, previous and next buttons over its ends (`nui-carousel-nav`), a dot for each place it can stop (`nui-carousel-dots`, `nui-carousel-dot`), and, when it turns by itself, a rotation control (`nui-carousel-play`) with a ring that fills until the next slide. Each slide (`nui-carousel-slide`) is a group named by its title or its position ("3 of 6").

The track is native scrolling: swiping, trackpads, the scrollbar-less wheel and the arrow keys all move it, and it snaps to slides.

## API

| CSS hook                        | Angular                           | Values                                                            | Default |
| ------------------------------- | --------------------------------- | ----------------------------------------------------------------- | ------- |
| `aria-label`                    | `label`                           | names the carousel                                                | —       |
| `data-current` (slides in view) | `[(index)]`                       | the first slide in view, from 0                                   | 0       |
| `--_per-view`, `data-per-view`  | `perView`                         | slides in view at once, or `auto` for slides with their own width | 1       |
| `--_gap`                        | `gap`                             | room between slides, any CSS length                               | `1rem`  |
| —                               | `loop`                            | past the last slide comes the first, and back                     | false   |
| `data-rotating`, `--_interval`  | `autoplay`                        | milliseconds between slides when it turns by itself; 0 doesn't    | 0       |
| —                               | `controls`, `indicators`          | the previous and next buttons; the dots                           | true    |
| —                               | slide `nuiCarouselSlide`          | the slide's title                                                 | —       |
| —                               | `next()`, `previous()`, `goTo(i)` | move from code                                                    | —       |
| —                               | `labels`                          | every text it says, for translation                               | —       |

## Behavior

- Buttons and dots scroll smoothly (instantly under reduced motion) to a slide; with several in view, the last stop is the last full view.
- The dots follow a swipe as it goes, and the carousel announces where it lands, politely. Rotation stays quiet.
- Rotation pauses while the pointer is over the carousel or the page is hidden, and stops for good when keyboard focus comes into it (except on the rotation control), as the WAI-ARIA pattern asks, or a finger touches the slides. The rotation control starts it again. Under reduced motion, rotation starts stopped.
- Rotation always goes round, whatever `loop` says; the buttons stop at the ends unless `loop` is on.
- In right-to-left text, the slides run from the right, and the buttons and swiping follow.

## Keyboard

| Key                | Behavior                                                  |
| ------------------ | --------------------------------------------------------- |
| Tab                | The rotation control, previous, next, the track, the dots |
| ← / → on the track | Scroll to the previous or next slide (native, with snaps) |
| Enter or Space     | On a button or dot, go                                    |

## Accessibility

- The carousel is a `region` with `aria-roledescription="carousel"` and a name; each slide a `group` with `aria-roledescription="slide"` and a name such as "Lake Como, 2 of 4".
- The rotation control comes first, and says what it will do: "Stop slide rotation" or "Start slide rotation".
- The previous and next buttons and the dots control the track (`aria-controls`); the current dot has `aria-current`.
- The track is focusable, so keyboards can scroll it, and it's named "Slides".
- Slides out of view stay reachable: tabbing into one scrolls it in.

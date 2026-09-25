import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Accessible, themeable Angular components built on native elements, W3C design tokens and one framework-free stylesheet. Open source and MIT licensed.',
    skipToContent: 'Skip to main content',
    nav: {
      label: 'Main',
      home: 'Needless UI home',
      components: 'Components',
      guides: 'Guides',
      github: 'GitHub',
      language: 'Language',
      theme: 'Theme',
      themes: { system: 'System', light: 'Light', dark: 'Dark' },
    },
    footer: {
      license: 'Released under the MIT License.',
      source: 'Source code',
      built: 'Needlessly engineered, carefully built.',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
    },
    emergency: {
      label: 'DO NOT PRESS',
      cover: 'Lift the safety cover',
      button: 'Do not press',
      armed: 'The cover is up. Please reconsider.',
      falling: 'Emergency protocol engaged…',
      fallen: 'Gravity is permanent now. Refresh the page to rebuild the universe.',
      reduced: 'Your system asks for reduced motion, so gravity stays off. Lucky.',
    },
    toaster: { label: 'Notifications (Alt+T)', close: 'Dismiss' },
  },

  home: {
    title: 'Needless UI · Accessible Angular components, needlessly engineered',
    description:
      'Needless UI is an open-source Angular component library: native elements, one framework-free stylesheet, W3C design tokens and WCAG 2.2 AA built in.',
    eyebrow: 'Open source · Angular 22 · MIT',
    heading: 'UI components, needlessly well engineered.',
    lead: 'Needless UI styles <strong>native elements</strong> with one framework-free stylesheet and W3C design tokens. Its Angular directives add behavior from Angular Aria, so every component is accessible from the first render.',
    getStarted: 'Get started',
    browse: 'Browse components',
    featuresTitle: 'Why it exists',
    features: [
      {
        title: 'Native elements first',
        text: '<code>&lt;button nuiButton&gt;</code> is a real button. Forms, keyboards and screen readers work because nothing is wrapped around it.',
      },
      {
        title: 'One stylesheet, any framework',
        text: 'Components are plain CSS in cascade layers: Angular today, React next, plain HTML always.',
      },
      {
        title: 'Your CSS always wins',
        text: 'Everything ships inside <code>@layer nui</code>, so your own styles override it without <code>!important</code> or specificity battles.',
      },
      {
        title: 'Accessible by construction',
        text: 'Every color pair is checked against WCAG 2.2 AA when the palette is generated. Focus, forced colors and reduced motion are handled for you.',
      },
      {
        title: 'Needlessly customizable',
        text: 'Springs, press effects, entrances, corner shapes, radius and density: <a href="/guides/customization">one attribute</a> for the whole app, or one input per component, on standard W3C design tokens.',
      },
      {
        title: 'Modern Angular',
        text: 'Signal inputs, zoneless, server rendering and one entry point per component, so apps ship only what they import.',
      },
    ],
    codeTitle: 'Two imports and you’re done',
    codeText:
      'Add the package, import the stylesheet once, then use components in any standalone component.',
  },

  components: {
    title: 'Components',
    description:
      'Browse Needless UI components for Angular: accessible buttons, dialogs and menus with live examples, API reference and keyboard support.',
    intro:
      'Every component is built on native elements and documented with live examples, its API and its keyboard behavior.',
    tabsLabel: 'Documentation sections',
    tabs: { overview: 'Overview', api: 'API', accessibility: 'Accessibility' },
    sidenavLabel: 'Components',
    onThisPage: 'On this page',
    example: {
      showCode: 'Show code',
      hideCode: 'Hide code',
      copy: 'Copy',
      copied: 'Copied',
      files: 'Source files',
    },
    api: {
      import: 'Import',
      selector: 'Selector',
      exportAs: 'Exported as',
      members: 'Properties',
      name: 'Name',
      type: 'Type',
      default: 'Default',
      description: 'Description',
      kinds: {
        input: 'Input',
        model: 'Two-way',
        output: 'Output',
        method: 'Method',
        property: 'Property',
      },
      texts: 'Every text it shows or announces is an input too, so you can translate it:',
      customization: {
        note: 'Customization inputs you leave unset follow the nearest <code>data-nui-*</code> attribute. See the <a href="/guides/customization">customization guide</a>.',
        members: {
          motion:
            'The spring it moves with: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> or <code>none</code>.',
          spring:
            'Any spring, as <code>{ stiffness, damping, mass }</code>, compiled to CSS at runtime. It overrides <code>motion</code>.',
          press:
            'What it does while held down: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> or <code>none</code>.',
          enter:
            'How it arrives: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> or <code>none</code>.',
          corners:
            'The shape of its corners: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> or <code>square</code>.',
          radius:
            'How big its corners are: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> or <code>full</code>.',
          density:
            'How much room it takes: <code>compact</code>, <code>regular</code> or <code>roomy</code>.',
        },
      },
    },
    a11y: {
      keyboard: 'Keyboard interaction',
      key: 'Key',
      action: 'Action',
      notes: 'Accessibility notes',
    },
    titles: {
      api: (name) => `${name} API`,
      accessibility: (name) => `${name} accessibility`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Button component for Angular',
        summary: 'Actions and links, styled on native button and anchor elements.',
        description:
          'Accessible Angular button directive for native button and anchor elements, with four variants, three tones, three sizes and link support.',
        apiDescription:
          'API reference for the Needless UI button: the nuiButton directive, its selector and its variant, tone, size and disabled inputs.',
        a11yDescription:
          'Keyboard behavior and accessibility of the Needless UI button: native semantics, focus ring, contrast, target size and disabled links.',
        overview: [
          'The <code>nuiButton</code> directive styles a native <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code>. The element keeps its semantics, keyboard behavior and form participation; the directive only reflects its inputs to the data attributes that the stylesheet targets.',
          'Use a <code>&lt;button&gt;</code> for actions and an <code>&lt;a&gt;</code> for navigation. Both look the same, and both support <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Variants',
            text: 'Four fill styles, from the most prominent to the quietest. Use one solid button per view for the primary action.',
          },
          tones: {
            title: 'Tones',
            text: 'Tones change the palette: accent for the main path, neutral for secondary actions, danger for destructive ones.',
          },
          sizes: {
            title: 'Sizes',
            text: 'Three heights: 28, 36 and 44 pixels. Even the smallest clears the WCAG 2.2 minimum target size.',
          },
          links: {
            title: 'Links and disabled buttons',
            text: 'Anchors can’t be disabled natively, so a disabled link gets <code>aria-disabled="true"</code> and its clicks are blocked, even with <code>routerLink</code>.',
          },
          presses: {
            title: 'Press effects',
            text: 'Press and hold each one. <code>press</code> sets what a button does while held down, and <code>motion</code> the spring it comes back on. <code>data-nui-press</code> on any element sets it for everything inside.',
          },
          shapes: {
            title: 'Corners, radius and density',
            text: '<code>corners</code> changes the shape of the corners, <code>radius</code> their size and <code>density</code> the room a button takes, never below the 24px target size. Browsers without <code>corner-shape</code> draw round corners.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Styles a native <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> as a button.',
            members: {
              variant:
                'Fill style: <code>solid</code>, <code>soft</code>, <code>outline</code> or <code>ghost</code>.',
              tone: 'Color palette: <code>accent</code>, <code>neutral</code> or <code>danger</code>.',
              size: 'Height, padding and font size: <code>sm</code>, <code>md</code> or <code>lg</code>.',
              disabled:
                'Disables the button. On anchors it sets <code>aria-disabled</code> and blocks activation.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Moves focus to the button or link.'],
          ['Enter', 'Activates the button, or follows the link.'],
          ['Space', 'Activates the button. On links, scrolls the page (native behavior).'],
        ],
        notes: [
          'The accessible name is the element’s text. Icon-only buttons need an <code>aria-label</code>.',
          'Text meets a 4.5:1 contrast ratio for every variant, tone and theme; the palette generator enforces it.',
          'The focus ring is a 2px outline with at least 3:1 contrast against the page in both themes.',
          'A disabled <code>&lt;button&gt;</code> leaves the tab order. A disabled link stays focusable, so screen reader users can find it, and is announced as disabled.',
          'In forced-colors mode the transparent border turns into a visible system-colored outline.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Dialog component for Angular',
        summary: 'A modal window on the native dialog element, with focus handled by the browser.',
        description:
          'Accessible Angular dialog built on the native dialog element: modal focus handling, Escape to close, return values and backdrop dismissal.',
        apiDescription:
          'API reference for the Needless UI dialog: nuiDialog with two-way open binding, sizes, return values, and its title, description and close parts.',
        a11yDescription:
          'Keyboard behavior and accessibility of the Needless UI dialog: modal focus, Escape, focus restoration and labelled content.',
        overview: [
          'The <code>nuiDialog</code> directive turns a native <code>&lt;dialog&gt;</code> into a Needless UI dialog. The browser provides the modal behavior: the page behind becomes inert, focus stays inside, Escape closes it and focus returns to the opener.',
          'Bind <code>[(open)]</code> to a signal, and give close buttons a value with <code>nuiDialogClose="…"</code> to learn how the dialog was closed.',
        ],
        examples: {
          confirm: {
            title: 'Confirmation',
            text: 'A destructive confirmation. The safe choice has <code>autofocus</code>, and the chosen value arrives through <code>(closed)</code>.',
          },
          form: {
            title: 'Form in a dialog',
            text: 'Dialogs can hold any content. Here the first field receives focus when the dialog opens.',
          },
          dismissible: {
            title: 'Not dismissible',
            text: 'With <code>[dismissible]="false"</code>, Escape and backdrop clicks are ignored, so the user has to pick an option.',
          },
          entrances: {
            title: 'Entrances',
            text: 'Each button opens the same dialog with another <code>enter</code> preset, on the <code>bouncy</code> spring. However it arrives, it leaves with a quick fade.',
          },
        },
        api: {
          NuiDialog: {
            summary: 'Turns a native <code>&lt;dialog&gt;</code> into a Needless UI dialog.',
            members: {
              open: 'Whether the dialog is open. Bind it with <code>[(open)]</code>.',
              modal: 'Opens as a modal, with a backdrop and an inert page behind it.',
              dismissible: 'Whether Escape and backdrop clicks close the dialog.',
              size: 'Maximum width: <code>sm</code> (24rem), <code>md</code> (32rem) or <code>lg</code> (44rem).',
              closed:
                'Emits the return value each time the dialog closes. It’s empty when the dialog was dismissed.',
              close: 'Closes the dialog with an optional return value.',
            },
          },
          NuiDialogTitle: {
            summary:
              'The dialog’s title. It gets an id and becomes the dialog’s <code>aria-labelledby</code>.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'A short description, referenced by the dialog’s <code>aria-describedby</code>.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'A row of buttons at the bottom of the dialog, aligned to the end.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Closes the surrounding dialog when clicked.',
            members: {
              nuiDialogClose: 'The value the dialog closes with, emitted by <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Moves focus to the next element inside the dialog.'],
          ['Shift + Tab', 'Moves focus to the previous element inside the dialog.'],
          ['Escape', 'Closes the dialog, unless it isn’t dismissible.'],
        ],
        notes: [
          'Opening with <code>showModal()</code> gives the dialog <code>role="dialog"</code> and modal semantics, and makes the rest of the page inert.',
          'The title and description are linked by generated ids, so screen readers announce both when the dialog opens.',
          'Initial focus goes to the element with <code>autofocus</code>, or to the first focusable element. For destructive confirmations, put <code>autofocus</code> on the safe choice.',
          'When the dialog closes, focus returns to the element that opened it.',
          'Browsers may still close a non-dismissible dialog after repeated Escape presses without user interaction, so always offer an explicit way out.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Menu component for Angular',
        summary:
          'A popup list of actions, with submenus, checkable items and full keyboard support.',
        description:
          'Accessible Angular menu built on Angular Aria: keyboard navigation, typeahead, submenus, checkbox and radio items, and viewport-aware positioning.',
        apiDescription:
          'API reference for the Needless UI menu: nuiMenuTrigger, nuiMenu and nuiMenuItem, with values, tones, submenus and checked state.',
        a11yDescription:
          'Keyboard interaction and accessibility of the Needless UI menu: arrow keys, typeahead, submenus, Escape and focus return.',
        overview: [
          'A menu shows a list of actions when its trigger is activated. Behavior comes from Angular Aria’s menu pattern; Needless UI adds the styles, renders the menu as a popover above the page and keeps it inside the viewport.',
          'Pass the menu’s <code>ngMenu</code> reference to <code>[nuiMenuTrigger]</code>, give every item a unique <code>value</code>, and react to <code>(selected)</code> on each item or <code>(itemSelected)</code> on the menu.',
        ],
        examples: {
          actions: {
            title: 'Actions',
            text: 'A menu of actions with shortcut hints, a separator and a destructive item.',
          },
          submenu: {
            title: 'Submenus',
            text: 'Link an item to a nested <code>nuiMenu</code> with <code>[submenu]</code>. It opens on hover or with the right arrow key.',
          },
          checkable: {
            title: 'Checkbox and radio items',
            text: 'Set <code>role</code> and bind <code>[checked]</code>. The menu shows the indicator and announces the state.',
          },
          entrances: {
            title: 'Entrances and springs',
            text: 'Each menu pairs an <code>enter</code> preset with a <code>motion</code> spring and grows out of the side it opens on. Submenus inherit both.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Opens a menu. Usually applied to a <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'The menu to open: the <code>ngMenu</code> reference of a <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'A menu of items, rendered as a popover next to its trigger. Its <code>ngMenu</code> export is the Angular Aria menu that triggers and submenus take.',
            members: {
              wrap: 'Whether arrow keys wrap from the last item to the first.',
              typeaheadDelay: 'Milliseconds before the typeahead search resets.',
              disabled: 'Disables the whole menu.',
              itemSelected:
                'Emits the value of the chosen item. On the root menu it fires for submenu items too.',
            },
          },
          NuiMenuItem: {
            summary: 'An item in a <code>nuiMenu</code>.',
            members: {
              value:
                'Identifies the item. Must be unique across the whole menu, submenus included.',
              disabled:
                'Disables the item. It stays reachable with the arrow keys but can’t be chosen.',
              submenu: 'A nested <code>nuiMenu</code> that this item opens.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> or <code>menuitemradio</code>.',
              checked: 'Checked state of a checkbox or radio item.',
              tone: '<code>danger</code> for destructive actions.',
              searchTerm: 'Text matched by typeahead. Defaults to the item’s label.',
              selected: 'Emits the item’s value when it’s chosen with the mouse or the keyboard.',
            },
          },
          NuiMenuSeparator: { summary: 'A line between groups of items.', members: {} },
          NuiMenuShortcut: {
            summary: 'A keyboard shortcut hint, aligned to the end of an item.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter or Space',
            'On the trigger: opens the menu on its first item. On an item: chooses it, or opens its submenu.',
          ],
          [
            'Down arrow',
            'On the trigger: opens the menu on its first item. In the menu: moves to the next item.',
          ],
          [
            'Up arrow',
            'On the trigger: opens the menu on its last item. In the menu: moves to the previous item.',
          ],
          ['Home and End', 'Moves to the first or last item.'],
          [
            'Right arrow',
            'Opens a submenu and moves to its first item (left arrow in right-to-left text).',
          ],
          [
            'Left arrow',
            'Closes a submenu and returns to its parent item (right arrow in right-to-left text).',
          ],
          ['Escape', 'Closes the menu and returns focus to the trigger.'],
          ['Letters', 'Moves to the next item whose label starts with the typed text.'],
        ],
        notes: [
          'The trigger gets <code>aria-haspopup</code>, <code>aria-expanded</code> and <code>aria-controls</code>; the menu and its items get their ARIA roles from Angular Aria.',
          'The highlighted item uses a solid fill with at least 4.5:1 text contrast, and it doubles as the focus indicator. In forced-colors mode it gets a system highlight outline.',
          'Checkable items announce their state through <code>aria-checked</code>.',
          'Choosing an item closes the menu and returns focus to the trigger. Moving focus outside the trigger and the menu also closes it.',
          'Items are at least 28 pixels tall, above the WCAG 2.2 minimum target size.',
        ],
      },

      avatar: {
        name: 'Avatar',
        title: 'Avatar component for Angular',
        summary: 'A person’s picture, or their initials on a color that is always theirs.',
        description:
          'Angular avatar with initials that fall back from a picture, a stable color per name, status dots and groups, all readable in every theme.',
        apiDescription:
          'API reference for the Needless UI avatar: nuiAvatar with name, picture, size, shape and status, plus nuiAvatarGroup.',
        a11yDescription:
          'Accessibility of the Needless UI avatar: image role and name, decorative avatars, and initials that keep a 4.5:1 contrast.',
        overview: [
          'The <code>nuiAvatar</code> component shows a picture, or the person’s initials when there is none or it fails to load. The initials sit on a color computed from the name, so the same person keeps the same color everywhere.',
          'Every hue is capped to a lightness and chroma that keep white initials above a 4.5:1 contrast ratio, whatever the name and the theme.',
        ],
        examples: {
          people: {
            title: 'Initials, pictures and status',
            text: 'Without a <code>src</code>, the initials and color come from <code>name</code>. <code>status</code> adds a presence dot.',
          },
          group: {
            title: 'Groups, sizes and shapes',
            text: '<code>nuiAvatarGroup</code> overlaps a row of avatars. <code>size</code> takes <code>sm</code>, <code>md</code> or <code>lg</code>, and <code>shape="square"</code> suits teams and apps.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'A picture or initials, named after the person.',
            members: {
              name: 'The person’s name. The accessible name, the initials and the color come from it.',
              src: 'Picture URL. If it fails to load, the initials show instead.',
              size: 'Size: <code>sm</code>, <code>md</code> or <code>lg</code>.',
              shape: '<code>circle</code> or <code>square</code>.',
              status:
                'A presence dot: <code>online</code>, <code>away</code>, <code>busy</code> or <code>offline</code>.',
              label:
                'An accessible name that says more than the name, such as “Ada Lovelace, online”.',
              decorative:
                'Hides the avatar from assistive technology, for avatars next to the visible name.',
            },
          },
          NuiAvatarGroup: {
            summary: 'A row of overlapping avatars. Name it with <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'An avatar is an image (<code>role="img"</code>) named after the person. Next to their visible name, set <code>decorative</code> so screen readers don’t hear it twice.',
          'The status dot is visual only. When it matters, put it in <code>label</code>.',
          'Initials keep at least a 4.5:1 contrast ratio on every generated color.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Breadcrumbs component for Angular',
        summary: 'The trail of pages that leads to the current one.',
        description:
          'Accessible Angular breadcrumbs on a native nav and list, with CSS separators that mirror in right-to-left text and trails that scroll when long.',
        apiDescription:
          'API reference for the Needless UI breadcrumbs: the nuiBreadcrumbs directive and its landmark label.',
        a11yDescription:
          'Accessibility of the Needless UI breadcrumbs: navigation landmark, list semantics, the current page and target sizes.',
        overview: [
          'Breadcrumbs show where a page sits in the site. The <code>nuiBreadcrumbs</code> directive styles a native <code>&lt;nav&gt;</code> and its list; the last item is the current page, marked with <code>aria-current="page"</code>.',
          'A trail longer than its container scrolls sideways instead of wrapping. It starts scrolled to the end, and the ends fade where there is more to see.',
        ],
        examples: {
          trail: {
            title: 'A trail',
            text: 'Links for the pages above, then the current page as plain text with <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Long trails',
            text: 'In a narrow container the trail scrolls, starting with the current page in view.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Styles a <code>&lt;nav&gt;</code> and its list as breadcrumbs.',
            members: { label: 'Accessible name of the navigation landmark.' },
          },
        },
        keyboard: [['Tab', 'Moves to the next link in the trail.']],
        notes: [
          'It’s a navigation landmark with a plain list, so screen readers announce how many pages the trail has.',
          'The separators are drawn with CSS, so they aren’t read aloud, and they mirror in right-to-left text.',
          'Every link is at least 24px tall.',
        ],
      },

      empty: {
        name: 'Empty state',
        title: 'Empty state component for Angular',
        summary: 'What to show when there is nothing to show, and what to do about it.',
        description:
          'Angular empty state with a picture, a title, a short explanation and actions, plus four built-in illustrations that float gently.',
        apiDescription:
          'API reference for the Needless UI empty state: nuiEmpty and its media, title, description and actions parts.',
        a11yDescription:
          'Accessibility of the Needless UI empty state: decorative pictures, meaningful headings and reduced motion.',
        overview: [
          'An empty state replaces a list, table or page that has nothing in it yet. It explains why, and offers the next step.',
          'The media part takes your own picture, or draws a built-in one: <code>search</code>, <code>inbox</code>, <code>files</code> or <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'No results',
            text: 'A title that says what happened, a line of help, and actions for the way out.',
          },
          pictures: {
            title: 'Built-in pictures',
            text: 'Set <code>illustration</code> on <code>nuiEmptyMedia</code>. The pictures follow the theme and float unless motion is reduced.',
          },
        },
        api: {
          NuiEmpty: { summary: 'The container: a centered column.', members: {} },
          NuiEmptyMedia: {
            summary: 'The picture, hidden from assistive technology.',
            members: {
              illustration:
                'A built-in picture: <code>search</code>, <code>inbox</code>, <code>files</code> or <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'The title. Use the heading level that fits the page.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'A line of explanation.', members: {} },
          NuiEmptyActions: { summary: 'A row of buttons.', members: {} },
        },
        keyboard: [],
        notes: [
          'The picture is decorative (<code>aria-hidden</code>): the title and description carry the message.',
          'Use a heading for the title, at the level that fits the page outline.',
          'The built-in pictures stop floating when the user prefers reduced motion.',
        ],
      },

      'number-field': {
        name: 'Number field',
        title: 'Number field component for Angular',
        summary: 'A number input with steppers, formatted for every locale.',
        description:
          'Accessible Angular number field: a spinbutton with step buttons, keyboard steps, min and max, and locale formats for currency, percent and units.',
        apiDescription:
          'API reference for the Needless UI number field: nuiNumberField, nuiNumberInput with min, max, step and format, and nuiNumberStep.',
        a11yDescription:
          'Keyboard interaction and accessibility of the Needless UI number field: spinbutton role, arrow and page keys, and step buttons.',
        overview: [
          'The number field is a text input that holds a number. It shows the number formatted for the locale, reads typed text back in the same format, and on blur snaps it to <code>step</code> between <code>min</code> and <code>max</code>.',
          'It reads native digits and separators too: Arabic-Indic, Persian and Devanagari numbers, spaces and dots as group separators, and every minus sign. Holding a step button repeats, faster and faster.',
        ],
        examples: {
          guests: {
            title: 'Steppers',
            text: 'Buttons on each side, turned off at <code>min</code> and <code>max</code>. The arrow keys step too.',
          },
          formats: {
            title: 'Currency and percent',
            text: 'Pass <code>Intl.NumberFormat</code> options to <code>format</code> and a <code>locale</code>. The value stays a plain number.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Groups the input with its step buttons.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'A text input that holds a number, as an ARIA spinbutton.',
            members: {
              value: 'The number, or <code>null</code> when empty. Also works with forms.',
              min: 'Smallest allowed value.',
              max: 'Largest allowed value.',
              step: 'How much one step changes the value. The value snaps to it on blur.',
              format:
                "<code>Intl.NumberFormat</code> options, such as <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Locale for formatting and reading numbers.',
              disabled: 'Disables the input and its buttons.',
              stepBy: 'Steps up (positive) or down (negative) by a number of steps.',
            },
          },
          NuiNumberStep: {
            summary: 'A step button. Holding it repeats.',
            members: {
              nuiNumberStep: '<code>1</code> steps up and <code>-1</code> steps down.',
              label: 'Accessible name. Defaults to “Increase” or “Decrease”.',
            },
          },
        },
        keyboard: [
          ['Up and down arrows', 'Steps the value up or down.'],
          ['Page Up and Page Down', 'Steps ten times.'],
          ['Home and End', 'Goes to the minimum or maximum.'],
          ['Enter', 'Commits what was typed.'],
        ],
        notes: [
          'The input is a <code>spinbutton</code> with <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, and the formatted value as <code>aria-valuetext</code>.',
          'The step buttons stay out of the tab order, since the keys do the same job, but they are named and linked to the input with <code>aria-controls</code>.',
          'Label the input with <code>aria-label</code> or a <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'OTP input',
        title: 'OTP and verification code input for Angular',
        summary: 'Verification codes in separate slots, on one real input.',
        description:
          'Accessible Angular OTP input: one native field under the slots, SMS autofill, WebOTP, paste cleanup, groups, masking and error shake.',
        apiDescription:
          'API reference for the Needless UI OTP input: nuiOtp with length, pattern, groups and masking, and nuiOtpInput with WebOTP.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI OTP input: one labelled text field, a visible focus ring and autofill.',
        overview: [
          'The OTP input looks like a row of slots, but underneath it is one native <code>&lt;input&gt;</code>. SMS autofill (<code>autocomplete="one-time-code"</code>), paste, password managers, forms and screen readers all see an ordinary text field.',
          'Pasted codes are cleaned up, so “123-456” and “123 456” both work, and characters the pattern doesn’t allow are refused. On Android, <code>webOtp</code> fills the code from the SMS as it arrives.',
        ],
        examples: {
          verify: {
            title: 'Verification',
            text: '<code>(completed)</code> fires when the last slot fills. Set <code>aria-invalid</code> on the input to reject a code: the slots turn red and shake.',
          },
          letters: {
            title: 'Letters, groups and masking',
            text: '<code>pattern="alphanumeric"</code> takes letters too, <code>[groups]</code> adds separators, and <code>masked</code> draws dots.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Draws the slots and wraps the input.',
            members: {
              length: 'Number of characters.',
              pattern: '<code>digits</code>, or <code>alphanumeric</code> for letters and digits.',
              groups:
                'Group sizes, drawn with a separator between them, such as <code>[3, 3]</code>.',
              masked: 'Draws dots instead of the characters.',
              completed: 'Emits the code each time the last slot is filled.',
            },
          },
          NuiOtpInput: {
            summary: 'The real input. It gets the attributes a one-time code needs.',
            members: {
              webOtp:
                'Fills the code from an incoming SMS through the WebOTP API, where supported.',
            },
          },
        },
        keyboard: [
          ['Digits or letters', 'Fill the current slot and move to the next.'],
          ['Backspace', 'Deletes the character before the caret.'],
          [
            'Left and right arrows',
            'Move one slot; a filled slot is selected, so typing replaces it.',
          ],
          ['Paste', 'Fills the slots from a copied code.'],
        ],
        notes: [
          'Screen readers meet one text field. Label it with <code>aria-label</code> or a <code>&lt;label&gt;</code>.',
          'The slots are hidden from assistive technology; the slot being edited shows the focus ring.',
          'Under reduced motion the caret doesn’t blink and the slots don’t hop or shake.',
        ],
      },

      rating: {
        name: 'Rating',
        title: 'Star rating component for Angular',
        summary: 'Stars to rate with, on real radio buttons.',
        description:
          'Accessible Angular star rating on native radio buttons: keyboard and forms support, hover preview, clearing, and fractional read-only display.',
        apiDescription:
          'API reference for the Needless UI rating: nuiRating with value, max, read-only and clearable modes, and translatable labels.',
        a11yDescription:
          'Keyboard interaction and accessibility of the Needless UI rating: a named radio group, labelled stars and the read-only image.',
        overview: [
          'The rating is a group of native radio buttons drawn as stars. Arrow keys, forms and screen readers work as they do for any radio group; CSS fills the stars and previews a new rating under the pointer.',
          'Read-only, it shows any fraction, such as an average of 4.3.',
        ],
        examples: {
          pick: {
            title: 'Rating something',
            text: 'Bind <code>[(value)]</code> or a form. With <code>clearable</code>, choosing the same star again clears the rating.',
          },
          average: {
            title: 'Showing an average',
            text: '<code>readonly</code> fills the stars to any fraction and names the picture “Rated 4.3 out of 5”.',
          },
        },
        api: {
          NuiRating: {
            summary: 'A radio group of stars, or a read-only picture of a rating.',
            members: {
              value: 'The rating, or <code>null</code>. Also works with forms.',
              max: 'Number of stars.',
              readonly: 'Shows the value, to any fraction, instead of asking for one.',
              disabled: 'Disables every star.',
              clearable: 'Choosing the current star again clears the rating.',
              name: 'Name shared by the radio buttons. Generated by default.',
              starLabel: 'Accessible name of each star, as a function of its value.',
              readonlyLabel: 'Accessible name in read-only mode.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Moves into the group, to the checked star.'],
          ['Arrow keys', 'Change the rating.'],
          ['Space', 'Checks the focused star.'],
        ],
        notes: [
          'Each star is a native radio named “3 stars”. Name the group with <code>aria-label</code>.',
          'Read-only, the rating is an image (<code>role="img"</code>) named “Rated 4.3 out of 5”.',
          'Stars are drawn with CSS masks, so they follow forced colors.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Skeleton loader component for Angular',
        summary: 'Placeholders that hold the layout while content loads.',
        description:
          'Angular skeleton loaders for text, circles and blocks, with one shimmer that sweeps across the whole page and none under reduced motion.',
        apiDescription:
          'API reference for the Needless UI skeleton: the nuiSkeleton directive and its text, circle and block shapes.',
        a11yDescription:
          'Accessibility of the Needless UI skeleton: hidden placeholders, aria-busy regions, reduced motion and forced colors.',
        overview: [
          'Skeletons keep the shape of content that is still loading, so the page doesn’t jump when it arrives. Size them with CSS.',
          'The shimmer is fixed to the viewport: one highlight sweeps across every skeleton on the page at once, whatever its size or position.',
        ],
        examples: {
          card: {
            title: 'Loading a card',
            text: 'Lines, a circle and a block standing in for a profile. The card is <code>aria-busy</code> while it loads.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'A placeholder, hidden from assistive technology.',
            members: {
              shape: '<code>text</code> (a line), <code>circle</code> or <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeletons are hidden from screen readers. Set <code>aria-busy="true"</code> on the region that is loading, and remove it when the content arrives.',
          'There is no shimmer when the user prefers reduced motion.',
          'In forced-colors mode each skeleton gets an outline.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Toast notifications for Angular',
        summary: 'Short messages that stack, swipe away and never steal focus.',
        description:
          'Accessible Angular toasts: a stack in the top layer, promise toasts, undo actions, swipe to dismiss, and timers that pause on hover and focus.',
        apiDescription:
          'API reference for the Needless UI toasts: the NuiToaster service, its options and promise toasts, and the nui-toaster region.',
        a11yDescription:
          'Keyboard interaction and accessibility of the Needless UI toasts: announcements, the Alt+T hotkey, Escape and pausing timers.',
        overview: [
          'Toasts confirm what just happened, or offer an action such as Undo, without interrupting. Put one <code>&lt;nui-toaster&gt;</code> in the app shell, then call <code>NuiToaster</code> from anywhere.',
          'They pile up behind the newest one and fan out on hover or focus, all on the motion spring. A sideways swipe throws one away. Timers pause while the stack is hovered or focused, and while the page is in the background.',
        ],
        examples: {
          tones: {
            title: 'Tones',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> and <code>danger()</code>. Danger toasts stay longer and are announced assertively.',
          },
          actions: {
            title: 'Actions and promises',
            text: 'An <code>action</code> adds a button such as Undo. <code>promise()</code> shows a spinner, then turns into the result.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'The service that shows toasts. Inject it anywhere.',
            members: {
              toasts: 'Every toast on screen, newest first.',
              show: 'Shows a toast. Pass a title, or options with a description, tone, duration, action or id.',
              success: 'Shows a success toast.',
              warning: 'Shows a warning toast.',
              danger: 'Shows a danger toast. It stays 8 seconds and is announced assertively.',
              promise:
                'Shows a loading toast until the promise settles, then its success or danger message.',
              dismiss: 'Dismisses one toast, or all of them.',
            },
          },
          NuiToasterRegion: {
            summary: 'The region where toasts appear. Place it once, in the app shell.',
            members: {
              position: 'Corner or edge of the viewport. Start and end follow the text direction.',
              expanded: 'Keeps the stack fanned out.',
              label: 'Accessible name of the region. Say how to reach it.',
              closeLabel: 'Accessible name of the close buttons.',
              hotkey:
                'The key, as a <code>KeyboardEvent.code</code>, that moves focus to the newest toast with Alt.',
            },
          },
        },
        keyboard: [
          ['Alt+T', 'Moves focus to the newest toast.'],
          ['Tab', 'Moves through the toasts, their actions and close buttons.'],
          ['Escape', 'Dismisses the focused toast.'],
        ],
        notes: [
          'Every toast is announced when it appears: politely, or assertively for danger. Toasts never take focus.',
          'Timers pause while the stack is hovered or focused and while the page is hidden, and toasts waiting on a promise never time out.',
          'Anything the user must act on should also live outside the toast.',
          'Under reduced motion, toasts don’t animate or swipe, and the timer line is hidden.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox and autocomplete for Angular',
        summary: 'A text field that suggests options as you type.',
        description:
          'Accessible Angular combobox: fuzzy search with highlights, multiple values as chips, new values from typed text, and results from a server.',
        apiDescription:
          'API reference for the Needless UI combobox: nui-combobox with value, values, multiple, create, filtering, loading and clearable, and custom rows.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI combobox: an editable combobox with list autocomplete, active descendant, chips and IME input.',
        overview: [
          'The combobox is a text field with a list of suggestions. Search is fuzzy and ignores accents: the best matches come first and the matched letters are marked. It takes the same <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> objects as the select.',
          'With <code>multiple</code>, chosen options become chips before the text, and <code>create</code> turns typed text into a new value. For results from a server, turn <code>filtering</code> off, search on <code>(queryChange)</code> and set <code>loading</code> while you wait.',
        ],
        examples: {
          country: {
            title: 'Search',
            text: 'Matched letters don’t need to be next to each other, and <code>keywords</code> count too. <code>clearable</code> adds a clear button and lets Escape clear the value.',
          },
          tags: {
            title: 'Chips and new values',
            text: '<code>multiple</code> shows chips and binds <code>[(values)]</code>. When the text isn’t an option yet, <code>create</code> offers to add it.',
          },
          people: {
            title: 'Server results',
            text: 'The list shows what the server sent, unfiltered, with a loading row while it waits. Chosen labels are kept when new results arrive.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'A text field that suggests options as you type.',
            members: {
              options:
                'The options, as <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> objects.',
              value: 'The chosen value, or <code>null</code>. Also works with forms.',
              values: 'The chosen values, with <code>multiple</code>.',
              multiple: 'Lets several options be chosen, shown as chips.',
              create:
                'Makes a value from typed text. The list then offers to add text that isn’t an option.',
              filtering: 'Filters the options as you type. Turn it off when a server filters them.',
              loading: 'Shows a loading row while results are on their way.',
              clearable: 'Adds a button that clears the value, and lets Escape clear it.',
              placeholder: 'Text shown while the field is empty.',
              label: 'Accessible name, when no <code>&lt;label&gt;</code> names the field.',
              inputId: 'Id of the text field, for <code>&lt;label for&gt;</code>.',
              disabled: 'Disables the field.',
              compareWith:
                'Tells whether two values are the same option, for values that are objects.',
              displayWith:
                'Text for a value that isn’t among the options, such as one set before they load.',
              virtual:
                'Renders only the rows in view: always, never, or <code>auto</code> past 200 rows.',
              queryChange: 'Emits the text as it’s typed, for a server search.',
              openChange: 'Emits when the list opens or closes.',
              show: 'Opens the list.',
              hide: 'Closes the list.',
              clear: 'Clears the value and the text.',
              focus: 'Focuses the text field.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Put it on an <code>ng-template</code> inside the component to draw each row yourself. The context holds the option and its row.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Draws an option’s label with the matched letters marked, its description and its path, for your own rows.',
            members: { nuiOptionText: 'The row, from the template context.' },
          },
        },
        keyboard: [
          ['Down and up arrows', 'Open the list, then move through the options.'],
          ['Page Down and Page Up', 'Move ten options.'],
          ['Enter', 'Choose the active option.'],
          ['Alt + down or up arrow', 'Open or close the list.'],
          ['Escape', 'Close the list; then clear the text, or the value when it’s clearable.'],
          ['Backspace', 'In an empty field, remove the last chip.'],
          [
            'Left arrow',
            'From the start of the text (right arrow in right-to-left text), move into the chips. There, Backspace or Delete removes a chip.',
          ],
        ],
        notes: [
          'The text field is a <code>combobox</code> with <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> and <code>aria-controls</code>. Focus stays in it, and <code>aria-activedescendant</code> points at the active option.',
          'Chips are a named list, and each remove button is named after its chip, such as “Remove Italy”.',
          '“No matches” and the loading row are status messages, so screen readers announce them.',
          'Keys that confirm an input method composition, as for Chinese or Japanese, are left to the input method.',
        ],
      },
      command: {
        name: 'Command palette',
        title: 'Command palette component for Angular',
        summary: 'Every command in your app, a keystroke away.',
        description:
          'Accessible Angular command palette: ⌘K from anywhere, fuzzy search into nested pages, groups, and shortcuts shown the way each platform writes them.',
        apiDescription:
          'API reference for the Needless UI command palette: nui-command-palette with commands, hotkey, bindShortcuts and loop, and the NuiCommand shape.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI command palette: a modal dialog with a search combobox, active descendant and page navigation.',
        overview: [
          'The command palette is a search field over the commands of your app, in a modal dialog. ⌘K opens it from anywhere (Ctrl+K on Windows and Linux). Choose a command and the palette closes, then runs it.',
          'Commands can have a group, a description, keywords and a shortcut, shown with each platform’s symbols. A command with <code>children</code> opens a page of more commands, and search reaches into pages from the top.',
        ],
        examples: {
          palette: {
            title: 'Commands and pages',
            text: 'Groups, shortcuts, a disabled command and two pages. <code>(run)</code> tells you what ran; a command’s own <code>run</code> works too.',
          },
          people: {
            title: 'Custom rows',
            text: 'An <code>nuiOptionTemplate</code> draws each row, and <code>nuiOptionText</code> keeps the marked matches. <code>[hotkey]="null"</code> leaves ⌘K to the palette above.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'A modal dialog with a search field over your commands.',
            members: {
              commands: 'The commands, as <code>NuiCommand</code> objects.',
              open: 'Whether the palette is open.',
              hotkey:
                'The shortcut that opens and closes it from anywhere, or <code>null</code> for none. <code>mod</code> is ⌘ on Apple devices and Ctrl elsewhere.',
              bindShortcuts: 'Also runs commands by their own shortcuts, anywhere on the page.',
              loop: 'Down on the last command goes to the first, and up on the first to the last.',
              filtering: 'Filters as you type. Turn it off when a server filters the commands.',
              loading: 'Shows a loading row while results are on their way.',
              hints: 'Shows the keys to use at the bottom.',
              virtual:
                'Renders only the rows in view: always, never, or <code>auto</code> past 200 rows.',
              label: 'Accessible name of the dialog and its search field.',
              placeholder: 'Text shown in the empty search field.',
              run: 'Emits each command that runs.',
              queryChange: 'Emits the text as it’s typed, for a server search.',
              show: 'Opens the palette.',
              hide: 'Closes the palette.',
              toggle: 'Opens the palette, or closes it.',
              back: 'Goes back to the page before.',
            },
          },
          NuiCommand: {
            summary: 'One command, or a page of them.',
            members: {
              label: 'The text shown and searched.',
              description: 'Secondary text under the label.',
              group: 'Commands with the same group are listed under that heading.',
              keywords: 'More words the search matches, such as synonyms.',
              shortcut: 'Keys shown with it, such as <code>mod+shift+p</code>.',
              disabled: 'Shown, but it can’t run.',
              children: 'Commands one level down: choosing this one opens them as a page.',
              run: 'Runs when it’s chosen, once the palette has closed.',
              id: 'For your own use, such as telling commands apart in <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K or Ctrl+K', 'Open or close the palette.'],
          ['Down and up arrows', 'Move through the commands, around the ends.'],
          ['Page Down and Page Up', 'Move ten commands.'],
          ['Enter', 'Run the active command, or open its page.'],
          ['Escape', 'Go back a page; at the top, close the palette.'],
          ['Backspace', 'In an empty field on a page, go back.'],
        ],
        notes: [
          'It is a native modal <code>&lt;dialog&gt;</code>: the page behind is inert, focus stays inside, and closing returns focus where it was.',
          'The search field is a <code>combobox</code> that points at the active command with <code>aria-activedescendant</code>. On a page, it takes the page’s name.',
          'Shortcut keys are text in each option, so screen readers read them. The key hints at the bottom are hidden from assistive technology.',
          'Shortcuts without Ctrl, Alt or ⌘ don’t run while you type in a field.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Popover and hovercard components for Angular',
        summary: 'Floating panels next to a button, and rich tooltips on hover.',
        description:
          'Accessible Angular popover and hovercard on the native popover API: placement that flips and follows, arrows, light dismiss and hover delays.',
        apiDescription:
          'API reference for the Needless UI popover: nuiPopover and nuiHovercard with side, align, offset and arrow, and their trigger directives.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI popover and hovercard: dialog and tooltip roles, focus return, Escape and WCAG 1.4.13.',
        overview: [
          'A popover is a small panel that opens next to a button, for things you interact with: filters, a short form, a color picker. It is a native <code>popover="auto"</code>, so the browser closes it on Escape or a click outside, returns focus, and puts it right after its trigger in the tab order.',
          'A hovercard is a rich tooltip. It opens after a short hover, or at once on keyboard focus, and describes its trigger. It stays open while the pointer moves onto it, so its text can be read and selected.',
          'Both flip to the other side when there is no room, stay on screen, and follow their trigger as the page scrolls.',
        ],
        examples: {
          filters: {
            title: 'Filters',
            text: 'A popover with a form inside. <code>arrow</code> points it at its trigger, and <code>hide()</code> closes it from code.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Hover a name, or reach it with Tab. The card describes the link, so screen readers read it after the name.',
          },
          sides: {
            title: 'Sides and entrances',
            text: '<code>side</code> and <code>align</code> set where it opens; <code>start</code> and <code>end</code> follow the writing direction. <code>enter</code> and <code>motion</code> set how it arrives.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'A native popover placed next to the element that opened it.',
            members: {
              side: 'The side of the trigger it opens on. It flips when there is no room.',
              align: 'How it lines up with the trigger along that side.',
              offset: 'Gap between the trigger and the panel, in pixels.',
              arrow: 'Shows an arrow that points at the trigger.',
              openChange: 'Emits when it opens or closes.',
              show: 'Opens it next to any element.',
              hide: 'Closes it.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'A button that opens and closes a popover, with the native <code>popovertarget</code>.',
            members: { nuiPopoverTrigger: 'The popover to open.' },
          },
          NuiHovercard: {
            summary: 'A rich tooltip that describes its trigger.',
            members: {
              side: 'The side of the trigger it opens on. It flips when there is no room.',
              align: 'How it lines up with the trigger along that side.',
              offset: 'Gap between the trigger and the card, in pixels.',
              arrow: 'Shows an arrow that points at the trigger.',
              openDelay: 'Milliseconds of hover before it opens. Keyboard focus opens it at once.',
              closeDelay: 'Milliseconds before it closes, once the pointer has left.',
              openChange: 'Emits when it opens or closes.',
              show: 'Opens it next to any element.',
              hide: 'Closes it.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Shows a hovercard on hover and on keyboard focus, and makes it this element’s description.',
            members: { nuiHovercardTrigger: 'The hovercard to show.' },
          },
        },
        keyboard: [
          ['Enter or Space on the trigger', 'Opens or closes the popover.'],
          ['Tab', 'Moves into an open popover, which comes right after its trigger.'],
          [
            'Escape',
            'Closes the popover and returns focus to its trigger, or hides the hovercard.',
          ],
        ],
        notes: [
          'The popover is a non-modal <code>dialog</code>: name it with <code>aria-label</code> or <code>aria-labelledby</code>. Its trigger gets <code>aria-haspopup</code> and the browser’s <code>aria-expanded</code>.',
          'The hovercard is a <code>tooltip</code> and its trigger’s <code>aria-describedby</code>, so its text is read with the trigger. Keep controls out of it; use a popover for those.',
          'The hovercard meets WCAG 1.4.13: Escape hides it without moving focus, the pointer can move onto it, and it stays while hovered or focused.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Select component for Angular',
        summary: 'Pick one option or many, from a short list or a huge one.',
        description:
          'Accessible Angular select: single or multiple, groups, trees, type to jump, select all, and virtual scrolling for lists of any length.',
        apiDescription:
          'API reference for the Needless UI select: nui-select with value, values, multiple, selectAll and virtual, the NuiOption shape and custom rows.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI select: a select-only combobox with a listbox or tree, active descendant, typeahead and tree keys.',
        overview: [
          'The select is a button that opens a list of options. Give it <code>options</code>, an array of <code>NuiOption</code>, and bind <code>[(value)]</code>, or <code>[(values)]</code> with <code>multiple</code>. It works with Signal Forms, reactive forms and <code>ngModel</code> too.',
          'Options can have a <code>group</code>, a <code>description</code> and <code>keywords</code>, and <code>children</code> make the list a tree. Past 200 rows only the rows in view are rendered, so 100,000 options open as fast as ten.',
          'To type and filter instead, use the <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Groups',
            text: 'Options with a <code>group</code> are listed under its heading. Typing a letter jumps to the next option that starts with it.',
          },
          toppings: {
            title: 'Many at once',
            text: '<code>multiple</code> keeps the list open and binds <code>[(values)]</code>. <code>selectAll</code> adds a button that picks or clears every option. Disabled options can’t be picked.',
          },
          folders: {
            title: 'Tree',
            text: 'Options with <code>children</code> make a tree. The list opens with the chosen option’s folders expanded.',
          },
          zones: {
            title: 'Long lists',
            text: 'Every time zone, by region. Past 200 rows only the rows in view are rendered, and the active option stays rendered for screen readers.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'A button that opens a list of options.',
            members: {
              options: 'The options, as <code>NuiOption</code> objects.',
              value: 'The chosen value, or <code>null</code>. Also works with forms.',
              values: 'The chosen values, with <code>multiple</code>.',
              multiple: 'Lets several options be chosen. The list stays open while you pick.',
              selectAll:
                'With <code>multiple</code>, adds a button that picks or clears every option.',
              placeholder: 'Text shown while nothing is chosen.',
              label: 'Accessible name, when no <code>&lt;label&gt;</code> names the button.',
              triggerId: 'Id of the button, for <code>&lt;label for&gt;</code>.',
              disabled: 'Disables the select.',
              compareWith:
                'Tells whether two values are the same option, for values that are objects.',
              virtual:
                'Renders only the rows in view: always, never, or <code>auto</code> past 200 rows.',
              openChange: 'Emits when the list opens or closes.',
              show: 'Opens the list.',
              hide: 'Closes the list.',
              focus: 'Focuses the button.',
            },
          },
          NuiOption: {
            summary: 'One option. The select, the combobox and the command palette all take these.',
            members: {
              value: 'What choosing it sets. Any type.',
              label: 'The text shown and searched.',
              description: 'Secondary text under the label.',
              group: 'Options with the same group are listed under that heading, in order.',
              keywords: 'More words the search matches, such as synonyms or codes.',
              disabled: 'Shown, but it can’t be chosen.',
              children: 'Options one level down, which make the list a tree.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Put it on an <code>ng-template</code> inside the component to draw each row yourself. The context holds the option and its row.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Draws an option’s label with the matched letters marked, its description and its path, for your own rows.',
            members: { nuiOptionText: 'The row, from the template context.' },
          },
        },
        keyboard: [
          ['Down and up arrows', 'Open the list, then move through the options.'],
          ['Home and End', 'Go to the first or last option.'],
          ['Page Down and Page Up', 'Move ten options.'],
          ['Enter or Space', 'Open the list, or choose the active option.'],
          ['Letters', 'Jump to the next option that starts with them.'],
          [
            'Right and left arrows',
            'In a tree, expand an option or go to its first child; collapse it or go to its parent. Mirrored in right-to-left text.',
          ],
          ['Alt + up arrow', 'Choose the active option and close the list.'],
          ['Tab', 'With one choice, choose the active option and move on.'],
          ['Escape', 'Close the list without choosing.'],
        ],
        notes: [
          'The button is a select-only <code>combobox</code> with <code>aria-expanded</code> and <code>aria-controls</code>. Focus stays on it, and <code>aria-activedescendant</code> points at the active option.',
          'The list is a <code>listbox</code>, or a <code>tree</code> with <code>aria-level</code> and <code>aria-expanded</code>. <code>aria-setsize</code> and <code>aria-posinset</code> stay right when only some rows are rendered.',
          'The active option has a solid fill and, in forced colors, an outline.',
          'Name it with a <code>&lt;label for&gt;</code> that points at <code>triggerId</code>, or with <code>label</code>.',
        ],
      },
      grid: {
        name: 'Data grid',
        title: 'Data grid component for Angular',
        summary: 'Sort, filter, select, edit and scroll through any number of rows.',
        description:
          'Accessible Angular data grid on a native table: multi-column sorting, filters, pages or virtual scrolling, selection, editing and movable columns.',
        apiDescription:
          'API reference for the Needless UI data grid: nui-grid inputs and models, the NuiGridColumn definition, and templates for custom cells.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI data grid: a native table with grid roles, one tab stop, arrow keys and announcements.',
        overview: [
          'The data grid is a native table that sorts, filters, pages and edits. Describe the <code>columns</code>, pass the <code>rows</code>, and each cell is formatted by type for the locale: numbers, currencies, dates, yes and no, and labels for <code>enum</code> values.',
          'Its state lives in models you can bind, save and send to a server: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code>, and <code>columnState</code> for the widths, order, pins and hidden columns people choose. Without pages, only the rows in view are rendered, so 100,000 rows scroll like ten.',
          'Every cell is reachable from the keyboard, and each column’s panel sorts, filters, pins, moves, fits and hides it.',
          'Rows can also nest. <code>groupBy</code> groups them by columns, with each column’s <code>aggregate</code> on the group rows and in a <code>totals</code> row; <code>children</code> shows tree data; and an <code>nuiGridDetail</code> template opens under a row. Grouped or nested, the table is a <code>treegrid</code>.',
        ],
        examples: {
          orders: {
            title: 'Search, sort and pages',
            text: 'Type to search every column. Click a header to sort, and Shift-click to add a second column. <code>nuiGridCell</code> draws the status, and <code>exportCsv()</code> hands over what’s shown.',
          },
          selection: {
            title: 'Selection',
            text: '<code>selection="multiple"</code> adds checkboxes and binds the keys of the selected rows. Shift-click selects a range; the header box selects every row that matches.',
          },
          editing: {
            title: 'Editing',
            text: 'Double-click a cell, press Enter or just type. <code>validate</code> keeps the editor open with a message; a committed edit updates <code>rows</code> and emits <code>cellEdit</code>.',
          },
          big: {
            title: '100,000 rows',
            text: 'Without pages, only the rows in view are rendered. Pinned columns stay at the edges, and <code>columnState</code> keeps the layout people make.',
          },
          server: {
            title: 'Server data',
            text: 'In <code>server</code> mode the grid shows rows as they come and reports each change in <code>queryChange</code>. Set <code>loading</code> while you fetch.',
          },
          groups: {
            title: 'Groups and totals',
            text: 'Group by one column or two. Group rows count their orders and sum and average their totals, and <code>totals</code> adds the same for every row. The left arrow closes a group.',
          },
          tree: {
            title: 'Tree data',
            text: '<code>children</code> gives each folder its files. Rows open with the right arrow or their toggle, and <code>[(expanded)]</code> keeps which are open. A search keeps the folders above a match open.',
          },
          details: {
            title: 'Row details',
            text: 'An <code>nuiGridDetail</code> template shows an order’s lines under it, from a column of toggles, and <code>[(details)]</code> keeps which are open.',
          },
          live: {
            title: 'Live data, export and print',
            text: 'Prices change every two seconds, and <code>flash</code> shows which cells did. <code>exportXlsx()</code> downloads a real spreadsheet, <code>print()</code> prints every row, and <code>layout="auto"</code> shows cards on narrow screens.',
          },
          cards: {
            title: 'Cards on phones',
            text: '<code>layout="list"</code> shows rows as cards, and <code>auto</code> does below 36rem. Cards have no header row, so a toolbar sorts them, and its Filter button opens the column panel for the column you pick. <code>toolbar</code> can also show it over a table, or leave it out.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'A data grid on a native table.',
            members: {
              rows: 'The data. Edits replace rows, so bind with <code>[(rows)]</code>.',
              columns: 'The columns, as <code>NuiGridColumn</code> objects.',
              rowId: 'A row’s key, for selection and tracking.',
              label: 'The grid’s accessible name.',
              selection: 'Whether rows can be selected, and how many.',
              selected: 'The keys of the selected rows.',
              sort: 'The sort, as <code>{ column, direction }</code> objects; the first sorts first.',
              filters: 'A filter per column id: an operator and a value.',
              search: 'Words that must all appear in a row.',
              pageSize: 'Rows per page, or 0 for one scrolling list.',
              page: 'The page shown, from 0.',
              pageSizes: 'The choices in the pager.',
              virtual:
                'Renders only the rows in view: always, never, or <code>auto</code> past 100 rows without pages.',
              height: 'A CSS length that bounds the grid; it scrolls inside.',
              columnState: 'Each column’s width, order, pin and visibility, to save and restore.',
              mode: '<code>server</code> shows rows as they come and leaves sorting, filtering and paging to you.',
              total: 'The number of rows on the server.',
              loading: 'Shows a progress bar, and placeholder rows while there are none.',
              locale: 'Formats numbers and dates, and reads typed numbers.',
              labels: 'Every text the grid shows or announces, to translate.',
              rowActivate: 'Emits a row opened with Enter or a double click.',
              cellEdit: 'Emits each committed edit.',
              queryChange: 'Emits the sort, filters, search and page whenever they change.',
              exportCsv: 'The filtered, sorted rows of the visible columns, as CSV.',
              focusCell: 'Focuses a cell; row <code>-1</code> is the header.',
              clearFilters: 'Clears every filter and the search.',
              'groupBy, collapsed':
                'Columns to group rows by, outermost first, and the keys of the groups closed.',
              children: 'A row’s children: the grid shows tree data.',
              'expanded, details':
                'Keys of the rows open in tree data, and of the rows whose details are open.',
              'totals, flash':
                'A row of aggregates over every filtered row; cells that flash when their text changes, in rows with a lasting <code>rowId</code>.',
              layout:
                '<code>list</code> shows rows as cards, and <code>auto</code> does on narrow screens.',
              toolbar:
                'A bar that sorts the rows and opens the column panel: always, never, or <code>auto</code> with cards.',
              'exportXlsx, print': 'The filtered, sorted rows as a spreadsheet; prints every row.',
            },
          },
          NuiGridColumn: {
            summary: 'One column. Only <code>id</code> and <code>header</code> are required.',
            members: {
              id: 'Unique; the key in the sort, filters and column state.',
              header: 'The header text.',
              value:
                'A key of the row, or a function of the row. Defaults to <code>row[id]</code>.',
              type: 'Picks the alignment, sort, filter and editor.',
              format:
                '<code>Intl</code> options for numbers and dates, or a function that makes the text.',
              options:
                'The choices of an <code>enum</code> column, as <code>NuiOption</code> objects.',
              'width, minWidth, maxWidth': 'In pixels.',
              flex: 'Shares the room left over with the other <code>flex</code> columns.',
              align: 'Defaults by type: numbers and dates at the end.',
              'pinned, hidden': 'The column’s first pin and visibility.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Each can be turned off with <code>false</code>.',
              compare: 'A custom sort.',
              'editable, validate':
                'Whether cells can be edited, and a message when a value isn’t valid.',
              set: 'Makes the edited row. Defaults to a copy with the new value.',
              aggregate:
                'What group rows and the totals row show: a sum, an average, a minimum, a maximum, a count, or a function.',
            },
          },
          NuiGridCell: {
            summary: 'Draws a column’s cells. The context holds the row, its value and its text.',
            members: { nuiGridCell: 'The column’s id.' },
          },
          NuiGridHeader: {
            summary: 'Draws a column’s header.',
            members: { nuiGridHeader: 'The column’s id.' },
          },
          NuiGridEmpty: {
            summary:
              'What shows when there are no rows. The context says whether filters hid them.',
            members: {},
          },
          NuiGridDetail: {
            summary: 'A row’s details, shown under it when opened. The context holds the row.',
            members: {},
          },
        },
        keyboard: [
          ['Arrow keys', 'Move one cell. Left and right are mirrored in right-to-left text.'],
          ['Home and End', 'Go to the first or last cell in the row; with Ctrl, in the grid.'],
          ['Page Down and Page Up', 'Move one screen of rows.'],
          ['Enter or Space on a header', 'Sort by the column; with Shift, add it to the sort.'],
          ['Alt + down arrow on a header', 'Open the column panel.'],
          [
            'Alt + left or right arrow on a header',
            'Make the column narrower or wider; with Shift, move it.',
          ],
          ['Enter on a cell', 'Edit it, or open the row when it can’t be edited.'],
          ['F2, or typing', 'Edit the cell.'],
          ['Enter, Escape and Tab while editing', 'Commit, cancel, or commit and move on.'],
          ['Space', 'Select the row; with Shift, the rows since the last one.'],
          ['Ctrl + A', 'Select every row.'],
          [
            'Right and left arrows on a group',
            'Open or close it; on the first cell of a row with children, too.',
          ],
          ['Enter on a group', 'Open or close it; Space selects its rows.'],
          ['Enter on a details toggle', 'Show or hide the row’s details.'],
        ],
        notes: [
          'A native <code>&lt;table&gt;</code> with <code>role="grid"</code>, named by <code>label</code>. Headers carry <code>aria-sort</code>, and selectable rows <code>aria-selected</code>.',
          'The grid is one tab stop. Focus moves from cell to cell with a roving <code>tabindex</code>, so screen readers read each cell with its row and column headers.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> and <code>aria-colindex</code> stay right while rows are paged or virtualized.',
          'Sorting, filtering, paging and editing errors are announced in a polite status region.',
          'Grouped or nested rows make the table a <code>treegrid</code>: rows carry <code>aria-level</code>, <code>aria-setsize</code> and <code>aria-posinset</code>, and <code>aria-expanded</code> when they open. Aggregates are read with their kind, such as “Sum: 475”.',
          'Cards have no header row, so a toolbar comes first: a group named “Sort and filter” with a labeled select for the column to sort by, toggle buttons for the direction, and a Filter button that opens the column panel, where a select picks the column. The grid’s tab stop moves to the first card.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'AI chat component for Angular',
        summary: 'Talk to a model: streamed replies, tools, versions and files.',
        description:
          'Accessible Angular chat for AI assistants: streamed Markdown replies, reasoning, tool calls, sources, retries kept as versions, and files.',
        apiDescription:
          'API reference for the Needless UI chat: nui-chat inputs, the NuiChatSession that streams replies, messages, tool templates and stream readers.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI chat: a feed of named messages, Page Up and Page Down, and replies announced once complete.',
        overview: [
          'The chat is everything between your users and a model. Create a <code>NuiChatSession</code> with a <code>respond</code> function, and <code>&lt;nui-chat&gt;</code> does the rest: it streams the reply as Markdown, follows it down the page until the reader scrolls up, and turns the send button into a stop button while it arrives.',
          '<code>respond</code> returns text, a promise, an <code>async function*</code> or an Observable, so any API fits. Beyond text, a reply can carry the model’s reasoning, its tool calls (drawn by templates of yours), and the sources it used. <code>nuiEventStream</code> reads the server-sent events most model APIs stream.',
          'Nothing is lost: a retried reply or an edited question becomes a new version beside the old one, and the conversation keeps every branch. Screen readers hear each reply once it’s complete, not word by word.',
        ],
        examples: {
          assistant: {
            title: 'An assistant',
            text: 'Suggestions start the conversation. Replies stream in as Markdown; stop them, retry them, rate them, or edit your question. <code>attach</code> takes files picked, pasted or dropped.',
          },
          tools: {
            title: 'Reasoning, tools and sources',
            text: 'Deltas add the model’s reasoning, tool calls and sources to the reply. <code>nuiChatTool</code> draws the weather tool as a card; other tools fold away with their input and output.',
          },
          server: {
            title: 'Streaming from a server',
            text: '<code>nuiEventStream</code> reads an OpenAI-style event stream, and a <code>NuiChatError</code> shows its message. <code>all()</code> saves the conversation, versions and all.',
          },
        },
        api: {
          NuiChat: {
            summary: 'The conversation and the box to write in, together.',
            members: {
              session: 'The conversation to show.',
              assistant: 'The assistant’s name, in the headings screen readers hear.',
              headingLevel:
                'The level of each message’s heading, which only screen readers show. Headings in replies go one deeper.',
              announce:
                'What screen readers hear when a reply is complete: all of it, a short notice, or nothing.',
              images: 'Shows images in replies. Otherwise their text links to them.',
              value: 'The text being written.',
              placeholder: 'The hint in the empty field.',
              suggestions: 'Prompts to send with a click, until the first message.',
              sendOn:
                'Whether Enter sends, or Ctrl or ⌘ + Enter. <code>auto</code> sends with Enter where there’s a keyboard; on touch screens, Return makes a new line and the button sends.',
              disabled: 'Stops the composer from sending.',
              attach: 'Takes files: picked, pasted or dropped.',
              accept: 'The kinds of file to take, as for <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'How many files a message can carry.',
              maxSize: 'The largest file to take, in bytes.',
              labels: 'Every text the chat shows or announces, to translate.',
              rated:
                'Emits a reply the reader rated, with the rating, or <code>null</code> when taken back.',
              focus: 'Focuses the text field.',
              scrollToEnd: 'Scrolls to the latest message, and follows it.',
            },
          },
          NuiChatSession: {
            summary:
              'The conversation, without any DOM. Create it in a component, with the options <code>respond</code>, <code>messages</code> and <code>id</code>.',
            members: {
              respond:
                'Yours: writes the reply to <code>request.messages</code>, and stops when <code>request.signal</code> aborts.',
              messages: 'The conversation on screen.',
              all: 'Every message of every version, to save and pass back as <code>messages</code>.',
              busy: 'Whether a reply is on its way.',
              send: 'Sends a message and asks for a reply.',
              stop: 'Stops the reply, keeping what it wrote.',
              retry: 'Asks again. The new reply is a version beside the old one.',
              edit: 'Sends a new version of one of the user’s messages.',
              versions: 'Every version of a message, oldest first.',
              show: 'Switches the conversation to this version.',
              rate: 'Records the reader’s verdict on a reply.',
              'remove, load, clear':
                'Removes a message and what follows it, replaces the conversation, or starts over.',
            },
          },
          NuiChatMessage: {
            summary:
              'One message. Messages with the same <code>parent</code> are versions of each other.',
            members: {
              'id, parent': 'The message’s key, and the one it follows.',
              role: 'Who wrote it.',
              text: 'Markdown from the assistant, plain text from the user.',
              status: 'Where a reply stands, from waiting to done.',
              reasoning: 'What the model thought before it answered.',
              tools: 'The tools it called, with their state, input and output.',
              sources: 'The pages it used.',
              attachments: 'The files sent with it.',
              rating: 'The reader’s verdict.',
              data: 'Anything else to keep with it, such as the model’s name.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Draws a tool call, such as a card for the weather. The context holds the call and its message.',
            members: {
              nuiChatTool:
                'The tool’s name. Without one, it draws every call no other template names.',
            },
          },
          NuiChatThread: {
            summary:
              'The conversation on its own, for a layout of yours. It takes the inputs of <code>nui-chat</code> that concern the conversation.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'The box to write in, on its own. It takes the inputs of <code>nui-chat</code> that concern writing.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'What <code>nuiEventStream</code> yields for each event. <code>nuiTextStream</code> reads plain text and <code>nuiJsonStream</code> JSON lines; all three take a <code>fetch</code> response.',
            members: {
              event: 'The event’s name.',
              data: 'Its data lines, joined.',
              id: 'The last id the stream sent.',
            },
          },
          NuiChatError: {
            summary:
              'Throw it from <code>respond</code> to show its message. Any other error shows a general one, so nothing internal leaks.',
            members: {},
          },
        },
        keyboard: [
          ['Page Down and Page Up', 'Move to the next or previous message.'],
          ['Ctrl + End and Ctrl + Home', 'Leave the conversation, forward or back.'],
          ['Enter', 'Send. With Shift, start a new line.'],
          ['Escape', 'Stop editing a message.'],
        ],
        notes: [
          'The conversation is a <code>feed</code> of <code>article</code>s. Each is named by a heading only screen readers see, such as “You said”, and carries <code>aria-posinset</code> and <code>aria-setsize</code>.',
          'A reply being written is <code>aria-busy</code>. Once complete, it’s announced whole; a failure is announced at once.',
          'Every icon button has a name and a tooltip. Ratings are toggle buttons, and the version switcher is a group named like “Version 2 of 3”.',
          'Reasoning and tool calls are native disclosures. Removing a file returns focus to the text field.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Markdown renderer component for Angular',
        summary: 'Render Markdown safely, even while it streams in.',
        description:
          'Safe Angular Markdown renderer for AI replies: GitHub tables, task lists and code blocks, drawn as real elements and smooth while streaming.',
        apiDescription:
          'API reference for the Needless UI Markdown renderer: nui-markdown inputs, the template for code blocks, and the parser behind it.',
        a11yDescription:
          'Accessibility of the Needless UI Markdown renderer: real headings, lists and tables, scroll regions with names, and a copy button that speaks.',
        overview: [
          'The Markdown renderer turns text such as a model writes into real elements: headings, lists and task lists, quotes, tables, code blocks with a copy button, and links. It parses the text into a tree and draws it with templates, so raw HTML stays text and nothing is ever inserted as HTML.',
          'With <code>streaming</code>, half-written text reads as it will once complete: an open code fence is already a code block, a lone <code>**</code> waits for its partner, and a caret follows the last word. Blocks that didn’t change keep their DOM.',
          'Links work only for web, mail and phone addresses, and images stay links until you turn on <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'A document',
            text: 'Headings start at <code>headingLevel</code>, so they fit under the page’s own. Wide tables and code scroll in their own regions.',
          },
          streaming: {
            title: 'Streaming',
            text: 'The same text, a few characters at a time. Nothing flashes as a symbol, and only the last block re-renders.',
          },
          highlight: {
            title: 'Code highlighting',
            text: '<code>nuiMarkdownCode</code> draws code blocks with a template of yours, here with a tiny highlighter. It gets the code and its language.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Renders Markdown as elements.',
            members: {
              text: 'The Markdown.',
              streaming: 'The text is still arriving.',
              headingLevel: 'The level of a <code>#</code> heading. Deeper ones follow, up to 6.',
              images: 'Shows images. Otherwise their text links to them, since an image can track.',
              labels: 'The copy button’s texts and the like, to translate.',
              codeTemplate:
                'A code block template from elsewhere, such as a chat that holds this one.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Draws code blocks. The context holds the code, <code>lang</code>, and <code>open</code> while the block is still arriving.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'The parser and its helpers, for use without the component.',
            members: {
              nuiParseMarkdown: 'The tree of blocks and inlines the component draws.',
              nuiMarkdownToText: 'The plain text, a line per block, to announce or preview.',
              nuiSafeUrl: 'Whether a link goes to a web, mail or phone address.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Reach links, the copy buttons, and wide tables and code to scroll them.'],
        ],
        notes: [
          'Headings, lists, quotes, tables with <code>th</code> headers and <code>scope</code>, and code are real elements.',
          'Wide tables and code blocks scroll inside a focusable region; a table’s region is named after its headers.',
          'Task list boxes say whether each task is done. The copy button is named “Copy code” and says “Copied” through a status message.',
          'The streaming caret is hidden from screen readers, and holds still with reduced motion.',
        ],
      },
      calendar: {
        name: 'Calendar',
        title: 'Calendar component for Angular',
        summary: 'Pick a day, a range or several days, from the keyboard too.',
        description:
          'Accessible Angular calendar: pick a day, a range or several days, with min and max, unavailable days, months side by side and week numbers.',
        apiDescription:
          'API reference for the Needless UI calendar: nui-calendar selection models, min, max and unavailable days, months side by side, and labels.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI calendar: a grid of named days, arrows by day and week, Page Up and Page Down by month.',
        overview: [
          'The calendar picks a day, a range of days, or several days. Values are plain ISO dates, such as <code>2026-09-25</code>, with no time zone to shift them, so they go straight to a server or an <code>&lt;input type="date"&gt;</code>.',
          'Weeks start on the locale’s first day, and names and digits follow its language. <code>min</code>, <code>max</code> and <code>unavailable</code> rule out days, <code>months</code> shows several side by side, and the title zooms out to months and years for distant dates.',
          'Every day is reachable from the keyboard, as in the WAI-ARIA date picker, and each is named by its full date.',
        ],
        examples: {
          delivery: {
            title: 'A delivery day',
            text: 'Days before today, after <code>max</code> or ruled out by <code>unavailable</code> can’t be picked, but the keyboard still passes through them.',
          },
          stay: {
            title: 'A range',
            text: 'With <code>selection="range"</code>, the first pick starts the range and the band follows the pointer until the second. <code>months="2"</code> and <code>weekNumbers</code> show more at once.',
          },
          'days-off': {
            title: 'Several days',
            text: 'With <code>selection="multiple"</code>, each pick adds or removes a day. <code>firstDay</code> starts the week on another day than the locale’s.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'A calendar for choosing days.',
            members: {
              selection: 'How many days can be chosen.',
              value: 'The chosen day.',
              values: 'The chosen days, in order.',
              range: 'The chosen range, both ends included.',
              month: 'The month shown, the first when several are.',
              view: 'Days, months or years.',
              'min, max': 'The first and last days that can be chosen.',
              unavailable: 'Rules out other days, such as holidays.',
              months: 'Months side by side.',
              weekNumbers: 'Shows ISO week numbers.',
              firstDay: 'The first day of the week, 1 for Monday. By default, the locale’s.',
              locale: 'Formats names and digits, and picks the first day of the week.',
              labels: 'Every text the calendar shows or announces, to translate.',
              picked: 'Emits each choice: a day, or a range once complete.',
              focusDate: 'Moves the keyboard to a day, showing its month.',
            },
          },
          NuiDateRange: {
            summary: 'A range of days.',
            members: { 'start, end': 'The first and last days, both included.' },
          },
        },
        keyboard: [
          ['Left and right arrows', 'Previous or next day. Mirrored in right-to-left text.'],
          ['Up and down arrows', 'Previous or next week.'],
          ['Home and End', 'First or last day of the week.'],
          ['Page Up and Page Down', 'Previous or next month; with Shift, year.'],
          ['Enter or Space', 'Choose the day, or zoom in on a month or year.'],
          ['Escape', 'Drop the first end of a range, or zoom back in.'],
        ],
        notes: [
          'Each month is a <code>grid</code> named by its title, with the weekdays’ full names in <code>abbr</code>.',
          'Every day is named by its full date, with “Today”, “unavailable” and the ends of a range added. <code>aria-selected</code> marks what’s chosen, and <code>aria-disabled</code> what can’t be.',
          'The grid is one tab stop, with a roving <code>tabindex</code>. The previous and next buttons announce the new month.',
        ],
      },
      'date-picker': {
        name: 'Date picker',
        title: 'Date and time picker components for Angular',
        summary: 'Type a date or time in segments, or pick it in a calendar.',
        description:
          'Accessible Angular date, time and range pickers: segments typed in the locale’s order, a calendar in a popover, presets, and form support.',
        apiDescription:
          'API reference for the Needless UI date pickers: nui-date-field, nui-time-field, nui-date-picker and nui-date-range-picker, with presets.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI date pickers: a spin button for each part of a date, and a calendar in a dialog.',
        overview: [
          'Date and time fields are typed in segments: day, month and year in the locale’s order, then hours and minutes on its 12- or 24-hour clock. Each segment is a spin button: type digits and it moves on by itself, or step it with the arrow keys. Paste a whole date, and every segment fills.',
          'The pickers add a calendar in a popover, for one date or a range with presets. Values are plain ISO strings, such as <code>2026-09-25</code> or <code>2026-09-25T09:30</code>, and every field works with Signal Forms, reactive forms and <code>ngModel</code>.',
          'On this site, the examples follow the page’s language: switch it to see the order, separators and digits change.',
        ],
        examples: {
          fields: {
            title: 'Date and time fields',
            text: 'Type the digits, or use the arrow keys. A second Backspace goes back a segment. <code>minuteStep</code> sets how far the arrows move the minutes.',
          },
          pickers: {
            title: 'Date pickers',
            text: 'The button opens a calendar on the chosen day, and picking closes it. With <code>granularity="minute"</code>, the picker takes a time too, and the calendar changes only the date.',
          },
          range: {
            title: 'A date range',
            text: 'Two fields and a two-month calendar. <code>nuiDateRangePresets()</code> adds common ranges; the value stays null until both ends are set, in order.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'A date, or a date and time, typed in segments.',
            members: {
              value: 'The value, or null until every segment is filled.',
              granularity: 'Stops at the day, or goes on to the hour, minute or second.',
              'min, max': 'The earliest and latest values. Outside them, the field is invalid.',
              placeholder: 'Where empty segments start from with the arrow keys.',
              hourCycle: 'A 12- or 24-hour clock. By default, the locale’s.',
              minuteStep: 'How far the arrow keys move the minutes.',
              'disabled, readonly': 'Stop changes.',
              locale: 'Sets the order, separators, digits and clock.',
              labels: 'Every text the field says, to translate.',
              invalid: 'Whether the value is outside <code>min</code> and <code>max</code>.',
              focus: 'Focuses the first empty segment.',
            },
          },
          NuiTimeField: {
            summary: 'A time of day typed in segments. It takes the same inputs as the date field.',
            members: { granularity: 'Stops at the hour, minute or second.' },
          },
          NuiDatePicker: {
            summary:
              'A date field with a calendar in a popover. It takes the date field’s inputs, and these.',
            members: {
              unavailable: 'Days the calendar won’t pick.',
              'firstDay, weekNumbers': 'Passed to the calendar.',
              labels: 'The texts of the field, the button and the calendar.',
              show: 'Opens the calendar.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Two date fields with a range calendar. It takes the date picker’s inputs, and these.',
            members: {
              value: 'The range, or null until both ends are set, in order.',
              presets: 'Named ranges to choose in one click.',
              months: 'Months side by side in the calendar; one on a narrow screen.',
            },
          },
          NuiDateRangePreset: {
            summary: 'A named range, fixed or made when chosen.',
            members: {
              label: 'Its name.',
              range: 'The range, or a function that makes it.',
            },
          },
        },
        keyboard: [
          ['Digits', 'Type into the segment. It moves on once no other digit could follow.'],
          ['Up and down arrows', 'Step the segment; Page Up and Page Down step further.'],
          ['Left and right arrows, Tab', 'Previous or next segment.'],
          ['Backspace', 'Clear the segment, then go back one.'],
          ['A and P', 'Set AM or PM.'],
        ],
        notes: [
          'A field is a <code>group</code>: name it with <code>aria-label</code> or <code>aria-labelledby</code>. Each segment is a <code>spinbutton</code> named for its part, which reads months by name and empty segments as “Empty”.',
          'Segments are editable text, so touch keyboards open on digits.',
          'The picker’s button is named “Choose a date”, and its popover is a <code>dialog</code>. Picking a date returns focus to the button.',
          'The calendar inside works as the <a href="/components/calendar">calendar</a> does.',
        ],
      },
      scheduler: {
        name: 'Scheduler',
        title: 'Scheduler component for Angular',
        summary: 'Events in a month, a week, a day or an agenda, dragged into place.',
        description:
          'Accessible Angular scheduler: month, week, day and agenda views, overlapping events side by side, drag to move and resize, and full keyboard control.',
        apiDescription:
          'API reference for the Needless UI scheduler: nui-scheduler views, events, editing and selection, its outputs, and the template for events.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI scheduler: grids of days and times, named events, and keyboard moves for every drag.',
        overview: [
          'The scheduler shows events in a month, a week, a day or an agenda. Events are plain data with ISO times; overlapping ones share the width, events across midnight show in both days, and all-day events run across the top as bars.',
          'It never changes your events itself. Drag an event, or its bottom edge, and <code>eventChange</code> reports the new times; choose time on the grid, and <code>slotSelect</code> reports it. <code>rangeChange</code> tells you which days are shown, so you can load their events.',
          'Everything a pointer does, the keyboard does too: the grid is one tab stop, the arrow keys move through days and times, and Alt with the arrows moves an event.',
        ],
        examples: {
          planner: {
            title: 'A week to plan',
            text: 'With <code>editable</code> and <code>selectable</code>, drag events to move them, drag their bottom edge to resize them, and drag across empty time to add one. The example updates its events from the outputs.',
          },
          month: {
            title: 'A month and an agenda',
            text: 'Events across days run as bars; a busy day shows how many more there are. <code>views</code> offers only the month and the agenda of the next <code>agendaDays</code>.',
          },
          rooms: {
            title: 'A day of rooms',
            text: '<code>nuiSchedulerEvent</code> draws each booking with its room and host. <code>slotMinutes="15"</code> makes finer rows.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Events in a month, a week, a day or an agenda.',
            members: {
              events: 'The events to show.',
              view: 'The view shown.',
              views: 'The views people can switch between.',
              date: 'The day shown, and where the keyboard is.',
              slotMinutes: 'Minutes per row of the time grid, and the step events move by.',
              scrollHour: 'The hour the time grid opens at.',
              agendaDays: 'Days the agenda looks ahead.',
              editable: 'Events can be moved and resized, by pointer and keyboard.',
              selectable: 'Time can be chosen on the grid, to create events.',
              firstDay: 'The first day of the week, 1 for Monday. By default, the locale’s.',
              headingLevel: 'The title’s heading level; the agenda’s days are one deeper.',
              locale: 'Formats days and times.',
              labels: 'Every text the scheduler shows or announces, to translate.',
              eventClick: 'Emits an event clicked, or opened with Enter.',
              eventChange: 'Emits an event’s new times after a move or a resize.',
              slotSelect: 'Emits the time chosen on the grid.',
              rangeChange: 'Emits the first and last day shown when they change.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'An event. A timed event’s end isn’t included; an all-day event’s end is its last day.',
            members: {
              'id, title': 'Its key, and what it shows.',
              'start, end': 'Dates and times, or dates for all-day events.',
              allDay: 'By default, whether <code>start</code> has no time.',
              tone: 'Its color.',
              editable: 'Whether it can be moved, whatever the scheduler says.',
              data: 'Anything else to keep with it.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: 'Draws events. The context holds the event and its time as text.',
            members: {},
          },
        },
        keyboard: [
          ['Arrow keys', 'Move by day and by slot. Mirrored in right-to-left text.'],
          ['Page Up and Page Down', 'Previous or next month, week or day.'],
          ['Shift + arrow keys', 'Extend the time chosen.'],
          ['Enter or Space on a cell', 'Go into its events, or choose its time.'],
          ['Up and down arrows on an event', 'Previous or next event in the cell.'],
          ['Alt + arrow keys on an event', 'Move it by a slot or a day.'],
          ['Alt + Shift + up or down arrow', 'Shorten or lengthen the event.'],
          ['Escape', 'Back to the cell, drop the time chosen, or cancel a drag.'],
        ],
        notes: [
          'The month, week and day are <code>grid</code>s named by their title. Days head the columns and times the rows, so each cell reads with its day and time.',
          'Every event is a button named by its title, day and time, such as “Standup, Friday, September 25, 9:00 – 9:30 AM”. A move or resize announces the new time.',
          'Every drag has a keyboard equivalent, so no one needs a pointer.',
          'The views are toggle buttons in a group, and moving to another week or month announces its title.',
        ],
      },
      splitter: {
        name: 'Splitter',
        title: 'Splitter and resizable panes for Angular',
        summary: 'Panes side by side or stacked, with handles to resize them.',
        description:
          'Accessible Angular splitter: resizable panes side by side or stacked, with limits, collapsible panes, saved sizes and full keyboard control.',
        apiDescription:
          'API reference for the Needless UI splitter: nuiSplitter orientation and sizes, the limits and folding of panes, and the handles between them.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI splitter: focusable window splitter handles with values, arrow keys, Home, End and Enter.',
        overview: [
          'A splitter shares its room between panes, with a handle between every two. Drag a handle, or focus it and use the arrow keys. Sizes are percentages that add up to 100, and <code>[(sizes)]</code> binds them.',
          'Each pane takes its first size, its minimum and its maximum in pixels, rems or percent. A <code>collapsible</code> pane folds away when dragged below half its minimum, or with Enter on its handle, and comes back at the size it had.',
          'With <code>storageKey</code>, the sizes are kept in <code>localStorage</code>, so people find the layout as they left it on their next visit.',
        ],
        examples: {
          editor: {
            title: 'An editor',
            text: 'Files, code and a preview. The files and the preview fold away, the code keeps at least 30% of the width, and the sizes are saved.',
          },
          stacked: {
            title: 'Stacked panes',
            text: '<code>orientation="vertical"</code> stacks the panes, and <code>[(sizes)]</code> reads their sizes as they change.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Panes with handles between them.',
            members: {
              orientation: 'Side by side, or stacked.',
              sizes: 'Each pane’s share, in percent, in order.',
              storageKey: 'Keeps the sizes in <code>localStorage</code> under this key.',
              step: 'How far the arrow keys move a handle, in percent. Twice as far with Shift.',
              move: 'Moves the boundary after a pane by a percentage.',
            },
          },
          NuiSplitterPane: {
            summary: 'A pane. Its sizes take pixels, rems or percent.',
            members: {
              defaultSize: 'Its size at first, when there are no sizes to restore.',
              min: 'Its smallest size.',
              max: 'Its largest size.',
              collapsible: 'It folds away: dragged below half its minimum, or with Enter.',
              collapsedSize: 'Its size folded, such as a rail of icons.',
              label: 'Names the handle that resizes it.',
            },
          },
          NuiSplitterHandle: {
            summary: 'The handle between two panes.',
            members: {
              label: 'Names it, when the pane’s label doesn’t.',
              disabled: 'It doesn’t move.',
              toggle: 'Folds the pane beside it, or brings it back.',
            },
          },
        },
        keyboard: [
          [
            'Left and right arrows',
            'Move the handle between side-by-side panes. Mirrored in right-to-left text.',
          ],
          ['Up and down arrows', 'Move the handle between stacked panes.'],
          ['Shift + arrow keys', 'Move it twice as far.'],
          ['Home and End', 'Take the pane before the handle to its smallest or largest size.'],
          ['Enter', 'Fold the collapsible pane, or bring it back.'],
        ],
        notes: [
          'Each handle is a focusable <code>separator</code>, as in the WAI-ARIA window splitter pattern: its value is the size of the pane before it, between that pane’s limits, and <code>aria-controls</code> points at the pane.',
          'Name the handles through the panes’ <code>label</code>: “Files” tells a screen reader what a handle resizes.',
          'A double click on a handle folds its pane too, and a drag captures the pointer, so fast moves don’t lose the handle.',
        ],
      },
      tour: {
        name: 'Tour',
        title: 'Guided tour component for Angular',
        summary: 'A card for each step, beside what it’s about, with the page dimmed around it.',
        description:
          'Accessible Angular product tour: a card for each step next to its target, a spotlight around it, interactive steps, and focus that returns.',
        apiDescription:
          'API reference for the Needless UI tour: nui-tour steps, the open and step bindings, its outputs, and the target, placement and hooks of each step.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI tour: each card a dialog named by its title, focus kept and given back, and Escape to leave.',
        overview: [
          'A tour walks people through a page, one step at a time. Each step points at an element with a card beside it and dims the rest of the page around it; a step without a target shows in the middle.',
          'Steps are plain data: a target (a selector, an element or a function that finds one), a title, and content as text or a template. <code>beforeShow</code> runs first, so a step can open the panel its target is in, and a target out of view is scrolled to.',
          'Every card is a dialog. It’s modal, unless the step is <code>interactive</code>: then people can use what it points at. Escape ends the tour, and focus goes back where it was.',
        ],
        examples: {
          basics: {
            title: 'A first look',
            text: 'Four steps, the first without a target. <code>finished</code> and <code>dismissed</code> tell the two endings apart.',
          },
          interactive: {
            title: 'Steps to try',
            text: '<code>beforeShow</code> opens the settings before the second step points into them, and <code>interactive</code> lets people use the switch while the card is up.',
          },
        },
        api: {
          NuiTour: {
            summary: 'A guided tour.',
            members: {
              steps: 'The steps, in order.',
              open: 'Whether the tour is on.',
              step: 'The step shown, from 0.',
              labels: 'Every text it shows, to translate.',
              finished: 'Emits when the last step is done.',
              dismissed: 'Emits the step the tour ended on, when it ends early.',
              start: 'Starts the tour, from the first step or the one given.',
              end: 'Ends the tour, finished or dismissed.',
            },
          },
          NuiTourStep: {
            summary: 'A step of the tour.',
            members: {
              target: 'What it points at. Without one, the card shows in the middle.',
              title: 'The card’s title.',
              content: 'Its text, or a template.',
              side: 'Where the card goes beside the target.',
              align: 'How the card lines up with the target.',
              padding: 'Room around the target in the spotlight, in pixels.',
              interactive: 'The target can be used while the card is up.',
              beforeShow: 'Runs before the step shows. The tour waits for a promise.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Move through the card’s buttons. On modal steps, focus stays in the card.'],
          ['Enter or Space', 'Press the focused button: Next, Back or Done.'],
          ['Escape', 'End the tour.'],
        ],
        notes: [
          'Each card is a <code>dialog</code> named by its title and described by its content. Focus moves to its main button on every step, and back where it was when the tour ends.',
          'Modal steps make the rest of the page inert. Interactive steps aren’t modal, so their target can be reached with the keyboard as well as the pointer.',
          'The progress is text, such as “2 of 4”; the dots only draw it.',
        ],
      },
      dropzone: {
        name: 'Dropzone',
        title: 'File dropzone and uploads for Angular',
        summary: 'Drop files or choose them, with checks, previews and uploads with progress.',
        description:
          'Accessible Angular file dropzone: drag and drop, folders and paste, type and size checks, image previews, and uploads with progress and retry.',
        apiDescription:
          'API reference for the Needless UI dropzone: nui-dropzone files and checks, the upload function and its queue, its outputs and its texts.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI dropzone: a zone that is a button, announced results, and named progress bars and actions.',
        overview: [
          'A dropzone takes files dropped on it, chosen with the file picker, or pasted. Folders dropped are read through, and each file keeps its path.',
          'Every file is checked against <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> and your <code>validate</code> function, and the ones turned away are listed with the reason. Images get a preview.',
          'Without an <code>upload</code> function, the dropzone holds the files for a form, in <code>[(files)]</code>. With one, it uploads them a few at a time, with progress, cancel and retry. Pass the upload’s <code>signal</code> to <code>fetch</code>, so canceling stops it.',
        ],
        examples: {
          upload: {
            title: 'Uploads',
            text: 'A pretend upload reports its progress in steps. Files named with “fail” fail, to show retry, and <code>directory</code> adds a button to choose a folder.',
          },
          attach: {
            title: 'Attachments for a form',
            text: 'No <code>upload</code>: the dropzone holds up to three documents in <code>[(files)]</code>, and its own text replaces the default one.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'A place to drop files, or choose them.',
            members: {
              files: 'The files it holds, in order.',
              accept: 'The kinds of file it takes, as for <code>&lt;input type="file"&gt;</code>.',
              multiple: 'More than one file at a time.',
              directory: 'Offers a button to choose a folder.',
              maxFiles: 'How many files it holds.',
              'maxSize, minSize': 'The largest and smallest file, in bytes.',
              validate: 'Checks each file. A message turns it away.',
              upload: 'Sends a file. Without it, files are only held.',
              concurrency: 'How many files upload at once.',
              hint: 'A line under the zone’s text, such as what it takes.',
              disabled: 'It takes no files.',
              labels: 'Every text it shows or announces, to translate.',
              uploaded: 'Emits a file uploaded, with what <code>upload</code> returned.',
              rejected: 'Emits the files turned away, with the reasons.',
              queue: 'The upload queue, to cancel, retry and read progress from code.',
              take: 'Adds files from code, checking each one.',
            },
          },
          NuiUploader: {
            summary:
              'Sends one file: it reports progress from 0 to 1, and stops when the signal aborts.',
            members: {
              '(file, context)': 'Returns a promise of whatever your server answers.',
            },
          },
        },
        keyboard: [
          ['Enter or Space', 'On the zone, open the file picker.'],
          ['Ctrl + V (⌘ + V)', 'On the zone, add the files pasted.'],
          ['Tab', 'Move through the zone and each file’s actions.'],
        ],
        notes: [
          'The zone is a button, so it works without a pointer, and the hint describes it.',
          'Files added and files turned away are announced. Each progress bar is a <code>progressbar</code> named for its file, and each action is named for what it does, such as “Remove beach.jpg”.',
          'Previews are decorative: the file name says which file it is.',
        ],
      },
      mask: {
        name: 'Input mask',
        title: 'Input mask directive for Angular',
        summary: 'Text fields that format as people type: dates, cards, IBANs, codes.',
        description:
          'Angular input mask: format text fields as people type, with a caret that keeps its place, helpers for cards and IBANs, and form validation.',
        apiDescription:
          'API reference for the Needless UI input mask: the nuiMask directive, its tokens and value, and helpers for card numbers and IBANs.',
        a11yDescription:
          'Accessibility of the Needless UI input mask: native fields with their own labels, numeric keyboards on phones, and deleting across literals.',
        overview: [
          'A mask formats a text field as people type: <code>00/00/0000</code> puts in the slashes, <code>AA 000 AA</code> takes letters and digits in turn. Characters that don’t fit stay out, and the caret keeps its place when people type in the middle.',
          'Masks are made of tokens and literals: <code>0</code> is a digit, <code>a</code> a letter, <code>*</code> either, and <code>A</code> and <code>X</code> are the same for codes, in upper case. Add your own with <code>tokens</code>, or pass a function that picks the mask for what’s typed, as <code>nuiCardMask</code> does by card brand.',
          'The value is what’s shown, or only the data with <code>unmask</code>. The mask works with Signal Forms, reactive forms and <code>ngModel</code>, and an unfinished value is an error.',
        ],
        examples: {
          formats: {
            title: 'Formats',
            text: 'A date, a time, a licence plate, and a color with a token of its own for hexadecimal digits.',
          },
          payment: {
            title: 'Payment details',
            text: 'Signal Forms fields. The card mask follows the brand, the security code has four digits for American Express, and <code>nuiCardValid</code> and <code>nuiIbanValid</code> check the numbers.',
          },
        },
        api: {
          NuiMask: {
            summary: 'A mask on a native text field.',
            members: {
              nuiMask: 'The mask, or a function that picks one for the data typed.',
              tokens: 'Mask characters to add or replace.',
              unmask: 'The value is only the data, without the literals.',
              value: 'The value: what’s shown, or the data with <code>unmask</code>.',
              raw: 'The data typed, without the literals.',
              complete: 'Every place in the mask is filled.',
            },
          },
          Helpers: {
            summary: 'Functions to format, check and build masks.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Format a value with a mask, or read the data out of one.',
              nuiCardMask: 'A mask for card numbers, grouped as their brand prints them.',
              nuiCardBrand: 'The brand of a card number, from its first digits.',
              'nuiCardValid, nuiLuhn':
                'Whether a card number has its brand’s length and passes the Luhn check.',
              nuiIbanMask: 'A mask for IBANs, as long as the country’s.',
              nuiIbanValid: 'Whether an IBAN has its country’s length and the right check digits.',
            },
          },
        },
        keyboard: [
          ['Backspace', 'Delete the character before the caret, skipping over literals.'],
          ['Delete', 'Delete the character after the caret, skipping over literals.'],
        ],
        notes: [
          'The mask works on your own <code>&lt;input&gt;</code>, so its label and hint stay as you wrote them. Say what’s expected there: a mask isn’t an instruction.',
          'Masks of digits set <code>inputmode="numeric"</code>, so phones show a keypad, unless the field sets its own.',
          'Digits of any script are taken, and written 0 to 9.',
        ],
      },
      'phone-field': {
        name: 'Phone field',
        title: 'Phone number input for Angular',
        summary: 'A country picker and a number, grouped as the country writes it.',
        description:
          'Accessible Angular phone number input: a country picker, numbers grouped as each country writes them, calling codes typed or pasted, and E.164 values.',
        apiDescription:
          'API reference for the Needless UI phone field: nui-phone-field value and country, the countries offered, and helpers to read and write numbers.',
        a11yDescription:
          'Accessibility of the Needless UI phone field: a named country picker, a country announced when a code picks it, and browser autofill.',
        overview: [
          'A phone field is a country picker and a number. The number is grouped as its country writes numbers, as it’s typed, and the value is the number in E.164, such as <code>+393331234567</code>.',
          'People type numbers the way they know them. A leading 0 (or the 1 before a North American number) is taken as the trunk prefix and left out of the value. A calling code typed or pasted, such as <code>+44</code> or <code>0044</code>, picks its country, and so does an area code where countries share a calling code.',
          'The first country is the locale’s, and <code>countries</code> limits the list. With forms, a number too short or too long for its country is an error. For full validation, check numbers on the server too.',
        ],
        examples: {
          basic: {
            title: 'A number',
            text: 'Start with <code>+</code> and a calling code to switch countries as you type.',
          },
          countries: {
            title: 'Countries of your choice',
            text: '<code>countries</code> offers eleven, the field works with a reactive <code>FormControl</code>, and <code>nuiFormatPhone</code> writes the value back for people to read.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'A phone number field.',
            members: {
              value: 'The number in E.164, or empty.',
              country: 'The country, as its region code.',
              countries: 'The countries offered, as region codes.',
              locale: 'The language of country names.',
              label: 'Names the number, when no <code>&lt;label for&gt;</code> does.',
              inputId: 'The number’s id, for <code>&lt;label for&gt;</code>.',
              placeholder: 'The number’s placeholder.',
              invalid: 'Marks the number invalid.',
              disabled: 'It can’t be changed.',
              labels: 'Every text it says, to translate.',
            },
          },
          Helpers: {
            summary: 'Functions for phone numbers.',
            members: {
              nuiParsePhone:
                'Reads a number written any way into its region, calling code and national number.',
              nuiFormatPhone: 'Writes a number grouped as its country does, or in E.164.',
              nuiPhoneValid: 'Whether a number has a known calling code and its country’s length.',
            },
          },
        },
        keyboard: [
          ['Letters on the country picker', 'Jump to the countries they start.'],
          ['Enter or Space', 'Open the list of countries, or pick one.'],
          ['Backspace', 'On the number, delete a digit, skipping over spaces and brackets.'],
        ],
        notes: [
          'The country picker is named “Country code” and reads its flag and code. When a calling code or an area code picks a country, the new country is announced.',
          'Name the number with <code>&lt;label for&gt;</code> and <code>inputId</code>, or with <code>label</code>.',
          'The number has <code>autocomplete="tel"</code>, so browsers can fill it in, calling code and all, and phones show a phone keypad.',
        ],
      },
      'color-picker': {
        name: 'Color picker',
        title: 'OKLCH color picker for Angular',
        summary: 'A color in OKLCH, with sliders, swatches, an eyedropper and a contrast check.',
        description:
          'Accessible Angular color picker in OKLCH: wide-gamut P3 colors, every CSS color syntax, swatches, the eyedropper, and a WCAG contrast check.',
        apiDescription:
          'API reference for the Needless UI color picker: nui-color-picker value, format and gamut, swatches and contrast, and helpers for colors.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI color picker: a slider with two values for the area, native sliders, and contrast grades in words.',
        overview: [
          'The color picker works in OKLCH, the perceptual color space of modern CSS. Across the area, chroma runs from gray to the most the screen can show at that lightness, so every point is a color you can use, and the thumb stays put as the hue turns.',
          'The field takes any CSS color, names included, and the format button writes the value as hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> or <code>color(display-p3)</code>. A color outside a format’s gamut is brought into it the CSS way, keeping its lightness and hue.',
          'Add <code>swatches</code> to pick from, and <code>contrastWith</code> to check the color against a background as WCAG 2 measures contrast. Where the browser has an eyedropper, a button picks a color from the screen.',
        ],
        examples: {
          brand: {
            title: 'A brand color',
            text: 'Named swatches, and the contrast of white text on the color: pick a light one, and AA fails.',
          },
          wide: {
            title: 'Wide gamut',
            text: '<code>gamut="p3"</code> fills the area with Display P3 colors, and a dashed line marks where sRGB ends. The value stays in <code>oklch()</code>.',
          },
          popover: {
            title: 'In a popover',
            text: 'A button that shows the color opens the picker in a <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'A color picker in OKLCH.',
            members: {
              value: 'The color, written in the format. Empty until one is picked.',
              format: 'How the value is written.',
              formats: 'The formats the format button goes through.',
              gamut: 'The colors the area holds: sRGB, or Display P3.',
              alpha: 'Shows the opacity slider.',
              swatches: 'Colors to pick from, with names.',
              contrastWith: 'A background to check the contrast against.',
              eyeDropper: 'Shows the eyedropper, where the browser has one.',
              disabled: 'It can’t be changed.',
              labels: 'Every text it says, to translate.',
              color: 'The color picked, in OKLCH.',
            },
          },
          Helpers: {
            summary: 'Functions for colors.',
            members: {
              nuiParseColor: 'Reads a color in any CSS syntax.',
              nuiFormatColor: 'Writes a color in a format.',
              nuiToGamut: 'Brings a color into sRGB or Display P3, as CSS does.',
              nuiContrast: 'The WCAG 2 contrast ratio of a color on a background.',
            },
          },
        },
        keyboard: [
          ['Left and right arrows', 'On the area, less or more chroma.'],
          ['Up and down arrows', 'On the area, lighter or darker.'],
          ['Shift + arrow keys', 'Move ten times as far.'],
          ['Home and End', 'On the area, no chroma or the most.'],
          ['Page Up and Page Down', 'On the area, much lighter or darker.'],
        ],
        notes: [
          'The area’s thumb is a <code>slider</code> named “Color” that says both its values, such as “Lightness 62%, chroma 75%”. Hue and opacity are native range inputs.',
          'Swatches are buttons named by their label, and pressed when they match the color.',
          'AA and AAA say “passes” or “fails” in words, not only by color, and in forced colors mode the colors themselves stay.',
        ],
      },
      carousel: {
        name: 'Carousel',
        title: 'Carousel and slider component for Angular',
        summary: 'Slides in a row that scrolls and snaps, with buttons, dots and rotation.',
        description:
          'Accessible Angular carousel: native scroll snapping and swiping, several slides per view, dots, loop, and rotation that pauses and stops as WCAG asks.',
        apiDescription:
          'API reference for the Needless UI carousel: nui-carousel slides per view, index, loop and rotation, its methods, and the nuiCarouselSlide directive.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI carousel: the WAI-ARIA carousel pattern, a rotation control, named slides and announced moves.',
        overview: [
          'A carousel shows slides in a row that scrolls and snaps: swiping, trackpads and the arrow keys move it natively, and so do its previous and next buttons and its dots. Mark each slide with <code>nuiCarouselSlide</code>, named by its title.',
          'Show one slide at a time or several with <code>perView</code>, or let slides keep their own width with <code>perView="auto"</code>. <code>[(index)]</code> binds the first slide in view, and <code>loop</code> comes back to the start.',
          'With <code>autoplay</code>, it turns by itself behind a rotation control. Rotation pauses under the pointer, and stops for good when keyboard focus comes in, as the WAI-ARIA pattern asks.',
        ],
        examples: {
          featured: {
            title: 'Featured trips',
            text: 'A new slide every six seconds, with the ring on the rotation control filling up to it. Hover to pause the rotation, or tab in to stop it.',
          },
          shelf: {
            title: 'A shelf of cards',
            text: '<code>perView="auto"</code> keeps each card’s width and shows as many as fit. The dots follow a swipe, and <code>[(index)]</code> says where it is.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'A carousel of slides.',
            members: {
              label: 'Names the carousel.',
              index: 'The first slide in view, from 0.',
              perView:
                'Slides in view at once, or <code>auto</code> for slides that set their own width.',
              gap: 'Room between slides, as any CSS length.',
              loop: 'Going past the last slide comes back to the first, and the other way round.',
              autoplay: 'Milliseconds between slides when it turns by itself; 0 doesn’t.',
              'controls, indicators': 'The previous and next buttons, and the dots.',
              labels: 'Every text it says, to translate.',
              'next, previous': 'Moves one slide on or back.',
              goTo: 'Brings a slide into view.',
            },
          },
          NuiCarouselSlide: {
            summary: 'A slide.',
            members: { nuiCarouselSlide: 'Its title, read instead of its position.' },
          },
        },
        keyboard: [
          ['Tab', 'The rotation control, the buttons, the slides, then the dots.'],
          ['Left and right arrows on the slides', 'Scroll to the previous or next slide.'],
          ['Enter or Space', 'Press the focused button or dot.'],
        ],
        notes: [
          'The carousel is a <code>region</code> with <code>aria-roledescription="carousel"</code>, and each slide a <code>group</code> with <code>aria-roledescription="slide"</code>, named such as “Lake Como, 2 of 4”.',
          'The rotation control comes first and says what it will do. Rotation pauses under the pointer and stops when keyboard focus comes in, so it never moves what someone is reading.',
          'Where the carousel lands after a swipe, a button or a dot is announced; rotation stays quiet.',
        ],
      },
      editor: {
        name: 'Rich text editor',
        title: 'Rich text editor component for Angular',
        summary: 'Headings, lists, links and formats, with a toolbar and Markdown as you type.',
        description:
          'Accessible Angular rich text editor: a toolbar, shortcuts, Markdown as you type, clean paste, links and undo, with HTML or Markdown as its value.',
        apiDescription:
          'API reference for the Needless UI rich text editor: nui-editor value and format, toolbar tools, texts, commands, and the HTML and Markdown converters.',
        a11yDescription:
          'Keyboard and accessibility of the Needless UI rich text editor: a multiline textbox, a WAI-ARIA toolbar, shortcuts and a link dialog.',
        overview: [
          'The editor writes paragraphs, headings, quotes, lists, code blocks and dividers, with bold, italic, underline, strikethrough, code and links. Its value is HTML, or Markdown with <code>format="markdown"</code>, and it works with forms.',
          'It keeps its own document and handles every edit, so what’s pasted or dropped reaches the page only as that document: structure and formats stay, from Google Docs and Word too, and scripts, styles and unsafe links go.',
          'Type Markdown and it turns into formats: <code># </code> starts a heading, <code>- </code> a list, and <code>**bold**</code> and <code>`code`</code> format as you close them. Every format has its shortcut and its toolbar button.',
        ],
        examples: {
          comment: {
            title: 'A comment',
            text: '<code>tools</code> picks the toolbar’s buttons. Type Markdown, paste from anywhere, and see the HTML the editor keeps.',
          },
          markdown: {
            title: 'Markdown in and out',
            text: 'With <code>format="markdown"</code>, the value is Markdown: read in with nested lists, quotes and code, and written back as you edit.',
          },
          lists: {
            title: 'Nested lists',
            text: 'Indent and Outdent nest list items, as Tab and Shift + Tab do. The default toolbar has them only on touch screens, which have no Tab key; list them in <code>tools</code> to show them everywhere.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'A rich text editor.',
            members: {
              value: 'The content, as HTML or Markdown; empty when there’s no text.',
              format: 'How the value is written.',
              tools: 'The toolbar’s buttons in order, <code>|</code> between groups.',
              'label, labelledBy, describedBy': 'Name and describe the content.',
              placeholder: 'Shown while it’s empty.',
              'readonly, disabled, invalid':
                'Shows the content without editing; turns it off; marks it invalid.',
              labels: 'Every text it says, to translate.',
              run: 'Runs a toolbar command.',
              'undo, redo, focus': 'Undoes, redoes, and moves focus into the text.',
            },
          },
          Helpers: {
            summary: 'Functions to convert documents.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown': 'Write a document as HTML or Markdown.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'Read HTML or Markdown into a document, keeping what the editor can show.',
            },
          },
        },
        keyboard: [
          ['Ctrl + B, I or U', 'Bold, italic or underline. On Apple devices, ⌘ instead of Ctrl.'],
          ['Ctrl + K', 'Add or edit a link.'],
          ['Ctrl + Alt + 1, 2 or 3', 'A heading; Ctrl + Alt + 0 turns it back into a paragraph.'],
          ['Ctrl + Shift + 7 or 8', 'A numbered or bulleted list.'],
          [
            'Tab and Shift + Tab in a list',
            'Indent or outdent; Shift + Tab turns a top-level item into a paragraph. Elsewhere, Tab leaves the editor.',
          ],
          ['Ctrl + Z, Ctrl + Shift + Z', 'Undo and redo.'],
          ['Left and right arrows in the toolbar', 'Move between its buttons.'],
        ],
        notes: [
          'The content is a <code>textbox</code> with <code>aria-multiline</code>, named by <code>label</code>, with its placeholder in <code>aria-placeholder</code>.',
          'The toolbar is a WAI-ARIA toolbar, one tab stop: formats are toggle buttons with <code>aria-pressed</code>, and each button names its shortcut in <code>aria-keyshortcuts</code> and its tooltip.',
          'A toolbar command sends focus back to the text, and the link dialog returns to it on Escape. Tab never gets stuck: outside lists it leaves the editor.',
          'Touch screens have no Tab key: there, the default toolbar has Indent and Outdent buttons, enabled in lists. A tap on a toolbar button keeps focus in the text, so the on-screen keyboard stays open.',
        ],
      },
    },
  },

  guides: {
    title: 'Guides',
    items: {
      'getting-started': {
        title: 'Getting started',
        description:
          'Install Needless UI in an Angular 22 app: add the packages, import the stylesheet and use your first accessible component in minutes.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI works with Angular 22. Components are standalone directives, so there are no modules to import.',
          },
          { kind: 'h2', id: 'install', text: 'Install' },
          {
            kind: 'p',
            html: 'Add the Angular package together with Angular Aria and the CDK, which provide keyboard and accessibility behavior. The stylesheet comes with it.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Import the styles' },
          {
            kind: 'p',
            html: 'Import the stylesheet once in <code>src/styles.css</code>. It includes the design tokens and every component.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Everything ships inside <code>@layer nui</code>. If your app has global resets such as <code>a { color: inherit }</code>, put them in a layer declared before <code>nui</code> so they don’t override components.',
          },
          { kind: 'h2', id: 'use', text: 'Use a component' },
          {
            kind: 'p',
            html: 'Import the directives you need from their entry points and add them to your component’s <code>imports</code>.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Next steps' },
          {
            kind: 'p',
            html: 'Browse the <a href="/components">components</a> for live examples, or read the <a href="/guides/theming">theming guide</a> to match your brand.',
          },
        ],
      },
      theming: {
        title: 'Theming',
        description:
          'Theme Needless UI with CSS custom properties: light and dark modes, nested themes, token overrides and a regenerated, contrast-checked brand palette.',
        blocks: [
          {
            kind: 'p',
            html: 'Every visual decision is a CSS custom property generated from W3C design tokens. Components only use semantic tokens such as <code>--nui-color-accent-solid</code>, so changing one token restyles every component that uses it.',
          },
          { kind: 'h2', id: 'modes', text: 'Light and dark' },
          {
            kind: 'p',
            html: 'The operating system’s preference picks the mode by default. Pin a mode on any element with <code>data-nui-theme</code>, and nest them freely.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Override tokens' },
          {
            kind: 'p',
            html: 'Tokens live in <code>@layer nui</code>, so plain CSS in your app overrides them. Set them on <code>:root</code> for the whole app, or on any element for one part of it.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'A brand palette' },
          {
            kind: 'p',
            html: 'The color scales are generated. Change a hue in <code>packages/tokens/scripts/palette.ts</code> and regenerate: the script refits every color to sRGB and re-checks the contrast of each text and background pair.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: 'Customization',
        description:
          'Spring physics, press effects, entrances, corner shapes, radius and density: change how Needless UI moves and feels, app-wide or per component.',
        blocks: [
          {
            kind: 'p',
            html: 'Every component has a personality you can change: the spring it moves with, what a button does under your finger, how dialogs and menus arrive, the shape and size of their corners, and how much room they take. Each is one attribute for everything inside an element, or one input for a single component.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'One attribute, a whole subtree' },
          {
            kind: 'p',
            html: 'Put the <code>data-nui-*</code> attributes on <code>&lt;body&gt;</code> for the whole app, or on any element for one part of it. The nearest one wins, so they nest. They only set CSS custom properties, so they work the same with any framework, or none.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'One component' },
          {
            kind: 'p',
            html: 'In Angular, <code>nuiButton</code>, <code>nuiDialog</code> and <code>nuiMenu</code> take the same values as inputs. The inputs you leave unset follow the attributes around them.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Springs, compiled to CSS' },
          {
            kind: 'p',
            html: 'Motion is spring physics: stiffness, damping and mass instead of a duration and a curve. The token compiler solves each spring and writes it into CSS as the time it takes to settle and a <code>linear()</code> easing, so it runs on the compositor without JavaScript. Six springs ship as tokens, from <code>--nui-spring-snappy</code> to <code>--nui-spring-mechanical</code>, and <code>--nui-motion</code> holds the one in use.',
          },
          {
            kind: 'p',
            html: 'Any other spring is one input away. Angular compiles it at runtime with the same solver, and <code>springTransition()</code> gives you the CSS for your own elements.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Anything in between' },
          {
            kind: 'p',
            html: 'The presets are shortcuts. Set the custom properties yourself for anything else: any transform for <code>--nui-press</code> and <code>--nui-enter</code>, any number for <code>--nui-radius-scale</code> and <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Accessibility' },
          {
            kind: 'p',
            html: 'When the system asks for reduced motion, springs collapse to an instant, and presses and entrances stop moving. Density never takes a control below the 24px target size of WCAG 2.2, and no preset touches colors, so every contrast check still holds. Browsers without <code>corner-shape</code> draw every corner round.',
          },
        ],
      },
      'browser-support': {
        title: 'Browser support',
        description:
          'The browsers Needless UI supports and tests: Chrome, Edge, Firefox and Safari versions, phones and touch screens, and what older browsers leave out.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI builds on native elements and recent web platform features, such as the Popover API. It supports the browsers below from the version listed on. In older ones, menus, selects and popovers don’t open.',
          },
          { kind: 'h2', id: 'supported', text: 'Supported browsers' },
          {
            kind: 'table',
            caption: 'Oldest supported versions',
            head: ['Browser', 'From version', 'Needed for'],
            rows: [
              [
                'Chrome and Edge, on computers and Android',
                '120',
                'Icons drawn with CSS masks, and <code>:dir()</code> for right-to-left text',
              ],
              ['Firefox, on computers and Android', '125', 'The Popover API'],
              ['Safari on Mac', '17', 'The Popover API'],
              ['Every browser on iPhone and iPad', 'iOS 17', 'The Popover API'],
              ['Samsung Internet', '25', 'The same as Chrome'],
            ],
          },
          {
            kind: 'p',
            html: 'Other browsers built on Chromium, such as Opera and Brave, follow Chrome’s versions. Angular 22 itself needs Chrome, Edge and Firefox 119 and Safari 17. Internet Explorer and the old Edge, from before Chromium, aren’t supported.',
          },
          { kind: 'h2', id: 'tested', text: 'Tested browsers' },
          {
            kind: 'p',
            html: 'Every change runs each component’s tests in the engines of Chrome, Firefox and Safari. Before a release, each page of these docs is checked in every engine, on a computer and on a phone with touch: it has to start, open each menu and popup, fit the screen and pass the accessibility checks.',
          },
          {
            kind: 'table',
            caption: 'Browsers tested',
            head: ['Engine', 'Version', 'Tested on'],
            rows: [
              ['Chromium (Chrome, Edge)', '153', 'A computer, and an Android phone with touch'],
              ['Firefox', '155', 'A computer, and a phone-sized touch screen'],
              ['WebKit (Safari)', '26.6', 'A computer, and an iPhone with touch'],
              ['Safari on iPhone', 'iOS 17.5 and 18.6', 'The iPhone simulator'],
            ],
          },
          {
            kind: 'p',
            html: 'Versions between the oldest supported and the ones tested aren’t tested one by one: they’re supported because they have every feature the components need.',
          },
          { kind: 'h2', id: 'newer', text: 'Extras in newer browsers' },
          {
            kind: 'p',
            html: 'A few details use features only newer browsers have. Other browsers leave them out, and nothing breaks:',
          },
          {
            kind: 'table',
            caption: 'Details that need newer browsers',
            head: ['Detail', 'Browsers', 'Elsewhere'],
            rows: [
              [
                'Popovers, menus and dialogs animate in and out',
                'Chrome and Edge, Firefox 129, Safari 17.5',
                'They appear and disappear at once',
              ],
              [
                'Squircle corners (<code>corner-shape</code>)',
                'Chrome and Edge 139',
                'Round corners',
              ],
              [
                'Picking a color from anywhere on the screen',
                'Chrome and Edge on computers',
                'No eyedropper button',
              ],
              ['Choosing a whole folder in the dropzone', 'Browsers on computers', 'Files only'],
              [
                'The ring of the carousel’s rotation control fills smoothly',
                'Chrome and Edge, Firefox 128, Safari',
                'It fills at once',
              ],
              [
                'Android’s back gesture closes menus, combobox lists and hovercards, and ends tours',
                'Chrome and Edge 126, Firefox 149',
                'The back gesture goes to the previous page',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Phones and touch screens' },
          {
            kind: 'p',
            html: 'Every component works with touch. Splitter handles, the color area, column edges and toasts follow a finger without scrolling the page, the carousel swipes with the browser’s own scrolling, and a long press picks a scheduler event up. On touch screens, fields have at least 16px of text, so iPhones don’t zoom in on them, and words from keyboards that compose them, as Android keyboards do, arrive whole.',
          },
          {
            kind: 'p',
            html: 'Touch screens can’t hover, so a hovercard only adds to what’s on the page: don’t put anything essential in one. On a phone, the chat’s Return key makes a new line, and its button sends.',
          },
          { kind: 'h2', id: 'keyboard', text: 'The keyboard in Safari' },
          {
            kind: 'p',
            html: 'By default, the Tab key in Safari moves only between text fields and pop-up menus. To reach every button and link, turn on “Press Tab to highlight each item on a webpage” in Safari’s Advanced settings, or press Option-Tab. Safari also doesn’t focus a button when it’s clicked; the components make up for that, so the keyboard carries on after a click as in other browsers.',
          },
        ],
      },
    },
    playground: {
      label: 'Customization playground',
      motion: 'Motion',
      custom: 'custom',
      stiffness: 'Stiffness',
      damping: 'Damping',
      mass: 'Mass',
      press: 'Press',
      enter: 'Entrance',
      corners: 'Corners',
      radius: 'Radius',
      density: 'Density',
      surprise: 'Surprise me',
      reset: 'Back to defaults',
      hint: 'Press and hold a button, then let go. Open the dialog and the menu to watch them arrive.',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      openDialog: 'Open dialog',
      openMenu: 'Open menu',
      menu: ['Rename', 'Duplicate', 'Delete'],
      dialogTitle: 'Needlessly animated',
      dialogText: 'This dialog arrived exactly the way you told it to.',
      close: 'Close',
      curve:
        'The spring’s position over time. It starts at the bottom and comes to rest on the dashed line.',
      settles: (ms, overshoot) => `Settles in ${ms} ms · overshoots by ${overshoot}%`,
      instant: 'No motion: everything jumps straight to where it’s going.',
      stuck:
        'This spring doesn’t settle within 10 seconds. Add damping or stiffness; meanwhile the components keep the last one that did.',
      reducedMotion:
        'Your system asks for reduced motion, so nothing here moves. Springs, presses and entrances come back when it doesn’t.',
      noCornerShape: 'This browser can’t draw corner shapes yet, so every corner stays round.',
      everywhere: 'On any element, for everything inside it:',
      oneComponent: 'On one component, in Angular:',
    },
  },

  notFound: {
    title: 'Page not found',
    description:
      'This page doesn’t exist. Browse the Needless UI components or start from the home page.',
    text: 'This page doesn’t exist, or it has moved.',
    home: 'Go to the home page',
    components: 'Browse components',
  },

  legal: {
    translationNote: '',
    labels: { name: 'Name', address: 'Address', email: 'Email', uid: 'UID', vat: 'VAT number' },
    notice: {
      title: 'Legal notice',
      description:
        'Who runs needlessui.com: the operator’s name, postal address and email, with the commercial register and VAT details.',
      operator: 'Operator',
      legalForm: 'sole proprietorship',
      country: 'Switzerland',
      register: 'Commercial register',
      registerEntry: 'Registered in the commercial register of the Canton of Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Liability' },
        {
          kind: 'p',
          html: 'This site is written with care, but without any guarantee that it is accurate, complete or current. Linked websites are outside our control; their operators are responsible for their content.',
        },
        { kind: 'h2', id: 'license', text: 'License' },
        {
          kind: 'p',
          html: 'Needless UI, this site included, is open source under the <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">MIT License</a>.',
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      description:
        'How needlessui.com handles personal data: no cookies, no analytics, no tracking. What the host processes when you visit, and your rights.',
      updated: 'Last updated: 24 September 2026',
      blocks: [
        {
          kind: 'p',
          html: 'This policy explains which personal data is processed when you visit www.needlessui.com, and what your rights are. In short: the site uses no cookies, analytics or tracking, and never asks you for personal data.',
        },
        { kind: 'h2', id: 'controller', text: 'Who is responsible' },
        {
          kind: 'p',
          html: 'The operator named in the <a href="/legal">legal notice</a>, Angelo Lamonaca. Contact: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Hosting' },
        {
          kind: 'p',
          html: 'The site is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. When you open a page, your browser sends the technical data every website receives: your IP address, the date and time, the page requested, the page you came from and your browser’s user agent. Vercel processes this data on our behalf to deliver the site and keep it secure, and keeps it only as long as that requires. It may do so in the USA; Vercel is certified under the EU-U.S. Data Privacy Framework, its UK Extension and the Swiss-U.S. Data Privacy Framework. See <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy notice</a>.',
        },
        {
          kind: 'p',
          html: 'Where the GDPR applies, the legal basis is our legitimate interest in running a secure website (Art. 6(1)(f) GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookies and local storage' },
        {
          kind: 'p',
          html: 'The site sets no cookies. If you pick a light or dark theme, your browser’s local storage remembers the choice for your next visit. It never leaves your device; switch back to System or clear the site’s data to remove it.',
        },
        { kind: 'h2', id: 'tracking', text: 'No tracking' },
        {
          kind: 'p',
          html: 'There are no analytics, ads, social media plugins, embedded third-party content or external fonts. Links to GitHub and npm lead to sites with their own privacy policies.',
        },
        { kind: 'h2', id: 'rights', text: 'Your rights' },
        {
          kind: 'p',
          html: 'You can ask what personal data about you is processed, and have it corrected or deleted. Where the GDPR applies, you can also object to processing, ask for it to be restricted, and receive your data in a portable format. Write to {email}. You can also complain to a supervisory authority: in Switzerland, the Federal Data Protection and Information Commissioner (FDPIC); in the EU, the authority of your country.',
        },
        { kind: 'h2', id: 'changes', text: 'Changes' },
        {
          kind: 'p',
          html: 'This policy changes when the site does, for example when it moves to a new host. The date below shows the current version.',
        },
      ],
    },
  },
};

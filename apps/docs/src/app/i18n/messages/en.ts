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
        title: 'Standard design tokens',
        text: 'W3C DTCG token files compile to CSS custom properties with light, dark and nested themes.',
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
      kinds: { input: 'Input', model: 'Two-way', output: 'Output', method: 'Method' },
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

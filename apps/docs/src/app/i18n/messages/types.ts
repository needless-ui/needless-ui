import type { ComponentId, GuideId } from '../../docs/ids';

/**
 * Shape of every language's content. Each locale file is typed with it, so a
 * missing or misspelled key fails the build.
 *
 * Strings marked `html` may contain inline markup (`<code>`, `<a>`, `<strong>`).
 * Site links in them never carry a language prefix (`href="/legal"`): the page's
 * language is added when the messages load.
 */
export interface Messages {
  site: {
    name: string;
    tagline: string;
    description: string;
    skipToContent: string;
    nav: {
      label: string;
      home: string;
      components: string;
      guides: string;
      github: string;
      language: string;
      theme: string;
      themes: { system: string; light: string; dark: string };
    };
    footer: { license: string; source: string; built: string; legal: string; privacy: string };
    /** The big red button: its label, accessible names and status messages. */
    emergency: {
      label: string;
      cover: string;
      button: string;
      armed: string;
      falling: string;
      fallen: string;
      reduced: string;
    };
    /** The region where toasts appear, and its close buttons. */
    toaster: { label: string; close: string };
  };
  home: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    /** html */
    lead: string;
    getStarted: string;
    browse: string;
    featuresTitle: string;
    /** `text` is html */
    features: { title: string; text: string }[];
    codeTitle: string;
    codeText: string;
  };
  components: {
    title: string;
    description: string;
    intro: string;
    tabsLabel: string;
    tabs: { overview: string; api: string; accessibility: string };
    sidenavLabel: string;
    onThisPage: string;
    example: { showCode: string; hideCode: string; copy: string; copied: string; files: string };
    api: {
      import: string;
      selector: string;
      exportAs: string;
      members: string;
      name: string;
      type: string;
      default: string;
      description: string;
      kinds: { input: string; model: string; output: string; method: string; property: string };
      /** Before the list of an API's text inputs. */
      texts: string;
      /** The customization inputs every component shares. */
      customization: {
        /** html, shown under each table that lists them */
        note: string;
        /** html */
        members: Record<
          'motion' | 'spring' | 'press' | 'enter' | 'corners' | 'radius' | 'density',
          string
        >;
      };
    };
    a11y: { keyboard: string; key: string; action: string; notes: string };
    titles: { api: (name: string) => string; accessibility: (name: string) => string };
    items: Record<ComponentId, ComponentText>;
  };
  guides: {
    title: string;
    items: Record<GuideId, GuideText>;
    playground: PlaygroundText;
  };
  notFound: { title: string; description: string; text: string; home: string; components: string };
  legal: {
    /** Shown on the legal pages in every language but English: the English text prevails. */
    translationNote: string;
    labels: { name: string; address: string; email: string; uid: string; vat: string };
    notice: LegalText & {
      operator: string;
      legalForm: string;
      country: string;
      register: string;
      registerEntry: string;
      /** Suffix of the Swiss VAT number in this language: MWST, TVA or IVA. */
      vatSuffix: string;
    };
    privacy: LegalText & { updated: string };
  };
}

export interface ComponentText {
  name: string;
  /** Search result title for the overview page (without the site name). */
  title: string;
  /** One line, for the card grid and the page lead. */
  summary: string;
  /** Meta descriptions, 50–160 characters. */
  description: string;
  apiDescription: string;
  a11yDescription: string;
  /** html paragraphs */
  overview: string[];
  examples: Record<string, { title: string; text: string }>;
  /** Directive name → summary and member descriptions (html). */
  api: Record<string, { summary: string; members: Record<string, string> }>;
  keyboard: [key: string, action: string][];
  /** html */
  notes: string[];
}

export type ProseBlock = { kind: 'p'; html: string } | { kind: 'h2'; id: string; text: string };

export type GuideBlock =
  | ProseBlock
  | { kind: 'code'; file: string }
  | { kind: 'demo'; demo: 'nested-themes' | 'playground' }
  /** A table: `caption` names it for screen readers, the first cell of each row heads it; cells are html. */
  | { kind: 'table'; caption: string; head: string[]; rows: string[][] };

export interface LegalText {
  title: string;
  /** Meta description, 50–160 characters. */
  description: string;
  /** html; `{email}` becomes a link to the operator's email address. */
  blocks: ProseBlock[];
}

export interface GuideText {
  title: string;
  description: string;
  blocks: GuideBlock[];
}

/** The customization playground. Preset names (jelly, squish, …) stay in English: they're API values. */
export interface PlaygroundText {
  /** Accessible name of the whole playground. */
  label: string;
  motion: string;
  /** The motion option for springs tuned with the sliders. */
  custom: string;
  stiffness: string;
  damping: string;
  mass: string;
  press: string;
  enter: string;
  corners: string;
  radius: string;
  density: string;
  surprise: string;
  reset: string;
  hint: string;
  save: string;
  cancel: string;
  delete: string;
  openDialog: string;
  openMenu: string;
  /** The demo menu's items: rename, duplicate, delete. */
  menu: [string, string, string];
  dialogTitle: string;
  dialogText: string;
  close: string;
  /** Accessible name of the drawing of the spring's curve. */
  curve: string;
  settles: (ms: number, overshoot: number) => string;
  /** Shown instead of `settles` for the motion preset none. */
  instant: string;
  /** Shown when the sliders make a spring that never settles. */
  stuck: string;
  reducedMotion: string;
  noCornerShape: string;
  /** Captions of the two code samples. */
  everywhere: string;
  oneComponent: string;
}

/**
 * Shape of every language's content. Each locale file is typed with it, so a
 * missing or misspelled key fails the build.
 *
 * Strings marked `html` may contain inline markup (`<code>`, `<a>`, `<strong>`).
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
      kinds: { input: string; model: string; output: string; method: string };
    };
    a11y: { keyboard: string; key: string; action: string; notes: string };
    titles: { api: (name: string) => string; accessibility: (name: string) => string };
    items: Record<'button' | 'dialog' | 'menu', ComponentText>;
  };
  guides: {
    title: string;
    items: Record<'getting-started' | 'theming', GuideText>;
  };
  notFound: { title: string; description: string; text: string; home: string; components: string };
  legal: {
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
  ProseBlock | { kind: 'code'; file: string } | { kind: 'demo'; demo: 'nested-themes' };

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

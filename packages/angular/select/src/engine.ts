import { computed, linkedSignal, signal, type WritableSignal } from '@angular/core';
import { nuiFuzzyMatch, nuiHighlight } from '@needless-ui/angular';

/** One choice. Options with `children` make a tree. */
export interface NuiOption<V = unknown> {
  value: V;
  label: string;
  /** Secondary text under the label. */
  description?: string;
  /** Options with the same group are listed under that heading, in order. */
  group?: string;
  /** More words the search matches, such as synonyms or codes. */
  keywords?: readonly string[];
  disabled?: boolean;
  children?: readonly NuiOption<V>[];
}

/** A row as rendered: an option, or a group heading. */
export interface NuiOptionRow<V = unknown> {
  readonly kind: 'option' | 'group';
  /** Stable across renders, for `track`. */
  readonly key: string;
  readonly label: string;
  /** The label split into matched and unmatched parts while searching. */
  readonly parts: readonly { text: string; match: boolean }[];
  readonly option?: NuiOption<V>;
  /** The group heading this option sits under. */
  readonly group?: string;
  /** Nesting level in a tree, from 0. */
  readonly depth: number;
  /** Labels of the ancestors, shown with search results from a tree. */
  readonly path: readonly string[];
  readonly expandable: boolean;
  readonly expanded: boolean;
  /** Position among the option rows, from 1, for `aria-posinset`. */
  readonly position: number;
  /** An extra row, such as “Add …”: an action rather than a choice. */
  readonly action?: boolean;
}

/** Finds the options that hold the given values, anywhere in a tree. */
export function nuiFindOptions<V>(
  options: readonly NuiOption<V>[],
  matches: (value: V) => boolean,
): NuiOption<V>[] {
  const found: NuiOption<V>[] = [];
  const walk = (list: readonly NuiOption<V>[]) =>
    list.forEach((option) => {
      if (matches(option.value)) found.push(option);
      if (option.children) walk(option.children);
    });
  walk(options);
  return found;
}

const TYPEAHEAD_RESET = 500;

interface Entry<V> {
  option: NuiOption<V>;
  path: readonly string[];
  depth: number;
  key: string;
}

/**
 * The model behind every list of options: it filters (fuzzy, with highlights),
 * flattens groups and trees into rows ready to render or virtualize, and keeps
 * track of the active row for `aria-activedescendant`. It has no DOM, so the
 * select, the combobox and the command palette share it.
 */
export class NuiOptionEngine<V> {
  readonly options: WritableSignal<readonly NuiOption<V>[]>;
  readonly query = signal('');
  /** Whether typing filters the list. Turn off when the options come filtered from a server. */
  readonly filtering: WritableSignal<boolean>;
  /** Options listed last whatever the query, such as a "Create …" row. */
  readonly extra: WritableSignal<readonly NuiOption<V>[]>;
  /** Tree options whose children are shown. */
  readonly expanded = signal<ReadonlySet<NuiOption<V>>>(new Set());
  /** Whether options with children browse as a tree, or as one flat list with their paths. */
  readonly tree = signal(true);

  /**
   * Each of `options`, `filtering` and `extra` can follow a signal (an input, say)
   * and still be set by hand.
   */
  constructor(
    from: {
      options?: () => readonly NuiOption<V>[];
      filtering?: () => boolean;
      extra?: () => readonly NuiOption<V>[];
    } = {},
  ) {
    this.options = linkedSignal(from.options ?? (() => []));
    this.filtering = linkedSignal(from.filtering ?? (() => true));
    this.extra = linkedSignal(from.extra ?? (() => []));
  }

  /** Every option, depth first, with its path and a stable key. */
  private readonly entries = computed(() => {
    const entries: Entry<V>[] = [];
    const walk = (options: readonly NuiOption<V>[], path: readonly string[], prefix: string) =>
      options.forEach((option, i) => {
        const key = `${prefix}${i}`;
        entries.push({ option, path, depth: path.length, key });
        if (option.children) walk(option.children, [...path, option.label], `${key}.`);
      });
    walk(this.options(), [], '');
    return entries;
  });

  readonly rows = computed<readonly NuiOptionRow<V>[]>(() => {
    const query = this.query().trim();
    const rows = query && this.filtering() ? this.searchRows(query) : this.browseRows();
    const extra = this.extra();
    if (!extra.length) return rows;
    let position = rows.reduce((last, row) => Math.max(last, row.position), 0);
    return [
      ...rows,
      ...extra.map((option, i) => ({
        ...this.flat(option, `extra:${i}`, [], ++position),
        action: true,
      })),
    ];
  });

  /** Number of option rows, for `aria-setsize`. */
  readonly size = computed(() => this.rows().filter((row) => row.kind === 'option').length);

  /** Index of the active row, or -1. Goes back to the first option whenever the rows change. */
  readonly active = linkedSignal<readonly NuiOptionRow<V>[], number>({
    source: this.rows,
    computation: (rows, previous) => {
      // Keep the same option active when the list only grew or shrank around it.
      const kept = previous && previous.source[previous.value]?.key;
      const same = kept ? rows.findIndex((row) => row.key === kept) : -1;
      if (same >= 0 && !this.query()) return same;
      return rows.findIndex((row) => row.kind === 'option');
    },
  });

  readonly activeRow = computed(() => this.rows()[this.active()]);

  private typed = '';
  private typedAt = 0;

  /**
   * Moves the active row by `delta` options, skipping headings. It stops at the
   * ends, or with `wrap` a single step goes around to the other end.
   */
  move(delta: number, wrap = false): void {
    const rows = this.rows();
    const options = rows.flatMap((row, index) => (row.kind === 'option' ? [index] : []));
    if (!options.length) return;
    const at = options.indexOf(this.active());
    const last = options.length - 1;
    let next = at < 0 ? (delta > 0 ? 0 : last) : at + delta;
    if (wrap && Math.abs(delta) === 1) next = (next + options.length) % options.length;
    this.active.set(options[Math.max(0, Math.min(last, next))]);
  }

  first(): void {
    const index = this.rows().findIndex((row) => row.kind === 'option');
    if (index >= 0) this.active.set(index);
  }

  last(): void {
    const rows = this.rows();
    for (let index = rows.length - 1; index >= 0; index--) {
      if (rows[index].kind === 'option') return this.active.set(index);
    }
  }

  /** Activates a row by its index. */
  activate(index: number): void {
    if (this.rows()[index]?.kind === 'option') this.active.set(index);
  }

  /**
   * Type-to-jump for lists without a search field: characters typed in quick
   * succession make a prefix, and the next option starting with it becomes active.
   */
  typeahead(char: string, now = Date.now()): void {
    this.typed = now - this.typedAt > TYPEAHEAD_RESET ? char : this.typed + char;
    this.typedAt = now;
    const needle = this.typed.toLocaleLowerCase();
    const rows = this.rows();
    const start = this.active();
    // Repeating one letter cycles through the options that start with it.
    const cycling = [...needle].every((c) => c === needle[0]);
    const prefix = cycling ? needle[0] : needle;
    for (let step = cycling ? 1 : 0; step <= rows.length; step++) {
      const index = (start + step + rows.length) % rows.length;
      const row = rows[index];
      if (row.kind === 'option' && row.label.toLocaleLowerCase().startsWith(prefix)) {
        this.active.set(index);
        return;
      }
    }
  }

  /** Shows or hides a tree option's children. */
  toggleExpanded(option: NuiOption<V>, expanded = !this.expanded().has(option)): void {
    this.expanded.update((set) => {
      const next = new Set(set);
      if (expanded) next.add(option);
      else next.delete(option);
      return next;
    });
  }

  /** Expands the parents of a tree option, so its row shows. */
  reveal(option: NuiOption<V>): void {
    const parents: NuiOption<V>[] = [];
    const find = (options: readonly NuiOption<V>[]): boolean =>
      options.some((candidate) => {
        if (candidate === option) return true;
        if (candidate.children && find(candidate.children)) {
          parents.push(candidate);
          return true;
        }
        return false;
      });
    const expanded = this.expanded();
    if (find(this.options()) && parents.some((parent) => !expanded.has(parent))) {
      this.expanded.set(new Set([...expanded, ...parents]));
    }
  }

  private browseRows(): NuiOptionRow<V>[] {
    const rows: NuiOptionRow<V>[] = [];
    const expanded = this.expanded();
    let group: string | undefined;
    let position = 0;
    // Children of collapsed parents are skipped: track the depth that's hidden.
    let hiddenBelow = Infinity;
    const tree = this.tree();
    for (const { option, path, depth, key } of this.entries()) {
      if (depth > hiddenBelow) continue;
      hiddenBelow = Infinity;
      if (depth === 0 && option.group !== group) {
        group = option.group;
        if (group) rows.push(this.heading(group));
      }
      if (!tree) {
        rows.push(this.flat(option, key, path, ++position));
        continue;
      }
      const expandable = !!option.children?.length;
      const open = expandable && expanded.has(option);
      if (expandable && !open) hiddenBelow = depth;
      rows.push({
        kind: 'option',
        key,
        label: option.label,
        parts: [{ text: option.label, match: false }],
        option,
        group: depth === 0 ? group : undefined,
        depth,
        path,
        expandable,
        expanded: open,
        position: ++position,
      });
    }
    return rows;
  }

  private searchRows(query: string): NuiOptionRow<V>[] {
    const scored: { entry: Entry<V>; score: number; positions: number[] }[] = [];
    for (const entry of this.entries()) {
      const { option } = entry;
      const onLabel = nuiFuzzyMatch(query, option.label);
      const onKeywords = (option.keywords ?? [])
        .map((keyword) => nuiFuzzyMatch(query, keyword))
        .reduce<number | null>(
          (best, match) => (match ? Math.max(best ?? -Infinity, match.score) : best),
          null,
        );
      if (!onLabel && onKeywords === null) continue;
      scored.push({
        entry,
        // A keyword hit counts, but a little less than a label hit.
        score: Math.max(onLabel?.score ?? -Infinity, (onKeywords ?? -Infinity) - 2),
        positions: onLabel?.positions ?? [],
      });
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.map(({ entry, positions }, i) =>
      this.flat(entry.option, entry.key, entry.path, i + 1, positions),
    );
  }

  /** A row outside the tree: search results and flat lists, where the path says where it lives. */
  private flat(
    option: NuiOption<V>,
    key: string,
    path: readonly string[],
    position: number,
    positions: readonly number[] = [],
  ): NuiOptionRow<V> {
    return {
      kind: 'option',
      key,
      label: option.label,
      parts: nuiHighlight(option.label, positions),
      option,
      group: path.length ? undefined : option.group,
      depth: 0,
      path,
      expandable: false,
      expanded: false,
      position,
    };
  }

  private heading(label: string): NuiOptionRow<V> {
    return {
      kind: 'group',
      key: `group:${label}`,
      label,
      parts: [{ text: label, match: false }],
      depth: 0,
      path: [],
      expandable: false,
      expanded: false,
      position: 0,
    };
  }
}

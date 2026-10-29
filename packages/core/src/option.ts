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

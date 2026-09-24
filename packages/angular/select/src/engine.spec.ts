import { type NuiOption, NuiOptionEngine } from './engine';

const fruits: NuiOption<string>[] = [
  { value: 'apple', label: 'Apple', group: 'Pome' },
  { value: 'pear', label: 'Pear', group: 'Pome' },
  { value: 'cherry', label: 'Cherry', group: 'Drupe', keywords: ['sour cherry'] },
  { value: 'peach', label: 'Peach', group: 'Drupe', disabled: true },
];

const tree: NuiOption<string>[] = [
  {
    value: 'europe',
    label: 'Europe',
    children: [
      { value: 'it', label: 'Italy' },
      { value: 'ch', label: 'Switzerland' },
    ],
  },
  { value: 'asia', label: 'Asia', children: [{ value: 'jp', label: 'Japan' }] },
];

function engine<V>(options: NuiOption<V>[]) {
  const model = new NuiOptionEngine<V>();
  model.options.set(options);
  return model;
}

describe('NuiOptionEngine', () => {
  it('lists options under their group headings', () => {
    const model = engine(fruits);
    expect(model.rows().map((row) => `${row.kind}:${row.label}`)).toEqual([
      'group:Pome',
      'option:Apple',
      'option:Pear',
      'group:Drupe',
      'option:Cherry',
      'option:Peach',
    ]);
    expect(model.size()).toBe(4);
    expect(model.rows()[4].position).toBe(3);
    expect(model.activeRow()?.label).toBe('Apple');
  });

  it('filters fuzzily, best match first, with highlights and keywords', () => {
    const model = engine(fruits);
    model.query.set('ch');
    const labels = model.rows().map((row) => row.label);
    expect(labels).toEqual(['Cherry', 'Peach']);
    expect(model.rows()[0].parts[0]).toEqual({ text: 'Ch', match: true });
    model.query.set('sour');
    expect(model.rows().map((row) => row.label)).toEqual(['Cherry']);
    expect(model.activeRow()?.label).toBe('Cherry');
  });

  it('moves between options, skipping headings and stopping at the ends', () => {
    const model = engine(fruits);
    model.move(1);
    expect(model.activeRow()?.label).toBe('Pear');
    model.move(1);
    expect(model.activeRow()?.label).toBe('Cherry');
    model.move(10);
    expect(model.activeRow()?.label).toBe('Peach');
    model.first();
    expect(model.activeRow()?.label).toBe('Apple');
    model.last();
    expect(model.activeRow()?.label).toBe('Peach');
    model.move(1, true);
    expect(model.activeRow()?.label).toBe('Apple');
    model.move(-1, true);
    expect(model.activeRow()?.label).toBe('Peach');
  });

  it('lists a tree flat, and extra rows last whatever the query', () => {
    const model = engine(tree);
    model.tree.set(false);
    expect(model.rows().map((row) => `${row.label}:${row.path.join('/')}`)).toEqual([
      'Europe:',
      'Italy:Europe',
      'Switzerland:Europe',
      'Asia:',
      'Japan:Asia',
    ]);
    model.extra.set([{ value: 'new', label: 'Add “Jap”' }]);
    model.query.set('jap');
    expect(model.rows().map((row) => row.label)).toEqual(['Japan', 'Add “Jap”']);
    expect(model.rows()[1].position).toBe(2);
  });

  it('expands the parents of an option to reveal it', () => {
    const model = engine(tree);
    const italy = tree[0].children![0];
    model.reveal(italy);
    expect(model.rows().map((row) => row.label)).toEqual([
      'Europe',
      'Italy',
      'Switzerland',
      'Asia',
    ]);
  });

  it('jumps by typed prefix, and cycles when one letter repeats', () => {
    const model = engine(fruits);
    model.typeahead('p', 0);
    expect(model.activeRow()?.label).toBe('Pear');
    model.typeahead('p', 100);
    expect(model.activeRow()?.label).toBe('Peach');
    model.typeahead('c', 1000);
    expect(model.activeRow()?.label).toBe('Cherry');
    model.typeahead('a', 2000);
    model.typeahead('p', 2100);
    expect(model.activeRow()?.label).toBe('Apple');
  });

  it('shows tree children when expanded, and search results with their path', () => {
    const model = engine(tree);
    expect(model.rows().map((row) => row.label)).toEqual(['Europe', 'Asia']);
    expect(model.rows()[0].expandable).toBe(true);
    model.toggleExpanded(tree[0]);
    expect(model.rows().map((row) => `${row.depth}:${row.label}`)).toEqual([
      '0:Europe',
      '1:Italy',
      '1:Switzerland',
      '0:Asia',
    ]);
    model.query.set('jap');
    expect(model.rows()).toHaveLength(1);
    expect(model.rows()[0].path).toEqual(['Asia']);
    expect(model.rows()[0].depth).toBe(0);
  });

  it('keeps the active option when the rows change around it', () => {
    const model = engine(tree);
    model.move(1);
    expect(model.activeRow()?.label).toBe('Asia');
    model.toggleExpanded(tree[0]);
    expect(model.activeRow()?.label).toBe('Asia');
  });
});

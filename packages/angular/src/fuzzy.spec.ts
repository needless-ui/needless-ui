import { nuiFuzzyMatch, nuiHighlight } from './fuzzy';

describe('nuiFuzzyMatch', () => {
  it('matches characters in order, ignoring case and accents', () => {
    expect(nuiFuzzyMatch('ngb', 'Angular Button')?.positions).toEqual([1, 2, 8]);
    expect(nuiFuzzyMatch('cafe', 'Café Crème')).not.toBeNull();
    expect(nuiFuzzyMatch('xyz', 'Angular Button')).toBeNull();
    expect(nuiFuzzyMatch('', 'anything')).toEqual({ score: 0, positions: [] });
  });

  it('ranks word starts, runs and prefixes higher', () => {
    const score = (text: string) => nuiFuzzyMatch('dt', text)!.score;
    expect(score('Date time')).toBeGreaterThan(score('edit'));
    expect(nuiFuzzyMatch('ital', 'Italy')!.score).toBeGreaterThan(
      nuiFuzzyMatch('ital', 'Digital')!.score,
    );
    expect(nuiFuzzyMatch('ch', 'Chile')!.score).toBeGreaterThan(
      nuiFuzzyMatch('ch', 'Czech Republic')!.score,
    );
  });

  it('prefers a compact match to a scattered one', () => {
    expect(nuiFuzzyMatch('bu', 'Big button')?.positions).toEqual([4, 5]);
  });
});

describe('nuiHighlight', () => {
  it('splits text into matched and unmatched runs', () => {
    expect(nuiHighlight('Button', [0, 1, 4])).toEqual([
      { text: 'Bu', match: true },
      { text: 'tt', match: false },
      { text: 'o', match: true },
      { text: 'n', match: false },
    ]);
  });
});

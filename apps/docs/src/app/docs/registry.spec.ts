import { LOADERS } from '../i18n/i18n';
import { LOCALES } from '../i18n/locales';
import { REACT_IDS } from './ids';
import { reactApi } from './registry';

describe('React API pages', () => {
  it('describe every entry and member, in every language', async () => {
    for (const locale of LOCALES) {
      const { messages } = await LOADERS[locale]();
      for (const id of REACT_IDS) {
        for (const entry of reactApi(id, messages)) {
          expect(entry.summary, `${locale}: ${id} ${entry.name}`).not.toBe('');
          for (const member of entry.members) {
            expect(member.description, `${locale}: ${id} ${entry.name}.${member.name}`).not.toBe(
              '',
            );
          }
        }
      }
    }
  });
});

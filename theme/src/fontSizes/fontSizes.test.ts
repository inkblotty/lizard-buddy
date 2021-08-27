import getFontSizes from './index';

import backupFontSizes from './backupFontSizes';
import XXFontSizes from './XX';

describe('FontSizes', () => {
  test('returns the backups if no code is passed in', () => {
    const outputFontSizes = getFontSizes();
    expect(outputFontSizes).toEqual(backupFontSizes);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputFontSizes = getFontSizes('boop');
    expect(outputFontSizes).toEqual(backupFontSizes);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputFontSizes = getFontSizes('XX');
    expect(outputFontSizes).toEqual(XXFontSizes);
  });
});

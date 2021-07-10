import getColors from './index';

import backupColors from './backupColors';
import XXColors from './XX';

describe('Colors', () => {
  test('returns the backups if no code is passed in', () => {
    const outputColors = getColors();
    expect(outputColors).toEqual(backupColors);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputColors = getColors('boop');
    expect(outputColors).toEqual(backupColors);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputColors = getColors('XX');
    expect(outputColors).toEqual(XXColors);
  });
});

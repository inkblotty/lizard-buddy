import getBorderWidths from './index';

import backupBorderWidths from './backupBorderWidths';
import XXBorderWidths from './XX';

describe('BorderWidths', () => {
  test('returns the backups if no code is passed in', () => {
    const outputBorderWidths = getBorderWidths();
    expect(outputBorderWidths).toEqual(backupBorderWidths);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputBorderWidths = getBorderWidths('boop');
    expect(outputBorderWidths).toEqual(backupBorderWidths);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputBorderWidths = getBorderWidths('XX');
    expect(outputBorderWidths).toEqual(XXBorderWidths);
  });
});

import getSpacing from './index';

import backupSpacing from './backupSpacing';
import XXSpacing from './XX';

describe('Spacing', () => {
  test('returns the backups if no code is passed in', () => {
    const outputSpacing = getSpacing();
    expect(outputSpacing).toEqual(backupSpacing);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputSpacing = getSpacing('boop');
    expect(outputSpacing).toEqual(backupSpacing);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputSpacing = getSpacing('XX');
    expect(outputSpacing).toEqual(XXSpacing);
  });
});

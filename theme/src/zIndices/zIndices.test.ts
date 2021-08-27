import getZIndices from './index';

import backupZIndices from './backupZIndices';
import XXZIndices from './XX';

describe('ZIndices', () => {
  test('returns the backups if no code is passed in', () => {
    const outputZIndices = getZIndices();
    expect(outputZIndices).toEqual(backupZIndices);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputZIndices = getZIndices('boop');
    expect(outputZIndices).toEqual(backupZIndices);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputZIndices = getZIndices('XX');
    expect(outputZIndices).toEqual(XXZIndices);
  });
});
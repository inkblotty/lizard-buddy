import getElevations from './index';

import backupElevations from './backupShadows';
import XXElevations from './XX';

describe('Elevations', () => {
  test('returns the backups if no code is passed in', () => {
    const outputElevations = getElevations();
    expect(outputElevations).toEqual(backupElevations);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputElevations = getElevations('boop');
    expect(outputElevations).toEqual(backupElevations);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputElevations = getElevations('XX');
    expect(outputElevations).toEqual(XXElevations);
  });
});

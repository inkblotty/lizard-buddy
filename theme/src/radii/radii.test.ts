import getRadii from './index';

import backupRadii from './backupRadii';
import XXRadii from './XX';

describe('Radii', () => {
  test('returns the backups if no code is passed in', () => {
    const outputRadii = getRadii();
    expect(outputRadii).toEqual(backupRadii);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputRadii = getRadii('boop');
    expect(outputRadii).toEqual(backupRadii);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputRadii = getRadii('XX');
    expect(outputRadii).toEqual(XXRadii);
  });
});

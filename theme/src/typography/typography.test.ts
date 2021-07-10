import getTypography from './index';

import backupTypography from './backupTypography';
import XXTypography from './XX';

describe('Typography', () => {
  test('returns the backups if no code is passed in', () => {
    const outputTypography = getTypography();
    expect(outputTypography).toEqual(backupTypography);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputTypography = getTypography('boop');
    expect(outputTypography).toEqual(backupTypography);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputTypography = getTypography('XX');
    expect(outputTypography).toEqual(XXTypography);
  });
});

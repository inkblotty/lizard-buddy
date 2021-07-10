import getTheme from './index';

import backupColors from './colors/backupColors';
import backupElevations from './elevations/backupElevations';
import backupRadii from './radii/backupRadii';
import backupSpacing from './spacing/backupSpacing';
import backupTypography from './typography/backupTypography';

import XXColors from './colors/XX';
import XXElevations from './elevations/XX';
import XXRadii from './radii/XX';
import XXSpacing from './spacing/XX';
import XXTypography from './typography/XX';

const outputThemeKeys = ['colors', 'elevations', 'radii', 'spacing', 'typography'];

describe('getTheme', () => {
  test('returns the backups if no code is passed in', () => {
    const outputTheme = getTheme();
    expect(Object.keys(outputTheme)).toEqual(outputThemeKeys);
    expect(outputTheme.colors).toEqual(backupColors);
    expect(outputTheme.elevations).toEqual(backupElevations);
    expect(outputTheme.radii).toEqual(backupRadii);
    expect(outputTheme.spacing).toEqual(backupSpacing);
    expect(outputTheme.typography).toEqual(backupTypography);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputTheme = getTheme('boop');
    expect(Object.keys(outputTheme)).toEqual(outputThemeKeys);
    expect(outputTheme.colors).toEqual(backupColors);
    expect(outputTheme.elevations).toEqual(backupElevations);
    expect(outputTheme.radii).toEqual(backupRadii);
    expect(outputTheme.spacing).toEqual(backupSpacing);
    expect(outputTheme.typography).toEqual(backupTypography);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputTheme = getTheme('XX');
    expect(Object.keys(outputTheme)).toEqual(outputThemeKeys);
    expect(outputTheme.colors).toEqual(XXColors);
    expect(outputTheme.elevations).toEqual(XXElevations);
    expect(outputTheme.radii).toEqual(XXRadii);
    expect(outputTheme.spacing).toEqual(XXSpacing);
    expect(outputTheme.typography).toEqual(XXTypography);
  });
});

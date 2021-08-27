import getTheme from './index';

import backupColors from './colors/backupColors';
import backupShadows from './shadows/backupShadows';
import backupRadii from './radii/backupRadii';
import backupSpacing from './spacing/backupSpacing';
import backupTypography from './typography/backupTypography';

import XXColors from './colors/XX';
import XXShadows from './shadows/XX';
import XXRadii from './radii/XX';
import XXSpacing from './spacing/XX';
import XXTypography from './typography/XX';
import backupBorderWidths from './borderWidths/backupBorderWidths';
import xxBorderWidths from './borderWidths/XX';
import xxFontSizes from './fontSizes/XX';
import backupFontSizes from './fontSizes/backupFontSizes';
import backupZIndices from './zIndices/backupZIndices';
import xxZIndices from './zIndices/XX';

const outputThemeKeys = ['isDefaultTheme', 'borderWidths', 'colors', 'fontSizes', 'shadows', 'radii', 'spacing', 'typography', 'zIndices'];

describe('getTheme', () => {
  test('returns the backups if no code is passed in', () => {
    const outputTheme = getTheme();
    expect(Object.keys(outputTheme)).toEqual(outputThemeKeys);
    expect(outputTheme.borderWidths).toEqual(backupBorderWidths);
    expect(outputTheme.colors).toEqual(backupColors);
    expect(outputTheme.fontSizes).toEqual(backupFontSizes);
    expect(outputTheme.shadows).toEqual(backupShadows);
    expect(outputTheme.radii).toEqual(backupRadii);
    expect(outputTheme.spacing).toEqual(backupSpacing);
    expect(outputTheme.typography).toEqual(backupTypography);
    expect(outputTheme.zIndices).toEqual(backupZIndices);
  });

  test('returns the backups if a non-existant code is passed in', () => {
    const outputTheme = getTheme('boop');
    expect(Object.keys(outputTheme)).toEqual(outputThemeKeys);
    expect(outputTheme.borderWidths).toEqual(backupBorderWidths);
    expect(outputTheme.colors).toEqual(backupColors);
    expect(outputTheme.fontSizes).toEqual(backupFontSizes);
    expect(outputTheme.shadows).toEqual(backupShadows);
    expect(outputTheme.radii).toEqual(backupRadii);
    expect(outputTheme.spacing).toEqual(backupSpacing);
    expect(outputTheme.typography).toEqual(backupTypography);
    expect(outputTheme.zIndices).toEqual(backupZIndices);
  });

  test('returns the specific code\'s theme if a valid one is passed in (XX)', () => {
    const outputTheme = getTheme('XX');
    expect(Object.keys(outputTheme)).toEqual(outputThemeKeys);
    expect(outputTheme.borderWidths).toEqual(xxBorderWidths);
    expect(outputTheme.colors).toEqual(XXColors);
    expect(outputTheme.fontSizes).toEqual(xxFontSizes);
    expect(outputTheme.shadows).toEqual(XXShadows);
    expect(outputTheme.radii).toEqual(XXRadii);
    expect(outputTheme.spacing).toEqual(XXSpacing);
    expect(outputTheme.typography).toEqual(XXTypography);
    expect(outputTheme.zIndices).toEqual(xxZIndices);
  });
});

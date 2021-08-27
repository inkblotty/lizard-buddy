import colors from './colors';
import shadows from "./shadows";
import radii from './radii';
import spacing from './spacing';
import typography from './typography';
import borderWidths from './borderWidths';
import { BaseTheme } from '@lb/shared';
import zIndices from './zIndices';
import fontSizes from './fontSizes';

const existingThemeCodes = ['XX'];
const getTheme = (code?: string): BaseTheme => ({
  isDefaultTheme: !existingThemeCodes.includes(code),
  borderWidths: borderWidths(code),
  colors: colors(code),
  fontSizes: fontSizes(code),
  shadows: shadows(code),
  radii: radii(code),
  spacing: spacing(code),
  typography: typography(code),
  zIndices: zIndices(code),
});

export default getTheme;

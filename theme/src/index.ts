import colors from './colors';
import shadows from "./shadows";
import radii from './radii';
import spacing from './spacing';
import typography from './typography';
import { BaseTheme } from '@lb/shared';

const getTheme = (code?: string): BaseTheme => ({
  colors: colors(code),
  shadows: shadows(code),
  radii: radii(code),
  spacing: spacing(code),
  typography: typography(code),
  zIndices: {},
});

export default getTheme;

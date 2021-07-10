import { Theme } from "@emotion/react";
import colors from './colors';
import elevations from "./elevations";
import radii from './radii';
import spacing from './spacing';
import typography from './typography';

const getTheme = (code?: string): Theme => ({
  colors: colors(code),
  elevations: elevations(code),
  radii: radii(code),
  spacing: spacing(code),
  typography: typography(code),
});

export default getTheme;

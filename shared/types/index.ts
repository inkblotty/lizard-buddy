import { Colors, isColor } from "./colors.types";
import { Spacing } from "./spacing.types";
import { Shadows } from './Shadows.types';
import { Typography } from "./typography.types";
import { Radii } from "./radii.types";

export {
  isColor,
};

export interface BaseTheme {
  colors: Colors;
  shadows: Shadows; // rename Shadows
  radii: Radii;
  spacing: Spacing;
  typography: Typography;
  zIndices: {}; // todo
}
export type { Colors, Spacing, Shadows, Typography, Radii };

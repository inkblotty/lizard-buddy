import { Colors, isColor } from "./colors.types";
import { Spacing } from "./spacing.types";
import { Elevations } from './elevations.types';
import { Typography } from "./typography.types";
import { Radii } from "./radii.types";

export {
  isColor,
};

export interface BaseTheme {
  colors: Colors;
  elevations: Elevations;
  radii: Radii;
  spacing: Spacing;
  typography: Typography;
}
export type { Colors, Spacing, Elevations, Typography, Radii };

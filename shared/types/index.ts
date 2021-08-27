import { Colors, isColor } from "./colors.types";
import { Spacing } from "./spacing.types";
import { Shadows } from './Shadows.types';
import { Typography } from "./typography.types";
import { Radii } from "./radii.types";
import { BorderWidths } from "./borderWidths.types";
import { ZIndices } from "./zIndices.types";
import { FontSizes } from "./fontSizes.types";

export {
  isColor,
};

export interface BaseTheme {
  isDefaultTheme?: boolean;
  borderWidths: BorderWidths;
  colors: Colors;
  fontSizes: FontSizes;
  shadows: Shadows; // rename Shadows
  radii: Radii;
  spacing: Spacing;
  typography: Typography;
  zIndices: ZIndices;
}
export type { BorderWidths, Colors, FontSizes, Spacing, Shadows, Typography, Radii, ZIndices };

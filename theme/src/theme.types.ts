import { Colors } from "./colors/colors.types";
import { Spacing } from "./spacing/spacing.types";
import { Elevations } from './elevations/elevations.types';
import { Typography } from "./typography/typography.types";
import { Radii } from "./radii/radii.types";

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    elevations: Elevations;
    radii: Radii;
    spacing: Spacing;
    typography: Typography;
  }
}

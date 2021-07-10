import { Interpolation, Theme } from "@emotion/react";

export interface StyleDefinition {
  [key: string]: Interpolation<Theme>;
}
export interface BrandStyleOverrides {
  er?: StyleDefinition;
  ao?: StyleDefinition;
  ck?: StyleDefinition;
  cg?: StyleDefinition;
  gn?: StyleDefinition;
  fj?: StyleDefinition;
  mr?: StyleDefinition;
}

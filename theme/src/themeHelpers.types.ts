import { Interpolation, Theme } from "@emotion/react";

export interface StyleDefinition {
  [key: string]: Interpolation<Theme>;
}
export interface BrandStyleOverrides {
  [code: string]: StyleDefinition;
}

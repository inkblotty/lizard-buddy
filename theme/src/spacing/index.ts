import backupSpacing from "./backupSpacing";
import { Spacing } from "./spacing.types";

const makeSpacingByCode = (code?: string): Spacing => {
  try {
    return require(`./${code}.ts`)?.default || backupSpacing;
  } catch (err) {
    return backupSpacing;
  }
};
export default makeSpacingByCode;

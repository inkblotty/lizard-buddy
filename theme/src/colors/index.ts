import backupColors from "./backupColors";
import { Colors } from "./colors.types";

const colorsByCode = (code?: string): Colors => {
  try {
    return require(`./${code}.ts`)?.default || backupColors;
  } catch (err) {
    return backupColors;
  }
};
export default colorsByCode;

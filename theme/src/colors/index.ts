import backupColors from "./backupColors";
import type { Colors } from '@lb/shared';

const colorsByCode = (code?: string): Colors => {
  try {
    return require(`./${code}.ts`)?.default || backupColors;
  } catch (err) {
    return backupColors;
  }
};
export default colorsByCode;

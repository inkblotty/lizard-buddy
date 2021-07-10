import backupElevations from './backupElevations';
import { Elevations } from "@lb/shared";

const elevationsByCode = (code?: string): Elevations => {
  try {
    return require(`./${code}.ts`).default || backupElevations;
  } catch (err) {
    return backupElevations;
  }
};
export default elevationsByCode;

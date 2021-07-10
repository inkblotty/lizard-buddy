import backupElevations from './backupElevations';
import { Elevations } from './elevations.types';

const elevationsByCode = (code?: string): Elevations => {
  try {
    return require(`./${code}.ts`).default || backupElevations;
  } catch (err) {
    return backupElevations;
  }
};
export default elevationsByCode;

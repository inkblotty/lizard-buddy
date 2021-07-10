import backupRadii from './backupRadii';
import { Radii } from './radii.types';

const makeRadiiByCode = (code?: string): Radii => {
  try {
    return require(`./${code}.ts`)?.default || backupRadii;
  } catch (err) {
    return backupRadii;
  }
}
export default makeRadiiByCode;

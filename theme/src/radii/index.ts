import backupRadii from './backupRadii';
import { Radii } from "@lb/shared";

const makeRadiiByCode = (code?: string): Radii => {
  try {
    return require(`./${code}.ts`)?.default || backupRadii;
  } catch (err) {
    return backupRadii;
  }
}
export default makeRadiiByCode;

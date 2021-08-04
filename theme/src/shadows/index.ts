import backupShadows from './backupShadows';
import { Shadows } from "@lb/shared";

const shadowsByCode = (code?: string): Shadows => {
  try {
    return require(`./${code}.ts`).default || backupShadows;
  } catch (err) {
    return backupShadows;
  }
};
export default shadowsByCode;

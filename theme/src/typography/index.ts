import backupTypography from './backupTypography';
import { Typography } from "@lb/shared";

const makeTypographyByCode = (code?: string): Typography => {
  try {
    return require(`./${code}.ts`)?.default || backupTypography;
  } catch (err) {
    return backupTypography;
  }
}
export default makeTypographyByCode;

import backupZIndices from "./backupZIndices";
import { ZIndices } from "@lb/shared/types/zIndices.types";

const zIndicesByBrand = (code?:string):ZIndices => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return backupZIndices;
    }
  } catch(e) {
    return backupZIndices;
  }
}

export default zIndicesByBrand;
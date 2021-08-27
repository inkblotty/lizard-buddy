import backupBorderWidths from "./backupBorderWidths";
import { BorderWidths } from "@lb/shared/types/borderWidths.types";

const borderWidthsByBrand = (code?:string):BorderWidths => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return backupBorderWidths;
    }
  } catch(e) {
    return backupBorderWidths;
  }
}

export default borderWidthsByBrand;
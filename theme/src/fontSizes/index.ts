import backupFontSizes from "./backupFontSizes";
import { FontSizes } from "@lb/shared/types/fontSizes.types";

const fontSizesByBrand = (code?:string):FontSizes => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return backupFontSizes;
    }
  } catch(e) {
    return backupFontSizes;
  }
}

export default fontSizesByBrand;

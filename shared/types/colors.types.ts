/**
 * Type Guard isColor
 * Ensures your runtime type is actually a color
 */
export function isColor(color: any): color is ColorObj {
  return ((color as ColorObj)[100] !== undefined)
    && (typeof (color as ColorObj)[100] === 'string')
    && ((color as ColorObj)[200] !== undefined)
    && (typeof (color as ColorObj)[200] === 'string')
    && ((color as ColorObj)[300] !== undefined)
    && (typeof (color as ColorObj)[300] === 'string')
    && ((color as ColorObj)[400] !== undefined)
    && (typeof (color as ColorObj)[400] === 'string')
    && ((color as ColorObj)[500] !== undefined)
    && (typeof (color as ColorObj)[500] === 'string')
    && ((color as ColorObj)[600] !== undefined)
    && (typeof (color as ColorObj)[600] === 'string')
    && ((color as ColorObj)[700] !== undefined)
    && (typeof (color as ColorObj)[700] === 'string')
    && ((color as ColorObj)[800] !== undefined)
    && (typeof (color as ColorObj)[800] === 'string')
}

interface ColorObj {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string | undefined;
}
export interface Colors {
  primary: ColorObj;
  secondary: ColorObj;
  success: ColorObj;
  error: ColorObj;
  warning: ColorObj;
  information: ColorObj;
  neutral: ColorObj;
  reward?: ColorObj;
}

import { BaseTheme } from "@lb/shared";
import parseColors from "./parsers/parseColors";
import parseElevations from "./parsers/parseElevations";
import parseRadii from "./parsers/parseRadii";
import parseSpacing from "./parsers/parseSpacing";
import parseTypography from "./parsers/parseTypography";

const logColor = '#4EA5D9';

/* TODO: better way to map these keys from BaseTheme */
interface ParsedTheme {
  /** string is a utf-8 string that can be written to file */
  colors: string;
  elevations: string;
  radii: string;
  spacing: string;
  typography: string;
}
const parseThemeObjects = (theme: Partial<BaseTheme>, code: string): ParsedTheme => {
  console.log('%cConverting theme object to writable strings...', `color: ${logColor}`);
  return Object.entries(theme).reduce((prev: ParsedTheme, [key, value]) => {
    switch (key) {
      case 'colors': {
        return {
          ...prev,
          color: parseColors(value as BaseTheme['colors'], code),
        };
      }
      case 'elevations': {
        return {
          ...prev,
          elevations: parseElevations(value as BaseTheme['elevations'], code),
        };
      }
      case 'radii': {
        return {
          ...prev,
          radii: parseRadii(value as BaseTheme['radii'], code),
        };
      }
      case 'spacing': {
        return {
          ...prev,
          spacing: parseSpacing(value as BaseTheme['spacing'], code),
        };
      }
      case 'typography': {
        return {
          ...prev,
          typography: parseTypography(value as BaseTheme['typography'], code),
        };
      }
      default: {
        return prev;
      }
    }
  }, {} as ParsedTheme);
}
export default parseThemeObjects;

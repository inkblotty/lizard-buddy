import { BaseTheme } from "@lb/shared";
import parseColors from "./parsers/parseColors";

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
        return prev;
      }
      case 'radii': {
        return prev;
      }
      case 'spacing': {
        return prev;
      }
      case 'typography': {
        return prev;
      }
      default: {
        return prev;
      }
    }
  }, {} as ParsedTheme);
}
export default parseThemeObjects;

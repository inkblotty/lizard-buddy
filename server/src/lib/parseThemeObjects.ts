import { BaseTheme } from "@lb/shared";

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
const parseThemeObjects = async (theme: Partial<BaseTheme>): Promise<ParsedTheme> => {
  return Promise.all(Object.values(theme).reduce((prev, [key, value]) => {
    switch (key) {
      case 'colors': {
        return prev;
      }
      case 'elevations': {
        return prev;
      }
      case '': {
        return prev;
      }
      default: {
        return prev;
      }
    }
  }), {} as ParsedTheme);
}
export default parseThemeObjects;

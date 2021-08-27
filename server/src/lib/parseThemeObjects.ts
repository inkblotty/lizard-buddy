import { BaseTheme } from "@lb/shared";
import parseColors from "./parsers/parseColors";
import parseShadows from "./parsers/parseShadows";
import parseRadii from "./parsers/parseRadii";
import parseSpacing from "./parsers/parseSpacing";
import parseTypography from "./parsers/parseTypography";
import parseBorderWidths from "./parsers/parseBorderWidths";
import parseZIndices from "./parsers/parseZIndices";
import parseFontSizes from "./parsers/parseFontSizes";

const logColor = '#4EA5D9';

/* TODO: better way to map these keys from BaseTheme */
interface ParsedTheme {
  /** string is a utf-8 string that can be written to file */
  borderWidths: string;
  colors: string;
  fontSizes: string;
  shadows: string;
  radii: string;
  spacing: string;
  typography: string;
  zIndices: string;
}
const parseThemeObjects = (theme: Partial<BaseTheme>, code: string): ParsedTheme => {
  console.log('%cConverting theme object to writable strings...', `color: ${logColor}`);
  return Object.entries(theme).reduce((prev: ParsedTheme, [key, value]) => {
    switch (key) {
      case 'borderWidths': {
        return {
          ...prev,
          borderWidths: parseBorderWidths(value as BaseTheme['borderWidths'], code),
        };
      }
      case 'colors': {
        return {
          ...prev,
          color: parseColors(value as BaseTheme['colors'], code),
        };
      }
      case 'fontSizes': {
        return {
          ...prev,
          fontSizes: parseFontSizes(value as BaseTheme['fontSizes'], code),
        };
      }
      case 'elevations': {
        return {
          ...prev,
          elevations: parseShadows(value as BaseTheme['shadows'], code),
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
      case 'zIndices': {
        return {
          ...prev,
          zIndices: parseZIndices(value as BaseTheme['zIndices'], code),
        };
      }
      default: {
        return prev;
      }
    }
  }, {} as ParsedTheme);
}
export default parseThemeObjects;

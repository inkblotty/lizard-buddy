import getTheme from '@lb/theme';

export const getThemeIfExists = (code: string) => {
  return getTheme(code);
}

import { BaseTheme } from "@lb/shared";

const parseColors = (input: BaseTheme['colors'], code: string): string => {
  return `import type { Colors } from '@lb/shared';

const ${code.toUpperCase()}Colors: Colors = {
  primary: {
    100: '${input.primary[100]}',
    200: '${input.primary[200]}',
    300: '${input.primary[300]}',
    400: '${input.primary[400]}',
    500: '${input.primary[500]}',
    600: '${input.primary[600]}',
    700: '${input.primary[700]}',
    800: '${input.primary[800]}',
    900: ${input.primary[900] ? `'${input.primary[900]}'` : undefined},
  },
  secondary: {
    100: '${input.secondary[100]}',
    200: '${input.secondary[200]}',
    300: '${input.secondary[300]}',
    400: '${input.secondary[400]}',
    500: '${input.secondary[500]}',
    600: '${input.secondary[600]}',
    700: '${input.secondary[700]}',
    800: '${input.secondary[800]}',
    900: ${input.secondary[900] ? `'${input.secondary[900]}'` : undefined},
  },
  success: {
    100: '${input.success[100]}',
    200: '${input.success[200]}',
    300: '${input.success[300]}',
    400: '${input.success[400]}',
    500: '${input.success[500]}',
    600: '${input.success[600]}',
    700: '${input.success[700]}',
    800: '${input.success[800]}',
    900: ${input.success[900] ? `'${input.success[900]}'` : undefined},
  },
  error: {
    100: '${input.error[100]}',
    200: '${input.error[200]}',
    300: '${input.error[300]}',
    400: '${input.error[400]}',
    500: '${input.error[500]}',
    600: '${input.error[600]}',
    700: '${input.error[700]}',
    800: '${input.error[800]}',
    900: ${input.error[900] ? `'${input.error[900]}'` : undefined},
  },
  warning: {
    100: '${input.warning[100]}',
    200: '${input.warning[200]}',
    300: '${input.warning[300]}',
    400: '${input.warning[400]}',
    500: '${input.warning[500]}',
    600: '${input.warning[600]}',
    700: '${input.warning[700]}',
    800: '${input.warning[800]}',
    900: ${input.warning[900] ? `'${input.warning[900]}'` : undefined},
  },
  information: {
    100: '${input.information[100]}',
    200: '${input.information[200]}',
    300: '${input.information[300]}',
    400: '${input.information[400]}',
    500: '${input.information[500]}',
    600: '${input.information[600]}',
    700: '${input.information[700]}',
    800: '${input.information[800]}',
    900: ${input.information[900] ? `'${input.information[900]}'` : undefined},
  },
  neutral: {
    100: '${input.neutral[100]}',
    200: '${input.neutral[200]}',
    300: '${input.neutral[300]}',
    400: '${input.neutral[400]}',
    500: '${input.neutral[500]}',
    600: '${input.neutral[600]}',
    700: '${input.neutral[700]}',
    800: '${input.neutral[800]}',
    900: ${input.neutral[900] ? `'${input.neutral[900]}'` : undefined},
  },
  reward: {
    100: '${input.reward[100]}',
    200: '${input.reward[200]}',
    300: '${input.reward[300]}',
    400: '${input.reward[400]}',
    500: '${input.reward[500]}',
    600: '${input.reward[600]}',
    700: '${input.reward[700]}',
    800: '${input.reward[800]}',
    900: ${input.reward[900] ? `'${input.reward[900]}'` : undefined},
  }
};
export default ${code.toUpperCase()}Colors;
`
}
export default parseColors;

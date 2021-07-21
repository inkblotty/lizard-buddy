import { BaseTheme } from "@lb/shared";
import parseColors from "./parseColors";

const mockColor: BaseTheme['color'] = {};
describe('parseColors', () => {
  test('returns the expected output', () => {
    const result = parseColors(mockColor, 'BB');
    expect(result).toEqual(`import type { Colors } from '@lb/shared';

const BBColors: Colors = {
  primary: {
    100: '${mockColor.primary[100]}',
    200: '${mockColor.primary[200]}',
    300: '${mockColor.primary[300]}',
    400: '${mockColor.primary[400]}',
    500: '${mockColor.primary[500]}',
    600: '${mockColor.primary[600]}',
    700: '${mockColor.primary[700]}',
    800: '${mockColor.primary[800]}',
    900: ${mockColor.primary[900] ? `'${mockColor.primary[900]}'` : undefined},
  },
  secondary: {
    100: '${mockColor.secondary[100]}',
    200: '${mockColor.secondary[200]}',
    300: '${mockColor.secondary[300]}',
    400: '${mockColor.secondary[400]}',
    500: '${mockColor.secondary[500]}',
    600: '${mockColor.secondary[600]}',
    700: '${mockColor.secondary[700]}',
    800: '${mockColor.secondary[800]}',
    900: ${mockColor.secondary[900] ? `'${mockColor.secondary[900]}'` : undefined},
  },
  success: {
    100: '${mockColor.success[100]}',
    200: '${mockColor.success[200]}',
    300: '${mockColor.success[300]}',
    400: '${mockColor.success[400]}',
    500: '${mockColor.success[500]}',
    600: '${mockColor.success[600]}',
    700: '${mockColor.success[700]}',
    800: '${mockColor.success[800]}',
    900: ${mockColor.success[900] ? `'${mockColor.success[900]}'` : undefined},
  },
  error: {
    100: '${mockColor.error[100]}',
    200: '${mockColor.error[200]}',
    300: '${mockColor.error[300]}',
    400: '${mockColor.error[400]}',
    500: '${mockColor.error[500]}',
    600: '${mockColor.error[600]}',
    700: '${mockColor.error[700]}',
    800: '${mockColor.error[800]}',
    900: ${mockColor.error[900] ? `'${mockColor.error[900]}'` : undefined},
  },
  warning: {
    100: '${mockColor.warning[100]}',
    200: '${mockColor.warning[200]}',
    300: '${mockColor.warning[300]}',
    400: '${mockColor.warning[400]}',
    500: '${mockColor.warning[500]}',
    600: '${mockColor.warning[600]}',
    700: '${mockColor.warning[700]}',
    800: '${mockColor.warning[800]}',
    900: ${mockColor.warning[900] ? `'${mockColor.warning[900]}'` : undefined},
  },
  information: {
    100: '${mockColor.information[100]}',
    200: '${mockColor.information[200]}',
    300: '${mockColor.information[300]}',
    400: '${mockColor.information[400]}',
    500: '${mockColor.information[500]}',
    600: '${mockColor.information[600]}',
    700: '${mockColor.information[700]}',
    800: '${mockColor.information[800]}',
    900: ${mockColor.information[900] ? `'${mockColor.information[900]}'` : undefined},
  },
  neutral: {
    100: '${mockColor.neutral[100]}',
    200: '${mockColor.neutral[200]}',
    300: '${mockColor.neutral[300]}',
    400: '${mockColor.neutral[400]}',
    500: '${mockColor.neutral[500]}',
    600: '${mockColor.neutral[600]}',
    700: '${mockColor.neutral[700]}',
    800: '${mockColor.neutral[800]}',
    900: ${mockColor.neutral[900] ? `'${mockColor.neutral[900]}'` : undefined},
  },
  reward: {
    100: '${mockColor.reward[100]}',
    200: '${mockColor.reward[200]}',
    300: '${mockColor.reward[300]}',
    400: '${mockColor.reward[400]}',
    500: '${mockColor.reward[500]}',
    600: '${mockColor.reward[600]}',
    700: '${mockColor.reward[700]}',
    800: '${mockColor.reward[800]}',
    900: ${mockColor.reward[900] ? `'${mockColor.reward[900]}'` : undefined},
  }
};
export default BBColors;
`)
  });
});

import { BaseTheme } from "@lb/shared";

const parseFontSizes = (input: BaseTheme['fontSizes'], code: string): string => {
  return `import { FontSizes } from "@lb/shared";

const ${code.toUpperCase()}FontSizes: FontSizes = {
  xs: '${input['xs']}',
  sm: '${input['sm']}',
  md: '${input['md']},
  lg: '${input['lg']}',
  xl: '${input['xl']}',
  xxl: '${input['xxl']},
  '3xl': '${input['3xl']}',
  '4xl': '${input['4xl']}',
};
export default ${code.toUpperCase()}FontSizes;
`
}
export default parseFontSizes;

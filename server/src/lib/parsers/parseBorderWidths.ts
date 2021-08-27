import { BaseTheme } from "@lb/shared";

const parseBorderWidths = (input: BaseTheme['borderWidths'], code: string): string => {
  return `import { BorderWidths } from "@lb/shared";

const ${code.toUpperCase()}BorderWidths: BorderWidths = {
  xxs: '${input['xxs']}',
  xs: '${input['xs']}',
  sm: '${input['sm']}',
  md: '${input['md']},
  lg: '${input['lg']}',
  xl: '${input['xl']}',
  xxl: '${input['xxl']},
};
export default ${code.toUpperCase()}BorderWidths;
`
}
export default parseBorderWidths;

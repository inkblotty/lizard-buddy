import { BaseTheme } from "@lb/shared";

const parseShadows = (input: BaseTheme['shadows'], code: string): string => {
  return `import { Shadows } from "@lb/shared";

const ${code.toUpperCase()}Shadows: Shadows = {
  sm: '${input['sm']}',
  md: '${input['md']},
  lg: '${input['lg']}',
  xl: '${input['xl']}',
};
export default ${code.toUpperCase()}Shadows;
`
}
export default parseShadows;

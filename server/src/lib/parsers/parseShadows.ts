import { BaseTheme } from "@lb/shared";

const parseShadows = (input: BaseTheme['shadows'], code: string): string => {
  return `import { Shadows } from "@lb/shared";

const ${code.toUpperCase()}Shadows: Shadows = {
  '01': '${input['01']}',
  '02': '${input['02']},
  '03': '${input['03']}',
  '04': '${input['04']}',
};
export default ${code.toUpperCase()}Shadows;
`
}
export default parseShadows;

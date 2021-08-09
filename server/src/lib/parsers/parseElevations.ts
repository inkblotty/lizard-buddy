import { BaseTheme } from "@lb/shared";

const parseElevations = (input: BaseTheme['elevations'], code: string): string => {
  return `import { Elevations } from "@lb/shared";

const ${code.toUpperCase()}Elevations: Elevations = {
  '01': '${input['01']}',
  '02': '${input['02']},
  '03': '${input['03']}',
  '04': '${input['04']}',
};
export default ${code.toUpperCase()}Elevations;
`
}
export default parseElevations;

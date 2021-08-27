import { BaseTheme } from "@lb/shared";

const parseZIndices = (input: BaseTheme['zIndices'], code: string): string => {
  return `import { ZIndices } from "@lb/shared";

const ${code.toUpperCase()}ZIndices: ZIndices = {
  0: '${input['0']}',
  1: '${input['1']}',
  2: '${input['2']}',
  3: '${input['3']}',
  4: '${input['4']}',
  5: '${input['5']}',
  10: '${input['10']}',
  50: '${input['50']}',
  100: '${input['100']}',
};
export default ${code.toUpperCase()}ZIndices;
`
}
export default parseZIndices;

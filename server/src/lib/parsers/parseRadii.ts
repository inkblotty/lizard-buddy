import { BaseTheme } from "@lb/shared";

const parseRadii = (input: BaseTheme['radii'], code: string): string => {
  return `import { Radii } from "@lb/shared";

const ${code.toUpperCase()}Radii: Radii = {
  sm: ${input.sm},
  md: ${input.md},
  lg: ${input.lg},
  xl: ${input.xl},
  full: ${input.full},
};
export default ${code.toUpperCase()}Radii;
`
}
export default parseRadii;

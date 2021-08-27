import { BaseTheme } from "@lb/shared";

const parseSpacing = (input: BaseTheme['spacing'], code: string): string => {
  return `import { Spacing } from "@lb/shared";

const ${code.toUpperCase()}Spacing: Spacing = {
  xxs: ${input.xxs},
  xs: ${input.xs},
  sm: ${input.sm},
  md: ${input.md},
  lg: ${input.lg},
  xl: ${input.xl},
  xxl: ${input.xxl},
};
export default ${code.toUpperCase()}Spacing;
`;
}
export default parseSpacing;

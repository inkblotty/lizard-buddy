import { BaseTheme } from "@lb/shared";

const getOutput = (obj: BaseTheme['typography']['body']['main']) : string => {
  return `{
    family: '${obj.family}',
    familyUrls: '[${obj.familyUrls.join(',')}]',
    lineHeight: '${obj.lineHeight}',
    weight: '${obj.weight}',
  }`
}

const parseTypography = (input: BaseTheme['typography'], code: string): string => {
  return `import { Typography } from "@lb/shared";

const ${code.toUpperCase()}Typography: Typography = {
  body: {
    main: ${getOutput(input.body.main)},
    large: ${getOutput(input.body.large)},
    small: ${getOutput(input.body.small)},
  },
  headings: {
    h1: ${getOutput(input.headings.h1)},
    h2: ${getOutput(input.headings.h2)},
    h3: ${getOutput(input.headings.h3)},
    h4: ${getOutput(input.headings.h4)},
    h5: ${getOutput(input.headings.h5)},
    h6: ${getOutput(input.headings.h6)},
  },
};
export default ${code.toUpperCase()}Typography;
`;
}
export default parseTypography;

import { BaseTheme } from "@lb/shared";

const parseTypography = (input: BaseTheme['typography'], code: string): string => {
  return `import { Typography } from "@lb/shared";

const ${code.toUpperCase()}Typography: Typography = {
  body: {
    main: '${input.body.main}',
    bold: '${input.body.bold}',
  },
  headings: {
    main: '${input.headings.main}',
    bold: '${input.headings.bold}',
  },
  alternate: {
    main: '${input.alternate.main}',
    bold: '${input.alternate.bold}',
  },
};
export default ${code.toUpperCase()}Typography;
`;
}
export default parseTypography;

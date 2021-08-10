import { BaseTheme } from '@lb/shared';
import { writeGHFile } from './request';

const getPathByCategory = (category: WriteToThemeConfig['category'], code: string) => {
  const basePath = 'theme/src';
  return `${basePath}/${category}/${code}.ts`;
}

const logColor = '#4EA5D9';
interface WriteToThemeConfig {
  branch: string;
  category: keyof BaseTheme;
}
const writeToTheme = async (code: string, content: string, config: WriteToThemeConfig): Promise<void> => {
  const { branch, category } = config;
  console.log('content: ', content);
  try {
    const path = getPathByCategory(category, code);
    await writeGHFile({
      branch,
      content,
      owner: 'inkblotty',
      path,
      repo: 'lizard-buddy',
      message: `Write to ${path} from lizard-buddy`
    });
    console.log(`%c\nSuccessfully created file: ${category}/${code}.ts`, `color: ${logColor}`);
  } catch (err) {
    console.log(`%c\nFailed to create file: ${category}/${code}.ts`, `color: ${logColor}`);
    throw err;
  }
};
export default writeToTheme;

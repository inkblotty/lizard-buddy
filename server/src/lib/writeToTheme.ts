import { BaseTheme } from '@lb/shared';
import { Octokit } from "@octokit/core";
import { createOrUpdateTextFile } from "@octokit/plugin-create-or-update-text-file";

const GH_AUTH_TOKEN = process.env.GH_ACCESS_TOKEN;
const CreaterOctokit = Octokit.plugin(createOrUpdateTextFile)
const octokit = new CreaterOctokit({ auth: GH_AUTH_TOKEN });

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
  try {
    const path = getPathByCategory(category, code);
    await octokit.createOrUpdateTextFile({
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
  }
};
export default writeToTheme;

import { Octokit } from "@octokit/core";
import createPullRequest from "./createPullRequest";
import writeToTheme from "./writeToTheme";

const logColor = '#FCFF6C';
const GH_AUTH_TOKEN = process.env.GH_ACCESS_TOKEN;
const octokit = new Octokit({ auth: GH_AUTH_TOKEN });
const owner = 'inkblotty';
const repo = 'lizard-buddy';

// create new branch
const createBranch = async (branchName: string) => (
  octokit.request(
    `POST /repos/{owner}/{repo}/git/refs/heads/${branchName}`, { owner, repo }
));

export default async (code: string, data: any) => {
  const branchName = `${(new Date()).getTime()}-generated-branch`;
  await createBranch(branchName);

  // parseThemeObjects
  const themeObjs = [];

  // forEach Theme Object, writeToTheme using branchName
  await Promise.all(themeObjs.map(({ content, category }) => {
    return writeToTheme(code, content, { category, branch: branchName });
  }));

  // pass along branch name to createPullRequest
  await createPullRequest({ head: branchName });
}

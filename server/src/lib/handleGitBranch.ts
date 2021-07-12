import { Octokit } from "@octokit/core";

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

export default async () => {
  const branchName = `${(new Date()).getTime()}-generated-branch`;
  await createBranch(branchName);

  // get that branch info? save it to a temp directory? pass it around?
  // or get that branch info and push changes entirely in the remote and never have them locally?

  // parseThemeObjects

  // write these files to this branch

  // add, commit, and push all changes to branch

  // pass along branch name to createPullRequest
}

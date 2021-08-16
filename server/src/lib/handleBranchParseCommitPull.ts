import createPullRequest from "./createPullRequest";
import parseThemeObjects from "./parseThemeObjects";
import request from "./request";
import writeToTheme from "./writeToTheme";

const logColor = '#FCFF6C';
const owner = 'inkblotty';
const repo = 'lizard-buddy';

const getShaOfLatestMain = async () => {
  const { data } = await request('GET /repos/{owner}/{repo}/git/refs', {
    owner,
    repo,
  });
  const mainRef = data.find(({ ref }: any) => ref === 'refs/heads/main');
  return mainRef.object.sha;
}

// create new branch
const createBranch = async (branchName: string) => {
  try {
    const latestSha = await getShaOfLatestMain();
    return request(
      `POST /repos/{owner}/{repo}/git/refs`, {
        owner,
        repo,
        ref: `refs/heads/${branchName}`,
        sha: latestSha,
      });
  } catch (err) {
    console.error(`Could not create branch: ${branchName}`);
    console.error(err);
    throw new Error(err);
  }
};

export default async (code: string, data: any) => {
  // before anything starts, validate the data

  // parseThemeObjects
  const themeObjs: any[] = Object.entries(parseThemeObjects(data, code)).map(([key, value]) => ({
    content: value,
    category: key,
  }));

  // create a branch for all this work
  const branchName = `lb-${(new Date()).getTime()}-generated-branch`;
  await createBranch(branchName);

  // forEach Theme Object, writeToTheme using branchName
  try {
    await Promise.all(themeObjs.map(({ content, category }) => {
      return writeToTheme(code, content, { category, branch: branchName });
    }));
  } catch (err) {
    console.error('%cCould not write file', `color:${logColor}`, err);
  }

  // pass along branch name to createPullRequest
  return createPullRequest({ head: branchName });
}

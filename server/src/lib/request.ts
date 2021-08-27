import { Octokit } from "@octokit/core";
import dotenv from 'dotenv';
import { createOrUpdateTextFile } from "@octokit/plugin-create-or-update-text-file";

dotenv.config();

const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;
const CreaterOctokit = Octokit.plugin(createOrUpdateTextFile)
const octokit = new CreaterOctokit({ auth: GH_ACCESS_TOKEN })

if (!GH_ACCESS_TOKEN && process.env.NODE_ENV === 'production') {
  throw new Error('No access token provided');
}

export const writeGHFile = octokit.createOrUpdateTextFile;
export default octokit.request;

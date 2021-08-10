import * as express from 'express';
import handleBranchParseCommitPull from '../lib/handleBranchParseCommitPull';
import { getThemeIfExists } from '../lib/validators';

export const register = (app: express.Application) => {
  app.post('/api/create/:code', async (req: express.Request, res: express.Response) => {
    // validate if the code is already used
    const { code } = req.params;
    const existingTheme = getThemeIfExists(code);
    if (existingTheme && !existingTheme.isDefaultTheme) {
      // TODO: allow edits in another route
      throw new Error(`Theme: ${code} already exists.`);
    }
    
    // validate that we don't already have too many PRs to review (come back later message)

    // now send along to handleBranchParseCommitPull
    return res.json(handleBranchParseCommitPull(code, req.body));
  });

  app.get('/api/:code', async (req: express.Request, res: express.Response) => {
    // if the code belongs to an existing theme, return that theme object
    const { code } = req.params;
    return res.json(getThemeIfExists(code));
  });
}
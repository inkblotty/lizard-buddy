import * as express from 'express';

export const register = (app: express.Application) => {
  app.post('/api/create/:code', async (req: express.Request, res: express.Response) => {
    // validate if the code is already used
    
    // validate that we don't already have too many PRs to review (come back later message)

    // now send along to handleBranchParseCommitPull
  });

  app.get('/api/:code', async (req: express.Request, res: express.Response) => {
    // if the code belongs to an existing theme, return that theme object

    // else, return the default theme (maybe)
  });
}
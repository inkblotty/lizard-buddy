import express from 'express';
import * as routes from './src/routes';

const app = express();
app.use(express.json());
const port = 8080; // default port to listen

routes.register(app);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});

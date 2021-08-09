import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import * as routes from './src/routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.SERVER_PORT;

routes.register(app);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});

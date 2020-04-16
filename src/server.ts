import * as express from 'express';
import * as bodyParser from 'body-parser';

import { notFoundError, errorHandler } from './middlewares/errors.middleware';
import { router as groceriesRoute } from './controllers/groceries.routes';

const app = express();
app.use(bodyParser.json() && bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ hello: 'World!' });
});

//define routes
app.use('/api/groceries', groceriesRoute);

//error handling
app.use(notFoundError);
app.use(errorHandler);

const port = process.env.PORT || 8080;
export const startServer = async () => {
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
  console.log('Press Ctrl + C to quit');
};

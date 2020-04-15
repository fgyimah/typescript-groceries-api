import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'World!' });
});

const port = process.env.PORT || 8080;
export const startServer = async () => {
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
  console.log('Press Ctrl + C to quit');
};

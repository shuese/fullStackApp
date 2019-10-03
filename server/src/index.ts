import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const dbKey = process.env.DB_KEY;

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(dbKey);
  console.log(dbKey, 'dbKey');
});

app.listen(8080, () => {
  console.log('Следим за 8080!');
});

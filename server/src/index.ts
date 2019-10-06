import dotenv from 'dotenv';
import expressPinoLogger from 'express-pino-logger';
import express from 'express';
import bodyParser from 'body-parser';
import { logger } from './utils/logger';

dotenv.config();

const urlencodedParser = bodyParser.urlencoded({extended: false});

const dbKey = process.env.DB_KEY;

const app = express();

app.use(expressPinoLogger({ logger }));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(dbKey);
  console.log(dbKey, 'dbKey');
});

app.post('/sigin', urlencodedParser, (req, res) => {
  if (!req.body) { return res.sendStatus(400); }
  console.log(req.body);
  res.send(req.body);
});

app.listen(8080, () => {
  console.log('Следим за 8080!');
});

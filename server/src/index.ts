import dotenv from 'dotenv';
import expressPinoLogger from 'express-pino-logger';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import passport from 'passport';
import bodyParser from 'body-parser';
import userRoute from './routes/user';
import { logger } from './utils/logger';
import './utils/auth';

dotenv.config();

const dbKey = process.env.DB_KEY;

const app = express();

app.use(cors());
app.use(expressPinoLogger({ logger }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(passport.initialize());

mongoose.connect(dbKey, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  })
  .then(() => {
    console.log('Законектился к бд');
  })
  .catch(err => {
    console.log('Что-то не так:', err);
  });

mongoose.set('debug', true);

app.use(userRoute);

app.listen(8080, () => {
  console.log('Следим за 8080!');
});

import express from 'express';
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('zdorova');
  console.log('wwwwwwwwwwwwwwwwwwwwwwww');
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});

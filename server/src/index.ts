import express from 'express';
const app = express();

app.get('/', function (req: express.Request, res: express.Response) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
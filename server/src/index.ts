import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import passport from "passport";
import cookieParser from "cookie-parser";
import { urlencoded, json } from "body-parser";
import router from "./router";
import { initialiseAuthentication } from "./auth";

const app = express();

app.use(
  urlencoded({ extended: false }),
  json(),
  cookieParser(),
  passport.initialize()
);

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const port = 8080;

router(app);
initialiseAuthentication(app);

console.log(process.env.BASE_API_URL, "asdasd");

app.get("/test", (req: Request, res: Response) => {
  return res.status(200).send({ message: "test" });
});

app.all("*", (req: Request, res: Response) => {
  return res.status(404).send({ message: "Заблудился" });
});

mongoose
  .connect(process.env.DB_KEY || "", {
    useFindAndModify: false,
    autoIndex: false,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Законектился к бд");
  })
  .catch((err) => {
    console.log("Что-то не так:", err);
  });

mongoose.set("debug", true);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on localhost:${port}`);
});

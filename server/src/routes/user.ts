import mongoose from "mongoose";
import passport from "passport";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
import User from "../models/user";

router.post("/signup", (req: any, res: any) => {
  if (!req.body) {
    return res.sendStatus(400);
  }
  console.log(req.body, "req.body");
  const user = new User(req.body);

  user.save((errors: any) => {
    if (errors) {
      if (errors?.errors?.email?.properties?.type) {
        errors.errors.email.message = "Эта почта уже занята!";
      }
      if (errors?.errors?.nickName?.properties?.type) {
        errors.errors.nickName.message = "Этот ник уже занят!";
      }
      return res.status(404).send({ ...errors });
    }
    return res.send({ message: "succes" });
  });
});

export default router;

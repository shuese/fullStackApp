import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {
  if (!req.body) {
    res.json({success: false, msg: 'Боди не пришел!'});
  } else {
    const newUser = new User(req.body);
    newUser.save(err => {
      if (err) {
        return res.json({success: false, msg: 'Пользователь уже есть!'});
      }
      res.json({success: true, msg: 'Создал пользователя!'});
    });
  }
});

export default userRouter;

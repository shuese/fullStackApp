import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const userRouter = express.Router();

userRouter.post('/signup', passport.authenticate('signup', { session : false }), (req, res) => {
  const { nickName } = req.body;
  if (!req.body) {
    return res.sendStatus(400);
  }
  if (!nickName) {
    return res.json({success: false, msg: 'Введите никнейм'});
  }
  const user = new User(req.body);
  user.save(err => {
    if (err) {
      return res.json({success: false, msg: 'Ошибка'});
    }
    res.json({success: true, msg: 'Вы зарегестрировались!'});
  });
});

userRouter.post('/sigin', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An Error occured');
        return next(error);
      }
      req.login(user, { session : false }, async error => {
        if ( error ) { return next(error); }
        const body = { _id : user._id, nickName : user.nickName };
        const token = jwt.sign({ user : body }, process.env.JWT_KEY);
        return res.json({ token });
      });
      } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

export default userRouter;

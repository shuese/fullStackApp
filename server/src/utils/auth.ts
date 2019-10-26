import passport from 'passport';
import * as passportLocal from 'passport-local';
import User from '../models/User';

const LocalStrategy = passportLocal.Strategy;

passport.use('signup', new LocalStrategy({
  usernameField : 'nickName',
  passwordField : 'password'
}, async (nickName: any, password: any, done: any) => {
    try {
      const user = await User.create({ nickName, password });
      return done(null, user);
    } catch (error) {
      done(error);
    }
}));

passport.use('login', new LocalStrategy({
  usernameField : 'nickName',
  passwordField : 'password'
}, async (nickName: any, password: any, done: any) => {
  try {
    const user = await User.findOne({ nickName });
    if ( !user ) {
      return done(null, false, { message : 'User not found'});
    }
    const validate = await user.isValidPassword(password);
    if ( !validate ) {
      return done(null, false, { message : 'Wrong Password'});
    }
    return done(null, user, { message : 'Logged in Successfully'});
  } catch (error) {
    return done(error);
  }
}));

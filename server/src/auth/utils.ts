import passport from "passport";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/user";
import { UserModel } from "../model/user";

const setup = () => {
  passport.serializeUser((user: IUser, done: any) => done(null, user._id));

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await UserModel.findById(id);
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  });
};

const signToken = (user: IUser) => {
  return jwt.sign({ data: user }, process.env.JWT_KEY, {
    expiresIn: 604800,
  });
};

export { setup, signToken };

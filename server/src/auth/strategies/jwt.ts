import { Request } from "express";
import passport from "passport";
import passportJWT from "passport-jwt";
import { UserModel } from "../../model/user";
import { signToken } from "../utils";
import { IUser } from "../../interfaces/user";

const JWTStrategy = passportJWT.Strategy;

const strategy = () => {
  const strategyOptions = {
    jwtFromRequest: (req: { cookies: { jwt: string } }) => req.cookies.jwt,
    secretOrKey: process.env.JWT_KEY,
    passReqToCallback: true,
  };

  const verifyCallback = async (
    req: Request,
    jwtPayload: any,
    cb: (err: null | Error, user?: IUser) => void
  ) => {
    try {
      const user = await UserModel.findById(jwtPayload.data._id).exec();
      req.user = user;
      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  };
  passport.use(new JWTStrategy(strategyOptions, verifyCallback));
};

const getToken = (req: Request, user: IUser) => {
  return new Promise((resolve, reject) => {
    req.login(user, { session: false }, (err: Error) => {
      if (err) {
        return reject(err);
      }

      return resolve(signToken(user));
    });
  });
};

export { strategy, getToken };

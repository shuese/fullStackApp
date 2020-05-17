import { serializeUser, deserializeUser } from "passport";
import { UserModel } from "../model/user";
import { IUser } from "../interfaces/user";

const setup = () => {
  serializeUser((user: IUser, done: any) => done(null, user._id));

  deserializeUser(async (id: string, done) => {
    try {
      const user = await UserModel.findById(id);
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  });
};

export { setup };

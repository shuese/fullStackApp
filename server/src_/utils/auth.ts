import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User';

export default function config(passport: { use: (arg0: any) => void; }) {
  const opts: any = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = process.env.JWT_KEY;
  passport.use(new JwtStrategy(opts, (jwtPayload: { id: any; }, done: any) => {
    User.findOne({id: jwtPayload.id}, (err, nickName) => {
      if (err) {
        return done(err, false);
      }
      if (nickName) {
        done(null, nickName);
      } else {
        done(null, false);
      }
    });
  }));
}

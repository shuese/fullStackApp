import * as utils from "./utils";
import * as strategies from "./strategies";

const pipe = (...functions: any[]) => (args: any) =>
  functions.reduce((arg, fn) => fn(arg), args);

const initialiseAuthentication = (app: any) => {
  utils.setup();
  pipe(strategies.JWTStrategy)(app);
};

export { utils, initialiseAuthentication, strategies };

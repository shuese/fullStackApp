import { Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  type: string;
  learned: true;
  password: string;
}

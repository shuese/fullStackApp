import { IUser } from "../interfaces/user";
import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    nickName: String,
    email: String,
    password: String,
    type: String,
    learned: Boolean,
  },
  {
    timestamps: true,
  }
);

const UserModel = model<IUser>("User", UserSchema);

export { UserModel };

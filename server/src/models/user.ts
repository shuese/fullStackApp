import mongoose, { Document } from "mongoose";
import { isEmail } from "validator";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcrypt";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  password: string;
  tokens: any;
  type: any;
  race?: boolean;
  date?: object;
  isValidPassword(password: string): any;
}

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nickName: {
    type: String,
    default: null,
    trim: true,
    unique: true,
    required: "Обязательное поле!",
    minlength: [2, "Слишком короткий ник!"],
    maxlength: [50, "Слишком длинный ник!"]
  },
  password: {
    type: String,
    default: null,
    trim: true,
    unique: true,
    sparse: true,
    required: "Обязательное поле!",
    minlength: [10, "Слишком короткий пароль!"],
    maxlength: [256, "Слишком длинный пароль!"]
  },
  firstName: {
    type: String,
    required: "Обязательное поле!",
    trim: true,
    minlength: [2, "Слишком короткое имя!"],
    maxlength: [50, "Слишком длинное имя!"]
  },
  lastName: {
    type: String,
    required: "Обязательное поле!",
    trim: true,
    minlength: [2, "Слишком короткая фамилия!"],
    maxlength: [50, "Слишком длинная фамилия!"]
  },
  email: {
    type: String,
    required: "Обязательное поле!",
    trim: true,
    unique: true,
    min: 3,
    validate: [isEmail, "Нужну ввести почту!"],
    minlength: [2, "Слишком короткая почта!"],
    maxlength: [50, "Слишком длинная почта!"]
  },
  race: {
    type: Boolean
  },
  type: {
    type: String
  }
});

UserSchema.pre("save", async function(next) {
  const user: any = this;
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function(password: string) {
  const user: any = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

UserSchema.plugin(uniqueValidator, {
  message: "{PATH}"
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;

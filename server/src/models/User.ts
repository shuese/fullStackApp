import mongoose, {  Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { isEmail } from 'validator';

interface IUsesr extends Document {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  password: string;
  tokens: any;
  race?: boolean;
  date?: object;
  isValidPassword(password: string): any;
}

const UserSchema = new Schema({
  nickName : {
    type: String,
    default: null,
    trim: true,
    unique: true,
    sparse: true,
    required: true,
    minLength: 2
  },
  password : {
    type: String,
    default: null,
    trim: true,
    unique: true,
    sparse: true,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: 6,
    validate: [isEmail, 'Invalid email'],
  },
  race: {
    type: Boolean,
  },
  type: {
    type: String,
    trim: true
  },
});

UserSchema.pre('save', async function(next) {
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

const User = mongoose.model<IUsesr>('User', UserSchema);

export default User;

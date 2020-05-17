import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { IUser } from "../interfaces/user";
import { UserModel } from "../model/user";
import { getToken } from "../auth/strategies/jwt";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: IUser = await UserModel.findOne({ email }).exec();
    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(500)
        .send({ message: "Не правильный пароль", success: false });
    }

    const token = await getToken(req, user);

    return res
      .status(200)
      .cookie("jwt", token, {
        httpOnly: true,
      })
      .json({
        success: true,
        data: "/",
      });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Authentication error!", success: false, error });
  }
});

router.post("/register", async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    nickName,
    email,
    password,
    type,
    learned,
  } = req.body;

  try {
    const salt: string = await bcrypt.genSalt(10);
    const user: IUser = await UserModel.create({
      firstName,
      lastName,
      nickName,
      email,
      type,
      learned,
      password: await bcrypt.hash(password, salt),
    });
    console.log(user, "asdasdasdasd");
    const token = await getToken(req, user);
    return res
      .status(200)
      .cookie("jwt", token, {
        httpOnly: true,
      })
      .send({ success: true, message: "пользователь создан", user });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
});

router.get("/logout", async (req: Request, res: Response) => {
  res.clearCookie("jwt");
  res.send({ message: "разлогинен", success: true });
});

export default router;

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import { secret } from "../..";

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  console.log({ email, password, name });

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    email,
    password: hashedPassword,
    name,
    status: "USER",
  });
  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json("User not found");
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    res.status(400).json("Invalid password");
    return;
  }

  const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });

  res.json({ token });
};

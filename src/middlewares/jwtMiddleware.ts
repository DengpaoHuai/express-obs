import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { secret } from "../..";
import User from "../models/userModel";
import { User as UserType } from "../types/users.types";

declare module "express-session" {
  interface SessionData {
    user: UserType;
  }
}
const jwtMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    response.status(401).json("Token not found");
    return;
  }

  try {
    const decoded1 = jwt.verify(token, secret);
    if (typeof decoded1 === "string") {
      response.status(401).json("Token not found");
      return;
    }
    const decoded: JwtPayload = decoded1;

    User.findById(decoded.id)
      .then((user) => {
        request.session.user = user as UserType;
        next();
      })
      .catch((err) => {
        response.status(404).json(err.message);
      });
  } catch (err) {
    response.status(401).json("Token not found");
  }
};

export default jwtMiddleware;

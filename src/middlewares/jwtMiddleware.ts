import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { secret } from "../..";
import User from "../models/userModel";

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
    const decoded = jwt.verify(token, secret) as { id: string };

    User.findById(decoded.id)
      .then((user) => {
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

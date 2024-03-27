import { NextFunction, Request, Response } from "express";
import { User } from "../types/users.types";

const permissionsMiddleware = (permissions: string[]) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const userPermissions = request.session.user?.status;

    const hasPermission = permissions.includes(
      userPermissions ? userPermissions : ""
    );

    if (!hasPermission) {
      response.status(403).json("User does not have permission");
      return;
    }

    next();
  };
};

export default permissionsMiddleware;

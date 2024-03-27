import { Request, Response, NextFunction } from "express";
import permissionsMiddleware from "../src/middlewares/permissions.middleware";
import { User } from "../src/types/users.types";

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

describe("permissionsMiddleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(), // Permet d'enchaîner .status().json()
    };
  });

  test("devrait appeler next() lorsque l'utilisateur a la permission", () => {
    const permissions = ["ADMIN", "USER"];
    mockRequest = {
      session: {
        user: {
          status: "ADMIN",
          name: "test",
          email: "test",
          password: "test",
        },
      },
    } as unknown as Request;

    const middleware = permissionsMiddleware(permissions);
    middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
  });

  test("devrait répondre avec 403 lorsque l'utilisateur n'a pas la permission", () => {
    const permissions = ["ADMIN", "USER"];
    mockRequest = {
      session: {
        user: {
          status: "viewer",
          name: "test",
          email: "test",
          password: "test",
        },
      },
    } as unknown as Request;

    const middleware = permissionsMiddleware(permissions);
    middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith(
      "User does not have permission"
    );
    expect(nextFunction).not.toHaveBeenCalled();
  });
});

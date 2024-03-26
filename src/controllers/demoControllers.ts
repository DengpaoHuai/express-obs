import { Request, Response } from "express";
import Movie from "../models/moviesModel";

export const getDemo = (request: Request, response: Response) => {
  response.send("Hello World!");
};

export const postDemo = (request: Request, response: Response) => {
  console.log(request.body);
  response.send("Hello POST!");
};

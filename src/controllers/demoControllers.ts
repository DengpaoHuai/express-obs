import { Request, Response } from "express";
import Movie from "../models/moviesModel";

export const getDemo = (request: Request, response: Response) => {
  response.send("Hello World!");
};

export const postDemo = (request: Request, response: Response) => {
  console.log(request.body);
  response.send("Hello POST!");
};

export const createMovie = (request: Request, response: Response) => {
  Movie.create({
    title: "The Dark Knight",
    year: 2008,
    rating: 9,
    actors: ["Christian Bale", "Heath Ledger"],
  });

  response.send("Movie created!");
};

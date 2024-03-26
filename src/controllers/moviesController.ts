import { Request, Response } from "express";
import Movie from "../models/moviesModel";
import { MovieType, MoviesType } from "../types/movies.types";
import { Error } from "mongoose";

export const getMovieById = (req: Request, res: Response) => {
  //destructuration
  const { id } = req.params;
  Movie.findById(id)
    .then((movie: MovieType) => {
      res.json(movie);
    })
    .catch((err: Error) => {
      res.status(404).json(err.message);
    });
  /* .catch((err : unknown) => {
        //narrowing 
        if (err instanceof Error) {
            customLog(err.message);
            res.status(404).json(err.message);
        }
        if (typeof err === 'string') {
            customLog(err);
            res.status(404).json(err);
        }
        
      res.status(401).json(err);
    });*/
};

export const getMovies = (req: Request, res: Response) => {
  Movie.find()
    .then((movies: MoviesType) => {
      res.json(movies);
    })
    .catch((err: Error) => {
      res.status(404).json(err.message);
    });
};

export const postMovie = (req: Request, res: Response) => {
  const temp_movie: Omit<MovieType, "_id"> = req.body;
  Movie.create(temp_movie)
    .then((movie: MovieType) => {
      res.json(movie);
    })
    .catch((err: Error) => {
      res.status(404).json(err.message);
    });
};

export const putMovie = (req: Request, res: Response) => {
  const { id } = req.params;

  Movie.findByIdAndUpdate(id, req.body)
    .then((movie: MovieType | null) => {
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json("Movie not found");
      }
    })
    .catch((err: Error) => {
      res.status(404).json(err.message);
    });
};

export const deleteMovie = (req: Request, res: Response) => {
  const { id } = req.params;

  Movie.findByIdAndDelete(id)
    .then((movie: MovieType | null) => {
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json("Movie not found");
      }
    })
    .catch((err: Error) => {
      res.status(404).json(err.message);
    });
};

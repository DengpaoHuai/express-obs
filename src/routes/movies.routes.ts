import { Router } from "express";
import {
  deleteMovie,
  getMovieById,
  getMovies,
  postMovie,
  putMovie,
} from "../controllers/moviesController";
import validateWithJoi from "../middlewares/validation";
import { movieSchema, movieUpdateSchema } from "../validations/movies.schemas";
import jwtMiddleware from "../middlewares/jwtMiddleware";

const router = Router();

router.get("/:id", getMovieById);

router.get("/", getMovies);
router.post("/", jwtMiddleware, validateWithJoi(movieSchema), postMovie);
router.put("/:id", validateWithJoi(movieUpdateSchema), putMovie);
router.delete("/:id", deleteMovie);

export default router;

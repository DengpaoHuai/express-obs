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

const router = Router();

router.get("/:id", getMovieById);

router.get("/", getMovies);
router.post("/", validateWithJoi(movieSchema), postMovie);
router.put("/:id", validateWithJoi(movieUpdateSchema), putMovie);
router.delete("/:id", deleteMovie);

export default router;

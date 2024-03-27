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
import permissionsMiddleware from "../middlewares/permissions.middleware";

const router = Router();

router.get("/:id", getMovieById);

router.get("/", getMovies);
router.post(
  "/",
  jwtMiddleware,
  permissionsMiddleware(["ADMIN"]),
  validateWithJoi(movieSchema),
  postMovie
);
router.put("/:id", jwtMiddleware, validateWithJoi(movieUpdateSchema), putMovie);
router.delete("/:id", jwtMiddleware, deleteMovie);

export default router;

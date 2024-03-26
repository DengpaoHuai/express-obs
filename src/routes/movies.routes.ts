import { Router } from "express";
import {
  deleteMovie,
  getMovieById,
  getMovies,
  postMovie,
  putMovie,
} from "../controllers/moviesController";

const router = Router();

router.get("/:id", getMovieById);

router.get("/", getMovies);
router.post("/", postMovie);
router.put("/:id", putMovie);
router.delete("/:id", deleteMovie);

export default router;

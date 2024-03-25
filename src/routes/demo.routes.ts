import { createMovie, getDemo, postDemo } from "../controllers/demoControllers";
import { Router } from "express";

const router = Router();

router.get("/", getDemo);

router.post("/", postDemo);

router.get("/create", createMovie);

export default router;

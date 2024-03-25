import { getDemo, postDemo } from "../controllers/demoControllers";
import { Router } from "express";

const router = Router();

router.get("/", getDemo);

router.post("/", postDemo);

export default router;

import { getDemo, postDemo } from "../controllers/demoControllers";

const router = require("express").Router();

router.get("/", getDemo);

router.post("/", postDemo);

export default router;

import { Router } from "express";
import { login, register } from "../controllers/userController";
import validateWithJoi from "../middlewares/validation";
import usersSchemas from "../validations/users.schemas";

const router = Router();

router.post("/login", login);
router.post("/register", validateWithJoi(usersSchemas), register);

export default router;

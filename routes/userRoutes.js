import express from "express";
import { formForgotMyPassword, formLogin, formRegister } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/login", formLogin);
router.get("/register", formRegister);
router.get("/forgot-my-password", formForgotMyPassword);

export default router;

import express from "express";
import {
  formForgotMyPassword,
  formLogin,
  formRegister,
  registerUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/login", formLogin);
router.get("/register", formRegister);
router.post("/register", registerUser);
router.get("/forgot-my-password", formForgotMyPassword);

export default router;

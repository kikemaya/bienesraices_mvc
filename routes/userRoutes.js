import express from "express";
import { formLogin, formRegister } from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/login", formLogin);
router.get("/register", formRegister);

export default router;

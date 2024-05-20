import { check, validationResult } from "express-validator";

import User from "./../models/User.js";

const formLogin = (req, res) => {
  res.render("auth/login", {
    page: "Login",
  });
};

const formRegister = (req, res) => {
  res.render("auth/register", {
    page: "Create account",
  });
};

const registerUser = async (req, res) => {
  await check("name")
    .notEmpty()
    .withMessage("Name value cannot be empty")
    .run(req);

  let result = validationResult(req);

  res.json(result.array());

  const user = await User.create(req.body);
  res.status(201).json(user);
};

const formForgotMyPassword = (req, res) => {
  res.render("auth/forgot-my-password", {
    page: "Recover your access to Real State",
  });
};

export { formLogin, formRegister, registerUser, formForgotMyPassword };

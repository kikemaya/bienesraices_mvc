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

  await check("email")
    .isEmail()
    .withMessage("The email format is not valid")
    .run(req);

  await check("password")
    .isLength({ min: 6 })
    .withMessage("Password should contain at least 6 characters")
    .run(req);

  await check("repeat_password")
    .equals("password")
    .withMessage("Passwords are not identical")
    .run(req);

  let result = validationResult(req);

  if (!result.isEmpty()) {
    return res.render("auth/register", {
      page: "Create account",
      errores: result.array(),
    });
  }

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

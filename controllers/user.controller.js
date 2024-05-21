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
  const { name, email, password } = req.body;

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
    .equals(password)
    .withMessage("Passwords are not identical")
    .run(req);

  let result = validationResult(req);

  console.log(result);

  if (!result.isEmpty()) {
    return res.render("auth/register", {
      page: "Create account",
      errores: result.array(),
      user: {
        name,
        email,
      },
    });
  }

  const userEmailExists = await User.findOne({
    where: { email },
  });

  if (userEmailExists) {
    return res.render("auth/register", {
      page: "Create account",
      errores: [{ msg: "This user is already registered..." }],
      user: {
        name,
        email,
      },
    });
  }

  await User.create({
    name,
    email,
    password,
    token: 123,
  });
};

const formForgotMyPassword = (req, res) => {
  res.render("auth/forgot-my-password", {
    page: "Recover your access to Real State",
  });
};

export { formLogin, formRegister, registerUser, formForgotMyPassword };

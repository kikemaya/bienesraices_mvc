const formLogin = (req, res) => {
    res.render("auth/login", {
        page: "Login"
    });
}

const formRegister = (req, res) => {
    res.render("auth/register", {
        page: "Create account"
    });
}

const formForgotMyPassword = (req, res) => {
    res.render("auth/forgot-my-password", {
        page: "Recover your access to Real State"
    });
}

export {
    formLogin,
    formRegister,
    formForgotMyPassword
}
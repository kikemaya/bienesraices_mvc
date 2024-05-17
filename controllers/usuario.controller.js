const formLogin = (req, res) => {
    res.render("auth/login", {
        authenticated: true
    });
}

const formRegister = (req, res) => {
    res.render("auth/register", {

    });
}

export {
    formLogin,
    formRegister
}
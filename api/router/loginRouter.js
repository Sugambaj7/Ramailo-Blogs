const express = require("express");
const LoginController = require("../auth/LoginController");

const loginRouter = express.Router();

const loginInstance = new LoginController();

loginRouter.post("/", loginInstance.login);
loginRouter.get("/profile", loginInstance.profile);

module.exports = loginRouter;

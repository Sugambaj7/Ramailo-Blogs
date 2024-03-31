const express = require("express");
const RegisterController = require("../controller/RegisterController");

const registerRouter = express.Router();

const registerInstance = new RegisterController();

registerRouter.post("/", registerInstance.Signup);

module.exports = registerRouter;

const express = require("express");
const UserController = require("../controller/UserController");

const userRouter = express.Router();
const userInstance = new UserController();

userRouter.get("/", userInstance.getUser);
userRouter.delete("/:id", userInstance.deleteUser);

module.exports = userRouter;

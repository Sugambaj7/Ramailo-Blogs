const express = require("express");
const webRouter = express.Router();
const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
// const RegisterController = require("../controller/RegisterController");

webRouter.get("/", (req, res) => {
  res.send("Hello World");
});

webRouter.use("/login", loginRouter);
webRouter.use("/register", registerRouter);
webRouter.use("/post", postRouter);
webRouter.use("/category", categoryRouter);
webRouter.use("/user", userRouter);


module.exports = webRouter;

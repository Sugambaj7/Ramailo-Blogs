const bcrypt = require("bcrypt");
const User = require("../models/User");

class RegisterController {
  async Signup(req, res) {
    const { name, mob, email, Password, role } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    const existingUser = await User.findOne({ email });
    // console.log(allusersDoc);
    console.log(req.body, "register form data");

    if (existingUser && email === "admin@gmail.com") {
      // alert("Only one admin is allowed!!!");
      res.status(400).json({ adminexist: "Only one admin is allowed!!!" });
    } else if (!existingUser) {
      try {
        const userDoc = await User.create({
          name,
          mobile: mob,
          email,
          password: hashedPassword,
          role,
        });
        res.send("ok");
      } catch (e) {
        res.status(400).json(e);
      }
    } else {
      res.status(400).json({ exist: "User already exist" });
      // try {
      //   const userDoc = await User.create({
      //     name,
      //     mobile: mob,
      //     email,
      //     password: hashedPassword,
      //     role,
      //   });
      //   res.send("ok");
      // } catch (e) {
      //   res.status(400).json(e);
      // }
    }
  }
}

module.exports = RegisterController;

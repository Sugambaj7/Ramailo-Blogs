const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// require("dotenv").config();

const secret = process.env.secret_key;

class LoginController {
  async login(req, res) {
    const { email, password } = req.body;

    const userDoc = await User.findOne({ email });

    if (userDoc) {
      let role = "user";
      if (email === "admin@gmail.com" && password === "admin1234") {
        role = "admin";
        jwt.sign({ email, id: userDoc._id, role }, secret, {}, (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({
            id: userDoc._id,
            email,
            role,
          });
        });
        console.log("admin login");
      } else if (email === "admin@gmail.com" && password !== "admin1234") {
        res
          .status(400)
          .json({ adminloginfailed: "Failed admin login attempt!!!" });
      } else {
        const passOk = await bcrypt.compare(password, userDoc.password);
        if (passOk) {
          //jwt containing email and id
          jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json({
              id: userDoc._id,
              email,
              name: userDoc.name,
              role,
            });
          });
        } else {
          res.status(400).json("wrong crendentials");
        }
      }
    } else {
      res.status(400).json("wrong crendentials");
    }
  }
  async profile(req, res) {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    jwt.verify(token, secret, {}, (err, info) => {
      if (err) throw err;
      res.json(info);
    });
  }
}

module.exports = LoginController;

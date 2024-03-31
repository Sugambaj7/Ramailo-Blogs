const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  mobile: {
    type: String,
    required: true,
    min: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // username: {
  //   type: String,
  //   required: true,
  //   min: 4,
  //   unique: true,
  // },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["admin", "user"],
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;

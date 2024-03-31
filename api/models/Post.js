const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: String,
    category: String,
    summary: String,
    content: String,
    postimage: String,
    authorid: { type: Schema.Types.ObjectId, ref: "User" },
    // authorid: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);
module.exports = PostModel;

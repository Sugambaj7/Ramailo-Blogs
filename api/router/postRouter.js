const express = require("express");
const PostController = require("../controller/PostController");
const FileUpload = require("../lib/FileUpload");

const postRouter = express.Router();
let fpInstance = new FileUpload();
let upload = fpInstance.custom_upload("uploads/postimages");
const postInstance = new PostController();

// postRouter.post("/", postInstance.createPost);
postRouter.post("/", upload.single("image"), postInstance.store);
postRouter.get("/", postInstance.getPost);
// postRouter.get("/politics", postInstance.getPolitics);
postRouter.get("/:id", postInstance.getIndividualPost);
postRouter.put("/", upload.single("image"), postInstance.updatePost);
postRouter.delete("/", postInstance.deletePost);

module.exports = postRouter;

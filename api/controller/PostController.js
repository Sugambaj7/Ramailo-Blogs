const User = require("../models/User");
const Post = require("../models/Post");
const { errorResponse, successResponse } = require("../helper/response");

class PostController {
  async getIndividualPost(req, res) {
    try {
      const { id } = req.params;
      const PostDoc = await Post.findById(id).populate("authorid", ["name"]);
      res.json(PostDoc);
      // console.log(id, "post id");
    } catch (err) {
      console.error(err, "error gayo");
      res.status(400).json(err);
    }
  }

  async getPost(req, res) {
    // try {
    //   const postDoc = await Post.find()
    //     .populate("authorid", ["name"])
    //     .sort({ createdAt: -1 })
    //     .limit(20);
    //   res.json(postDoc);
    // } catch (e) {
    //   console.error(e, "la shet");
    //   res.status(400).json(e);
    // }
    const postDoc = await Post.find()
      .populate("authorid", ["name"])
      .sort({ createdAt: -1 })
      .limit(20);
    var count = postDoc.length;

    if (!postDoc) {
      return errorResponse(res, 204, "No posts found");
    } else {
      return successResponse(res, 200, "message", postDoc, count);
    }
  }
  async updatePost(req, res) {
    try {
      let imageName = "";
      if (req.file) {
        imageName = req.file.filename;
        // console.log(imageName, "backend bata filename");
      }

      const postDoc = await Post.findById(req.body.id);
      if (postDoc) {
        const updatedpostDoc = await postDoc.updateOne({
          title: req.body.title,
          summary: req.body.title,
          content: req.body.content,
          postimage: imageName,
        });
        res.json(updatedpostDoc);
      } else {
        res.status(400).json("No data");
      }
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  }
  async deletePost(req, res) {
    let id = req.body.id;
    if (id == null) {
      id = req.params.id;
    }

    try {
      const postDoc = await Post.findById(id);
      if (!postDoc) {
        return errorResponse(res, 204, "No Posts found");
      } else {
        const deleteStatus = await postDoc.deleteOne({
          id,
        });
        if (deleteStatus.deletedCount > 0) {
          return successResponse(
            res,
            200,
            "Post has been successfully deleted"
          );
        } else {
          return errorResponse(res, 204, "No posts found");
        }
      }
    } catch (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  async store(req, res) {
    // console.log(req.body, "hello world");
    // console.log(req.file);
    try {
      let imageName = "";
      if (req.file) {
        imageName = req.file.filename;
        // console.log(imageName, "hora");
      }

      const postDoc = await Post.create({
        title: req.body.title,
        category: req.body.category,
        summary: req.body.summary,
        content: req.body.content,
        authorid: req.body.authorid,
        postimage: imageName,
      });
      if (postDoc) {
        res.json("ok");
      } else {
        res.status(400).json(err);
      }
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  }
}

module.exports = PostController;

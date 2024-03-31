const Post = require("../models/Post");

class CategoryController {
  async getPost(req, res) {
    try {
      const category = req.params.category;
      const postDoc = await Post.find({ category: category })
        .populate("authorid", ["name"])
        .sort({ createdAt: -1 })
        .limit(20);
      res.json(postDoc);
    } catch (e) {
      console.error(e, "Error occured");
      res.status(400).json(e);
    }
  }
}
module.exports = CategoryController;

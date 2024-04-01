const User = require("../models/User");
const Post = require("../models/Post");

const { errorResponse, successResponse } = require("../helper/response");

class UserController {
  async getUser(req, res) {
    const users = await User.find({ role: "user" });
    var count = users.length;

    if (!users) {
      return errorResponse(res, 204, "No users found");
    } else {
      return successResponse(res, 200, "message", users, count);
    }
  }
  async deleteUser(req, res) {
    const id = req.params.id;
    try {
      const user = await User.findById(id);
      console.log(user);

      if (!user) {
        return errorResponse(res, 204, "No users found");
      } else {
        const successDelete = await User.deleteOne({ _id: id });
        if (successDelete.deletedCount > 0) {
          const postDocs = await Post.find({ authorid: id });
          if (postDocs.length > 0) {
            const successDeletePost = await Post.deleteMany({ authorid: id }); // Use Post.deleteMany({ authorid: id })
            if (successDeletePost.deletedCount === 0) {
              return errorResponse(res, 204, "No posts found");
            }
          }
        }
        return successResponse(res, 200, "User has been successfully deleted");
      } 
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = UserController;

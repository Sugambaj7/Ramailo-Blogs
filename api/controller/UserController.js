const User = require("../models/User");
const { errorResponse, successResponse } = require("../helper/response");

class UserController {
  async getUser(req, res) {
    const users = await User.find();
    var count = users.length;

    if(!users){
      return errorResponse(res, 204, 'No users found')
    }
    else{
      return successResponse(
        res,
        200,
        'message',
        users,
        count,
      )
    }
    // res.status(200).json(users);
  }
}
module.exports = UserController;

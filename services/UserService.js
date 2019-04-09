const userModel = require('../modules/UserModel');
class UserService {
  async getAllUserService () {
    return await userModel.getQueryConnect();
  }
}

module.exports = new UserService();

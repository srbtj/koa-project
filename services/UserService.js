const userModel = require('../modules/UserModel');
class UserService {
  async getAllUserService () {
    return await userModel.getAllUserInfo();
  }
  async getUserInfoById (id) {
    return await userModel.getUserInfoById(id);
  }
}

module.exports = new UserService();

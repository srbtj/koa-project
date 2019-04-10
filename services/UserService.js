const userModel = require('../modules/UserModel');
class UserService {
  async getAllUserService () {
    return await userModel.getAllUserInfo();
  }
  async getUserInfoById (id) {
    return await userModel.getUserInfoById(id);
  }
  async saveOrUpdateUserInfo (user) {
    return await userModel.saveOrUpdateUserInfo(user);
  }
  async deleteUserInfo (id) {
    return await userModel.deleteUserInfo(id);
  }
}

module.exports = new UserService();

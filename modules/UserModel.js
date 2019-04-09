// mysql查询功能
const BaseModel = require('./BaseModel');
class UserModel extends BaseModel{
  constructor () {
    super();
    // console.log(this.connection);
  }
  async getAllUserModel () {
    return await this.getQueryConnect();
  }
}

module.exports = new UserModel();

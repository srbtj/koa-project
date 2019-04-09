// mysql查询功能
const BaseModel = require('./BaseModel');
class UserModel extends BaseModel{
  constructor () {
    super();
  }
  // 添加用户信息
  async addUserInfo ({username, password}) {
    const sql = "insert into ?? (??, ??) values(?, ?)";
    const value = ['user', 'username', 'password', username, password];
    return await poolHandler(sql, value);
  }
  // 修改用户信息
  async UpdateUserInfo ({username, password, id}) {
    const sql = "update ?? set ?? = ?, ?? = ? where ?? = ?";
    const value = ['user', 'username', 'password', username, password, 'id', id];
    return await poolHandler(sql, value);
  }
  // 删除用户信息
  async deleteUserInfo (id) {
    const sql = "delete from ?? where ?? = ?";
    const value = ['user', 'id', id];
    return await poolHandler(sql, value);
  }
  // 查找用户信息
  async getAllUserInfo () {
    const sql = "SELECT * FROM ??";
    const value = ['user'];
    return await this.poolHandler(sql, value);
  }
  // 根据用户id查找用户信息
  async getUserInfoById (id) {
    const sql = "select * from ?? where ?? = ?";
    const value = ['user', 'id', id];
    return await this.poolHandler(sql, value);
  }
}

module.exports = new UserModel();

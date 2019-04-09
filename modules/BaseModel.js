const {connHandler, poolHandler} = require('../config/db');
// const {logger} = require('../utils/log4j-config');
class BaseModel {
  constructor () {}
  // 增删改查统一处理句柄
  async poolHandler (sql, value) {
    return await poolHandler(sql, value);
  }
}

module.exports = BaseModel;

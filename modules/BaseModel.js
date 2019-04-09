const {connection, pool} = require('../config/db');
class BaseModel {
  constructor () {
    this.connection = connection;
    this.pool = pool
  }
  async getQueryConnect () {
    const userData = [
      { username: 'tom', password: '123' },
      { username: 'lili', password: '456'}
    ];
    return await userData;
  }
  async getQueryPool () {}

}

module.exports = BaseModel;

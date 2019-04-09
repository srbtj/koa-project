const mysql = require('mysql');

const config = {
  username: 'root',
  password: 'root',
  host: '127.0.0.1',
  database: 'test'
};
const connection = mysql.createConnection(config);

const pool = mysql.createPool(config);

module.exports = {
  connection,
  pool
};

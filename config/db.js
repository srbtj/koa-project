const mysql = require('mysql');

const config = {
  user: 'root',
  password: 'root',
  host: '127.0.0.1',
  database: 'test'
};
// 执行SQL语句
const query = (conn, resolve, reject, sql, value) => {
  const _sql = mysql.format(sql, value);
  conn.query(_sql, (err, result) => {
    if (err) reject(err);
    else resolve(result);
    conn.end();
  });
};
// 创建连接对象
const connHandler = (sql, value) => {
  return new Promise((resolve, reject) => {
    try {
      const connection = mysql.createConnection(config);
      // connection.query(sql, value, (err, rows) => {
      //   if (err) reject(err);
      //   else resolve(rows);
      //   connection.end();
      // });
      connection.connect();
      query(connection, resolve, reject, sql, value);
    } catch (err) {
      reject(err);
    }
  });
}
// 获取连接池实例
const getPool = (function (mysql) {
  let instance;
  return function () {
    if (!instance) instance = mysql.createPool(config);
    return instance;
  };
})(mysql);

// 创建连接池
const poolHandler = (sql, value) => {
  const pool = getPool();
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        query(connection, resolve, reject, sql, value);
      }
    });
  });
}
module.exports = {
  poolHandler,
  connHandler
};

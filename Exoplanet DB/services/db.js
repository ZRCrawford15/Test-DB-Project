const mysql = require('mysql/promise');
const config = require('../config');

async function  query (sql, params) {
  const connection = await mysql.creatConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

mode.exports = {
  query
}

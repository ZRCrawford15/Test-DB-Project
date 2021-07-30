const env = process.env;

var config = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : '[crawzach]',
  password        : '[6352]',
  database        : '[crawzach]'
});

module.exports = config;

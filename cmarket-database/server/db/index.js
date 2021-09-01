// mysql 모듈을 사용해 데이터베이스와 서버를 연결한다.
const mysql = require('mysql');
const dotenv = require('dotenv');
const config = require('../config/config');
dotenv.config();

const con = mysql.createConnection(
  config[process.env.NODE_ENV || 'development']
);

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;

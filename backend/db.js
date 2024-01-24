const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "app_mysql",
  user: "root",
  password: "xorudA0805!",
  database: "myapp",
});

exports.pool = pool;

// var mysql = require('mysql');
// var pool  = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'example.org',
//     user            : 'bob',
//     password        : 'secret',
//     database        : 'my_db'
// });
//
// pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

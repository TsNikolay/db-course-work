const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ubuntu",
  database: "mydb",
});

module.exports = connection;
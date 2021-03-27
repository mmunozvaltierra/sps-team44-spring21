// server/db-connect.js
// Script to create connection to MySQL Server

require("dotenv").config();

const mysql = require('mysql');

//Configure connection
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

//Create connection
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as thread id: ' + connection.threadId);
  connection.query("CREATE DATABASE IF NOT EXISTS shoplocal", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});


module.exports = connection;

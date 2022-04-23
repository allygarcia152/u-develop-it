const mysql = require('mysql2');

//express middleware
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Ramen&Noodle',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

module.exports = db;
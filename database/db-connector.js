const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '3364',
    database: 'notes',
    port: 3306
});

module.exports = pool;
const mysql = require('mysql');

module.exports = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '11111111',
    database : 'noteExpJsData'
});
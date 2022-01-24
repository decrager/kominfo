var mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'web_opd'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql connected!');
});

module.exports = conn;
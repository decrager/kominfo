'use strict';

var response = require('../response');
var connection = require('../connection');

exports.showPengguna = function (req, res) {
    connection.query('SELECT * FROM `pengguna`', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}

exports.showPenggunaid = function (req, res) {
    let id = req.params.id;

    connection.query('SELECT * FROM `pengguna` WHERE id=?', [id],
        function (error, rows, field) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
}

exports.addPengguna = function (req, res) {
    var nama = req.body.nama;
    var email = req.body.email;
    var telp = req.body.telp;
    var username = req.body.username;
    var password = req.body.password;
    var foto = req.body.foto;
    var level = req.body.level;

    connection.query('INSERT INTO pengguna (nama, email, telp, username, password, foto, level) VALUES(?,?,?,?,?,?,?)',
        [nama, email, telp, username, password, foto, level],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data pengguna berhasil ditambahkan!", res);
            }
        });
}
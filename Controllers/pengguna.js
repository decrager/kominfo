'use strict';

var response = require('../response');
var connection = require('../connection');
const req = require('express/lib/request');

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
        function (error, rows, fields) {
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

exports.updatePengguna = function (req, res){
    var id = req.body.id;
    var nama = req.body.nama;
    var email = req.body.email;
    var telp = req.body.telp;
    var username = req.body.username;
    var password = req.body.password;
    var foto = req.body.foto;
    var level = req.body.level;

    connection.query('UPDATE pengguna SET nama=?, email=?, telp=?, username=?, password=?, foto=?, level=?, updated_at=CURRENT_TIMESTAMP WHERE id=?',
        [nama, email, telp, username, password, foto, level, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data pengguna berhasil diperbarui!", res);
            }
        });
}

exports.deletePengguna = function(req, res) {
    var id = req.body.id;

    connection.query('DELETE FROM pengguna WHERE id=?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data pengguna berhasil dihapus!", res);
            }
        });
}
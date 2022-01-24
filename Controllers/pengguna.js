'use strict';

var response = require('../response');
var connection = require('../connection');

exports.showPengguna = function(req, res) {
    connection.query('SELECT id, username, password, foto FROM `pengguna`', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
}

exports.showPenggunaid = function(req, res) {
    let id = req.params.id;

    connection.query('SELECT id, username, password, foto FROM `pengguna` WHERE id=?', [id],
        function(error, rows, field){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        });
}
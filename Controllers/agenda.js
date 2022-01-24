'use strict';

var response = require('../response');
var connection = require('../connection');
const req = require('express/lib/request');

exports.showAgenda = function(req, res) {
    connection.query('SELECT * FROM `agenda`', function(error, rows, fields) {
        if(error) {
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
}

exports.showAgendaid = function (req, res) {
    let id = req.params.id;

    connection.query('SELECT * FROM `agenda` WHERE id=?', [id],
        function (error, rows, fields) {
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
}

exports.addAgenda = function (req, res) {
    var hari = req.body.hari;
    var tgl = req.body.tgl;
    var waktu = req.body.waktu;
    var lokasi = req.body.lokasi;
    var kegiatan = req.body.kegiatan;
    var user_id = req.body.user_id;

    connection.query('INSERT INTO agenda (hari, tgl, waktu, lokasi, kegiatan, user_id) VALUES(?,?,?,?,?,?)',
        [hari, tgl, waktu, lokasi, kegiatan, user_id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data agenda berhasil ditambahkan!", res)
            }
        });
}

exports.updateAgenda = function (req, res){
    var id = req.body.id;
    var hari = req.body.hari;
    var tgl = req.body.tgl;
    var waktu = req.body.waktu;
    var lokasi = req.body.lokasi;
    var kegiatan = req.body.kegiatan;
    var user_id = req.body.user_id;

    connection.query('UPDATE agenda SET hari=?, tgl=?, waktu=?, lokasi=?, kegiatan=?, user_id=?, updated_at=CURRENT_TIMESTAMP WHERE id=?',
        [hari, tgl, waktu, lokasi, kegiatan, user_id, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data agenda berhasil diperbarui!", res);
            }
        });
}

exports.deleteAgenda = function(req, res) {
    var id = req.body.id;

    connection.query('DELETE FROM agenda WHERE id=?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data pengguna berhasil dihapus", res);
            }
        });
}
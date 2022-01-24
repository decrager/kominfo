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
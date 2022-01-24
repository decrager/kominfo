'use strict';

var response = require('../response');
var connection = require('../connection');

exports.index = function(req, res){
    response.ok('REST API successfully running', res)
};
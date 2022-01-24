'use strict';

module.exports = function(app) {
    var pengguna_route = require('./Controllers/pengguna');

    app.route('/')
        .get(pengguna_route.index);
};
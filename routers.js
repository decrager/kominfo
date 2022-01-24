'use strict';

module.exports = function(app) {
    var index_route = require('./Controllers/index');
    var pengguna_route = require('./Controllers/pengguna');

    app.route('/')
        .get(index_route.index); 

    app.route('/getPengguna')
        .get(pengguna_route.showPengguna);

    app.route('/getPengguna/:id')
        .get(pengguna_route.showPenggunaid);

    app.route('/postPengguna')
        .post(pengguna_route.addPengguna);
};
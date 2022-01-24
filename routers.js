'use strict';

module.exports = function(app) {
    var index_route = require('./Controllers/index');
    var pengguna_route = require('./Controllers/pengguna');
    var agenda_route =require('./Controllers/agenda');

    app.route('/')
        .get(index_route.index); 

    // ==================== TABLE pengguna ====================
    app.route('/getPengguna')
        .get(pengguna_route.showPengguna);

    app.route('/getPengguna/:id')
        .get(pengguna_route.showPenggunaid);

    app.route('/postPengguna')
        .post(pengguna_route.addPengguna);

    app.route('/putPengguna')
        .put(pengguna_route.updatePengguna);

    app.route('/deletePengguna')
        .delete(pengguna_route.deletePengguna);

    // ==================== TABLE pengguna ====================

    app.route('/getAgenda')
        .get(agenda_route.showAgenda);

    app.route('/getAgenda/:id')
        .get(agenda_route.showAgendaid);
};
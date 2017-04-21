// app/client.routes.js

'use strict';

var path = require('path');

module.exports = function(app) {
    app.get('/partials/:name', (req, res) => {
        var name = req.params.name;
        res.render('partials/' + name);
    });

    app.get('*', (req, res) => {
        res.render('dashboard.jade', {
            "title": "Athiththan"
        });
    });
};
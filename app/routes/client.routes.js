// app/client.routes.js

'use strict';

const path = require('path');

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
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../../public/view/login.jade'));
    // });
};
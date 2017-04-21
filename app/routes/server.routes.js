// app/server.routes.js

'use strict';

var path = require('path');

module.exports = function(app) {
    app.get('/api/users', (req, res) => {
        res.send({
            "Name": "Athiththan"
        }); //Sending Data from Server
    });

    app.post('/login', (req, res) => {
        console.log('Vanthittu Manda');
        res.redirect('/');
    });

};
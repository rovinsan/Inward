// app/server.routes.js

'use strict';

const path = require('path');

module.exports = function(app) {
    app.get('/api/users', (req, res) => {
        res.send({
            "Name": "Athiththan"
        }); //Sending Data from Server
    });
};
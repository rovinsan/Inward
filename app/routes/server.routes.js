// app/routes/server.routes.js

'use strict';

const path = require('path');
const UserModel = require('../models/user.model');

module.exports = function(app) {
    app.get('/api/users', function(req, res) {
        UserModel.find(function(err, users) {
            if (err) {
                res.send(err);
            }

            res.json(users);
        });
    });
};
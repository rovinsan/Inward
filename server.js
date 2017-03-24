// server.js
'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, '/public')));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.set('views', path.join(__dirname, '/public/views'));

require('./app/routes/client.routes')(app);
require('./app/routes/server.routes')(app);

// app.use('*', (req, res, next) => {
//     res.send("Hello World");
//     next();
// });

app.listen(port, function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Server running on port 3000");
});

exports = module.exports = app;
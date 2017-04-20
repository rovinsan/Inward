//Server.js

'use strict';

const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const path = require('path');

const port = process.env.port || 3000;

const clientRoute = require('./app/routes/client.routes');
const serverRoute = require('./app/routes/server.routes');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/public/views'));

require('./app/routes/server.routes')(app);
require('./app/routes/client.routes')(app);

app.use('/api', serverRoute);

app.listen(port, function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Server Started');
});

exports = module.exports = app;
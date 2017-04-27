// server.js

'use strict';

// requires
var path = require('path');
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var flash = require('connect-flash');
var expressSession = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');

var configDb = require('./config/db.config.js');
mongoose.connect(configDb.url);

var app = express();
var port = process.env.port || 3000;

var clientRoute = require('./app/routes/client.routes');
var serverRoute = require('./app/routes/server.routes');

app.use(morgan('dev'));
app.use(cookieParser());

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// session creation and passport initialize
app.use(expressSession({ secret: 'inwardModule' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// template engine
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/public/views'));

require('./config/passport')(passport);
require('./app/routes/server.routes')(app);
require('./app/routes/client.routes')(app);
require('./app/routes/authentication.routes')(app, passport);

app.use('/api', serverRoute);

// server start
app.listen(port, function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Server Started');
});

exports = module.exports = app;

//git remote add upstream https://github.com/Athiththan/inward.git
//git pull upstream master
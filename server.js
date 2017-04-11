// server.js
'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const passport = require('passport');
// const connectFlash = require('connect-flash');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

// mongoose.Promise = global.Promise;
// const db = require('./config/db.config');
// mongoose.connect(db.url, (err) => {
//     if (err) {
//         console.error(err);
//         process.exit(1);
//     }
// });

// const UserModel = require('./app/models/user.model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// app.use(morgan('dev'));
// app.use(cookieParser());

// app.use(session({ secret: 'code19inwardmodule' }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(connectFlash());

// app.set('view engine', 'ejs');
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
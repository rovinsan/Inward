// app/client.routes.js

'use strict';

var path = require('path');

module.exports = function(app) {

    // rendering _layout.jade if only user logged in
    app.get('/_layout', isLoggedIn, (req, res) => {
        res.render('shared/_layout.jade', { user: req.user.local.email });
    });

    // rendering dashboard.jade
    app.get('/template/dashboard', isLoggedIn, (req, res) => {
        res.render('dashboard.jade');
    });

    // rendering templates
    app.get('/template/summa', isLoggedIn, (req, res) => {
        res.render('summa.jade');
    });

    app.get('/signup', (req, res) => {
        res.render('account/signup.jade', { message: req.flash('signupMessage') });
    });

    app.get('/', (req, res) => {
        res.render('account/login.jade', { message: req.flash('loginMessage') });
    });

    app.get('*', (req, res) => {
        res.render('shared/error.jade');
    });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
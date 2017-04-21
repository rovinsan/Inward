// app/routes/authentication.routes.js

'use strict';

module.exports = function(app, passport) {

    app.post('/auth/login', passport.authenticate('local-login'), function(req, res) {
        res.redirect('/dashboard');
    });

    app.post("/logout", function(req, res) {
        req.logOut();
        res.send(200);
    });

    app.get("/auth/loggedin", function(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    });
};


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
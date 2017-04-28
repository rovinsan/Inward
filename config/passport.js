// config/passport.js

'use strict';

var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user.model.js');

module.exports = function(passport) {
    //serialize the user for the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    //deserialize the user
    passport.deserializeUser((id, done) => {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // local Strategy for user signup process
    passport.use('local-signup', new LocalStrategy({
        // by default local strategy use username and password, overriding with email and password
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
        process.nextTick(function() {
            User.findOne({ 'local.email': email }, function(err, user) {
                if (err) {
                    return done(err);
                }

                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {
                    var newUser = new User();
                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save(function(err) {
                        if (err) {
                            throw err;
                        }

                        return done(null, newUser);
                    });
                }
            });
        });
    }));

    //local strategy for user login
    passport.use('local-login', new LocalStrategy({
        // by default local strategy use username and password, overriding with email and password
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true //allows to pass back the entire request to the callback
    }, function(req, email, password, done) {
        User.findOne({ 'local.email': email }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            }

            if (!user.validPassword(password)) {
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
            }

            return done(null, user);
        });
    }));
};
// app/models/user.model.js

'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: {
        type: String,
        default: ''
    }
});
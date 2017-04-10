// app/models/user.model.js

'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Athiththan'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

// module.exports = mongoose.model('User', {
//     name: {
//         type: String,
//         default: ''
//     }
// });
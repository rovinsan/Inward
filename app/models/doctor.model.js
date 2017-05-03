'use strict';

const mongoose = require('mongoose');
const DoctorSchema = mongoose.Schema({
    did = String,
    dname = String,
    gender = String,
    address = String,
    phone: {
        type: Number,
        validator: (v) => {
            return /d{10}/.test(v);
        }
    },
    department = String,
    designation = String


});
model.exports = mongoose.model('Doctor', doctorSchema);
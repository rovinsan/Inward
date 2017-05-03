'use strict';

const mongoose = require('mongoose');
const DoctorSchema = mongoose.Schema({
    name = String,
    special = String,


});
model.exports = mongoose.model('Doctor', doctorSchema);
// app/models/patient.model.js

'use strict';

var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
    name: String,
    bht: String
});

module.exports = mongoose.model('Patient', patientSchema);
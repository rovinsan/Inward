// app/models/patient.model.js

'use strict';

const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    name: String,
    bht: String
});

module.exports = mongoose.model('Patient', patientSchema);
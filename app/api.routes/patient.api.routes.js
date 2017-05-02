// app/api.routes/patient.api.routes.js

'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Router = express.Router();
const PatientModel = mongoose.model('Patient');

Router.get('/', (req, res) => {
    PatientModel.find().exec().then(patients => {
        res.json(patients);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
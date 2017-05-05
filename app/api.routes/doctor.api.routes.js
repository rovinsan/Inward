'use strict';
const express = require('express');
const mongoose = require('mongoose');
const Router = express.Router();
const doctorModel = mongoose.model('Doctor');

Router.get('/', (req, res) => {
    doctorModel.find().exec().then(doctors => {
        res.json(doctors);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
});

Router.post('/', (req, res) => {
    const doctor = new doctorModel(req.body);
    doctor.save().then(doctor => {
        res.json(doctor);
        console.log("Doctor Details Added");
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
})

module.exports = Router;
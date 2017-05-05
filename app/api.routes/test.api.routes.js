'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Router = express.Router();
const TestModel = mongoose.model('Test');

Router.get('/', (req, res) => {
    TestModel.find().exec().then(tests => {
        res.json(tests);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:patientNo', (req, res) => {
    TestModel.findOne({ 'patientNo': req.params.patientNo }).exec().then(patientNo => {
        res.json(patientNo);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    var newTest = new TestModel(req.body);
    newTest.save().then(test => {
        res.json(test);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
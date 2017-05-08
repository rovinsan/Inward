// app/api.routes/ward.api.routes.js

'use strict';

const express = require('express');
const Router = express.Router();

const mongoose = require('mongoose');
const WardModel = mongoose.model('Ward');

Router.get('/', (req, res) => {
    WardModel.find().exec().then(wardBeds => {
        res.json(wardBeds);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    let newWardBed = new WardModel();
    newWardBed.save().then(wardBed => {
        res.json(wardBed);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
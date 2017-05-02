// // app/server.routes.js

// 'use strict';

// var path = require('path');
// var Patient = require('../models/patient.model');

// module.exports = function(app) {

//     app.get('/api/patient', (req, res) => {
//         Patient.find().exec(function(err, data) {
//             if (err) {
//                 // res.send(500, {error: err});
//                 console.log(err);
//             }
//             res.send(data);
//         });
//     });

//     app.post('/api/patient', (req, res) => {
//         var patient = new Patient();
//         patient.name = req.body.name;
//         patient.bht = req.body.bht;
//         patient.save(function(err) {
//             if (err) {
//                 throw err;
//             }
//         });
//         res.send(patient);
//     });

// };
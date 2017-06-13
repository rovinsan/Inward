// app/models/ward.model.js

'use strict';

const mongoose = require('mongoose');
const Counter = mongoose.model('Counter');

const wardSchema = mongoose.Schema({
    wardNumber: {
        type: String,
        unique: true,
        required: true
    },
    bedNumber: {
        type: String,
        unique: true,
        required: true
    },
    addedDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    patient: {
        ID: {
            type: String,
            default: 'null'
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
});

wardSchema.pre('save', function(next) {
    let doc = this;
    Counter.findByIdAndUpdate({ _id: 'wardBed' }, { $inc: { seq: 1 } }, function(error, counter) {
        if (error) {
            return next(error);
        }
        doc.bedNumber = "WB-" + counter.seq;

        Counter.findByIdAndUpdate({ _id: 'ward' }, { $inc: { seq: 1 } }, function(error, counter) {
            if (error) {
                return next(error);
            }
            doc.bedNumber = "W-" + counter.seq;
            next();
        });
    });
});

module.exports = mongoose.model('Ward', wardSchema);
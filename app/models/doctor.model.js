'use strict';

const mongoose = require('mongoose');
const Counter = mongoose.model('Counter');
const DoctorSchema = mongoose.Schema({
    ID: {
        type: String,
        unique: true
    },
    Name: {
        Title: {
            type: String,
            required: true
        },
        Firstname: {
            type: String,
            required: true
        },
        Lastname: {
            type: String,
            required: true
        }
    },
    HealthCare: {
        Type: {
            type: String,
            required: true
        },
        SpecialType: {
            type: String,
            required: true
        }
    },
    ContactInfo: {
        Address: {
            AddressLine: {
                type: String,
                required: true
            },
            City: {
                type: String,
                required: true
            },
            State: {
                type: String,
                required: true
            },
            Zip: {
                type: Number,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        },
        Phone: {
            Mobile: {
                type: String,
                required: true,
                validator: (v) => {
                    return /d{10}/.test(v);
                }
            }
        }
    },
    Age: {
        type: Number,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    }


});

DoctorSchema.pre('save', function(next) {
    let doc = this;
    Counter.findByIdAndUpdate({ _id: 'doctor' }, { $inc: { seq: 1 } }, function(error, counter) {
        if (error) {
            return next(error);
        }
        doc.ID = "D-0" + counter.seq;
        next();
    });
});

module.exports = mongoose.model('Doctor', DoctorSchema);
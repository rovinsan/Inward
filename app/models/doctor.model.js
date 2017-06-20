'use strict';

const mongoose = require('mongoose');
const DoctorSchema = mongoose.Schema({
    Name: {
        Title: {
            type: String
        },
        Firstname: {
            type: String
        },
        Lastname: {
            type: String
        }
    },
    HealthCare: {
        Type: {
            type: String
        },
        SpecialType: {
            type: String
        }
    },
    ContactInfo: {
        Address: {
            AddressLine: {
                type: String
            },
            City: {
                type: String
            },
            State: {
                type: String
            },
            Zip: {
                type: Number
            }
        },
        Phone: {
            Mobile: {
                type: String,
                validator: (v) => {
                    return /d{10}/.test(v);
                }
            }
        }
    },
    Age: {
        type: String
    },
    Status: {
        type: String
    },
    Gender: {
        type: String
    },
    Department: {
        type: String
    },
    Designation: {
        type: String
    }


});
module.exports = mongoose.model('Doctor', DoctorSchema);
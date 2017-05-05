// app/models/patient.model.js

'use strict';

const mongoose = require('mongoose');
const Counter = mongoose.model('Counter');

const patientSchema = mongoose.Schema({
    ID: {
        type: String,
        unique: true
    },
    Name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },
    Age: {
        type: Number,
        required: true
    },
    Sex: {
        type: String,
        required: true
    },
    MarriedStatus: {
        type: String
    },
    EmployementStatus: {
        type: String
    },
    ContactInfo: {
        Address: {
            AddressLine: {
                type: String
            },
            Zip: {
                type: Number
            },
            City: {
                type: String
            }
        },
        Phone: {
            Home: {
                type: Number
            },
            Mobile: {
                type: Number
            },
            Office: {
                type: Number
            }
        }
    }
    // Inward: {
    //     bhtNumber: {
    //         type: Number,
    //         unique: true
    //     },
    //     bedNumber: {
    //         type: Number
    //     },
    //     admittedDateTime: {
    //         type: Date
    //     }
    // },
    // ResponsibleParty: {
    //     Name: {
    //         firstName: {
    //             type: String
    //         },
    //         lastName: {
    //             type: String
    //         }
    //     },
    //     ContactInfo: {
    //         Address: {
    //             AddressLine: {
    //                 type: String
    //             },
    //             Zip: {
    //                 type: Number
    //             },
    //             City: {
    //                 type: String
    //             }
    //         },
    //         Phone: {
    //             Home: {
    //                 type: Number
    //             },
    //             Mobile: {
    //                 type: Number
    //             },
    //             Office: {
    //                 type: Number
    //             }
    //         }
    //     }
    // }
});

patientSchema.pre('save', function(next) {
    var doc = this;
    Counter.findByIdAndUpdate({ _id: 'patient' }, { $inc: { seq: 1 } }, function(error, counter) {
        if (error)
            return next(error);
        doc.ID = "P-0" + counter.seq;
        next();
    });
});

module.exports = mongoose.model('Patient', patientSchema);
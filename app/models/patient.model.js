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
        title: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },
    DOB: {
        type: Date,
        required: true
    },
    Age: {
        type: Number
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
                type: String,
                required: true
            },
            Zip: {
                type: Number
                    // required: true
            },
            City: {
                type: String,
                required: true
            }
        },
        Phone: {
            Home: {
                type: Number,
                required: true
            },
            Mobile: {
                type: Number,
                required: true
            },
            Office: {
                type: Number
            }
        }
    },
    Inward: {
        bhtNumber: {
            type: String,
            unique: true
        },
        bedNumber: {
            type: Number
        },
        admittedDateTime: {
            type: Date,
            default: Date.now()
        },
        history: [{
            bhtNumber: {
                type: String
            },
            bedNumber: {
                type: Number
            },
            admittedDateTime: {
                type: Date
            }
        }]
    },
    ResponsibleParty: {
        Name: {
            title: {
                type: String,
                required: true
            },
            firstName: {
                type: String
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
                    type: String,
                    required: true
                },
                Zip: {
                    type: Number
                },
                City: {
                    type: String,
                    required: true
                }
            },
            Phone: {
                Home: {
                    type: Number,
                    required: true
                },
                Mobile: {
                    type: Number,
                    required: true
                },
                Office: {
                    type: Number
                }
            }
        }
    }
});

patientSchema.pre('save', function(next) {
    let doc = this;
    let h = new Object();
    Counter.findByIdAndUpdate({ _id: 'patient' }, { $inc: { seq: 1 } }, function(error, counter) {
        if (error) {
            return next(error);
        }
        doc.ID = "P-0" + counter.seq;
        Counter.findByIdAndUpdate({ _id: 'bht' }, { $inc: { seq: 1 } }, function(error, bhtCounter) {
            if (error) {
                return next(error);
            }
            doc.Inward.bhtNumber = "BHT-" + bhtCounter.seq;
            h["bhtNumber"] = doc.Inward.bhtNumber;
            h["bedNumber"] = doc.Inward.bedNumber;
            h["admittedDateTime"] = doc.Inward.admittedDateTime;
            doc.Inward.history.push(h);
            next();
        });
    });
});

module.exports = mongoose.model('Patient', patientSchema);
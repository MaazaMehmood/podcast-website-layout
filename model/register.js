const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    ccno:{
        type: Number,
        required: false
    },
    pin:{
        type: Number,
        required: false
    },
});

const Register = new mongoose.model('PodcastDB', regSchema);
module.exports = Register;
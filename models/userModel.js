const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        maxLength: 32
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
    },
    isAdmin : {
        type: Boolean,
        default: false
    },
    isDoctor : {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
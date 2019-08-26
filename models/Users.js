const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name: {
        type: String,
        max: 50
    },
    surname: {
        type: String,
        max: 50
    },
    email: {
        type: String,
        min: 4,
        max: 100,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 3,
        max: 255,
        required: true
    }
}));
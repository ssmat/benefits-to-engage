const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
    about: String,
    company: Number,
    coins: Number
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    logo: String,
    about: String,
    balance: Number,
    companyId: Number
});

module.exports = mongoose.model('Company', companySchema);
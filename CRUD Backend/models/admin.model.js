const mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    employeeNum: {type: Number},
    password: {type: String}
});

mongoose.model('admin', adminSchema);
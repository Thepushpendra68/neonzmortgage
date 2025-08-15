const mongoose = require('mongoose');
const {Schema} = mongoose;

const adminSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
const mongoose = require('mongoose');

const {Schema} = mongoose;

const contactUsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
})

const ContactUs = mongoose.model('ContactUS', contactUsSchema);
module.exports = ContactUs;
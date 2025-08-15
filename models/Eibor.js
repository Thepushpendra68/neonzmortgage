
const mongoose = require('mongoose');
const {Schema} = mongoose;

const eiborSchema = new Schema({
    three_month: {
        type: Number
    },
    six_month: {
        type: Number
    },
    e_id: {
        type: String
    }
});

const Eibor = mongoose.model('Eibor', eiborSchema);
module.exports = Eibor;
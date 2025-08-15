
const mongoose = require('mongoose');

const {Schema} = mongoose;

const applicationSchema = new Schema({
    looking_for: {
        type: String,
    },
    residency_status: {
        type: String
    },
    mortgage_bank: {
        type: String
    },
    property_value: {
        type: String

    },
    outstanding_loan_amount: {
        type: String
    },
    monthly_installment_amount:{
        type: String
    },
    remaining_tenure: {
        type: String
    },
    property_purchasing_type: {
        type: String
    },
    property_finding_status: {
        type: String
    },
    looking_for_move: {
        type: String
    },
    max_amount_willing_to_spend: {
        type: String
    },
    monthly_income: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    hold_uaepassport: {
        type: String
    },
    resident_of_uae: {
        type: String
    },
    dob: {
        type: Date
    },
    passport_country: {
        type: String
    },
    employement_status: {
        type: String
    },
    application_type: {
        type: String
    },
    have_credit_card: {
        type: String
    },
    credit_limit: {
        type: String
    },
    other_loan: {
        type: String
    },
    monthly_repayment: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default: "Pending"
    },
    assigned_to: {
        type: String,
        required: true,
        default: 'None'
    }
},{
    timestamps: true
});


const Applications = mongoose.model('Applications', applicationSchema);
module.exports = Applications;
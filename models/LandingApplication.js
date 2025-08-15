const mongoose = require('mongoose');

const {Schema} = mongoose;

const landingApplicationSchema = new Schema({
    // Step 1: Loan Type
    loanType: {
        type: String,
        required: true,
        enum: ['new-purchase', 'refinance', 'investment']
    },
    
    // Step 2: Property Status
    propertyStatus: {
        type: String,
        enum: ['browsing', 'looking', 'found']
    },
    
    // Step 3: Property Type
    propertyType: {
        type: String,
        enum: ['villa', 'apartment', 'townhouse', 'not-sure']
    },
    
    // Step 4: Budget Range
    budgetRange: {
        type: String,
        enum: ['under-1m', '1m-2m', '2m-5m', 'above-5m']
    },
    
    // Step 5: Down Payment
    downPayment: {
        type: String,
        enum: ['10-percent', '20-25-percent', '30-plus-percent', 'need-guidance']
    },
    
    // Step 6: Monthly Income
    monthlyIncome: {
        type: String,
        enum: ['under-15k', '15k-30k', '30k-50k', 'above-50k']
    },
    
    // Step 7: Employment Status
    employmentStatus: {
        type: String,
        enum: ['uae-resident-employee', 'uae-national', 'expat-work-visa', 'self-employed']
    },

    // Refinance-specific fields
    refinanceReason: {
        type: String,
        enum: ['lower-rate', 'cash-out', 'switching-bank', 'debt-consolidation']
    },
    currentRate: {
        type: String,
        enum: ['above-4', '3-5-to-4', '3-to-3-5', 'below-3']
    },
    remainingBalance: {
        type: String,
        enum: ['under-500k', '500k-1m', '1m-2m', 'above-2m']
    },
    propertyValue: {
        type: String,
        enum: ['under-1m', '1m-2m', '2m-5m', 'above-5m']
    },
    
    // Step 8: Contact Details
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    contactMethod: {
        type: String,
        enum: ['email', 'phone', 'whatsapp', 'both'],
        default: 'email'
    },
    bestTimeToCall: {
        type: String,
        enum: ['morning', 'afternoon', 'evening', 'anytime'],
        default: 'anytime'
    },

    // Investment-specific optional fields (kept optional to avoid breaking other flows)
    investmentBudget: {
        type: String,
        enum: ['under-1m', '1m-2m', '2m-5m', 'above-5m'],
    },
    investmentGoal: {
        type: String,
        enum: ['rental-income', 'capital-appreciation', 'both-returns', 'short-term-flip'],
    },
    investorExperience: {
        type: String,
        enum: ['first-investment', 'own-1-2', 'own-3-plus', 'professional-investor'],
    },
    investmentHorizon: {
        type: String,
        enum: ['short-term', 'mid-term', 'long-term'],
    },
    investmentIncomeSource: {
        type: String,
        enum: ['employment-salary', 'business-income', 'investment-returns', 'multiple-sources'],
    },
    investmentFinancingStructure: {
        type: String,
        enum: ['traditional-mortgage', 'islamic-financing', 'developer-financing', 'need-advice'],
    },
    investmentDownPayment: {
        type: String,
        enum: ['25-percent', '30-40-percent', '50-plus-percent', 'need-financing-options'],
    },
    
    // System fields
    status: {
        type: String,
        required: true,
        default: "New Lead"
    },
    source: {
        type: String,
        required: true,
        default: "Landing Page"
    },
    ipAddress: {
        type: String
    },
    userAgent: {
        type: String
    }
}, {
    timestamps: true
});

const LandingApplication = mongoose.model('LandingApplication', landingApplicationSchema);
module.exports = LandingApplication;
const LandingApplication = require('../models/LandingApplication');
const transporter = require('../services/transporter');

const createLandingApplication = async (req, res) => {
    try {
        const applicationData = req.body;
        
        // Add IP and User Agent for tracking
        applicationData.ipAddress = req.ip || req.connection.remoteAddress;
        applicationData.userAgent = req.get('user-agent');
        
        // Create the application
        const newApplication = new LandingApplication(applicationData);
        const savedApplication = await newApplication.save();
        
        // Send email notification to admin
        await sendEmailNotification(savedApplication);
        
        res.status(201).json({
            success: true,
            message: 'Application submitted successfully',
            data: {
                id: savedApplication._id,
                status: savedApplication.status
            }
        });
        
    } catch (error) {
        console.error('Error creating landing application:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit application',
            error: error.message
        });
    }
};

const sendEmailNotification = async (application) => {
    try {
        // Format the application data for email
        const emailContent = generateEmailContent(application);
        
        const mailOptions = {
            from: process.env.EMAIL_FROM || 'noreply@neonmortgage.com',
            to: process.env.EMAIL_TO || 'info@neonmortgage.com',
            subject: `New Landing Page Application - ${application.loanType} - ${application.fullName}`,
            html: emailContent
        };
        
        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully');
        
    } catch (error) {
        console.error('Error sending email notification:', error);
        // Don't throw error - we don't want to fail the application submission if email fails
    }
};

const generateEmailContent = (application) => {
    const formatValue = (key, value) => {
        const displayMap = {
            loanType: {
                'new-purchase': 'New Purchase',
                'refinance': 'Refinance',
                'investment': 'Investment Property'
            },
            propertyStatus: {
                'browsing': 'Just browsing',
                'looking': 'Actively searching',
                'found': 'Found my home'
            },
            propertyType: {
                'villa': 'Villa',
                'apartment': 'Apartment',
                'townhouse': 'Townhouse',
                'not-sure': 'Not sure yet'
            },
            budgetRange: {
                'under-1m': 'Under AED 1M',
                '1m-2m': 'AED 1M - 2M',
                '2m-5m': 'AED 2M - 5M',
                'above-5m': 'Above AED 5M'
            },
            downPayment: {
                '10-percent': '10%',
                '20-25-percent': '20-25%',
                '30-plus-percent': '30% or more',
                'need-guidance': 'Need guidance'
            },
            monthlyIncome: {
                'under-15k': 'Under AED 15K',
                '15k-30k': 'AED 15K - 30K',
                '30k-50k': 'AED 30K - 50K',
                'above-50k': 'Above AED 50K'
            },
            employmentStatus: {
                'uae-resident-employee': 'UAE Resident Employee',
                'uae-national': 'UAE National',
                'expat-work-visa': 'Expat on work visa',
                'self-employed': 'Self-employed'
            },
            contactMethod: {
                'email': 'Email',
                'phone': 'Phone Call',
                'whatsapp': 'WhatsApp',
                'both': 'Email & Phone'
            },
            bestTimeToCall: {
                'morning': 'Morning (9AM - 12PM)',
                'afternoon': 'Afternoon (12PM - 5PM)',
                'evening': 'Evening (5PM - 8PM)',
                'anytime': 'Anytime'
            },
            // Investment specific formatting
            investmentGoal: {
                'rental-income': 'Rental income',
                'capital-appreciation': 'Capital appreciation',
                'both-returns': 'Both rental and appreciation',
                'short-term-flip': 'Short-term flip'
            },
            investorExperience: {
                'first-investment': 'First investment property',
                'own-1-2': 'Own 1-2 properties',
                'own-3-plus': 'Own 3+ properties',
                'professional-investor': 'Professional investor'
            },
            investmentHorizon: {
                'short-term': 'Short-term (1-3 years)',
                'mid-term': 'Mid-term (3-7 years)',
                'long-term': 'Long-term (7+ years)'
            },
            investmentIncomeSource: {
                'employment-salary': 'Employment salary',
                'business-income': 'Business income',
                'investment-returns': 'Investment returns',
                'multiple-sources': 'Multiple sources'
            },
            investmentFinancingStructure: {
                'traditional-mortgage': 'Traditional mortgage',
                'islamic-financing': 'Islamic financing (Sharia)',
                'developer-financing': 'Developer financing',
                'need-advice': 'Need advice'
            },
            investmentDownPayment: {
                '25-percent': '25%',
                '30-40-percent': '30-40%',
                '50-plus-percent': '50% or more',
                'need-financing-options': 'Need financing options'
            }
        };
        
        return displayMap[key]?.[value] || value;
    };

    return `
        <html>
        <head>
            <style>
                body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
                .header { background: #000; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .section { margin-bottom: 30px; }
                .section h3 { color: #000; border-bottom: 2px solid #000; padding-bottom: 5px; }
                .field { margin-bottom: 10px; }
                .field strong { color: #000; }
                .highlight { background: #f8f9fa; padding: 15px; border-left: 4px solid #000; margin: 15px 0; }
                .footer { background: #f8f9fa; padding: 15px; text-align: center; color: #666; }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>🏠 New Landing Page Application</h2>
                <p>Application ID: ${application._id}</p>
            </div>
            
            <div class="content">
                <div class="highlight">
                    <h3>📋 Quick Summary</h3>
                    <p><strong>Name:</strong> ${application.fullName}</p>
                    <p><strong>Email:</strong> ${application.email}</p>
                    <p><strong>Phone:</strong> ${application.phoneNumber}</p>
                    <p><strong>Loan Type:</strong> ${formatValue('loanType', application.loanType)}</p>
                    <p><strong>Budget Range:</strong> ${formatValue('budgetRange', application.budgetRange)}</p>
                </div>

                <div class="section">
                    <h3>🏡 Property Details</h3>
                    <div class="field"><strong>Property Status:</strong> ${formatValue('propertyStatus', application.propertyStatus)}</div>
                    <div class="field"><strong>Property Type:</strong> ${formatValue('propertyType', application.propertyType)}</div>
                    <div class="field"><strong>Budget Range:</strong> ${formatValue('budgetRange', application.budgetRange)}</div>
                    <div class="field"><strong>Down Payment:</strong> ${formatValue('downPayment', application.downPayment)}</div>
                </div>

                <div class="section">
                    <h3>💼 Financial Information</h3>
                    <div class="field"><strong>Monthly Income:</strong> ${formatValue('monthlyIncome', application.monthlyIncome)}</div>
                    <div class="field"><strong>Employment Status:</strong> ${formatValue('employmentStatus', application.employmentStatus)}</div>
                    ${application.loanType === 'investment' ? `
                    <div class="field"><strong>Investment Goal:</strong> ${formatValue('investmentGoal', application.investmentGoal)}</div>
                    <div class="field"><strong>Investor Experience:</strong> ${formatValue('investorExperience', application.investorExperience)}</div>
                    <div class="field"><strong>Investment Horizon:</strong> ${formatValue('investmentHorizon', application.investmentHorizon)}</div>
                    <div class="field"><strong>Income Source:</strong> ${formatValue('investmentIncomeSource', application.investmentIncomeSource)}</div>
                    <div class="field"><strong>Financing Structure:</strong> ${formatValue('investmentFinancingStructure', application.investmentFinancingStructure)}</div>
                    <div class="field"><strong>Investment Down Payment:</strong> ${formatValue('investmentDownPayment', application.investmentDownPayment)}</div>
                    ` : application.loanType === 'refinance' ? `
                    <div class="field"><strong>Refinance Reason:</strong> ${formatValue('refinanceReason', application.refinanceReason)}</div>
                    <div class="field"><strong>Current Rate:</strong> ${formatValue('currentRate', application.currentRate)}</div>
                    <div class="field"><strong>Remaining Balance:</strong> ${formatValue('remainingBalance', application.remainingBalance)}</div>
                    <div class="field"><strong>Property Value:</strong> ${formatValue('propertyValue', application.propertyValue)}</div>
                    ` : ''}
                </div>

                <div class="section">
                    <h3>📞 Contact Preferences</h3>
                    <div class="field"><strong>Full Name:</strong> ${application.fullName}</div>
                    <div class="field"><strong>Email:</strong> ${application.email}</div>
                    <div class="field"><strong>Phone Number:</strong> ${application.phoneNumber}</div>
                    <div class="field"><strong>Preferred Contact Method:</strong> ${formatValue('contactMethod', application.contactMethod)}</div>
                    <div class="field"><strong>Best Time to Call:</strong> ${formatValue('bestTimeToCall', application.bestTimeToCall)}</div>
                </div>

                <div class="section">
                    <h3>🔍 Technical Details</h3>
                    <div class="field"><strong>Submission Date:</strong> ${new Date(application.createdAt).toLocaleString()}</div>
                    <div class="field"><strong>Source:</strong> ${application.source}</div>
                    <div class="field"><strong>Status:</strong> ${application.status}</div>
                    <div class="field"><strong>IP Address:</strong> ${application.ipAddress || 'Not available'}</div>
                </div>
            </div>
            
            <div class="footer">
                <p>This application was submitted through the Neon Mortgage landing page.</p>
                <p>Please respond to the customer within 24 hours for best conversion rates.</p>
            </div>
        </body>
        </html>
    `;
};

module.exports = {
    createLandingApplication
};
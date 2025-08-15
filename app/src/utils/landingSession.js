// Landing page session validation utility

// Generate a unique session token for the landing flow
export const generateLandingSession = () => {
  const sessionId = `landing_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const sessionData = {
    id: sessionId,
    startTime: Date.now(),
    currentStep: 0,
    isValid: true
  };
  
  localStorage.setItem('landingSession', JSON.stringify(sessionData));
  return sessionId;
};

// Validate if user has a valid session and can access the requested step
export const validateLandingSession = (requiredStep, requiredLoanType = null) => {
  try {
    const sessionData = JSON.parse(localStorage.getItem('landingSession'));
    
    if (!sessionData || !sessionData.isValid) {
      return { valid: false, reason: 'No valid session' };
    }
    
    // Check session timeout (30 minutes)
    const sessionAge = Date.now() - sessionData.startTime;
    if (sessionAge > 30 * 60 * 1000) {
      clearLandingSession();
      return { valid: false, reason: 'Session expired' };
    }
    
    // Check if user has completed previous steps
    if (requiredStep > 1 && sessionData.currentStep < requiredStep - 1) {
      return { valid: false, reason: 'Previous steps not completed' };
    }
    
    // Check loan type if specified
    if (requiredLoanType) {
      const storedLoanType = localStorage.getItem('loanType');
      if (storedLoanType !== requiredLoanType) {
        return { valid: false, reason: 'Invalid loan type for this flow' };
      }
    }
    
    return { valid: true };
  } catch (error) {
    return { valid: false, reason: 'Invalid session data' };
  }
};

// Update session with current step progress
export const updateLandingSession = (currentStep) => {
  try {
    const sessionData = JSON.parse(localStorage.getItem('landingSession'));
    if (sessionData && sessionData.isValid) {
      sessionData.currentStep = Math.max(sessionData.currentStep, currentStep);
      localStorage.setItem('landingSession', JSON.stringify(sessionData));
    }
  } catch (error) {
    console.error('Error updating landing session:', error);
  }
};

// Clear the landing session
export const clearLandingSession = () => {
  try {
    localStorage.removeItem('landingSession');
    // Also clear landing-related keys to avoid stale PII
    const landingKeys = [
      'loanType',
      'propertyStatus',
      'propertyType',
      'budgetRange',
      'downPayment',
      'monthlyIncome',
      'employmentStatus',
      'monthlyIncomeRefinance',
      'refinanceReason',
      'currentRate',
      'remainingBalance',
      'propertyValue',
      'investmentGoal',
      'investorExperience',
      'investmentBudget',
      'investmentBudgetRange',
      'investmentHorizon',
      'investmentIncomeSource',
      'investmentFinancingStructure',
      'investmentDownPayment',
      'fullName',
      'email',
      'phoneNumber',
      'contactMethod',
      'bestTimeToCall',
      'applicationId'
    ];
    landingKeys.forEach((k) => localStorage.removeItem(k));
  } catch (e) {
    // noop
  }
};

// Check if user has an active landing session
export const hasActiveLandingSession = () => {
  try {
    const sessionData = JSON.parse(localStorage.getItem('landingSession'));
    if (!sessionData || !sessionData.isValid) return false;
    
    // Check timeout
    const sessionAge = Date.now() - sessionData.startTime;
    if (sessionAge > 30 * 60 * 1000) {
      clearLandingSession();
      return false;
    }
    
    return true;
  } catch (error) {
    return false;
  }
};

// Get current session step
export const getCurrentSessionStep = () => {
  try {
    const sessionData = JSON.parse(localStorage.getItem('landingSession'));
    return sessionData?.currentStep || 0;
  } catch (error) {
    return 0;
  }
};

// Map step numbers to their required previous steps
export const getStepRequirements = (pathname) => {
  const stepMappings = {
    // Main flow
    '/landing/step1': { step: 1, loanType: null },
    '/landing/step2': { step: 2, loanType: null },
    '/landing/step3': { step: 3, loanType: null },
    
    // Purchase flow
    '/landing/purchase/step2': { step: 2, loanType: 'new-purchase' },
    '/landing/purchase/step3': { step: 3, loanType: 'new-purchase' },
    '/landing/purchase/step4': { step: 4, loanType: 'new-purchase' },
    '/landing/purchase/step5': { step: 5, loanType: 'new-purchase' },
    '/landing/purchase/step6': { step: 6, loanType: 'new-purchase' },
    '/landing/purchase/step7': { step: 7, loanType: 'new-purchase' },
    '/landing/purchase/step8': { step: 8, loanType: 'new-purchase' },
    '/landing/purchase/complete': { step: 8, loanType: 'new-purchase' },
    
    // Refinance flow
    '/landing/refinance/step2': { step: 2, loanType: 'refinance' },
    '/landing/refinance/step3': { step: 3, loanType: 'refinance' },
    '/landing/refinance/step4': { step: 4, loanType: 'refinance' },
    '/landing/refinance/step5': { step: 5, loanType: 'refinance' },
    '/landing/refinance/step6': { step: 6, loanType: 'refinance' },
    '/landing/refinance/step7': { step: 7, loanType: 'refinance' },
    '/landing/refinance/complete': { step: 7, loanType: 'refinance' },
    
    // Investment flow
    '/landing/investment/step2': { step: 2, loanType: 'investment' },
    '/landing/investment/step3': { step: 3, loanType: 'investment' },
    '/landing/investment/step4': { step: 4, loanType: 'investment' },
    '/landing/investment/step5': { step: 5, loanType: 'investment' },
    '/landing/investment/step6': { step: 6, loanType: 'investment' },
    '/landing/investment/step7': { step: 7, loanType: 'investment' },
    '/landing/investment/step8': { step: 8, loanType: 'investment' },
    '/landing/investment/step9': { step: 9, loanType: 'investment' },
    '/landing/investment/complete': { step: 9, loanType: 'investment' }
  };
  
  return stepMappings[pathname] || { step: 1, loanType: null };
};
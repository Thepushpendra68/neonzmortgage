'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function InvestmentStep9() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    contactMethod: 'email',
    bestTimeToCall: 'morning'
  });
  const [loanType, setLoanType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const { step, loanType: requiredLoanType } = getStepRequirements(pathname);
    const validation = validateLandingSession(step, requiredLoanType);
    if (!validation.valid) {
      router.push('/landing');
      return;
    }
    const savedLoanType = localStorage.getItem('loanType');
    const savedPropertyType = localStorage.getItem('propertyType');
    if (!savedLoanType || savedLoanType !== 'investment' || !savedPropertyType) {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
    updateLandingSession(9);
  }, [router, pathname]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const investmentBudget =
        localStorage.getItem('investmentBudget') || localStorage.getItem('investmentBudgetRange');
      const applicationData = {
        loanType: 'investment',
        investmentGoal: localStorage.getItem('investmentGoal'),
        investorExperience: localStorage.getItem('investorExperience'),
        investmentBudget,
        investmentDownPayment: localStorage.getItem('investmentDownPayment') || null,
        investmentIncomeSource: localStorage.getItem('investmentIncomeSource') || null,
        investmentFinancingStructure: localStorage.getItem('investmentFinancingStructure') || null,
        investmentHorizon: localStorage.getItem('investmentHorizon'),
        // Generic schema fields
        budgetRange: investmentBudget || null,
        employmentStatus: localStorage.getItem('employmentStatus'),
        monthlyIncome: localStorage.getItem('monthlyIncome'),
        propertyType: localStorage.getItem('propertyType'),
        // Contact
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        contactMethod: formData.contactMethod,
        bestTimeToCall: formData.bestTimeToCall,
      };

      const response = await fetch('/api/landing/application/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationData),
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem('applicationId', result.data.id);
        Object.entries(formData).forEach(([key, value]) => localStorage.setItem(key, value));
        router.push('/landing/investment/complete');
      } else {
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting investment application:', error);
      Object.entries(formData).forEach(([key, value]) => localStorage.setItem(key, value));
      alert(
        'There was an issue submitting your application. Your data has been saved and we will contact you soon.'
      );
      router.push('/landing/investment/complete');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!loanType) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--pure-white)' }}>
        <div className="heading-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-enter" style={{ background: 'var(--pure-white)' }}>
      <LandingHeader />

      <div className="page-container">
        <ProgressBar currentStep={9} branch="investment" />
        <h1 className="question-text text-center mb-4">Almost done! Your details</h1>
        <p className="body-text-gray text-center mb-8">
          We'll use this information to prepare your personalized investment mortgage options
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              placeholder="Enter your email address"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              placeholder="+971 50 123 4567"
              pattern="^[+]?\d[\d\s-]{7,}$"
            />
          </div>
          <div>
            <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="both">Email & Phone</option>
            </select>
          </div>
          <div>
            <label htmlFor="bestTimeToCall" className="block text-sm font-medium text-gray-700 mb-2">
              Best Time to Contact
            </label>
            <select
              id="bestTimeToCall"
              name="bestTimeToCall"
              value={formData.bestTimeToCall}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-center"
            style={{ marginTop: '40px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
          >
            {isSubmitting ? 'Submitting...' : 'Get My Investment Mortgage Quote'}
          </button>
        </form>
      </div>

      <button onClick={() => router.push('/landing/investment/step8')} className="btn-back" disabled={isSubmitting}>
        ← Back
      </button>
      <LandingFooter />
    </div>
  );
}

/*
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function InvestmentStep9() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    contactMethod: 'email',
    bestTimeToCall: 'morning'
  });
  const [loanType, setLoanType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const { step, loanType: requiredLoanType } = getStepRequirements(pathname);
    const validation = validateLandingSession(step, requiredLoanType);
    if (!validation.valid) {
      router.push('/landing');
      return;
    }
    const savedLoanType = localStorage.getItem('loanType');
    const savedPropertyType = localStorage.getItem('propertyType');
    if (!savedLoanType || savedLoanType !== 'investment' || !savedPropertyType) {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
    updateLandingSession(9);
  }, [router, pathname]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const investmentBudget = localStorage.getItem('investmentBudget') || localStorage.getItem('investmentBudgetRange');
      const applicationData = {
        loanType: 'investment',
        // Investment-specific fields (persisted in extended schema)
        investmentGoal: localStorage.getItem('investmentGoal'),
        investorExperience: localStorage.getItem('investorExperience'),
        investmentBudget,
        investmentDownPayment: localStorage.getItem('investmentDownPayment') || null,
        investmentIncomeSource: localStorage.getItem('investmentIncomeSource') || null,
        investmentFinancingStructure: localStorage.getItem('investmentFinancingStructure') || null,
        investmentHorizon: localStorage.getItem('investmentHorizon'),
        // Generic schema fields for cross-branch consistency
        budgetRange: investmentBudget || null,
        employmentStatus: localStorage.getItem('employmentStatus'),
        monthlyIncome: localStorage.getItem('monthlyIncome'),
        propertyType: localStorage.getItem('propertyType'),
        // Contact
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        contactMethod: formData.contactMethod,
        bestTimeToCall: formData.bestTimeToCall
      };

      const response = await fetch('/api/landing/application/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationData)
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem('applicationId', result.data.id);
        Object.entries(formData).forEach(([key, value]) => localStorage.setItem(key, value));
        router.push('/landing/investment/complete');
      } else {
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting investment application:', error);
      Object.entries(formData).forEach(([key, value]) => localStorage.setItem(key, value));
      alert('There was an issue submitting your application. Your data has been saved and we will contact you soon.');
      router.push('/landing/investment/complete');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!loanType) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--pure-white)' }}>
        <div className="heading-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-enter" style={{ background: 'var(--pure-white)' }}>
      <LandingHeader />

      <div className="page-container">
        <ProgressBar currentStep={9} branch="investment" />
        <h1 className="question-text text-center mb-4">Almost done! Your details</h1>
        <p className="body-text-gray text-center mb-8">We'll use this information to prepare your personalized investment mortgage options</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black" placeholder="Enter your full name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black" placeholder="Enter your email address" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black" placeholder="+971 50 123 4567" pattern="^[+]?\d[\d\s-]{7,}$" />
          </div>
          <div>
            <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
            <select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black">
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="both">Email & Phone</option>
            </select>
          </div>
          <div>
            <label htmlFor="bestTimeToCall" className="block text-sm font-medium text-gray-700 mb-2">Best Time to Contact</label>
            <select id="bestTimeToCall" name="bestTimeToCall" value={formData.bestTimeToCall} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black">
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full btn-primary text-center" style={{ marginTop: '40px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
            {isSubmitting ? 'Submitting...' : 'Get My Investment Mortgage Quote'}
          </button>
        </form>
      </div>

      <button onClick={() => router.push('/landing/investment/step8')} className="btn-back" disabled={isSubmitting}>← Back</button>
      <LandingFooter />
    </div>
  );
}

// Legacy implementation removed to avoid duplicate default export. The validated version above is the canonical one.
/*
export default function InvestmentStep9() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    contactMethod: 'email',
    bestTimeToCall: 'morning',
    existingProperties: '0',
    investmentTimeline: '3-6-months'
  });
  const [loanType, setLoanType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedLoanType = localStorage.getItem('loanType');
    const savedInvestmentFinancingStructure = localStorage.getItem('investmentFinancingStructure');
    
    if (!savedLoanType || savedLoanType !== 'investment' || !savedInvestmentFinancingStructure) {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save form data to localStorage
    Object.entries(formData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/landing/investment/complete');
    }, 1000);
  };

  if (!loanType) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--pure-white)' }}>
        <div className="heading-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-enter" style={{ background: 'var(--pure-white)' }}>
      <LandingHeader />

      <div className="page-container">
        {/* Progress Bar */}
        <ProgressBar currentStep={9} branch="investment" />
        
        {/* Question */}
        <h1 className="question-text text-center mb-4">
          Almost done! Your details
        </h1>
        <p className="body-text-gray text-center mb-8">
          We'll use this information to provide personalized investment property financing options
        </p>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              placeholder="+971 50 123 4567"
            />
          </div>

          <div>
            <label htmlFor="existingProperties" className="block text-sm font-medium text-gray-700 mb-2">
              Existing Properties Owned
            </label>
            <select
              id="existingProperties"
              name="existingProperties"
              value={formData.existingProperties}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="0">None (First property)</option>
              <option value="1">1 property</option>
              <option value="2">2 properties</option>
              <option value="3-5">3-5 properties</option>
              <option value="6+">6+ properties</option>
            </select>
          </div>

          <div>
            <label htmlFor="investmentTimeline" className="block text-sm font-medium text-gray-700 mb-2">
              Investment Timeline
            </label>
            <select
              id="investmentTimeline"
              name="investmentTimeline"
              value={formData.investmentTimeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="asap">ASAP (Ready to buy)</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="exploring">Just exploring</option>
            </select>
          </div>

          <div>
            <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="both">Email & Phone</option>
            </select>
          </div>

          <div>
            <label htmlFor="bestTimeToCall" className="block text-sm font-medium text-gray-700 mb-2">
              Best Time to Contact
            </label>
            <select
              id="bestTimeToCall"
              name="bestTimeToCall"
              value={formData.bestTimeToCall}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-center"
            style={{ 
              marginTop: '40px',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Get My Investment Analysis'}
          </button>
        </form>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push('/landing/investment/step8')}
        className="btn-back"
        disabled={isSubmitting}
      >
        ← Back
      </button>

      <LandingFooter />
    </div>
  );
}
*/
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function RefinanceStep7() {
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
    // Validate session for this step
    const { step, loanType: requiredLoanType } = getStepRequirements(pathname);
    const validation = validateLandingSession(step, requiredLoanType);
    if (!validation.valid) {
      router.push('/landing');
      return;
    }
    const savedLoanType = localStorage.getItem('loanType');
    const savedMonthlyIncomeRefinance = localStorage.getItem('monthlyIncomeRefinance');
    if (!savedLoanType || savedLoanType !== 'refinance' || !savedMonthlyIncomeRefinance) {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
    updateLandingSession(7);
  }, [router, pathname]);

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
    
    try {
      // Collect all data from localStorage and current form
      const applicationData = {
        // Required
        loanType: 'refinance',
        
        // Refinance flow data
        refinanceReason: localStorage.getItem('refinanceReason'),
        currentRate: localStorage.getItem('currentRate'),
        remainingBalance: localStorage.getItem('remainingBalance'),
        propertyValue: localStorage.getItem('propertyValue'),
        // Map refinance income to schema field
        monthlyIncome: localStorage.getItem('monthlyIncomeRefinance'),
        
        // Contact details (current form)
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
        // Persist applicationId and contact data
        localStorage.setItem('applicationId', result.data.id);
        Object.entries(formData).forEach(([key, value]) => {
          localStorage.setItem(key, value);
        });
        router.push('/landing/refinance/complete');
      } else {
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting refinance application:', error);
      // Fallback: save data locally and proceed
      Object.entries(formData).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });
      alert('There was an issue submitting your application. Your data has been saved and we will contact you soon.');
      router.push('/landing/refinance/complete');
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
        {/* Progress Bar */}
        <ProgressBar currentStep={7} branch="refinance" />
        
        {/* Question */}
        <h1 className="question-text text-center mb-4">
          Almost done! Your details
        </h1>
        <p className="body-text-gray text-center mb-8">
          We'll use this information to analyze your current mortgage and find better rates
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
            style={{ 
              marginTop: '40px',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Get My Refinance Analysis'}
          </button>
        </form>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push('/landing/refinance/step6')}
        className="btn-back"
        disabled={isSubmitting}
      >
        ← Back
      </button>

      <LandingFooter />
    </div>
  );
}
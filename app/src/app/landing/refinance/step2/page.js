'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function RefinanceStep2() {
  const [selectedOption, setSelectedOption] = useState('');
  const [loanType, setLoanType] = useState('');
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
    if (!savedLoanType || savedLoanType !== 'refinance') {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
    updateLandingSession(2);
  }, [router, pathname]);

  const options = [
    {
      id: 'lower-rate',
      title: 'Want lower interest rate',
      description: 'Reduce my monthly payments'
    },
    {
      id: 'cash-out',
      title: 'Need cash out refinance',
      description: 'Access equity for other needs'
    },
    {
      id: 'switching-bank',
      title: 'Switching from another bank',
      description: 'Better service or terms'
    },
    {
      id: 'debt-consolidation',
      title: 'Consolidating debts',
      description: 'Combine multiple loans'
    }
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setTimeout(() => {
      localStorage.setItem('refinanceReason', optionId);
      updateLandingSession(3);
      router.push('/landing/refinance/step3');
    }, 300);
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
        <ProgressBar currentStep={2} branch="refinance" />
        
        {/* Question */}
        <h1 className="question-text text-center mb-4">
          Tell us about your current mortgage
        </h1>
        
        {/* Options */}
        <div className="option-cards-container">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
              aria-label={`${option.title} - ${option.description}`}
            >
              <div className="card-title">
                {option.title}
              </div>
              <div className="card-description">
                {option.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push('/landing/step1')}
        className="btn-back"
      >
        ← Back
      </button>

      <LandingFooter />
    </div>
  );
}
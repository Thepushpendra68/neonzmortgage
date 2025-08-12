'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function InvestmentStep2() {
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
    if (!savedLoanType || savedLoanType !== 'investment') {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
    updateLandingSession(2);
  }, [router, pathname]);

  const options = [
    {
      id: 'rental-income',
      title: 'Rental income',
      description: 'Generate monthly rental returns'
    },
    {
      id: 'capital-appreciation',
      title: 'Capital appreciation',
      description: 'Long-term property value growth'
    },
    {
      id: 'both-returns',
      title: 'Both rental and appreciation',
      description: 'Maximize overall returns'
    },
    {
      id: 'short-term-flip',
      title: 'Short-term flip',
      description: 'Buy, renovate, and resell'
    }
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setTimeout(() => {
      localStorage.setItem('investmentGoal', optionId);
      updateLandingSession(3);
      router.push('/landing/investment/step3');
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
        <ProgressBar currentStep={2} branch="investment" />
        
        {/* Question */}
        <h1 className="question-text text-center mb-4">
          What's your investment goal?
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
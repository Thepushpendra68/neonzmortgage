'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function RefinanceStep5() {
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
    const savedRemainingBalance = localStorage.getItem('remainingBalance');
    if (!savedLoanType || savedLoanType !== 'refinance' || !savedRemainingBalance) {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
    updateLandingSession(5);
  }, [router, pathname]);

  const options = [
    {
      id: 'under-1m',
      title: 'Under AED 1M',
      description: 'Entry-level property value'
    },
    {
      id: '1m-2m',
      title: 'AED 1M - 2M',
      description: 'Mid-range property value'
    },
    {
      id: '2m-5m',
      title: 'AED 2M - 5M',
      description: 'Premium property value'
    },
    {
      id: 'above-5m',
      title: 'Above AED 5M',
      description: 'Luxury property value'
    }
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setTimeout(() => {
      localStorage.setItem('propertyValue', optionId);
      updateLandingSession(6);
      router.push('/landing/refinance/step6');
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
        <ProgressBar currentStep={5} branch="refinance" />
        
        {/* Question */}
        <h1 className="question-text text-center mb-4">
          What's your property's current value?
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
        onClick={() => router.push('/landing/refinance/step4')}
        className="btn-back"
      >
        ← Back
      </button>

      <LandingFooter />
    </div>
  );
}
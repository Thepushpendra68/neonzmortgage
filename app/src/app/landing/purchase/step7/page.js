'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function PurchaseStep7() {
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
    const savedMonthlyIncome = localStorage.getItem('monthlyIncome');
    if (!savedLoanType || savedLoanType !== 'new-purchase' || !savedMonthlyIncome) {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
    // Update session progress
    updateLandingSession(7);
  }, [router, pathname]);

  const options = [
    {
      id: 'uae-resident-employee',
      title: 'UAE Resident Employee',
      description: 'Salaried employee with Emirates ID'
    },
    {
      id: 'uae-national',
      title: 'UAE National',
      description: 'Emirati citizen'
    },
    {
      id: 'expat-work-visa',
      title: 'Expat on work visa',
      description: 'Foreign national with work permit'
    },
    {
      id: 'self-employed',
      title: 'Self-employed',
      description: 'Business owner or freelancer'
    }
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setTimeout(() => {
      localStorage.setItem('employmentStatus', optionId);
      router.push('/landing/purchase/step8');
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
        <ProgressBar currentStep={7} branch="new-purchase" />
        
        {/* Question */}
        <h1 className="question-text text-center mb-4">
          What's your employment status?
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
        onClick={() => router.push('/landing/purchase/step6')}
        className="btn-back"
      >
        ← Back
      </button>

      <LandingFooter />
    </div>
  );
}
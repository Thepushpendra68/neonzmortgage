'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function InvestmentStep8() {
  const [selectedOption, setSelectedOption] = useState('');
  const [loanType, setLoanType] = useState('');
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
    const savedHorizon = localStorage.getItem('investmentHorizon');
    if (!savedLoanType || savedLoanType !== 'investment' || !savedHorizon) {
      router.push('/landing/step1');
      return;
    }
    setLoanType(savedLoanType);
    updateLandingSession(8);
  }, [router, pathname]);

  const options = [
    { id: 'villa', title: 'Villa', description: 'Standalone house with garden' },
    { id: 'apartment', title: 'Apartment', description: 'Unit in residential building' },
    { id: 'townhouse', title: 'Townhouse', description: 'Multi-level connected home' },
    { id: 'not-sure', title: 'Not sure yet', description: 'Still exploring options' }
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setTimeout(() => {
      localStorage.setItem('propertyType', optionId);
      updateLandingSession(9);
      router.push('/landing/investment/step9');
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
        <ProgressBar currentStep={8} branch="investment" />
        <h1 className="question-text text-center mb-4">What type of property?</h1>
        <div className="option-cards-container">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
              aria-label={`${option.title} - ${option.description}`}
            >
              <div className="card-title">{option.title}</div>
              <div className="card-description">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <button onClick={() => router.push('/landing/investment/step7')} className="btn-back">← Back</button>
      <LandingFooter />
    </div>
  );
}

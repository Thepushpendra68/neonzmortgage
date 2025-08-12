'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, updateLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function Step1() {
  const [selectedOption, setSelectedOption] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Validate session for this step
    const { step } = getStepRequirements('/landing/step1');
    const validation = validateLandingSession(step);
    
    if (!validation.valid) {
      router.push('/landing');
      return;
    }
    
    // Update session progress
    updateLandingSession(1);
  }, [router]);

  const options = [
    {
      id: 'new-purchase',
      title: 'New Purchase',
      description: 'I want to buy a new property'
    },
    {
      id: 'refinance',
      title: 'Refinance',
      description: 'I want to refinance my existing mortgage'
    },
    {
      id: 'investment',
      title: 'Investment Property',
      description: 'I want to buy an investment property'
    }
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    // Auto-advance after selection with micro-interaction
    setTimeout(() => {
      localStorage.setItem('loanType', optionId);
      
      // Update session progress
      updateLandingSession(2);
      
      // Branch routing logic
      let nextRoute = '';
      switch(optionId) {
        case 'new-purchase':
          nextRoute = '/landing/purchase/step2';
          break;
        case 'refinance':
          nextRoute = '/landing/refinance/step2';
          break;
        case 'investment':
          nextRoute = '/landing/investment/step2';
          break;
        default:
          nextRoute = '/landing/step2'; // fallback
      }
      
      router.push(nextRoute);
    }, 300);
  };

  return (
    <div className="min-h-screen page-enter" style={{ background: 'var(--pure-white)' }}>
      <LandingHeader />

      <div className="page-container">
        {/* Progress Bar */}
        <ProgressBar currentStep={1} totalSteps={3} />
        
        {/* Question */}
        <h1 className="question-text text-center mb-4">
          What are you looking for?
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
        onClick={() => router.push('/landing')}
        className="btn-back"
      >
        ← Back
      </button>

      <LandingFooter />
    </div>
  );
}
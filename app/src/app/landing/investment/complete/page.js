'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, clearLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function InvestmentComplete() {
  const [formData, setFormData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const { step, loanType: requiredLoanType } = getStepRequirements(pathname);
    const validation = validateLandingSession(step, requiredLoanType);
    if (!validation.valid) {
      router.push('/landing');
      return;
    }

    const loanType = localStorage.getItem('loanType');
    const fullName = localStorage.getItem('fullName');
    const email = localStorage.getItem('email');
    if (!loanType || loanType !== 'investment' || !fullName || !email) {
      router.push('/landing');
      return;
    }

    const collectedData = {
      loanType,
      investmentGoal: localStorage.getItem('investmentGoal'),
      investorExperience: localStorage.getItem('investorExperience'),
      investmentBudget: localStorage.getItem('investmentBudget') || localStorage.getItem('investmentBudgetRange') || localStorage.getItem('budgetRange'),
      employmentStatus: localStorage.getItem('employmentStatus'),
      monthlyIncome: localStorage.getItem('monthlyIncome'),
      investmentHorizon: localStorage.getItem('investmentHorizon'),
      propertyType: localStorage.getItem('propertyType'),
      fullName,
      email,
      phoneNumber: localStorage.getItem('phoneNumber'),
      contactMethod: localStorage.getItem('contactMethod')
    };
    setFormData(collectedData);
    setApplicationId(localStorage.getItem('applicationId') || '');
    setIsLoaded(true);
  }, [router, pathname]);

  const getDisplayText = (key, value) => {
    const displayMap = {
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
      investmentBudget: {
        'under-1m': 'Under AED 1M',
        '1m-2m': 'AED 1M - 2M',
        '2m-5m': 'AED 2M - 5M',
        'above-5m': 'Above AED 5M'
      },
      monthlyIncome: {
        'under-15k': 'Under AED 15K',
        '15k-30k': 'AED 15K - 30K',
        '30k-50k': 'AED 30K - 50K',
        'above-50k': 'Above AED 50K'
      },
      investmentHorizon: {
        'short-term': 'Short-term (1-3 years)',
        'mid-term': 'Mid-term (3-7 years)',
        'long-term': 'Long-term (7+ years)'
      },
      propertyType: {
        'villa': 'Villa',
        'apartment': 'Apartment',
        'townhouse': 'Townhouse',
        'not-sure': 'Not sure yet'
      }
    };
    return displayMap[key]?.[value] || value;
  };

  const handleStartOver = () => {
    localStorage.clear();
    clearLandingSession();
    router.push('/landing');
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--pure-white)' }}>
        <div className="heading-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-enter" style={{ background: 'var(--pure-white)' }}>
      <LandingHeader />

      <div className="completion-container">
        <div className="success-icon">
          <svg width="28" height="28" fill="none" stroke="var(--pure-white)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="heading-medium mb-6">Investment Journey Started!</h1>
        <p className="body-text-gray mb-8">We will contact you with tailored investment mortgage options and next steps.</p>

        {applicationId && (
          <div className="body-text" style={{ background: '#f0f9ff', padding: '12px 20px', borderRadius: '8px', marginBottom: '24px', fontSize: '14px', color: '#1e40af', border: '1px solid #bfdbfe' }}>
            <strong>Application ID:</strong> {applicationId}
            <br />
            <small>✓ Your application has been successfully submitted and emailed to our team.</small>
          </div>
        )}

        <div className="summary-box" style={{ marginTop: '24px' }}>
          <div className="body-text" style={{ fontWeight: '600', marginBottom: '12px' }}>Your Investment Summary:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            <span className="body-text" style={{ background: 'var(--pure-white)', padding: '6px 14px', borderRadius: '16px', fontSize: '14px', border: '1px solid #E5E5E5' }}>
              <strong>Goal:</strong> {getDisplayText('investmentGoal', formData.investmentGoal)}
            </span>
            <span className="body-text" style={{ background: 'var(--pure-white)', padding: '6px 14px', borderRadius: '16px', fontSize: '14px', border: '1px solid #E5E5E5' }}>
              <strong>Budget:</strong> {getDisplayText('investmentBudget', formData.investmentBudget)}
            </span>
            <span className="body-text" style={{ background: 'var(--pure-white)', padding: '6px 14px', borderRadius: '16px', fontSize: '14px', border: '1px solid #E5E5E5' }}>
              <strong>Experience:</strong> {getDisplayText('investorExperience', formData.investorExperience)}
            </span>
            <span className="body-text" style={{ background: 'var(--pure-white)', padding: '6px 14px', borderRadius: '16px', fontSize: '14px', border: '1px solid #E5E5E5' }}>
              <strong>Property:</strong> {getDisplayText('propertyType', formData.propertyType)}
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '40px', marginTop: '40px' }}>
          <Link href="/journey" className="btn-primary" style={{ marginRight: '16px', padding: '16px 32px' }}>Continue to Full Application</Link>
          <button onClick={handleStartOver} style={{ background: 'none', border: 'none', color: 'var(--dark-gray)', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>Start over</button>
        </div>

        <p className="body-text" style={{ fontSize: '14px', color: 'var(--dark-gray)' }}>
          Questions? Call us at <span style={{ color: 'var(--primary-black)', fontWeight: '600' }}>+971 58 800 2132</span>
        </p>
      </div>

      <LandingFooter />
    </div>
  );
}

// Removed duplicate legacy component implementation below to avoid double default export and keep a single, validated complete page.
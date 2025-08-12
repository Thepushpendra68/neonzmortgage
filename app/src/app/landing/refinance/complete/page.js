'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, clearLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function RefinanceComplete() {
  const [formData, setFormData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [applicationId, setApplicationId] = useState('');
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

    const loanType = localStorage.getItem('loanType');
    const fullName = localStorage.getItem('fullName');
    const email = localStorage.getItem('email');
    
    if (!loanType || loanType !== 'refinance' || !fullName || !email) {
      router.push('/landing');
      return;
    }
    
    // Collect all stored data for summary
    const collectedData = {
      loanType,
      refinanceReason: localStorage.getItem('refinanceReason'),
      currentRate: localStorage.getItem('currentRate'),
      remainingBalance: localStorage.getItem('remainingBalance'),
      propertyValue: localStorage.getItem('propertyValue'),
      monthlyIncomeRefinance: localStorage.getItem('monthlyIncomeRefinance'),
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
      refinanceReason: {
        'lower-rate': 'Want lower interest rate',
        'cash-out': 'Need cash out refinance',
        'switching-bank': 'Switching from another bank',
        'debt-consolidation': 'Consolidating debts'
      },
      currentRate: {
        'above-4': 'Above 4%',
        '3-5-to-4': '3.5% - 4%',
        '3-to-3-5': '3% - 3.5%',
        'below-3': 'Below 3%'
      },
      remainingBalance: {
        'under-500k': 'Under AED 500K',
        '500k-1m': 'AED 500K - 1M',
        '1m-2m': 'AED 1M - 2M',
        'above-2m': 'Above AED 2M'
      },
      propertyValue: {
        'under-1m': 'Under AED 1M',
        '1m-2m': 'AED 1M - 2M',
        '2m-5m': 'AED 2M - 5M',
        'above-5m': 'Above AED 5M'
      },
      monthlyIncomeRefinance: {
        'under-15k': 'Under AED 15K',
        '15k-30k': 'AED 15K - 30K',
        '30k-50k': 'AED 30K - 50K',
        'above-50k': 'Above AED 50K'
      }
    };
    
    return displayMap[key]?.[value] || value;
  };

  const getPotentialSavings = () => {
    const currentRate = formData.currentRate;
    const balance = formData.remainingBalance;
    
    if (currentRate === 'above-4' && (balance === '1m-2m' || balance === 'above-2m')) {
      return 'AED 2,000+ monthly';
    } else if (currentRate === '3-5-to-4') {
      return 'AED 1,000+ monthly';
    } else if (currentRate === '3-to-3-5') {
      return 'AED 500+ monthly';
    }
    return 'We\'ll calculate your exact savings';
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
        {/* Success Icon */}
        <div className="success-icon">
          <svg width="28" height="28" fill="none" stroke="var(--pure-white)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Message */}
        <h1 className="heading-medium mb-6">
          Let's Lower Your Payments!
        </h1>
        <p className="body-text-gray mb-8">
          We'll analyze your current mortgage and find better rates to save you money every month.
        </p>

        {applicationId && (
          <div className="body-text" style={{ 
            background: '#f0f9ff', 
            padding: '12px 20px', 
            borderRadius: '8px', 
            marginBottom: '24px',
            fontSize: '14px',
            color: '#1e40af',
            border: '1px solid #bfdbfe'
          }}>
            <strong>Application ID:</strong> {applicationId}
            <br />
            <small>✓ Your application has been successfully submitted and emailed to our team.</small>
          </div>
        )}

        {/* Potential Savings */}
        <div className="summary-box" style={{ background: '#e8f5e8', borderColor: '#4ade80' }}>
          <div className="body-text" style={{ fontWeight: '600', marginBottom: '8px', color: '#166534' }}>
            💰 Potential Monthly Savings:
          </div>
          <div className="heading-medium" style={{ color: '#166534', fontSize: '24px' }}>
            {getPotentialSavings()}
          </div>
        </div>

        {/* Next Steps */}
        <div className="summary-box">
          <div className="body-text" style={{ fontWeight: '600', marginBottom: '16px' }}>
            What Happens Next:
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="body-text" style={{ marginBottom: '8px' }}>
              ✓ Current mortgage analysis within 24 hours
            </div>
            <div className="body-text" style={{ marginBottom: '8px' }}>
              ✓ Rate comparison from multiple banks
            </div>
            <div className="body-text">
              ✓ Refinancing timeline and process guidance
            </div>
          </div>
        </div>

        {/* Application Summary */}
        <div className="summary-box" style={{ marginTop: '24px' }}>
          <div className="body-text" style={{ fontWeight: '600', marginBottom: '12px' }}>
            Your Refinance Details:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            <span className="body-text" style={{ 
              background: 'var(--pure-white)', 
              padding: '6px 14px', 
              borderRadius: '16px',
              fontSize: '14px',
              border: '1px solid #E5E5E5'
            }}>
              <strong>Current Rate:</strong> {getDisplayText('currentRate', formData.currentRate)}
            </span>
            <span className="body-text" style={{ 
              background: 'var(--pure-white)', 
              padding: '6px 14px', 
              borderRadius: '16px',
              fontSize: '14px',
              border: '1px solid #E5E5E5'
            }}>
              <strong>Balance:</strong> {getDisplayText('remainingBalance', formData.remainingBalance)}
            </span>
            <span className="body-text" style={{ 
              background: 'var(--pure-white)', 
              padding: '6px 14px', 
              borderRadius: '16px',
              fontSize: '14px',
              border: '1px solid #E5E5E5'
            }}>
              <strong>Property Value:</strong> {getDisplayText('propertyValue', formData.propertyValue)}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ marginBottom: '40px', marginTop: '40px' }}>
          <Link href="/journey" className="btn-primary" style={{ marginRight: '16px', padding: '16px 32px' }}>
            Get My Savings Report
          </Link>
          <button 
            onClick={handleStartOver}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--dark-gray)',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px'
            }}
          >
            Start over
          </button>
        </div>

        {/* Contact */}
        <p className="body-text" style={{ fontSize: '14px', color: 'var(--dark-gray)' }}>
          Questions about refinancing? Call us at{" "}
          <span style={{ color: 'var(--primary-black)', fontWeight: '600' }}>+971 58 800 2132</span>
        </p>
      </div>

      <LandingFooter />
    </div>
  );
}
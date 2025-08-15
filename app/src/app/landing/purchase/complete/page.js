'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { validateLandingSession, clearLandingSession, getStepRequirements } from '@/utils/landingSession';

export default function PurchaseComplete() {
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
      console.log('Session validation failed:', validation.reason);
      router.push('/landing');
      return;
    }

    const loanType = localStorage.getItem('loanType');
    const fullName = localStorage.getItem('fullName');
    const email = localStorage.getItem('email');
    const storedApplicationId = localStorage.getItem('applicationId');
    
    if (!loanType || loanType !== 'new-purchase' || !fullName || !email) {
      router.push('/landing');
      return;
    }
    
    // Collect all stored data for summary
    const collectedData = {
      loanType,
      propertyStatus: localStorage.getItem('propertyStatus'),
      propertyType: localStorage.getItem('propertyType'),
      budgetRange: localStorage.getItem('budgetRange'),
      downPayment: localStorage.getItem('downPayment'),
      monthlyIncome: localStorage.getItem('monthlyIncome'),
      employmentStatus: localStorage.getItem('employmentStatus'),
      fullName,
      email,
      phoneNumber: localStorage.getItem('phoneNumber'),
      contactMethod: localStorage.getItem('contactMethod')
    };
    
    setFormData(collectedData);
    setApplicationId(storedApplicationId || '');
    setIsLoaded(true);
  }, [router]);

  const getDisplayText = (key, value) => {
    const displayMap = {
      propertyStatus: {
        'browsing': 'Just browsing',
        'looking': 'Actively searching',
        'found': 'Found my home'
      },
      propertyType: {
        'villa': 'Villa',
        'apartment': 'Apartment',
        'townhouse': 'Townhouse',
        'not-sure': 'Not sure yet'
      },
      budgetRange: {
        'under-1m': 'Under AED 1M',
        '1m-2m': 'AED 1M - 2M',
        '2m-5m': 'AED 2M - 5M',
        'above-5m': 'Above AED 5M'
      },
      downPayment: {
        '10-percent': '10%',
        '20-25-percent': '20-25%',
        '30-plus-percent': '30% or more',
        'need-guidance': 'Need guidance'
      },
      monthlyIncome: {
        'under-15k': 'Under AED 15K',
        '15k-30k': 'AED 15K - 30K',
        '30k-50k': 'AED 30K - 50K',
        'above-50k': 'Above AED 50K'
      },
      employmentStatus: {
        'uae-resident-employee': 'UAE Resident Employee',
        'uae-national': 'UAE National',
        'expat-work-visa': 'Expat on work visa',
        'self-employed': 'Self-employed'
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
        {/* Success Icon */}
        <div className="success-icon">
          <svg width="28" height="28" fill="none" stroke="var(--pure-white)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Message */}
        <h1 className="heading-medium mb-6">
          Ready to Find Your Dream Home!
        </h1>
        <p className="body-text-gray mb-4">
          We&apos;ll help you get pre-approved and connect you with top real estate agents in Dubai.
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

        {/* Next Steps */}
        <div className="summary-box">
          <div className="body-text" style={{ fontWeight: '600', marginBottom: '16px' }}>
            What Happens Next:
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="body-text" style={{ marginBottom: '8px' }}>
              ✓ Pre-approval letter within 24 hours
            </div>
            <div className="body-text" style={{ marginBottom: '8px' }}>
              ✓ Property search assistance from top agents
            </div>
            <div className="body-text">
              ✓ Bank rate comparison and best offers
            </div>
          </div>
        </div>

        {/* Application Summary */}
        <div className="summary-box" style={{ marginTop: '24px' }}>
          <div className="body-text" style={{ fontWeight: '600', marginBottom: '12px' }}>
            Your Application Summary:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            <span className="body-text" style={{ 
              background: 'var(--pure-white)', 
              padding: '6px 14px', 
              borderRadius: '16px',
              fontSize: '14px',
              border: '1px solid #E5E5E5'
            }}>
              <strong>Budget:</strong> {getDisplayText('budgetRange', formData.budgetRange)}
            </span>
            <span className="body-text" style={{ 
              background: 'var(--pure-white)', 
              padding: '6px 14px', 
              borderRadius: '16px',
              fontSize: '14px',
              border: '1px solid #E5E5E5'
            }}>
              <strong>Property:</strong> {getDisplayText('propertyType', formData.propertyType)}
            </span>
            <span className="body-text" style={{ 
              background: 'var(--pure-white)', 
              padding: '6px 14px', 
              borderRadius: '16px',
              fontSize: '14px',
              border: '1px solid #E5E5E5'
            }}>
              <strong>Down Payment:</strong> {getDisplayText('downPayment', formData.downPayment)}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ marginBottom: '40px', marginTop: '40px' }}>
          <Link href="/journey" className="btn-primary" style={{ marginRight: '16px', padding: '16px 32px' }}>
            Continue to Full Application
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
          Questions? Call us at{" "}
          <span style={{ color: 'var(--primary-black)', fontWeight: '600' }}>+971 58 800 2132</span>
        </p>
      </div>

      <LandingFooter />
    </div>
  );
}
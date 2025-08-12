'use client';

import Link from "next/link";
import { useEffect } from 'react';
import './landing.css';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import { generateLandingSession, clearLandingSession } from '@/utils/landingSession';

export default function Landing() {
  useEffect(() => {
    // Clear any existing landing session and start fresh
    clearLandingSession();
    generateLandingSession();
  }, []);
  return (
    <div className="min-h-screen" style={{ background: 'var(--pure-white)' }}>
      <LandingHeader />

      {/* Hero Section */}
      <div className="hero-container">
        <h1 className="heading-large mb-6">
          Get Your Dream Home in Dubai
        </h1>
        <p className="body-text-gray mb-12">
          Complete your application in a few simple steps
        </p>
        
        <Link href="/landing/step1" className="btn-primary">
          Start Application
        </Link>
      </div>

      <LandingFooter />
    </div>
  );
}
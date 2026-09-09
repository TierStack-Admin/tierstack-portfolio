import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutHeroSection from './components/AboutHeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import MissionVisionSection from './components/MissionVisionSection';
import AboutStatsSection from './components/AboutStatsSection';
import CtaBanner from '../../components/common/CtaBanner';

const AboutUs = () => {
  const navigate = useNavigate();

  // Dynamic state hooks ready for API integration
  const [stats, setStats] = useState([
    { id: 'years', value: '10+', label: 'Years Active' },
    { id: 'projects', value: '250', label: 'Projects Shipped' },
    { id: 'uptime', value: '99%', label: 'Uptime Engineered' },
    { id: 'experts', value: '40', label: 'Global Experts' },
  ]);

  const [corePillars, setCorePillars] = useState([
    {
      title: 'Our Mission',
      description:
        'To architect software foundations that empower businesses to scale sustainably, innovate fearlessly, and operate with absolute reliability.',
      icon: (
        <svg className="w-8 h-8 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Our Vision',
      description:
        'To be the global benchmark for technical excellence, shaping a digital ecosystem where complex systems run seamlessly and invisibly.',
      icon: (
        <svg className="w-8 h-8 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ]);

  useEffect(() => {
    // Lifecycle placeholder for API integration
  }, []);

  return (
    <div className="w-full bg-surface-off-white">
      <AboutHeroSection />

      <WhoWeAreSection />

      <MissionVisionSection pillars={corePillars} />

      <AboutStatsSection stats={stats} />

      <section className="py-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          headline="Ready to Build the Future?"
          subheadline="Partner with our engineering team to architect your next phase of growth."
          buttonText="Work With Us →"
          buttonAction={() => navigate('/contact?tab=request')}
          variant="light"
        />
      </section>
    </div>
  );
};

export default AboutUs;

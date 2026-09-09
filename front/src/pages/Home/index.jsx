import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import TrustedBySection from './components/TrustedBySection';
import ServicesSummarySection from './components/ServicesSummarySection';
import StatsSection from './components/StatsSection';
import EngineeringProcessSection from './components/EngineeringProcessSection';
import CtaBanner from '../../components/common/CtaBanner';

const Home = () => {
  const navigate = useNavigate();

  // Dynamic state hooks for API readiness
  const [services, setServices] = useState([
    {
      id: 'web-dev',
      icon: (
        <svg className="w-6 h-6 text-accent-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Application Development',
      description: 'High-performance, responsive web platforms built on modern frameworks to ensure security, speed, and seamless user experiences across all devices.',
      tags: ['React', 'Node.js', 'Next.js', 'TypeScript'],
      link: '/services',
    },
    {
      id: 'mobile-dev',
      icon: (
        <svg className="w-6 h-6 text-accent-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Native Apps',
      description: 'iOS and Android applications engineered for performance and engagement, ensuring frictionless mobile experiences.',
      tags: ['iOS', 'Android', 'React Native', 'Flutter'],
      link: '/services',
    },
    {
      id: 'ai-integration',
      icon: (
        <svg className="w-6 h-6 text-accent-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'AI Integration',
      description: 'Implementing custom machine learning models and generative AI systems to automate complex workflows and drive predictive insights.',
      tags: ['LLMs', 'Automation', 'Python', 'MLOps'],
      link: '/services',
    },
    {
      id: 'cloud-infra',
      icon: (
        <svg className="w-6 h-6 text-accent-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Infrastructure',
      description: 'Robust, scalable cloud architectures designed for zero downtime and maximum security, ensuring your data is always accessible and protected.',
      tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      link: '/services',
    },
  ]);

  const [stats, setStats] = useState([
    { id: 'delivered', value: '100+', label: 'Projects Delivered' },
    { id: 'clients', value: '50+', label: 'Enterprise Clients' },
    { id: 'countries', value: '10+', label: 'Countries Reached' },
  ]);

  const [processSteps, setProcessSteps] = useState([
    {
      stepNumber: '1',
      title: 'Discover',
      description: 'Deep dive into your business logic, technical stack, and architecture requirements.',
    },
    {
      stepNumber: '2',
      title: 'Design',
      description: 'Architecting scalable systems and crafting intuitive, modern user interfaces.',
    },
    {
      stepNumber: '3',
      title: 'Develop',
      description: 'Agile engineering with continuous integration, unit testing, and rapid deployment cycles.',
    },
    {
      stepNumber: '4',
      title: 'Launch',
      description: 'Rigorous security audits, load testing, production deployment, and 24/7 telemetry monitoring.',
    },
  ]);

  useEffect(() => {
    // Lifecycle placeholder for API integration
  }, []);

  return (
    <div className="w-full bg-surface-off-white">
      <HeroSection
        onRequestService={() => navigate('/contact?tab=request')}
        onExploreServices={() => navigate('/services')}
      />

      <TrustedBySection />

      <ServicesSummarySection services={services} />

      <StatsSection stats={stats} />

      <EngineeringProcessSection steps={processSteps} />

      <section className="pb-20 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          headline="Have a project in mind? Let's build it together."
          subheadline="Schedule a consultation with our engineering team to discuss your next big leap."
          buttonText="Contact Us Today"
          buttonAction={() => navigate('/contact')}
          variant="dark"
        />
      </section>
    </div>
  );
};

export default Home;

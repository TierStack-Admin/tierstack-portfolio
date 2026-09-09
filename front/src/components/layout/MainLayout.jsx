import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import NavDrawer from './NavDrawer';
import Footer from './Footer';

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/careers' },
  ];

  const footerCompanyLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
  ];

  const footerServiceLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const footerLegalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ];

  const contactInfo = {
    email: 'tierstack.software.house@gmail.com',
    phone: '+1 (555) 123-4567'
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-off-white font-sans text-on-surface">
      <Navbar onToggleDrawer={() => setIsDrawerOpen(true)} links={navLinks} />
      
      <NavDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        links={navLinks}
      />
      
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer 
        companyLinks={footerCompanyLinks}
        serviceLinks={footerServiceLinks}
        legalLinks={footerLegalLinks}
        contactInfo={contactInfo}
      />
    </div>
  );
};

export default MainLayout;

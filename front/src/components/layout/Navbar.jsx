import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ onToggleDrawer, links = [] }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md text-on-surface shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="TierStack Logo" className="h-10 w-auto" />
              <span className="font-display font-black text-2xl tracking-tight hidden sm:block uppercase">
                <span className="text-[#7ec29a]">TIER</span><span className="text-primary-container">STACK</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-on-surface hover:text-accent-dark-green font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-primary-container text-on-surface font-semibold rounded-lg hover:brightness-95 transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-on-surface hover:bg-surface-light-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-dark-green"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={onToggleDrawer}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

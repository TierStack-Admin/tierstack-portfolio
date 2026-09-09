import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ onToggleDrawer, links = [] }) => {
  const location = useLocation();

  const isLinkActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isContactActive = location.pathname.startsWith('/contact');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md text-on-surface shadow-sm border-b border-outline-variant/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="TierStack Logo" className="h-10 w-auto" />
              <span className="font-display font-black text-2xl tracking-tight hidden sm:block uppercase">
                <span className="text-[#7ec29a]">TIER</span>
                <span className="text-primary-container">STACK</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? 'text-accent-dark-green font-bold'
                      : 'text-on-surface-variant hover:text-accent-dark-green'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="navbar-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-dark-green rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className={`px-6 py-2.5 font-semibold rounded-lg transition-all shadow-sm ${
                isContactActive
                  ? 'bg-accent-dark-green text-surface-off-white ring-2 ring-primary-container ring-offset-2'
                  : 'bg-primary-container text-on-surface hover:brightness-95'
              }`}
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
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

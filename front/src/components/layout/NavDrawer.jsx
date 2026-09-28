import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavDrawer = ({ isOpen, onClose, links = [] }) => {
  const location = useLocation();

  const isLinkActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isContactActive = location.pathname.startsWith('/contact');

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-on-surface/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-surface-off-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="p-2 text-on-surface-variant hover:text-on-surface focus:outline-none rounded-md hover:bg-surface-light-gray"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {links.map((link, index) => {
            const active = isLinkActive(link.path);
            return (
              <Link
                key={index}
                to={link.path}
                className={`block px-4 py-3 text-base rounded-xl transition-all duration-200 ${
                  active
                    ? 'bg-secondary-fixed text-accent-dark-green font-bold shadow-sm border-l-4 border-accent-dark-green'
                    : 'text-on-surface hover:text-accent-dark-green hover:bg-surface-light-gray font-medium'
                }`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-outline-variant/20">
          <Link
            to="/contact"
            onClick={onClose}
            className={`block w-full text-center py-3 font-semibold rounded-xl transition-all ${
              isContactActive
                ? 'bg-accent-dark-green text-surface-off-white shadow-md'
                : 'bg-primary-container text-on-surface hover:brightness-95'
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavDrawer;

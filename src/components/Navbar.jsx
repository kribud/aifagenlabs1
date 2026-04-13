import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(true), 900); // match hero-slide-up duration
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'Services', href: '#services', page: 'services' },
    { name: 'Products', href: '#products', page: 'products' },
    { name: 'Innovation Labs', href: '#innovation-labs', page: 'innovation-labs' },
    { name: 'Case Studies', href: '#case-studies', page: 'case-studies' },
    { name: 'About', href: '#about', page: 'about' },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className="navbar-sticky bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24"
      style={{
        animation: showNavbar ? 'slideDownFromTop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none',
        opacity: showNavbar ? 1 : 0,
        pointerEvents: showNavbar ? 'auto' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105" onClick={() => handleNavClick('home')}>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm transition-transform duration-300 p-0 overflow-hidden bg-transparent">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
            <span className="text-base md:text-lg font-semibold whitespace-nowrap text-white transition-colors duration-300">
              <span className="text-white">AIFA</span>
              <span className="text-white transition-colors duration-300">Gen</span>
              <span className="ml-0.5 md:ml-1 text-gray-400 transition-colors duration-300">Labs</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`text-xs md:text-sm font-medium transition-all duration-300 ${
                  currentPage === item.page
                    ? 'text-white border-b-2 border-blue-600'
                    : 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-3 md:px-4 py-2 text-xs md:text-sm text-gray-300 border border-gray-600 rounded-full hover:text-white hover:border-gray-400 hover:bg-gray-900 transition-all duration-300 font-medium btn-smooth">
              Contact
            </button>
            <button 
              onClick={() => handleNavClick('collaborate')}
              className="px-4 md:px-6 py-2 text-xs md:text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 font-medium btn-smooth">
              Collaborate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 transition-all duration-200">
          <div className="px-3 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200 ${
                  currentPage === item.page
                    ? 'text-white bg-blue-600'
                    : 'text-gray-300 hover:text-white hover:bg-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2 border-t border-gray-700 flex gap-2">
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex-1 px-3 py-2 text-xs text-gray-300 border border-gray-600 rounded-full hover:text-white hover:border-gray-400 hover:bg-gray-900 transition-all duration-200 font-medium">
                Contact
              </button>
              <button 
                onClick={() => handleNavClick('collaborate')}
                className="flex-1 px-3 py-2 text-xs bg-blue-600 text-white rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 font-medium">
                Collaborate
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
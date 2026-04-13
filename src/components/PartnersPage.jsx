import React, { useState, useRef, useEffect } from 'react';
import '../fadeInUpProducts.css';

const PartnersPage = ({ setCurrentPage }) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-80"></div>

      {/* Content */}
      <div ref={containerRef} className={`relative z-10 px-6 sm:px-8 md:px-16 lg:px-32 text-center max-w-4xl transition-all duration-700 ${visible ? 'fade-in-up' : 'opacity-0'}`}>
        {/* Partner Program Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26H22L17.55 12.5L19.63 18.76L12 14.5L4.37 18.76L6.45 12.5L2 8.26H8.91L12 2Z" />
          </svg>
          <span className="text-sm font-semibold text-gray-300">Partner Program</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="text-white">Grow </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Together</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Join our partner ecosystem and unlock new opportunities in the AI revolution.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => {
            setCurrentPage('collaborate');
            window.scrollTo(0, 0);
          }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105"
        >
          Become a Partner
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
    </div>
  );
};

export default PartnersPage;

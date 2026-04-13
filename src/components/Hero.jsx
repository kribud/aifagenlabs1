import React from 'react';

const Hero = ({ setCurrentPage }) => {
  return (
    <div className="min-h-[60vh] bg-black text-white flex flex-col items-center justify-center px-2 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 hero-slide-up mt-16 md:mt-20">
      <div className="w-full flex flex-col items-center scale-95 sm:scale-95">
        {/* Badge */}
        <div className="mb-8 md:mb-12 inline-flex items-center gap-2 bg-neutral-800 border border-neutral-800 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800 fade-in-up">
          <span className="text-blue-400 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M10 2.5L11.09 6.26C11.24 6.77 11.73 7.09 12.26 7.09H16.18L13.09 9.41C12.68 9.72 12.51 10.27 12.66 10.78L13.75 14.54L10.66 12.22C10.25 11.91 9.75 11.91 9.34 12.22L6.25 14.54L7.34 10.78C7.49 10.27 7.32 9.72 6.91 9.41L3.82 7.09H7.74C8.27 7.09 8.76 6.77 8.91 6.26.pngL10 2.5Z" fill="currentColor"/>
              </g>
            </svg>
          </span>
          <span className="font-medium">Launching AIFAG & LifeOS in 2027</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 md:mb-6 max-w-4xl leading-tight fade-in-up stagger-1">
          AI for All Generations
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 text-center mb-6 md:mb-8 max-w-2xl fade-in-up stagger-2">
          Innovating Beyond Imagination
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 text-center mb-10 md:mb-12 max-w-2xl fade-in-up stagger-3">
          Building intelligent ecosystems that transform businesses and empower individuals
          — from startups to global enterprises.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-16 md:mb-20 w-full sm:w-auto fade-in-up stagger-4">
          {/* Explore AI Solutions Button */}
          <button 
            onClick={() => { setCurrentPage('services'); window.scrollTo(0, 0); }}
            className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm md:text-base font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap btn-smooth">
            Explore AI Solutions
            <svg className="w-4 md:w-5 h-4 md:h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Book Demo Button with animated toggle background and moving toggle */}
          <div className="relative flex items-center justify-center">
            {/* Animated toggle-like background as backside design, smaller width, moving up and down */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none z-0 animate-toggleUpDown" style={{ width: '44px', height: '32px', filter: 'brightness(1.1) contrast(1.2)' }}>
              <div className="w-5 h-8 bg-neutral-800 rounded-full flex items-center justify-center shadow-inner border border-neutral-700 relative">
                <span className="absolute left-1/2 -translate-x-1/2 toggle-dot-sync">
                  <span className="block w-1 h-1 bg-neutral-600 rounded-full shadow-md"></span>
                </span>
              </div>
            </div>
            <button 
              onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
              className="px-6 md:px-8 py-3 md:py-4 bg-transparent hover:bg-transparent active:bg-transparent text-white text-sm md:text-base font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-600 whitespace-nowrap btn-smooth relative z-10 backdrop-blur-none shadow-none">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState, useRef, useEffect } from 'react';
import '../fadeInUpProducts.css';

const ProductsPage = ({ setCurrentPage }) => {
  const [selectedProduct, setSelectedProduct] = useState(() => {
    const stored = localStorage.getItem('selectedProduct');
    localStorage.removeItem('selectedProduct');
    return stored || 'aifag';
  });

  // Listen for product changes from footer links
  useEffect(() => {
    const handleStorageChange = () => {
      const newProduct = localStorage.getItem('selectedProduct');
      if (newProduct) {
        setSelectedProduct(newProduct);
        localStorage.removeItem('selectedProduct');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Check immediately in case setItem happened in same tab
    const checkInterval = setInterval(() => {
      const newProduct = localStorage.getItem('selectedProduct');
      if (newProduct) {
        setSelectedProduct(newProduct);
        localStorage.removeItem('selectedProduct');
      }
    }, 50);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(checkInterval);
    };
  }, []);

  const products = {
    aifag: {
      name: 'AIFAG',
      title: 'Enterprise AI Agent Suite',
      description: 'Connect, configure, and deploy intelligent AI agents across your organization. Automate complex workflows with human-like reasoning.',
      features: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          ),
          name: 'Multi-Agent Orchestration'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
          name: 'Enterprise Integration'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          name: 'Real-time Processing'
        }
      ]
    },
    lifeos: {
      name: 'LifeOS',
      title: 'Personal AI Operating System',
      description: 'Your intelligent life companion. Organize, plan, and optimize every aspect of your personal and professional life.',
      features: [
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          name: 'Smart Planning'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          name: 'Goal Tracking'
        },
        {
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ),
          name: 'Privacy-First Design'
        }
      ]
    }
  };

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  const [reveals, setReveals] = useState(Array(8).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      setReveals((prev) =>
        prev.map((revealed, idx) => {
          if (revealed) return true;
          const ref = sectionRefs[idx].current;
          if (!ref) return false;
          const rect = ref.getBoundingClientRect();
          return rect.top < window.innerHeight - 80;
        })
      );
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let sectionIdx = 0;
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Header Section */}
      <div ref={sectionRefs[sectionIdx]} className={`pt-32 pb-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-neutral-900 border border-gray-800 rounded-full px-4 py-2">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-blue-400">Launching 2027</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-semibold mb-8">
            Our Flagship Products
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Two revolutionary AI ecosystems designed to transform how enterprises operate and individuals live.
          </p>

          {/* Product Tabs */}
          <div className="flex justify-center">
            <div className="flex gap-0 bg-neutral-800 rounded-2xl p-1 border border-gray-700">
              <button
                onClick={() => setSelectedProduct('aifag')}
                className={`px-8 py-3 rounded-xl font-semibold transition duration-200 focus:outline-none ${
                  selectedProduct === 'aifag'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                style={{ minWidth: 100 }}
              >
                AIFAG
              </button>
              <button
                onClick={() => setSelectedProduct('lifeos')}
                className={`px-8 py-3 rounded-xl font-semibold transition duration-200 focus:outline-none ${
                  selectedProduct === 'lifeos'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                style={{ minWidth: 100 }}
              >
                LifeOS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div id="product-showcase" ref={sectionRefs[sectionIdx]} className={`pb-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 bg-transparent border border-blue-500 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-blue-400">
                  {selectedProduct === 'aifag' ? 'AI for All Generations' : 'Personal AI Operating System'}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
                {selectedProduct === 'aifag' ? 'AIFAG' : 'LifeOS'}
              </h2>

              {/* Descriptions */}
              {selectedProduct === 'aifag' ? (
                <>
                  {/* First Description */}
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    From learner to founder, everyone can create AI agents to make life easier.
                  </p>

                  {/* Second Description */}
                  <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                    Build intelligent agents without coding. Showcase your creations to potential employers. Companies discover talent through their agent portfolios and make hiring decisions based on real capabilities.
                  </p>
                </>
              ) : (
                <>
                  {/* LifeOS Description */}
                  <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                    Your intelligent life companion. LifeOS learns your habits, understands your goals, and helps you optimize every aspect of your personal and professional life.
                  </p>
                </>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    if (selectedProduct === 'lifeos') {
                      setCurrentPage('collaborate');
                      window.scrollTo(0, 0);
                    } else {
                      setCurrentPage('collaborate');
                      window.scrollTo(0, 0);
                    }
                  }}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200">
                  {selectedProduct === 'aifag' ? 'Request Early Access' : 'Join Beta Waitlist'}
                </button>
                <button className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 border border-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {selectedProduct === 'aifag' ? 'Watch Demo' : 'See Preview'}
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex items-center justify-center">
              {selectedProduct === 'aifag' ? (
                <div className="relative w-80 h-80">
                  {/* Concentric Circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Outer circles */}
                    <div className="absolute w-80 h-80 border border-gray-700 rounded-full opacity-50"></div>
                    <div className="absolute w-72 h-72 border border-gray-700 rounded-full opacity-40"></div>
                    <div className="absolute w-64 h-64 border border-gray-700 rounded-full opacity-30"></div>
                    <div className="absolute w-56 h-56 border border-gray-700 rounded-full opacity-20"></div>

                    {/* Central Blue Circle with Brain Icon */}
                    <div className="absolute w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center">
                      <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-neutral-800/50 border border-gray-700 rounded-3xl p-8 w-full max-w-lg">
                  {/* Header Section with Icon and Title */}
                  <div className="bg-neutral-900/50 rounded-2xl p-6 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m0 0V7m0 0a2 2 0 012 2v12m0 0h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0H9" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Today's Focus</h3>
                        <p className="text-gray-400 text-sm">3 priorities identified</p>
                      </div>
                    </div>

                    {/* Energy and Goals Metrics */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-neutral-800/50 rounded-lg p-4">
                        <p className="text-gray-400 text-sm mb-2">Energy Level</p>
                        <p className="text-4xl font-bold text-white">87%</p>
                      </div>
                      <div className="bg-neutral-800/50 rounded-lg p-4">
                        <p className="text-gray-400 text-sm mb-2">Goals Progress</p>
                        <p className="text-4xl font-bold text-white">12/15</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Assistant Recommendation */}
                  <div>
                    <p className="text-gray-200 text-base leading-relaxed mb-4">
                      "Based on your schedule, I recommend tackling the presentation before lunch when your focus peaks."
                    </p>
                    <p className="text-blue-400 font-semibold text-sm">— Your AI Assistant</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* LifeOS Features Section - Only when LifeOS is selected */}
      {selectedProduct === 'lifeos' && (
      <div id="lifeos" ref={sectionRefs[sectionIdx]} className={`pb-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white">
            Your Personal AI Suite
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smart Planning */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
              <div className="mb-6">
                <div className="w-14 h-14 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Planning</h3>
              <p className="text-gray-400">AI-powered scheduling that adapts to your priorities and energy levels.</p>
            </div>

            {/* Goal Tracking */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
              <div className="mb-6">
                <div className="w-14 h-14 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Goal Tracking</h3>
              <p className="text-gray-400">Set, track, and achieve your goals with intelligent progress monitoring.</p>
            </div>

            {/* Wellness Integration */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
              <div className="mb-6">
                <div className="w-14 h-14 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Wellness Integration</h3>
              <p className="text-gray-400">Balance work and life with health-aware recommendations.</p>
            </div>

            {/* Task Intelligence */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
              <div className="mb-6">
                <div className="w-14 h-14 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Task Intelligence</h3>
              <p className="text-gray-400">Smart task prioritization and delegation suggestions.</p>
            </div>

            {/* Financial Insights */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
              <div className="mb-6">
                <div className="w-14 h-14 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0c1.11 0 2.08-.402 2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Financial Insights</h3>
              <p className="text-gray-400">Track spending and receive personalized financial guidance.</p>
            </div>

            {/* Relationship Manager */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
              <div className="mb-6">
                <div className="w-14 h-14 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.354a4 4 0 110 5.292M15 12H9m4.5-7.5h.01M12.75 8.5h.01m4.5-3h.01M8.75 9.5h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Relationship Manager</h3>
              <p className="text-gray-400">Never miss important dates or follow-ups with your network.</p>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Experience LifeOS Section */}
      {selectedProduct === 'lifeos' && (
      <div ref={sectionRefs[sectionIdx]} className={`py-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700 rounded-full px-4 py-2">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <span className="text-sm font-semibold text-blue-400">Try It Yourself</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Experience LifeOS
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            Create your personalized dashboard and see AI-powered insights in real-time
          </p>

          {/* Focus Areas Selection */}
          <div className="mb-12">
            <p className="text-white font-semibold text-lg mb-6">Select your focus areas:</p>
            
            {/* Focus Area Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Career */}
              <button className="bg-neutral-800 hover:bg-neutral-700 border border-gray-700 hover:border-gray-600 rounded-xl p-6 transition duration-200 flex flex-col items-center gap-3">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white font-semibold">Career</span>
              </button>

              {/* Health */}
              <button className="bg-neutral-800 hover:bg-neutral-700 border border-gray-700 hover:border-gray-600 rounded-xl p-6 transition duration-200 flex flex-col items-center gap-3">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-white font-semibold">Health</span>
              </button>

              {/* Learning */}
              <button className="bg-neutral-800 hover:bg-neutral-700 border border-gray-700 hover:border-gray-600 rounded-xl p-6 transition duration-200 flex flex-col items-center gap-3">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C6.596 6.253 2 10.849 2 16.5S6.596 26.747 12 26.747s10-4.596 10-10.247S17.404 6.253 12 6.253z" />
                </svg>
                <span className="text-white font-semibold">Learning</span>
              </button>

              {/* Finance */}
              <button className="bg-neutral-800 hover:bg-neutral-700 border border-gray-700 hover:border-gray-600 rounded-xl p-6 transition duration-200 flex flex-col items-center gap-3">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0c1.11 0 2.08-.402 2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-semibold">Finance</span>
              </button>
            </div>

            {/* Add Custom Goal Button */}
            <button className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 border border-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
              <span>+</span>
              Add Custom Goal
            </button>
          </div>

          {/* Placeholder Area */}
          <div className="bg-neutral-900/50 border border-gray-800 rounded-2xl py-16 px-8 text-center">
            <svg className="w-16 h-16 text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-400 text-lg">Select your goals to see a personalized dashboard</p>
          </div>
        </div>
      </div>
      )}

      {/* Three Steps Section */}
      {selectedProduct === 'aifag' && (
      <div ref={sectionRefs[sectionIdx]} className={`pb-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white">
            Three Steps to Intelligent Automation
          </h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            {/* Step 1 */}
            <div className="relative bg-neutral-900 border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="mb-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.828 10.172a4 4 0 00-5.656 0l-4.243 4.243a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4.242-4.243a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>

              {/* Step Label */}
              <p className="text-blue-400 font-semibold text-sm mb-3">Step 1</p>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Connect
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Integrate with your existing systems and data sources seamlessly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-neutral-900 border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="mb-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Step Label */}
              <p className="text-blue-400 font-semibold text-sm mb-3">Step 2</p>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Configure
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Customize AI agents to match your specific business workflows.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-neutral-900 border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="mb-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Step Label */}
              <p className="text-blue-400 font-semibold text-sm mb-3">Step 3</p>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Deploy
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Launch intelligent automation across your organization instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Enterprise-Grade Capabilities Section */}
      {selectedProduct === 'aifag' && (
      <div ref={sectionRefs[sectionIdx]} className={`pb-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white">
            Enterprise-Grade Capabilities
          </h2>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Capability 1 */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 flex gap-6 hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-neutral-800 rounded-lg">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4.243 4.243a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4.242-4.243a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Multi-Agent Orchestration
                </h3>
                <p className="text-gray-400">
                  Coordinate multiple AI agents working together on complex tasks.
                </p>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 flex gap-6 hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-neutral-800 rounded-lg">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4a1 1 0 011 1v2a1 1 0 11-2 0V5a1 1 0 011-1zm0 12a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm6-6a1 1 0 11-2 0 1 1 0 012 0zm-12 0a1 1 0 11-2 0 1 1 0 012 0zm9-9a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1zM7 7a3 3 0 100 6 3 3 0 000-6zm10 0a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Enterprise Integration
                </h3>
                <p className="text-gray-400">
                  Connect with 200+ enterprise tools and platforms out of the box.
                </p>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 flex gap-6 hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-neutral-800 rounded-lg">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Real-time Processing
                </h3>
                <p className="text-gray-400">
                  Process and respond to events in milliseconds, not minutes.
                </p>
              </div>
            </div>

            {/* Capability 4 */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 flex gap-6 hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-neutral-800 rounded-lg">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Enterprise Security
                </h3>
                <p className="text-gray-400">
                  SOC 2 compliant with end-to-end encryption and access controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Interactive Demo Section */}
      {selectedProduct === 'aifag' && (
      <div ref={sectionRefs[sectionIdx]} className={`pb-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              <span className="text-sm font-semibold text-blue-400">Interactive Demo</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              See AIFAG in Action
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Watch how multiple AI agents collaborate to complete complex workflows
            </p>
          </div>

          {/* Workflow Selection Label */}
          <p className="text-lg font-semibold text-white mb-8">
            Select a workflow to simulate:
          </p>

          {/* Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Workflow 1 */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 hover:bg-neutral-800/50 transition duration-200 cursor-pointer">
              <h3 className="text-xl font-bold text-white mb-3">
                Sales Report Automation
              </h3>
              <p className="text-gray-400">
                Collect sales data, analyze trends, generate report, email to team
              </p>
            </div>

            {/* Workflow 2 */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 hover:bg-neutral-800/50 transition duration-200 cursor-pointer">
              <h3 className="text-xl font-bold text-white mb-3">
                Customer Support Triage
              </h3>
              <p className="text-gray-400">
                Monitor tickets, categorize urgency, assign to agents, send updates
              </p>
            </div>

            {/* Workflow 3 */}
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 hover:bg-neutral-800/50 transition duration-200 cursor-pointer">
              <h3 className="text-xl font-bold text-white mb-3">
                Content Pipeline
              </h3>
              <p className="text-gray-400">
                Research topics, generate drafts, review quality, schedule posts
              </p>
            </div>
          </div>
        </div>
      </div>
      )}

      

      {/* Be Part of the Future CTA Section */}
      <div ref={sectionRefs[sectionIdx]} className={`py-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Be Part of the Future
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Join our early access program and shape the next generation of AI products.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => setCurrentPage('collaborate')}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 mx-auto">
            Get Early Access
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

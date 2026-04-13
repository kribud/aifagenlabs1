import React, { useRef, useEffect, useState } from 'react';

const FlagshipProducts = ({ setCurrentPage }) => {
  const products = [
    {
      id: 1,
      badge: 'AIFAG',
      title: 'Enterprise AI Agent Suite',
      description: 'Connect, configure, and deploy intelligent AI agents across your organization. Automate complex workflows with human-like reasoning.',
      features: [
        { icon: '◉', text: 'Multi-Agent Orchestration' },
        { icon: '⊞', text: 'Enterprise Integration' },
        { icon: '⚡', text: 'Real-time Processing' }
      ]
    },
    {
      id: 2,
      badge: 'LifeOS',
      title: 'Personal AI Operating System',
      description: 'Your intelligent life companion. Organize, plan, and optimize every aspect of your personal and professional life.',
      features: [
        { icon: '📅', text: 'Smart Planning' },
        { icon: '🎯', text: 'Goal Tracking' },
        { icon: '🔒', text: 'Privacy-First Design' }
      ]
    }
  ];

  // Animation state for both cards
  const [visible, setVisible] = useState([false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible([true, true]);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-neutral-900 text-white px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto scale-95 sm:scale-95">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4">
            Flagship Products
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
            Coming 2027 — The future of intelligent ecosystems
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-neutral-800 border border-gray-800 rounded-lg sm:rounded-xl lg:rounded-3xl p-4 sm:p-5 md:p-6 hover:border-gray-700 transition duration-300
                ${visible[index] ? (index === 0 ? 'animate-slideInLeft' : 'animate-slideInRight') : (index === 0 ? 'opacity-0 -translate-x-16' : 'opacity-0 translate-x-16')}
                transition-all duration-700 ease-out`}
            >
              {/* Badge */}
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-800 border border-blue-500 text-blue-400 rounded-full text-xs sm:text-sm font-semibold">
                  {product.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        {feature.icon === '◉' && (
                          <circle cx="12" cy="12" r="8" />
                        )}
                        {feature.icon === '⊞' && (
                          <rect x="4" y="4" width="16" height="16" />
                        )}
                        {feature.icon === '⚡' && (
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        )}
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button 
                onClick={() => { setCurrentPage('products'); window.scrollTo(0, 0); }}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-600 hover:border-gray-400 text-white rounded-2xl transition duration-200 group text-sm sm:text-base">
                <span className="font-medium">Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagshipProducts;

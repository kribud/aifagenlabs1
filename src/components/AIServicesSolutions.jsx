import React, { useRef, useEffect, useState } from 'react';

const AIServicesSolutions = ({ setCurrentPage }) => {
  const services = [
    {
      id: 1,
      title: 'Generative AI',
      description: 'Create intelligent content, code, and solutions with cutting-edge generative models.',
      icon: '◉'
    },
    {
      id: 2,
      title: 'Automation',
      description: 'Streamline workflows and eliminate repetitive tasks with smart automation.',
      icon: '◉'
    },
    {
      id: 3,
      title: 'Computer Vision',
      description: 'Extract insights from images and video with advanced visual AI systems.',
      icon: '◉'
    },
    {
      id: 4,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and voice assistants that understand context.',
      icon: '◉'
    },
    {
      id: 5,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with ML-powered insights.',
      icon: '◉'
    },
    {
      id: 6,
      title: 'SaaS Consulting',
      description: 'End-to-end guidance for building and scaling your AI-powered SaaS products.',
      icon: '◉'
    }
  ];

  // Animation state for each card
  const [visible, setVisible] = useState(Array(services.length).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    cardRefs.current = cardRefs.current.slice(0, services.length);
    services.forEach((_, i) => {
      if (!cardRefs.current[i]) return;
      observers[i] = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => {
                const updated = [...prev];
                updated[i] = true;
                return updated;
              });
            }, i * 120); // stagger
            observers[i].disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observers[i].observe(cardRefs.current[i]);
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, [services.length]);

  return (
    <div className="min-h-screen bg-black text-white px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6">
            AI Solutions That Scale
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-width-3xl mx-auto px-2 sm:px-0">
            From intelligent automation to predictive insights, we deliver enterprise-grade AI that transforms how you work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-10 lg:px-12">
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={el => cardRefs.current[i] = el}
              className={`group bg-neutral-900 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-xl hover:shadow-white/20 transition duration-300 cursor-pointer
                ${visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                transition-all duration-700 ease-out`}
              style={{ transitionDelay: visible[i] ? `${i * 80}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.id === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                  {service.id === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4.243 4.243a4 4 0 105.656 5.656l4.243-4.243" />
                  )}
                  {service.id === 3 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                  {service.id === 4 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                  )}
                  {service.id === 5 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  )}
                  {service.id === 6 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  )}
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white inline-flex items-center gap-2 group">
                {service.title}
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M7 17L17 7" />
                </svg>
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition duration-300 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <button
            onClick={() => setCurrentPage('services')}
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition duration-200 text-base sm:text-lg font-medium group"
          >
            Explore all services
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIServicesSolutions;

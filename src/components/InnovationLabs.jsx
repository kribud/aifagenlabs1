import React, { useRef, useEffect, useState } from 'react';

const InnovationLabs = ({ setCurrentPage }) => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      ),
      title: 'Pioneering Research in AI & ML'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3v2.25m0 0v2.25m0-2.25h2.25m-2.25 0H7.5v2.25m9-2.25v2.25m0 0v2.25m0-2.25h2.25m-2.25 0H16.5v2.25M9 15h.01M15 15h.01M12 15h.01M12 21H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Rapid Prototyping & Testing'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Launch-Ready Products by 2027'
    }
  ];

  // Animation state for left and right columns
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
    <div ref={sectionRef} className="bg-black text-white py-12 px-3 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${visible[0] ? 'animate-slideInLeft' : 'opacity-0 -translate-x-16'} transition-all duration-700 ease-out`}>
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 w-fit">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              <span className="text-sm font-semibold">Innovation Labs</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Where Imagination Meets Intelligence
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Our Innovation Labs are the birthplace of tomorrow's AI breakthroughs. We research, prototype, and refine cutting-edge solutions that push the boundaries of what's possible.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-lg text-gray-300">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button 
              onClick={() => setCurrentPage('innovation-labs')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200 flex items-center gap-2">
              Explore Labs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Right Illustration */}
          <div className={`flex items-center justify-center relative h-96 lg:h-full ${visible[1] ? 'animate-slideInRight' : 'opacity-0 translate-x-16'} transition-all duration-700 ease-out`}>
            {/* Concentric Circles with Animation */}
            <div className="relative w-80 h-80">
              {/* Outer circles */}
              <div className="absolute inset-0 border border-gray-700 rounded-full opacity-30"></div>
              <div className="absolute inset-8 border border-gray-700 rounded-full opacity-20"></div>
              <div className="absolute inset-16 border border-gray-700 rounded-full opacity-10"></div>

              {/* Center blue circle with star */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>

                {/* Floating dots */}
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full" style={{ top: '20%', right: '15%', animation: 'float 3s ease-in-out infinite' }}></div>
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full" style={{ top: '25%', right: '22%', animation: 'float 4s ease-in-out infinite 1s' }}></div>
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full" style={{ bottom: '30%', left: '15%', animation: 'float 3.5s ease-in-out infinite 0.5s' }}></div>
                <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60" style={{ top: '40%', right: '30%', animation: 'float 2.5s ease-in-out infinite 1.5s' }}></div>
              </div>
            </div>

            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationLabs;

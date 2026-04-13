import React from 'react';

const CTA = ({ setCurrentPage }) => {
  return (
    <div className="bg-black text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Ready to Transform Your Business?
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Let's discuss how AI can solve your unique challenges.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Book a Consultation Button */}
          <button 
            onClick={() => setCurrentPage('collaborate')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200 whitespace-nowrap">
            Book a Consultation
          </button>

          {/* View Case Studies Button */}
          <button 
            onClick={() => setCurrentPage('case-studies')}
            className="px-8 py-4 border-2 border-gray-700 hover:border-gray-600 text-white font-semibold rounded-full transition duration-200 whitespace-nowrap">
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;

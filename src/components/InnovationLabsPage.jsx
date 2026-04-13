import React, { useState, useRef, useEffect } from 'react';
import '../fadeInUpInnovation.css';

const InnovationLabsPage = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('research');

  // Scroll reveal animation for multiple sections
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  const [reveals, setReveals] = useState(Array(6).fill(false));

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
      <div ref={sectionRefs[sectionIdx]} className={`pt-32 pb-32 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <span className="text-sm font-semibold text-blue-400">Research & Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-semibold mb-8 text-white">
            Innovation Labs
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Where imagination meets intelligence. Explore our cutting-edge research, prototypes, and the roadmap to 2027.
          </p>

          {/* Watch Lab Tour Button */}
          <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 mx-auto border border-gray-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Lab Tour
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div ref={sectionRefs[sectionIdx]} className={`sticky top-16 z-40 bg-gray-900/50 border-b border-gray-800 backdrop-blur-sm transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveTab('research')}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 flex items-center gap-2 ${
                activeTab === 'research'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C6.596 6.253 2 10.849 2 16.5S6.596 26.747 12 26.747s10-4.596 10-10.247S17.404 6.253 12 6.253z" />
              </svg>
              Research
            </button>
            <button
              onClick={() => setActiveTab('prototypes')}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 flex items-center gap-2 ${
                activeTab === 'prototypes'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Prototypes
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 flex items-center gap-2 ${
                activeTab === 'partners'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                <path d="M16 14v2a3 3 0 01-3 3h-2a3 3 0 01-3-3v-2" />
              </svg>
              Partners
            </button>
            <button
              onClick={() => setActiveTab('launch')}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 flex items-center gap-2 ${
                activeTab === 'launch'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Launch 2027
            </button>
          </div>
        </div>
      </div>

          {/* Content Area */}
      <div ref={sectionRefs[sectionIdx]} className={`py-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-4xl mx-auto">
          {activeTab === 'research' && (
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Pioneering AI Research
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our research teams are pushing the boundaries of what's possible with AI, focusing on areas that will shape the future of technology.
              </p>
            </div>
          )}
          {activeTab === 'prototypes' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Active Prototypes
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  From concept to reality. These prototypes represent our latest innovations in various stages of development.
                </p>
              </div>

              {/* Prototypes Grid */}
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* AIFA Voice */}
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          AIFA Voice
                        </h3>
                        <span className="px-3 py-1 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-full text-xs font-semibold">
                          Testing
                        </span>
                      </div>
                      <p className="text-gray-400">
                        Voice-first AI assistant with emotional intelligence.
                      </p>
                    </div>
                  </div>

                  {/* Vision Analytics Pro */}
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          Vision Analytics Pro
                        </h3>
                        <span className="px-3 py-1 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-full text-xs font-semibold">
                          Beta
                        </span>
                      </div>
                      <p className="text-gray-400">
                        Real-time video analysis for enterprise security.
                      </p>
                    </div>
                  </div>

                  {/* DocuMind */}
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          DocuMind
                        </h3>
                        <span className="px-3 py-1 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-full text-xs font-semibold">
                          Alpha
                        </span>
                      </div>
                      <p className="text-gray-400">
                        Intelligent document processing and extraction.
                      </p>
                    </div>
                  </div>

                  {/* FlowBuilder */}
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          FlowBuilder
                        </h3>
                        <span className="px-3 py-1 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-full text-xs font-semibold">
                          Development
                        </span>
                      </div>
                      <p className="text-gray-400">
                        No-code AI workflow automation platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'partners' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Our Partner Ecosystem
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Collaboration is at the heart of innovation. We work with leading institutions and organizations worldwide.
                </p>
              </div>

              {/* Partner Stats Cards */}
              <div className="max-w-7xl mx-auto mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* University Partners */}
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 text-center">
                    <p className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">
                      15+
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      University Partners
                    </h3>
                    <p className="text-gray-400">
                      Research Partnerships
                    </p>
                  </div>

                  {/* Enterprise Collaborators */}
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 text-center">
                    <p className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">
                      30+
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Enterprise Collaborators
                    </h3>
                    <p className="text-gray-400">
                      Industry Partnerships
                    </p>
                  </div>

                  {/* Startup Ecosystem */}
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 text-center">
                    <p className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">
                      50+
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Startup Ecosystem
                    </h3>
                    <p className="text-gray-400">
                      Startups Partnerships
                    </p>
                  </div>
                </div>
              </div>

              {/* Partner With Us Button */}
              <div className="text-center">
                <button 
                  onClick={() => setCurrentPage('collaborate')}
                  className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 mx-auto">
                  Partner With Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {activeTab === 'launch' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Roadmap to 2027
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Our journey to launching AIFAG and LifeOS as the next generation of AI ecosystems.
                </p>
              </div>

              {/* Timeline */}
              <div className="max-w-3xl mx-auto relative pl-8">
                {/* Vertical Line */}
                <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-gray-700"></div>

                {/* Timeline Item 1 - Q1 2025 - Completed */}
                <div className="mb-12 relative flex">
                  <div className="absolute -left-4 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
                  <div className="mr-4"></div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200 flex-1">
                    <p className="text-blue-400 text-sm font-semibold mb-2">Q1 2025</p>
                    <h3 className="text-2xl font-bold text-white mb-4">MVP Website + Chatbot Alpha</h3>
                    <div className="flex justify-end">
                      <span className="px-3 py-1 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-full text-xs font-semibold">
                        completed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 - Q2 2025 - In Progress */}
                <div className="mb-12 relative flex">
                  <div className="absolute -left-4 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
                  <div className="mr-4"></div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200 flex-1">
                    <p className="text-blue-400 text-sm font-semibold mb-2">Q2 2025</p>
                    <h3 className="text-2xl font-bold text-white mb-4">Collaboration Portal Beta</h3>
                    <div className="flex justify-end">
                      <span className="px-3 py-1 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-full text-xs font-semibold">
                        in progress
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 - Q4 2025 - Upcoming */}
                <div className="mb-12 relative flex">
                  <div className="absolute -left-4 top-2 w-4 h-4 bg-gray-600 rounded-full border-4 border-black"></div>
                  <div className="mr-4"></div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200 flex-1">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Q4 2025</p>
                    <h3 className="text-2xl font-bold text-white mb-4">Product Demo Launch</h3>
                    <div className="flex justify-end">
                      <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-full text-xs font-semibold">
                        upcoming
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 4 - Q1 2027 - Upcoming */}
                <div className="mb-12 relative flex">
                  <div className="absolute -left-4 top-2 w-4 h-4 bg-gray-600 rounded-full border-4 border-black"></div>
                  <div className="mr-4"></div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200 flex-1">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Q1 2027</p>
                    <h3 className="text-2xl font-bold text-white mb-4">Full Interactive Site v2</h3>
                    <div className="flex justify-end">
                      <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-full text-xs font-semibold">
                        upcoming
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 5 - Q2 2027 - Upcoming */}
                <div className="relative flex">
                  <div className="absolute -left-4 top-2 w-4 h-4 bg-gray-600 rounded-full border-4 border-black"></div>
                  <div className="mr-4"></div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200 flex-1">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Q2 2027</p>
                    <h3 className="text-2xl font-bold text-white mb-4">Global Campaign & Public Release</h3>
                    <div className="flex justify-end">
                      <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-full text-xs font-semibold">
                        upcoming
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Research Focus Areas - Only show if not on Prototypes, Partners, or Launch tab */}
      {activeTab !== 'prototypes' && activeTab !== 'partners' && activeTab !== 'launch' && (
        <div ref={sectionRefs[sectionIdx]} className={`pb-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Advanced Language Models */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Advanced Language Models
                </h3>

                {/* Description */}
                <p className="text-gray-400">
                  Pushing the boundaries of natural language understanding and generation.
                </p>
              </div>

              {/* Edge AI Computing */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 3v2H5v2h2v10H5v2h4v2h2v-2h4v2h2v-2h4v-2h-2V7h2V5h-4V3h-2v2h-4V3H9zm0 4h6v10H9V7z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Edge AI Computing
                </h3>

                {/* Description */}
                <p className="text-gray-400">
                  Bringing powerful AI capabilities to resource-constrained devices.
                </p>
              </div>

              {/* Multi-Agent Systems */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
                    <path d="M8.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M15.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M12 14c-3 0-5.5 1.5-5.5 3.5v2h11v-2c0-2-2.5-3.5-5.5-3.5z" />
                    <path d="M3 17v2h6v-2c0-1.5-1-2.5-2.5-2.5S3 15.5 3 17z" />
                    <path d="M15 17v2h6v-2c0-1.5-1-2.5-2.5-2.5s-2.5 1-2.5 2.5z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Multi-Agent Systems
                </h3>

                {/* Description */}
                <p className="text-gray-400">
                  Developing frameworks for coordinated AI agent collaboration.
                </p>
              </div>

              {/* Explainable AI */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Explainable AI
                </h3>

                {/* Description */}
                <p className="text-gray-400">
                  Making AI decisions transparent and interpretable for humans.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Innovation Journey CTA */}
      <div ref={sectionRefs[sectionIdx]} className={`py-24 px-4 transition-all duration-700 ${reveals[sectionIdx++] ? 'fade-in-up' : 'opacity-0'}`}> 
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Join Our Innovation Journey
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Whether you're a researcher, enterprise, or startup — there's a place for you in our ecosystem.
          </p>

          {/* Partner With Us Button */}
          <button 
            onClick={() => setCurrentPage('collaborate')}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 mx-auto">
            Partner With Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnovationLabsPage;

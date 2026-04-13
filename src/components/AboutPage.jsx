import React, { useRef, useEffect, useState } from 'react';
import '../fadeInUpAbout.css';

const AboutPage = ({ setCurrentPage }) => {
  // Refs for each major section
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const missionVisionRef = useRef(null);
  const valuesRef = useRef(null);
  const leadershipRef = useRef(null);
  const globalRef = useRef(null);
  const journeyRef = useRef(null);
  const joinRef = useRef(null);

  // State to track if each section is visible
  const [visible, setVisible] = useState({
    hero: false,
    story: false,
    missionVision: false,
    values: false,
    leadership: false,
    global: false,
    journey: false,
    join: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const reveal = (ref, key) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible((prev) => prev[key] ? prev : { ...prev, [key]: true });
        }
      };
      reveal(heroRef, 'hero');
      reveal(storyRef, 'story');
      reveal(missionVisionRef, 'missionVision');
      reveal(valuesRef, 'values');
      reveal(leadershipRef, 'leadership');
      reveal(globalRef, 'global');
      reveal(journeyRef, 'journey');
      reveal(joinRef, 'join');
    };
    window.addEventListener('scroll', handleScroll);
    // Reveal on mount in case already in view
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`px-4 sm:px-8 md:px-16 lg:px-32 py-32 max-w-5xl mx-auto text-center transition-all duration-1000 ${visible.hero ? 'fade-in-up-about' : 'opacity-0 translate-y-8'}`}
      >
        {/* Badge */}
        <div className="mb-12 inline-flex items-center gap-2 bg-neutral-800 border border-gray-800 rounded-full px-4 py-2">
          <span className="text-sm font-semibold text-blue-400">Est. 2027</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 text-white leading-tight">
          Building the Future of AI
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          We're on a mission to make AI accessible, meaningful, and scalable — from startups to global enterprises. Join us as we build toward our 2027 vision.
        </p>
      </div>

      {/* Our Story Section */}
      <div
        ref={storyRef}
      >
        <div className="max-w-full mx-auto bg-neutral-800 px-8 sm:px-12 md:px-24 py-8 sm:py-12 md:py-20">
          {/* Section Heading */}
          <h2 className="text-5xl md:text-6xl font-semibold mb-16 text-white text-center">
            Our Story
          </h2>

          {/* Story Content */}
          <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
            {/* Paragraph 1 */}
            <p>
              AIFAGen Labs was founded in 2024 with a simple yet powerful belief: AI should be for everyone — not just large tech companies.
            </p>

            {/* Paragraph 2 */}
            <p>
              We identified a gap between advanced AI research and practical business adoption. Our goal is to bridge that gap with intuitive, scalable, and human-centric AI platforms.
            </p>

            {/* Paragraph 3 */}
            <p>
              Our philosophy is <span className="text-white font-bold">AI for All Generations</span> — empowering startups, enterprises, and individuals alike.
            </p>

            {/* Paragraph 4 */}
            <p>
              We are building toward our 2027 vision with platforms such as <span className="text-white font-bold">AIFAG</span> and <span className="text-white font-bold">LifeOS</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div
        ref={missionVisionRef}
        className={`px-4 sm:px-8 md:px-16 lg:px-32 py-24 transition-all duration-1000 ${visible.missionVision ? 'fade-in-up-about' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Deliver next-generation, human-centric AI solutions that transform businesses and empower individuals by enhancing human capabilities.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition duration-200">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Vision
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Make AI accessible, meaningful, and scalable — from startups to global enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div
        ref={valuesRef}
        className={`px-4 sm:px-8 md:px-16 lg:px-32 py-24 transition-all duration-1000 ${visible.values ? 'fade-in-up-about' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-400">
              The principles that guide everything we do.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Human-Centric */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Human-Centric
              </h3>
              <p className="text-gray-400 text-sm">
                AI that empowers people, not replaces them.
              </p>
            </div>

            {/* Results-Driven */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Results-Driven
              </h3>
              <p className="text-gray-400 text-sm">
                Focused on measurable business outcomes.
              </p>
            </div>

            {/* Collaborative */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Collaborative
              </h3>
              <p className="text-gray-400 text-sm">
                Partnership approach to every project.
              </p>
            </div>

            {/* Innovation-First */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Innovation-First
              </h3>
              <p className="text-gray-400 text-sm">
                Always pushing the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership & Team Section */}
      <div
        ref={leadershipRef}
        className={`px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-gray-800 transition-all duration-1000 ${visible.leadership ? 'fade-in-up-about' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Leadership & Team
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            AIFAGen Labs is led by a multidisciplinary team of AI engineers, researchers, and product builders focused on responsible and scalable AI innovation.
          </p>
        </div>
      </div>

      {/* Global Presence Section */}
      <div
        ref={globalRef}
        className={`px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-gray-800 transition-all duration-1000 ${visible.global ? 'fade-in-up-about' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Global Presence
            </h2>
            <p className="text-lg text-gray-400">
              Operating across four continents to serve clients worldwide.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bangalore */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white">Bangalore</h3>
                  <p className="text-sm text-gray-400">India</p>
                </div>
              </div>
              <p className="text-blue-400 text-sm font-semibold">
                Headquarters & Innovation Labs
              </p>
            </div>

            {/* San Francisco */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white">San Francisco</h3>
                  <p className="text-sm text-gray-400">USA</p>
                </div>
              </div>
              <p className="text-blue-400 text-sm font-semibold">
                North America Operations
              </p>
            </div>

            {/* London */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white">London</h3>
                  <p className="text-sm text-gray-400">UK</p>
                </div>
              </div>
              <p className="text-blue-400 text-sm font-semibold">
                European Hub
              </p>
            </div>

            {/* Singapore */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white">Singapore</h3>
                  <p className="text-sm text-gray-400">Singapore</p>
                </div>
              </div>
              <p className="text-blue-400 text-sm font-semibold">
                Asia Pacific
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey to 2026 Section */}
      <div
        ref={journeyRef}
        className={`px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-gray-800 transition-all duration-1000 ${visible.journey ? 'fade-in-up-about' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Journey to 2027
            </h2>
            <p className="text-lg text-gray-400">
              Building the future, one milestone at a time.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-gray-700"></div>

            {/* Timeline Item 1 - 2024 */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200">
                <div className="absolute -left-20 top-6 bg-blue-600 rounded-lg px-3 py-2">
                  <span className="text-white font-semibold text-sm">2024</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Company Founded</h3>
                <p className="text-gray-400">AIFAGen Labs established with vision for accessible AI.</p>
              </div>
            </div>

            {/* Timeline Item 2 - Q1 2025 */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200">
                <div className="absolute -left-20 top-6 bg-blue-600 rounded-lg px-3 py-2">
                  <span className="text-white font-semibold text-sm">Q1 2025</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">MVP Launch</h3>
                <p className="text-gray-400">Website and chatbot alpha released to public.</p>
              </div>
            </div>

            {/* Timeline Item 3 - Q2 2025 */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200">
                <div className="absolute -left-20 top-6 bg-blue-600 rounded-lg px-3 py-2">
                  <span className="text-white font-semibold text-sm">Q2 2025</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Partnerships</h3>
                <p className="text-gray-400">Collaboration portal opens for strategic partners.</p>
              </div>
            </div>

            {/* Timeline Item 4 - Q4 2025 */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200">
                <div className="absolute -left-20 top-6 bg-blue-600 rounded-lg px-3 py-2">
                  <span className="text-white font-semibold text-sm">Q4 2025</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Product Preview</h3>
                <p className="text-gray-400">First demos of AIFAG and LifeOS showcased.</p>
              </div>
            </div>

            {/* Timeline Item 5 - Q1 2026 */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200">
                <div className="absolute -left-20 top-6 bg-blue-600 rounded-lg px-3 py-2">
                  <span className="text-white font-semibold text-sm">Q1 2027</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Platform Beta</h3>
                <p className="text-gray-400">Full interactive platform v2 with AI-driven features.</p>
              </div>
            </div>

            {/* Timeline Item 6 - Q2 2026 */}
            <div className="relative">
              <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition duration-200">
                <div className="absolute -left-20 top-6 bg-blue-600 rounded-lg px-3 py-2">
                  <span className="text-white font-semibold text-sm">Q2 2027</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Launch</h3>
                <p className="text-gray-400">AIFAG & LifeOS released to the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Mission CTA Section */}
      <div
        ref={joinRef}
        className={`px-4 sm:px-8 md:px-16 lg:px-32 py-24 border-t border-gray-800 transition-all duration-1000 ${visible.join ? 'fade-in-up-about' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our Mission
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Whether you're looking to transform your business or join our team, we'd love to hear from you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Partner With Us Button */}
            <button
              onClick={() => setCurrentPage('collaborate')}
              className="px-8 py-4 bg-[#1890FF] hover:bg-[#0077e6] text-white font-semibold rounded-[16px] transition duration-200 flex items-center justify-center gap-2 shadow-none border-none focus:outline-none"
              style={{ minWidth: '220px', fontSize: '20px', fontWeight: 500 }}
            >
              Partner With Us
              <svg className="w-6 h-6 ml-2" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* View Careers Button */}
            <button
              className="px-8 py-4 bg-[#232323] hover:bg-[#232323] text-white font-semibold rounded-[16px] border-2 border-[#444] transition duration-200 shadow-none focus:outline-none"
              style={{ minWidth: '180px', fontSize: '20px', fontWeight: 500 }}
            >
              View Careers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

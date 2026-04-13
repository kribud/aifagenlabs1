import React, { useRef, useEffect, useState } from 'react';
import '../fadeInUpCollaborate.css';

const CollaboratePage = () => {
  // Refs for each major section
  const collaborateRef = useRef(null);
  const iamaRef = useRef(null);
  const whyRef = useRef(null);
  const formRef = useRef(null);

  // State to track if each section is visible
  const [visible, setVisible] = useState({
    collaborate: false,
    iama: false,
    why: false,
  });

  // State to track which card is selected
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: '',
    details: '',
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
      reveal(collaborateRef, 'collaborate');
      reveal(iamaRef, 'iama');
      reveal(whyRef, 'why');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to form when a card is selected
  useEffect(() => {
    if (selectedCard && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedCard]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to the backend
    const submitData = {
      ...formData,
      submittedTo: 'pmo@aifagenlabs.com',
      userType: selectedCard,
      timestamp: new Date().toISOString(),
    };

    // Log for now - replace with actual API call
    console.log('Form submitted:', submitData);
    
    // If you have a backend endpoint, uncomment the following:
    // fetch('/api/submit-form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(submitData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   alert('Your request has been submitted successfully!');
    //   // Reset form after submission
    //   setFormData({
    //     name: '',
    //     email: '',
    //     company: '',
    //     topic: '',
    //     details: '',
    //   });
    //   setSelectedCard(null);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   alert('There was an error submitting your request. Please try again.');
    // });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      topic: '',
      details: '',
    });
    setSelectedCard(null);
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Collaborate Section */}
      <div
        ref={collaborateRef}
        className={`py-24 transition-all duration-1000 ${visible.collaborate ? 'fade-in-up-collaborate' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-8">
            Let's Collaborate
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tell us about your project and let's explore how AI can transform your vision into reality.
          </p>
        </div>

        {/* I am a... Section */}
        <div
          ref={iamaRef}
          className={`mt-24 transition-all duration-1000 ${visible.iama ? 'fade-in-up-collaborate' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">I am a...</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Startup Card */}
            <div 
              onClick={() => setSelectedCard('startup')}
              className={`bg-gray-900/50 border rounded-2xl p-8 transition duration-300 cursor-pointer ${
                selectedCard === 'startup' 
                  ? 'border-blue-600 bg-blue-900/30' 
                  : 'border-gray-800 hover:border-blue-600'
              }`}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Startup</h3>
              <p className="text-gray-400 text-center text-sm">Early stage company looking for AI solutions</p>
            </div>
            {/* ...existing code for other cards... */}
            <div 
              onClick={() => setSelectedCard('enterprise')}
              className={`bg-gray-900/50 border rounded-2xl p-8 transition duration-300 cursor-pointer ${
                selectedCard === 'enterprise' 
                  ? 'border-blue-600 bg-blue-900/30' 
                  : 'border-gray-800 hover:border-blue-600'
              }`}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H8c-1.1 0-2 .9-2 2v4H4c-1.1 0-2 .9-2 2v11h4v-5h12v5h4V9c0-1.1-.9-2-2-2h-2V5c0-1.1-.9-2-2-2zm0 2h4v2h-4V9zM4 20h4v-5h8v5h4v-9H4v9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Enterprise</h3>
              <p className="text-gray-400 text-center text-sm">Established organization seeking transformation</p>
            </div>
            <div 
              onClick={() => setSelectedCard('individual')}
              className={`bg-gray-900/50 border rounded-2xl p-8 transition duration-300 cursor-pointer ${
                selectedCard === 'individual' 
                  ? 'border-blue-600 bg-blue-900/30' 
                  : 'border-gray-800 hover:border-blue-600'
              }`}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Individual</h3>
              <p className="text-gray-400 text-center text-sm">Professional interested in AI tools</p>
            </div>
            <div 
              onClick={() => setSelectedCard('investor')}
              className={`bg-gray-900/50 border rounded-2xl p-8 transition duration-300 cursor-pointer ${
                selectedCard === 'investor' 
                  ? 'border-blue-600 bg-blue-900/30' 
                  : 'border-gray-800 hover:border-blue-600'
              }`}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 6h-2c0-2.76-2.24-5-5-5s-5 2.24-5 5H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c1.66 0 3 1.34 3 3h-6c0-1.66 1.34-3 3-3zm5 16H6V8h12v12zm-6-3.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Investor</h3>
              <p className="text-gray-400 text-center text-sm">Looking to invest or partner</p>
            </div>
            <div 
              onClick={() => setSelectedCard('partner')}
              className={`bg-gray-900/50 border rounded-2xl p-8 transition duration-300 cursor-pointer ${
                selectedCard === 'partner' 
                  ? 'border-blue-600 bg-blue-900/30' 
                  : 'border-gray-800 hover:border-blue-600'
              }`}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Strategic Partner</h3>
              <p className="text-gray-400 text-center text-sm">Agency or consultant seeking collaboration</p>
            </div>
          </div>

          {/* Contact Form - appears when a card is selected */}
          {selectedCard && (
            <div ref={formRef} className="mt-16 max-w-4xl mx-2 sm:mx-6 md:mx-8 lg:mx-auto bg-gray-900/30 border border-gray-800 rounded-2xl p-8 transition-shadow duration-300 hover:shadow-2xl hover:shadow-white/40">
              <form onSubmit={handleSubmit} className="space-y-11 pt-4 pb-4">
                {/* Name Field */}
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-100 text-gray-900 placeholder-gray-400 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Email Field */}
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-100 text-gray-900 placeholder-gray-400 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Company Name Field */}
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-100 text-gray-900 placeholder-gray-400 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Discussion Topic Field */}
                <input
                  type="text"
                  name="topic"
                  placeholder="What would you like to discuss?"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-100 text-gray-900 placeholder-gray-400 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Details Textarea */}
                <textarea
                  name="details"
                  placeholder="Share details about your needs, goals, timeline, budget, or any specific requirements..."
                  value={formData.details}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full bg-neutral-100 text-gray-900 placeholder-gray-400 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2"
                >
                  Submit Request →
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Why Partner With Us Section */}
        <div
          ref={whyRef}
          className={`mt-32 transition-all duration-1000 ${visible.why ? 'fade-in-up-collaborate' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why Partner With Us?</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Expert Team Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Expert Team</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">Work with AI specialists who have built solutions for Fortune 500 companies.</p>
            </div>
            {/* ...existing code for other cards... */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Tailored Solutions</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">Custom AI implementations designed specifically for your unique needs.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Proven Track Record</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">Join 50+ organizations that have transformed with our AI solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratePage;

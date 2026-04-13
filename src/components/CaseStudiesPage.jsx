import React, { useState, useRef, useEffect } from 'react';
import '../fadeInUpCaseStudies.css';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';

const CaseStudiesPage = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = [
    { id: 'all', label: 'All Cases' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'finance', label: 'Finance' },
    { id: 'retail', label: 'Retail' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'technology', label: 'Technology' }
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'healthcare',
      title: 'Predictive Patient Analytics',
      client: 'HealthFirst Systems',
      description: 'Late detection of critical conditions was leading to poor patient outcomes. Doctors needed to manually review thousands of records, missing early warning signs.',
      solution: 'Developed a predictive analytics platform that monitors patient data in real-time, identifying early warning signs of complications. The system integrates with existing EMR systems and provides actionable alerts.',
      results: 'Patient critical condition detection improved by 85%, reducing adverse events by 40%. Hospital readmission rates dropped significantly.',
      metrics: ['+85%', '-40%'],
      image: image1,
      technologies: ['Machine Learning', 'Predictive Analytics', 'Real-time Monitoring', 'Data Integration']
    },
    {
      id: 2,
      category: 'finance',
      title: 'AI-Powered Risk Assessment',
      client: 'TechCorp Global',
      description: 'Manual risk analysis was taking weeks, creating bottlenecks in loan approvals and increasing operational costs. The legacy system couldn\'t keep up with market demands.',
      solution: 'Implemented an AI-powered risk assessment engine that analyzes applications in minutes with 99.2% accuracy. The system learns from historical data and adapts to market changes automatically.',
      results: 'Loan approval time reduced from 3 weeks to 2 hours. Default rate prediction accuracy improved to 98%, reducing risk exposure.',
      metrics: ['+92%', '-85%'],
      image: image4,
      technologies: ['Deep Learning', 'Risk Modeling', 'Automated Decision Engine', 'Pattern Recognition']
    },
    {
      id: 3,
      category: 'retail',
      title: 'Smart Inventory Management',
      client: 'RetailMax',
      description: 'Stockouts and overstock situations were costing millions annually. Manual forecasting couldn\'t account for seasonal trends, promotions, and external factors.',
      solution: 'Built an AI-driven inventory management system that predicts demand with high accuracy, considering weather, events, trends, and historical data. Automated reordering prevents stockouts.',
      results: 'Inventory costs reduced by 55%. Stockout incidents decreased by 78%. Profit margins improved by 12%.',
      metrics: ['+78%', '-55%'],
      image: image2,
      technologies: ['Demand Forecasting', 'Supply Chain AI', 'Real-time Analytics', 'Automation']
    },
    {
      id: 4,
      category: 'manufacturing',
      title: 'Quality Control Automation',
      client: 'AutoManufacture Inc',
      description: 'Manual quality inspection was slow, inconsistent, and missed defects. This led to recalls and customer complaints affecting brand reputation.',
      solution: 'Deployed computer vision systems on the production line that inspect every product in real-time, detecting microscopic defects. The system learns from feedback and continuously improves.',
      results: 'Defect detection rate improved by 96%. Production recall rates dropped by 89%. Inspection time reduced by 70%.',
      metrics: ['+96%', '-89%'],
      image: image3,
      technologies: ['Computer Vision', 'Deep Learning', 'Real-time Detection', 'Quality Assurance']
    },
    {
      id: 5,
      category: 'technology',
      title: 'Intelligent Customer Support',
      client: 'TechSupport Pro',
      description: 'Call center was overwhelmed with repetitive queries. Wait times exceeded 20 minutes and customer satisfaction was at 45%.',
      solution: 'Implemented conversational AI chatbots that handle 70% of routine queries instantly. Complex issues are seamlessly escalated to human agents with full context.',
      results: 'Average wait time reduced from 20 minutes to 2 minutes. Customer satisfaction increased to 92%. Support costs reduced by 60%.',
      metrics: ['+90%', '-60%'],
      image: image1,
      technologies: ['Conversational AI', 'NLP', 'Sentiment Analysis', 'Multi-language Support']
    },
    {
      id: 6,
      category: 'healthcare',
      title: 'Medical Image Analysis',
      client: 'DiagnoAI Labs',
      description: 'Radiologists were spending hours analyzing medical images manually, leading to fatigue and occasional misdiagnosis of critical conditions.',
      solution: 'Deployed advanced computer vision AI that analyzes X-rays, MRIs, and CT scans. System highlights suspicious areas and provides probability scores for rapid physician review.',
      results: 'Diagnostic accuracy improved by 94%. Review time per image reduced from 15 minutes to 2 minutes. Patient outcomes significantly improved.',
      metrics: ['+94%', '-87%'],
      image: image2,
      technologies: ['Medical AI', 'Computer Vision', 'Deep Learning', 'Image Analysis']
    },
    {
      id: 7,
      category: 'finance',
      title: 'Fraud Detection System',
      client: 'SecureBank Corp',
      description: 'Fraudulent transactions were costing millions annually. Traditional rule-based systems had high false positives and missed sophisticated fraud patterns.',
      solution: 'Built an AI system using anomaly detection and behavioral analysis that identifies fraudulent patterns in real-time. Machine learning models adapt to new fraud tactics automatically.',
      results: 'Fraud detection rate improved to 99.1%. False positive rate reduced by 75%. Annual fraud losses decreased by $8.2M.',
      metrics: ['+99%', '-75%'],
      image: image4,
      technologies: ['Anomaly Detection', 'Machine Learning', 'Behavioral Analysis', 'Real-time Processing']
    },
    {
      id: 8,
      category: 'retail',
      title: 'Personalized Recommendation Engine',
      client: 'ShopFlow Systems',
      description: 'Generic product recommendations resulted in low conversion rates. Customer engagement was declining as personalization was minimal.',
      solution: 'Developed an AI recommendation engine that analyzes customer behavior, preferences, and purchase history. Real-time personalization increases relevance of product suggestions.',
      results: 'Conversion rate increased by 43%. Average order value increased by 35%. Customer repeat purchase rate improved by 68%.',
      metrics: ['+68%', '+43%'],
      image: image3,
      technologies: ['Recommendation AI', 'Behavioral Analytics', 'Personalization Engine', 'Real-time Insights']
    }
  ];

  const filteredCaseStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  // Refs for each major section
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  // For card refs, use an array
  const cardRefs = useRef([]);

  // State to track if each section is visible
  const [visible, setVisible] = useState({
    header: false,
    filter: false,
    grid: false,
    cards: []
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
      reveal(headerRef, 'header');
      reveal(filterRef, 'filter');
      reveal(gridRef, 'grid');
      // Reveal each card
      setVisible((prev) => {
        const newCards = [...(prev.cards || [])];
        filteredCaseStudies.forEach((_, idx) => {
          if (cardRefs.current[idx]) {
            const rect = cardRefs.current[idx].getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
              newCards[idx] = true;
            }
          }
        });
        return { ...prev, cards: newCards };
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredCaseStudies.length]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div
        ref={headerRef}
        className={`pt-32 pb-16 px-4 transition-all duration-1000 ${visible.header ? 'fade-in-up-casestudies' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Success Stories
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            Real results from real partnerships. See how we've helped organizations transform with AI.
          </p>
        </div>
      </div>

      {/* Sticky Category Filter Buttons */}
      <div
        ref={filterRef}
        className={`sticky top-16 z-40 bg-neutral-900/50 border-b border-gray-800 backdrop-blur-sm mb-15 transition-all duration-1000 ${visible.filter ? 'fade-in-up-casestudies' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-neutral-800 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Case Studies Section */}
      <div
        ref={gridRef}
        className={`px-4 sm:px-8 md:px-16 lg:px-32 pb-24 transition-all duration-1000 ${visible.grid ? 'fade-in-up-casestudies' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, idx) => (
              <div
                key={study.id}
                ref={el => cardRefs.current[idx] = el}
                onClick={() => setSelectedCase(study)}
                className={`bg-neutral-800 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200 flex flex-col group cursor-pointer transition-all duration-1000 ${visible.cards[idx] ? 'fade-in-up-casestudies' : 'opacity-0 translate-y-8'}`}
              >
                {/* Image Section with Category Badge */}
                <div className="relative h-56 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition duration-300">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-neutral-800 border border-gray-600 text-gray-200 rounded-full text-xs font-semibold inline-block capitalize">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col grow">
                  {/* Client Name with Icon */}
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    <p className="text-blue-400 font-semibold text-sm">{study.client}</p>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-5 grow leading-relaxed line-clamp-3">
                    {study.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="flex gap-3">
                    {study.metrics.map((metric, idx2) => (
                      <span key={idx2} className="px-3 py-1.5 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-full text-sm font-semibold">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute text-gray-500 hover:text-gray-700 z-[9999] bg-white rounded-full p-2 hover:bg-gray-100 transition"
              style={{ right: '16px', top: '16px', position: 'absolute' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="w-full h-64 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center overflow-hidden relative">
              <img 
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Client Name */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
                <span className="text-blue-500 font-semibold">{selectedCase.client}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-black mb-8">{selectedCase.title}</h2>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-2-.9-2-2zM1 2v6h6V2H1zm6 10H1v6h6v-6zm6-10v6h6V2h-6zm0 10h6v6h-6v-6z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">Efficiency Gain</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 5V1h-1v4H8.49c-.45 0-.67.54-.35.85l3.51 3.51 3.51-3.51c.31-.31.1-.85-.35-.85h-2.51v.01zm.01 14v4h1v-4h3.51c.45 0 .67-.54.35-.85l-3.51-3.51-3.51 3.51c-.31.31-.1.85.35.85h2.51v-.01z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">Time Saved</p>
                </div>
              </div>

              {/* The Challenge */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  The Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              {/* Our Solution */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Our Solution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedCase.solution}
                </p>
              </div>

              {/* Results & Impact */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                  </svg>
                  Results & Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedCase.results}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-lg font-bold text-black mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCase.technologies.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-50 text-black rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action Button */}
              <button 
                onClick={() => {
                  setSelectedCase(null);
                  setCurrentPage('collaborate');
                  window.scrollTo(0, 0);
                }}
                className="w-3/5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-200 flex items-center justify-center gap-2"
              >
                Start Your Transformation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;

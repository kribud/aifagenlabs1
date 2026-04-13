import React, { useState, useRef, useEffect } from "react";
import image4 from "../assets/image4.jpeg";
import image2 from "../assets/image2.jpeg";

const ANIMATION_DURATION = 500; // ms

const SuccessStories = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [outgoing, setOutgoing] = useState(null); // null or slide index
  const [pendingSlide, setPendingSlide] = useState(null); // null or slide index
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef();
  const timeoutRef = useRef();

  // Scroll reveal effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!document.getElementById("success-stories-reveal-keyframes")) {
      const style = document.createElement("style");
      style.id = "success-stories-reveal-keyframes";
      style.innerHTML = `
        @keyframes success-reveal {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-success-reveal {
          animation: success-reveal 700ms cubic-bezier(.4,0,.2,1) both;
        }
      `;
      document.head.appendChild(style);
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stories = [
    {
      id: 1,
      company: "TechCorp Global",
      companyColor: "text-blue-400",
      title: "AI-Powered Risk Assessment",
      description:
        "Reduced risk analysis time by 85% with intelligent automation.",
      metrics: [
        { value: "+85%", label: "Efficiency" },
        { value: "99.2%", label: "Accuracy" },
        { value: "-40%", label: "Cost" },
      ],
      image: "Finance",
      category: "Finance",
    },
    {
      id: 2,
      company: "HealthFirst Systems",
      companyColor: "text-blue-400",
      title: "Predictive Patient Analytics",
      description:
        "Early detection system that improved patient outcomes by 60%.",
      metrics: [
        { value: "+60%", label: "Detection" },
        { value: "-70%", label: "Response" },
        { value: "+45%", label: "Satisfaction" },
      ],
      image: "Analytics",
      category: "Analytics",
    },
    {
      id: 3,
      company: "RetailMax",
      companyColor: "text-blue-400",
      title: "Smart Inventory Management",
      description: "AI-driven forecasting reduced stockouts by 78%.",
      metrics: [
        { value: "-78%", label: "stockouts" },
        { value: "+32%", label: "revenue" },
        { value: "-55%", label: "waste" },
      ],
      image: "Retail",
      category: "Retail",
    },
  ];


  // Animation handlers
  const handleNav = (targetIdx) => {
    if (isAnimating || targetIdx === currentSlide) return;
    setIsAnimating(true);
    setOutgoing(currentSlide);
    setPendingSlide(targetIdx);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide(targetIdx);
      setOutgoing(null);
      setPendingSlide(null);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  const nextSlide = () => handleNav((currentSlide + 1) % stories.length);
  const prevSlide = () => handleNav((currentSlide - 1 + stories.length) % stories.length);
  const goToSlide = (index) => handleNav(index);

  // Animation classes
  const slideOutClass =
    "animate-success-slide-out pointer-events-none absolute w-full left-0 top-0";
  const slideInClass =
    "animate-success-slide-in";

  // Custom keyframes (inject once)
  if (typeof window !== "undefined" && !document.getElementById("success-stories-keyframes")) {
    const style = document.createElement("style");
    style.id = "success-stories-keyframes";
    style.innerHTML = `
      @keyframes success-slide-in {
        0% { opacity: 0; transform: translateX(60px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes success-slide-out {
        0% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(-60px); }
      }
      .animate-success-slide-in {
        animation: success-slide-in ${ANIMATION_DURATION}ms cubic-bezier(.4,0,.2,1) both;
      }
      .animate-success-slide-out {
        animation: success-slide-out ${ANIMATION_DURATION}ms cubic-bezier(.4,0,.2,1) both;
      }
    `;
    document.head.appendChild(style);
  }

  // Render outgoing (fading out) and incoming (fading in) content
  function renderContent(storyIdx, animationClass) {
    const story = stories[storyIdx];
    return (
      <div className={animationClass} key={storyIdx}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-96">
          {/* Left Side - Image Only */}
          <div className="flex items-center justify-center lg:justify-end order-2 lg:order-1">
            {storyIdx === 0 ? (
              <img
                src={image4}
                alt="Finance Dashboard"
                className="object-cover rounded-[2rem] w-full max-w-[500px] h-[280px] md:h-[320px] lg:h-[360px]"
              />
            ) : storyIdx === 2 ? (
              <img
                src={image2}
                alt="Retail Dashboard"
                className="object-cover rounded-[2rem] w-full max-w-[500px] h-[280px] md:h-[320px] lg:h-[360px]"
              />
            ) : (
              <div className="w-full max-w-[500px] h-[280px] md:h-[320px] lg:h-[360px] flex items-center justify-center">
                {/* Placeholder dashboard visualization */}
                <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {story.metrics[0].value}
                    </div>
                    <div className="text-gray-400 text-sm mb-6">
                      {story.category} Dashboard
                    </div>
                  </div>
                  {/* Simple chart visualization */}
                  <div className="flex items-end gap-1 h-32 w-full px-4">
                    {[45, 60, 50, 75, 65, 80, 70].map((height, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-70 hover:opacity-100 transition"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-4">
                    Analytics & Performance
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Case Study Card */}
          <div className="flex items-center justify-center lg:justify-start order-1 lg:order-2 w-full max-w-[500px] mx-auto lg:mx-0">
            <div className="group bg-neutral-900 border border-gray-800 rounded-2xl p-6 md:p-6 lg:p-5 hover:border-white-500 hover:border-opacity-60 hover:shadow-2xl hover:shadow-neutral-800 transition duration-300">
              {/* Company Name */}
              <div
                className={`${story.companyColor} text-sm font-semibold mb-4 group-hover:text-blue-300 transition`}
              >
                {story.company}
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-white transition">
                {story.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-lg mb-8 group-hover:text-gray-300 transition">
                {story.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {story.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="text-center bg-gray-800 group-hover:bg-gray-700 rounded-xl p-3 transition duration-300"
                  >
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 5h8v2h-8V5zM3 5h8v2H3V5zm0 7h8v2H3v-2zm10 0h8v2h-8v-2zM3 17h8v2H3v-2zm10 0h8v2h-8v-2z" />
                      </svg>
                      <div className="text-2xl font-bold text-white">
                        {metric.value}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Read Full Case Study Button */}
              <button
                onClick={() => setCurrentPage("case-studies")}
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group/btn transition"
              >
                Read Full Case Study
                <svg
                  className="w-5 h-5 group-hover/btn:translate-x-1 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className={`bg-black text-white py-12 px-2 sm:px-4 ${revealed ? "animate-success-reveal" : "opacity-0"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from real partnerships. See how we've helped
            organizations transform with AI.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[28rem] overflow-hidden pb-20">
          {/* Outgoing (slide out) */}
          {typeof outgoing === "number" && outgoing !== currentSlide && !pendingSlide && (
            renderContent(outgoing, slideOutClass)
          )}
          {/* Incoming (slide in) */}
          {((outgoing === null && pendingSlide === null) || (pendingSlide !== null && outgoing !== null)) &&
            renderContent(pendingSlide !== null ? pendingSlide : currentSlide, pendingSlide !== null ? slideInClass : "")}
          {/* Navigation Arrows and Dots - Redesigned */}
          <div className="flex items-center justify-center gap-4 mt-12 absolute left-0 right-0 bottom-0 z-10">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition shadow-lg focus:outline-none focus:ring-0 focus:border-0 active:outline-none active:ring-0 active:border-0 hover:scale-110 disabled:opacity-60 disabled:pointer-events-none"
              aria-label="Previous slide"
              tabIndex={0}
              style={{ outline: 'none', boxShadow: 'none', border: 'none' }}
              disabled={isAnimating}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {stories.map((_, idx) => {
                const active = idx === (pendingSlide !== null ? pendingSlide : currentSlide);
                return (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`
                      !min-h-0 !min-w-0
                      rounded-full
                      transition-all duration-300 ease-in-out
                      ${
                        active
                          ? "bg-blue-600 px-3.5 py-1"
                          : "bg-neutral-700 hover:bg-neutral-500 p-1.5"
                      }
                    `}
                    disabled={isAnimating}
                  />
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition shadow-lg focus:outline-none focus:ring-0 focus:border-0 active:outline-none active:ring-0 active:border-0 hover:scale-110 disabled:opacity-60 disabled:pointer-events-none"
              aria-label="Next slide"
              tabIndex={0}
              style={{ outline: 'none', boxShadow: 'none', border: 'none' }}
              disabled={isAnimating}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

import React, { useState, useRef, useEffect } from "react";
import "../fadeInUpContact.css";

// Add wave animation CSS
const waveAnimationStyle = `
@keyframes wavePin {
  0% { transform: translateY(0); }
  20% { transform: translateY(-10px); }
  40% { transform: translateY(0); }
  60% { transform: translateY(10px); }
  80% { transform: translateY(0); }
  100% { transform: translateY(0); }
}
.wave-pin {
  animation: wavePin 2s infinite ease-in-out;
}
`;

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyFYfTcPi0UYDHsC1HLVeK33dSZ3mtcz2D08RpTKS5CSgLMRo_OlfMSEuZ79Dt0QhvtEQ/exec";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...formData,
          formType: "contact",
        }),
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  // Refs for each major section
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // State to track if each section is visible
  const [visible, setVisible] = useState({
    heading: false,
    content: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const reveal = (ref, key) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
        }
      };
      reveal(headingRef, "heading");
      reveal(contentRef, "content");
      reveal(leftRef, "left");
      reveal(rightRef, "right");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div
          ref={headingRef}
          className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${visible.heading ? "fade-in-up-contact" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-4 sm:mb-6 md:mb-8">
            Get in Touch
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Have questions? We're here to help. Reach out to us through any
            channel below.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 transition-all duration-1000 ${visible.content ? "fade-in-up-contact" : "opacity-0 translate-y-8"}`}
        >
          <div
            ref={leftRef}
            className={`px-2 sm:px-0 transition-all duration-1000 ${visible.left ? "fade-in-up-contact" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="4.5"
                  ry="10"
                  stroke="currentColor"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4.5"
                  stroke="currentColor"
                />
                <path d="M2 12h20" stroke="currentColor" />
              </svg>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                Our Offices
              </h2>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-800 rounded-lg flex items-center justify-center transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <svg
                  className="absolute inset-0 w-full h-full text-gray-700"
                  viewBox="0 0 800 400"
                  fill="none"
                >
                  <style>{waveAnimationStyle}</style>
                  <rect width="800" height="400" fill="#374151" />
                  <path
                    d="M 100 150 Q 150 100 200 150 Q 250 200 300 150"
                    stroke="#555"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute flex flex-col items-center gap-2 wave-pin"
                    style={{ left: "25%", top: "55%" }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-semibold">
                      Hyderabad
                    </span>
                  </div>

                  <div
                    className="absolute flex flex-col items-center gap-2 wave-pin"
                    style={{ left: "65%", top: "45%" }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-semibold">
                      New Jersey
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-4 sm:p-5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Hyderabad
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      India • Headquarters{" "}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        <span className="text-gray-400 text-sm">
                          Info@aifagenlabs.com
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17 10.5V7c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                        </svg>
                        <span className="text-gray-400 text-sm">
                          +91 93906 93114
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-4 sm:p-5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      New Jersey
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      USA • North America
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        <span className="text-gray-400 text-sm">
                          Hr@aifagenlabs.com
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17 10.5V7c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                        </svg>
                        <span className="text-gray-400 text-sm">
                          +1 (475) 224-0417
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`bg-neutral-900 border border-gray-800 rounded-2xl pt-8 px-8 pb-0 transition-all duration-1000 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/30 ${visible.right ? "fade-in-up-contact" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl font-semibold text-white mb-8">
              Send us a message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-white mb-3 transition-colors duration-300">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-neutral-800 border-0 border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-100 transition-all duration-300 input-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-3 transition-colors duration-300">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-neutral-800 border-0 border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-100 transition-all duration-300 input-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-3 transition-colors duration-300">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  required
                  className="w-full bg-neutral-800 border-0 border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-100 transition-all duration-300 input-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-3 transition-colors duration-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your inquiry..."
                  rows="5"
                  required
                  className="w-full bg-neutral-800 border-0 border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-100 transition-all duration-300 resize-none input-smooth"
                ></textarea>
              </div>

              {success && (
                <div className="flex items-center gap-2 bg-green-900/40 border border-green-600 text-green-400 rounded-lg px-4 py-3 text-sm">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Message sent! We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 bg-red-900/40 border border-red-600 text-red-400 rounded-lg px-4 py-3 text-sm">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-300 mt-2 flex items-center justify-center gap-2 px-8 pb-8 btn-smooth"
              >
                {loading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

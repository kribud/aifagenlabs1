import React, { useState } from "react";
import logo from "../assets/logo.png";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyFYfTcPi0UYDHsC1HLVeK33dSZ3mtcz2D08RpTKS5CSgLMRo_OlfMSEuZ79Dt0QhvtEQ/exec";

const Footer = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subError, setSubError] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubError("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          email,
          formType: "newsletter",
        }),
      });

      setIsSubscribed(true);
      setEmail("");
    } catch (err) {
      setSubError(err.message || "Subscription failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="border-t border-b border-gray-800 py-7 px-6 md:px-16 lg:px-32 xl:px-48">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              <span className="text-lg md:text-xl">
                Stay ahead with AI insights
              </span>
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              <span className="text-sm md:text-base">
                Get the latest on AI innovations delivered to your inbox.
              </span>
            </p>
          </div>

          {!isSubscribed ? (
            <div className="w-full md:w-auto">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-3 md:px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs md:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-600 focus:bg-neutral-800 transition-all duration-300 flex-1 md:flex-none min-w-40 input-smooth"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 md:px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap btn-smooth"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
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
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
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
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {subError && (
                <p className="text-red-400 text-xs mt-2 text-center md:text-right">
                  {subError}
                </p>
              )}
            </div>
          ) : (
            <button className="px-4 md:px-6 py-2 bg-blue-600 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-default">
              Thanks for subscribing!
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="py-10 px-6 md:px-16 lg:px-32 xl:px-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs p-0 overflow-hidden bg-transparent">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-base font-bold">
                  <span className="text-white">AIFAGen</span>
                  <span className="text-gray-400 ml-1">Labs</span>
                </span>
              </div>
              <p className="text-gray-400 mb-3 text-xs leading-relaxed">
                <span className="text-xs md:text-sm">
                  Building Intelligent Ecosystems for the Future. AI for All
                  Generations.
                </span>
              </p>

              <div className="flex gap-2 mt-1">
                <a
                  href="https://www.linkedin.com/company/aifagenlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.354c.627-.957 1.708-1.354 2.5-1.354 1.933 0 3.5 1.567 3.5 3.5v6.5z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/aifagenlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482c-4.086-.205-7.713-2.165-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 1.997 1.397 3.872 3.444 4.292a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.868 9.868 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.414 0-.22-.005-.439-.015-.657A10.243 10.243 0 0024 4.557z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/aifagenlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.09-.923.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="mailto:pmo@aifagenlabs.com"
                  className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label="Email"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,6 12,13 22,6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-1">
              <h4 className="font-bold text-white mb-3 text-xs">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("about");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs link-smooth"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("innovation-labs");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs link-smooth"
                  >
                    Innovation Labs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("case-studies");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs link-smooth"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h4 className="font-bold text-white mb-3 text-xs">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("services");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("products");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.setItem("selectedProduct", "aifag");
                      setCurrentPage("products");
                      setTimeout(() => {
                        const element =
                          document.getElementById("product-showcase");
                        if (element)
                          element.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    AIFAG Suite
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.setItem("selectedProduct", "lifeos");
                      setCurrentPage("products");
                      setTimeout(() => {
                        const element =
                          document.getElementById("product-showcase");
                        if (element)
                          element.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    LifeOS
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h4 className="font-bold text-white mb-3 text-xs">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("contact");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("collaborate");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Collaborate
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("partners");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("privacy-policy");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("terms-and-conditions");
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-white transition text-xs"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs">
                <div className="flex items-center gap-1">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Global Operations</span>
                </div>
                <a
                  href="mailto:pmo@aifagenlabs.com"
                  className="flex items-center gap-1 hover:text-white transition"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>pmo@aifagenlabs.com</span>
                </a>
                <a
                  href="tel:+919390693114"
                  className="flex items-center gap-1 hover:text-white transition"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 93906 93114</span>
                </a>
                <a
                  href="tel:+14752240417"
                  className="flex items-center gap-1 hover:text-white transition"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+1 (475) 224-0417</span>
                </a>
              </div>

              <div className="text-gray-400 text-xs md:text-right">
                © 2027 AIFAGen Labs Pvt. Ltd. All rights reserved.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 text-xs text-gray-400">
              <div className="flex items-center gap-1">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-1">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>USA: New Jersey</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

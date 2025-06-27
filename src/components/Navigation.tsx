
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
        : 'bg-white py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Initial state - buttons under logo */}
        <div className={`transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'
        }`}>
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="text-3xl font-bold text-teal-600 mb-6">
              <div className="flex items-center gap-3">
                <span>KOHINOOR</span>
                <span className="text-teal-500 font-normal italic text-xl">
                  Elite Living
                </span>
              </div>
            </div>

            {/* Navigation Links under logo */}
            <div className="flex items-center gap-8 text-base">
              <a href="#services" className="text-teal-600 hover:text-teal-700 transition-colors">
                What do we do?
              </a>
              <a href="#about" className="text-teal-600 hover:text-teal-700 transition-colors">
                About us
              </a>
              <a href="#knowledge" className="text-teal-600 hover:text-teal-700 transition-colors">
                Knowledge corner
              </a>
              <Link 
                to="/onboard" 
                className="bg-white border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                Onboard your community
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolled state - buttons beside logo */}
        <div className={`transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo - stacked vertically */}
            <div className="text-xl font-bold text-teal-600">
              <div className="flex flex-col">
                <span>KOHINOOR</span>
                <span className="text-teal-500 font-normal italic text-base -mt-1">
                  Elite Living
                </span>
              </div>
            </div>

            {/* Navigation Links beside logo */}
            <div className="flex items-center gap-8 text-sm">
              <a href="#services" className="text-teal-600 hover:text-teal-700 transition-colors">
                What do we do?
              </a>
              <a href="#about" className="text-teal-600 hover:text-teal-700 transition-colors">
                About us
              </a>
              <a href="#knowledge" className="text-teal-600 hover:text-teal-700 transition-colors">
                Knowledge corner
              </a>
              <Link 
                to="/onboard" 
                className="bg-white border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                Onboard your community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

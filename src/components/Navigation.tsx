
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
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-4' 
        : 'bg-white py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between">
          {/* Logo - always on the left */}
          <div className="text-3xl font-bold text-teal-600">
            <div className="flex items-center gap-3">
              <span>KOHINOOR</span>
              <span className={`text-teal-500 font-normal italic text-xl transition-all duration-500 ease-in-out ${
                isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>
                Elite Living
              </span>
            </div>
            {/* Elite Living appears below KOHINOOR when scrolled */}
            <div className={`text-teal-500 font-normal italic text-base transition-all duration-500 ease-in-out ${
              isScrolled ? 'opacity-100 -mt-1' : 'opacity-0 h-0 overflow-hidden'
            }`}>
              Elite Living
            </div>
          </div>

          {/* Onboard button - always in the same position (top right) */}
          <div className="flex-shrink-0">
            <Link 
              to="/onboard" 
              className="bg-white border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Onboard your community
            </Link>
          </div>
        </div>

        {/* Navigation Links - transition from below logo to beside logo */}
        <div className={`transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-0 pointer-events-none h-0 overflow-hidden' : 'opacity-100 mt-6'
        }`}>
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
          </div>
        </div>

        {/* Navigation Links - beside logo when scrolled */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

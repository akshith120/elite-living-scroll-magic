
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
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="text-3xl font-bold text-teal-600">
            {/* Initial state: KOHINOOR ELITE LIVING all in one line */}
            <div className={`transition-all duration-500 ease-in-out ${
              isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
            }`}>
              <span>KOHINOOR ELITE LIVING</span>
            </div>
            
            {/* Scrolled state: KOHINOOR with Elite Living below */}
            <div className={`transition-all duration-500 ease-in-out ${
              isScrolled ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}>
              <div>KOHINOOR</div>
              <div className="text-teal-500 font-normal italic text-base -mt-1">
                Elite Living
              </div>
            </div>
          </div>

          {/* Centered Navigation Links when scrolled */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
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

          {/* Onboard button - always centered in navbar */}
          <div className="flex-shrink-0">
            <Link 
              to="/onboard" 
              className="bg-white border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Onboard your community
            </Link>
          </div>
        </div>

        {/* Navigation Links below logo when not scrolled */}
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
      </div>
    </nav>
  );
};

export default Navigation;

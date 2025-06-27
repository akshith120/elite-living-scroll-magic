
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
        : 'bg-white py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center transition-all duration-500 ease-in-out ${
          isScrolled ? 'justify-between' : 'justify-between'
        }`}>
          {/* Logo */}
          <div className={`transition-all duration-500 ease-in-out ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}>
            <div className="font-bold text-teal-600">
              <div className={`transition-all duration-500 ${isScrolled ? 'flex items-center gap-2' : 'block'}`}>
                <span>KOHINOOR</span>
                <span className={`text-teal-500 font-normal italic ${isScrolled ? 'text-base' : 'block text-lg'}`}>
                  Elite Living
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`flex items-center gap-8 transition-all duration-500 ${
            isScrolled ? 'text-sm' : 'text-base'
          }`}>
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
    </nav>
  );
};

export default Navigation;

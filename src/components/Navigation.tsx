
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  
  // Calculate smooth transition values based on scroll position
  const scrollThreshold = 150; // Increased threshold for smoother transition
  const scrollProgress = Math.min(scrollY / scrollThreshold, 1);
  
  // Apply smooth easing function for more natural movement
  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  const smoothProgress = easeInOutCubic(scrollProgress);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic values based on scroll progress
  const navPadding = `py-${8 - Math.round(smoothProgress * 4)}`;
  const backgroundOpacity = smoothProgress > 0.1 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${backgroundOpacity} ${navPadding}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="text-3xl font-bold text-teal-600 relative">
            {/* Initial state: KOHINOOR ELITE LIVING all in one line and capitals */}
            <div 
              className="transition-all duration-700 ease-in-out"
              style={{
                opacity: 1 - smoothProgress,
                transform: `translateY(${smoothProgress * -15}px)`,
                height: smoothProgress > 0.8 ? '0px' : 'auto',
                overflow: smoothProgress > 0.8 ? 'hidden' : 'visible'
              }}
            >
              <span>KOHINOOR ELITE LIVING</span>
            </div>
            
            {/* Scrolled state: KOHINOOR with Elite Living below */}
            <div 
              className="transition-all duration-700 ease-in-out"
              style={{
                opacity: smoothProgress,
                transform: `translateY(${(1 - smoothProgress) * 15}px)`,
                position: smoothProgress < 0.8 ? 'absolute' : 'static',
                top: 0,
                left: 0
              }}
            >
              <div>KOHINOOR</div>
              <div 
                className="text-teal-500 font-normal italic text-base -mt-1 transition-all duration-800 ease-in-out"
                style={{
                  transform: `translateY(${(1 - smoothProgress) * -25}px)`,
                  opacity: smoothProgress
                }}
              >
                Elite Living
              </div>
            </div>
          </div>

          {/* Centered Navigation Links when scrolled */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-800 ease-in-out"
            style={{
              opacity: smoothProgress,
              transform: `translate(-50%, ${(1 - smoothProgress) * 40}px)`,
              pointerEvents: smoothProgress > 0.2 ? 'auto' : 'none'
            }}
          >
            <div className="flex items-center gap-8 text-sm">
              <a href="#services" className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
                What do we do?
              </a>
              <a href="#about" className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
                About us
              </a>
              <a href="#knowledge" className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
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
        <div 
          className="transition-all duration-800 ease-in-out"
          style={{
            opacity: 1 - smoothProgress,
            transform: `translateY(${smoothProgress * -40}px)`,
            marginTop: smoothProgress < 0.8 ? '24px' : '0px',
            height: smoothProgress > 0.8 ? '0px' : 'auto',
            overflow: smoothProgress > 0.8 ? 'hidden' : 'visible',
            pointerEvents: smoothProgress > 0.6 ? 'none' : 'auto'
          }}
        >
          <div className="flex items-center gap-8 text-base">
            <a href="#services" className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
              What do we do?
            </a>
            <a href="#about" className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
              About us
            </a>
            <a href="#knowledge" className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
              Knowledge corner
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

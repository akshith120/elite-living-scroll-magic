
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  
  // Always show scrolled state on onboard page
  const isOnboardPage = location.pathname === '/onboard';
  
  // Calculate smooth transition values based on scroll position
  const scrollThreshold = 100;
  const scrollProgress = Math.min(scrollY / scrollThreshold, 1);
  
  // For onboard page, always use scrolled state
  const effectiveScrollProgress = isOnboardPage ? 1 : scrollProgress;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic values based on scroll progress
  const navPadding = isOnboardPage ? 'py-4' : `py-${8 - Math.round(effectiveScrollProgress * 4)}`;
  const backgroundOpacity = isOnboardPage ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 
    effectiveScrollProgress > 0.1 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${backgroundOpacity} ${navPadding}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="text-3xl font-bold text-teal-600 relative">
            {/* Initial state: KOHINOOR ELITE LIVING all in one line and capitals */}
            <div 
              className="transition-all duration-300 ease-out"
              style={{
                opacity: 1 - effectiveScrollProgress,
                transform: `translateY(${effectiveScrollProgress * -10}px)`,
                height: effectiveScrollProgress === 1 ? '0px' : 'auto',
                overflow: effectiveScrollProgress === 1 ? 'hidden' : 'visible'
              }}
            >
              <span>KOHINOOR ELITE LIVING</span>
            </div>
            
            {/* Scrolled state: KOHINOOR with Elite Living below */}
            <div 
              className="transition-all duration-300 ease-out"
              style={{
                opacity: effectiveScrollProgress,
                transform: `translateY(${(1 - effectiveScrollProgress) * 10}px)`,
                position: effectiveScrollProgress < 1 ? 'absolute' : 'static',
                top: 0,
                left: 0
              }}
            >
              <div>KOHINOOR</div>
              <div className="text-teal-500 font-normal italic text-base -mt-1">
                Elite Living
              </div>
            </div>
          </div>

          {/* Centered Navigation Links when scrolled */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out"
            style={{
              opacity: effectiveScrollProgress,
              transform: `translate(-50%, ${(1 - effectiveScrollProgress) * 20}px)`,
              pointerEvents: effectiveScrollProgress > 0.3 ? 'auto' : 'none'
            }}
          >
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
        <div 
          className="transition-all duration-300 ease-out"
          style={{
            opacity: 1 - effectiveScrollProgress,
            transform: `translateY(${effectiveScrollProgress * -10}px)`,
            marginTop: effectiveScrollProgress < 1 ? '24px' : '0px',
            height: effectiveScrollProgress === 1 ? '0px' : 'auto',
            overflow: effectiveScrollProgress === 1 ? 'hidden' : 'visible',
            pointerEvents: effectiveScrollProgress > 0.7 ? 'none' : 'auto'
          }}
        >
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

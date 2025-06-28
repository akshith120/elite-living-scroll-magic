
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
<<<<<<< HEAD
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
=======
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      shouldShowScrolledState 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
        : 'bg-white py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="text-3xl font-bold text-teal-600">
            {/* Initial state: KOHINOOR ELITE LIVING all in one line */}
            <div className={`transition-all py-[0.5] duration-500 ease-in-out ${
              shouldShowScrolledState ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
            }`}>
>>>>>>> c36b5cf (1.Adjusted Button shape 2.Landing at the top of every Page. 3.On Board Button in onBaord Page changed to Back to Home)
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
<<<<<<< HEAD
              <div 
                className="text-teal-500 font-normal italic text-base -mt-1 transition-all duration-800 ease-in-out"
                style={{
                  transform: `translateY(${(1 - smoothProgress) * -25}px)`,
                  opacity: smoothProgress
                }}
              >
=======
              <div className="text-teal-500 font-normal italic text-base text-lg -mt-1">
>>>>>>> c36b5cf (1.Adjusted Button shape 2.Landing at the top of every Page. 3.On Board Button in onBaord Page changed to Back to Home)
                Elite Living
              </div>
            </div>
          </Link>

          {/* Centered Navigation Links when scrolled */}
<<<<<<< HEAD
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
=======
          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
            shouldShowScrolledState ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="flex items-center gap-12 text-l">
              <a href="#services" className="text-teal-600 hover:text-teal-700 transition-colors">
>>>>>>> c36b5cf (1.Adjusted Button shape 2.Landing at the top of every Page. 3.On Board Button in onBaord Page changed to Back to Home)
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
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            {location.pathname === '/onboard' ? (
            <Link 
              to="/" 
              className="bg-white border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Back to Home
            </Link>) : (
    <Link 
      to="/onboard" 
      className="bg-white border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300"
    >
      Onboard your community
    </Link>
  )}
          </div>
        </div>

        {/* Navigation Links below logo when not scrolled */}
<<<<<<< HEAD
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
=======
        <div className={`transition-all py-[0.5] duration-500 ease-in-out ${
          shouldShowScrolledState ? 'opacity-0 pointer-events-none h-0 overflow-hidden' : 'opacity-100 mt-2.5'
        }`}>
>>>>>>> c36b5cf (1.Adjusted Button shape 2.Landing at the top of every Page. 3.On Board Button in onBaord Page changed to Back to Home)
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

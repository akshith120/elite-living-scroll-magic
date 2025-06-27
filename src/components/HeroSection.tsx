
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-light text-gray-700 mb-16 leading-tight">
            Building a <span className="italic font-normal">healthy</span> lifestyle in gated communities!
          </h1>
          
          {/* Video Play Button */}
          <div className="relative inline-block mb-16">
            <div className="w-32 h-32 bg-teal-400/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-400/80 transition-colors group">
              <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 group-hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

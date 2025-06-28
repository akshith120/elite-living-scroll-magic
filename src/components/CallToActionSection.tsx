
import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 text-3xl">
          <Link 
            to="/onboard"
            className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors font-medium"
          >
            Click here
          </Link>
          <span className="text-orange-500 font-light">
            to be the One to get you <del>gated</del> community healthy!
          </span>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

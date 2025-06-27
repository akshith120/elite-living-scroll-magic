
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Follow us */}
          <div>
            <h3 className="text-xl text-gray-700 font-medium mb-6">Follow us</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center text-white hover:bg-gray-700 transition-colors cursor-pointer">
                📷
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center text-white hover:bg-gray-700 transition-colors cursor-pointer">
                ▶️
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center text-white hover:bg-gray-700 transition-colors cursor-pointer">
                f
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center text-white hover:bg-gray-700 transition-colors cursor-pointer">
                in
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl text-gray-700 font-medium mb-6">Company</h3>
            <div className="space-y-4">
              <Link to="#" className="block text-teal-600 hover:text-teal-700 transition-colors">
                About us
              </Link>
              <Link to="#" className="block text-teal-600 hover:text-teal-700 transition-colors">
                Partners
              </Link>
              <Link to="#" className="block text-teal-600 hover:text-teal-700 transition-colors">
                Knowledge corner
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">Made with ◆ Whimsical</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

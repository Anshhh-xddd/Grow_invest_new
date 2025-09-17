import React, { useState } from 'react';
import { Button } from '../shared/Button';

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-primary-600">Grow Invest</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="primary" size="sm" className="hidden sm:block">
              Get Started
            </Button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <a href="#home" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors">
            Home
          </a>
          <a href="#about" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors">
            About
          </a>
          <a href="#services" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors">
            Services
          </a>
          <a href="#investments" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors">
            Investments
          </a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors">
            Contact
          </a>
          <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-2 px-3">
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
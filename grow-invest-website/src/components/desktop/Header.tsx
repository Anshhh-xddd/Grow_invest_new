import React from 'react';
import { Button } from '../shared/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">Grow Invest</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#investments" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Investments
              </a>
              <a href="#contact" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
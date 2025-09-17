import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-6">Grow Invest</h3>
            <p className="text-gray-300 mb-6">
              Building wealth through smart investment strategies and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                💼 LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Portfolio Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Financial Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Investment Advisory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Risk Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Investment Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Market Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Financial Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@growinvest.com</li>
              <li>📍 123 Investment St, Finance City, FC 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2024 Grow Invest. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
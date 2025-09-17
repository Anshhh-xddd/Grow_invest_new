import React from 'react';

const MobileFooter: React.FC = () => {
  return (
    <footer className="bg-secondary-700 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-400 mb-4">Grow Invest</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Building wealth through smart investment strategies and expert guidance.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                💼 LinkedIn
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Portfolio Management</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Financial Planning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Investment Advisory</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Risk Management</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Investment Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Market Research</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Financial Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Webinars</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h4 className="text-base sm:text-lg font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-gray-300 text-sm">
            <div>📞 +1 (555) 123-4567</div>
            <div>✉️ info@growinvest.com</div>
            <div>📍 123 Investment St, Finance City, FC 12345</div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="text-gray-300 mb-4 text-sm">
            © 2024 Grow Invest. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
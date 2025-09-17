import React from 'react';
import { Button } from '../shared/Button';

const MobileHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-700 leading-tight">
              Grow Your
              <span className="text-primary-600 block">Investments</span>
              With Confidence
            </h1>
            
            <p className="text-lg sm:text-xl text-secondary-600 max-w-2xl mx-auto">
              Smart investment strategies, expert guidance, and cutting-edge technology 
              to help you achieve your financial goals and build lasting wealth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Start Investing Today
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          
          {/* Mobile/Tablet optimized visual */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 mx-auto max-w-sm sm:max-w-md h-64 sm:h-80 flex items-center justify-center">
              <div className="text-center text-primary-600">
                <div className="text-5xl sm:text-6xl mb-4">📈</div>
                <div className="text-lg sm:text-xl font-semibold">Investment Growth</div>
              </div>
            </div>
          </div>
          
          {/* Stats optimized for mobile/tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">$2.5B+</div>
              <div className="text-sm text-secondary-600 mt-1">Assets Under Management</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">50K+</div>
              <div className="text-sm text-secondary-600 mt-1">Happy Investors</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">15%</div>
              <div className="text-sm text-secondary-600 mt-1">Average Annual Return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
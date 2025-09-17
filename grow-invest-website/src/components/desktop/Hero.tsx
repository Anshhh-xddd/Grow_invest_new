import React from 'react';
import { Button } from '../shared/Button';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-700 leading-tight">
              Grow Your
              <span className="text-primary-600 block">Investments</span>
              With Confidence
            </h1>
            
            <p className="text-xl text-secondary-600 max-w-lg">
              Smart investment strategies, expert guidance, and cutting-edge technology 
              to help you achieve your financial goals and build lasting wealth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Start Investing Today
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">$2.5B+</div>
                <div className="text-sm text-secondary-600">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-secondary-600">Happy Investors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15%</div>
                <div className="text-sm text-secondary-600">Average Annual Return</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-primary-600">
                <div className="text-6xl mb-4">📈</div>
                <div className="text-xl font-semibold">Investment Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
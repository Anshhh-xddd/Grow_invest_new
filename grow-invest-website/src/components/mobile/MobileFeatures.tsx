import React from 'react';

const MobileFeatures: React.FC = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Portfolio Management',
      description: 'AI-powered algorithms optimize your portfolio for maximum returns while managing risk effectively.'
    },
    {
      icon: '💡',
      title: 'Expert Financial Guidance',
      description: 'Access to certified financial advisors who provide personalized investment strategies.'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Advanced analytics and reporting tools to track your investment performance in real-time.'
    },
    {
      icon: '🔒',
      title: 'Bank-level Security',
      description: 'Your investments are protected with industry-leading security measures and insurance coverage.'
    },
    {
      icon: '🌍',
      title: 'Global Markets Access',
      description: 'Invest in stocks, bonds, ETFs, and other securities from markets around the world.'
    },
    {
      icon: '📱',
      title: 'Mobile Trading',
      description: 'Trade and monitor your investments anywhere with our intuitive mobile application.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-700 mb-4">
            Why Choose Grow Invest?
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-2xl mx-auto">
            We provide comprehensive investment solutions with cutting-edge technology and personalized service
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;
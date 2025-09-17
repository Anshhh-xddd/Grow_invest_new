import React from 'react';
import MobileHeader from './MobileHeader';
import MobileHero from './MobileHero';
import MobileFeatures from './MobileFeatures';
import MobileFooter from './MobileFooter';

const MobileView: React.FC = () => {
  return (
    <div className="min-h-screen">
      <MobileHeader />
      <main>
        <MobileHero />
        <MobileFeatures />
      </main>
      <MobileFooter />
    </div>
  );
};

export default MobileView;
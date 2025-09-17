import React from 'react';
import { useScreenSize } from '../hooks/useScreenSize';
import DesktopView from './desktop/DesktopView';
import MobileView from './mobile/MobileView';

const Layout: React.FC = () => {
  const { isMobileOrTablet } = useScreenSize();

  return (
    <div className="min-h-screen bg-white">
      {isMobileOrTablet ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default Layout;
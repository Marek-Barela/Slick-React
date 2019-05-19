import React from 'react';
import Header from '../header';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;

import React from 'react';
import Logo from '../logo';
import Navigation from '../navigation';

const Header: React.FC = () => {
  return (
    <header id="Home">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;

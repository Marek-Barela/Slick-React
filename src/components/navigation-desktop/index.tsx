import React from 'react';
import NavigationElement from '../navigation-element';
import styles from './index.module.css';

const NavigationDesktop: React.FC = () => {
  const { list } = styles;
  return (
    <ul className={list}>
      <NavigationElement
        to="/#Home"
        text="Home"
      />
      <NavigationElement
        to="/#About"
        text="About"
      />
      <NavigationElement
        to="/#Services"
        text="Services"
      />
      <NavigationElement
        to="/#Showcase"
        text="Showcase"
      />
      <NavigationElement
        to="/#Pricing"
        text="Pricing"
      />
      <NavigationElement
        to="/#Team"
        text="Team"
      />
      <NavigationElement
        to="/#Blog"
        text="Blog"
      />
      <NavigationElement
        to="/#Contact"
        text="Contact"
      />
    </ul>
  );
}

export default NavigationDesktop;

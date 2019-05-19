import React from 'react';
import NavigationElement from '../navigation-element';
import NavigationButton from '../navigation-button';
import styles from './index.module.css';

const NavigationDesktop: React.FC = () => {
  const { list, button } = styles;
  return (
    <>
      <button className={button}>x</button>
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
        <NavigationButton
          to="https://uideck.com/products/slick-free-bootstrap-template/"
        />
      </ul>
    </>
  );
}

export default NavigationDesktop;

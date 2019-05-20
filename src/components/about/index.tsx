import React from 'react';
import AboutFeatures from '../about-features';
import AboutDescription from '../about-description';
import styles from './index.module.css';

const About = () => {
  const { wrapper } = styles;
  return (
    <section id="About">
      <div className={wrapper}>
        <AboutFeatures />
        <AboutDescription />
      </div>
    </section>
  )
}

export default About

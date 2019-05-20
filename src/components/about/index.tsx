import React from 'react';
import SectionWrapper from '../section-wrapper';
import AboutFeatures from '../about-features';
import AboutDescription from '../about-description';

const About = () => {
  return (
    <section id="About">
      <SectionWrapper>
        <AboutFeatures />
        <AboutDescription />
      </SectionWrapper>
    </section>
  )
}

export default About

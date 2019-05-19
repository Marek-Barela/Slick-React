import React from 'react';
import FeatureItem from '../about-feature-item';
import styles from './index.module.css';

const AboutFeatures = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <FeatureItem
        text="Bootstrap 4"
        description="Share processes and data secure lona need to know basis Our team assured your web site is always safe."
      />
      <FeatureItem
        text="Slick Design"
        description="Share processes and data secure lona need to know basis Our team assured your web site is always safe."
      />
      <FeatureItem
        text="Crafted with Love"
        description="Share processes and data secure lona need to know basis Our team assured your web site is always safe."
      />
    </div>
  )
}

export default AboutFeatures

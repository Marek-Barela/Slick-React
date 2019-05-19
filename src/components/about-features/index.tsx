import React from 'react';
import FeatureItem from '../about-feature-item';
import styles from './index.module.css';

const AboutFeatures = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <FeatureItem />
    </div>
  )
}

export default AboutFeatures

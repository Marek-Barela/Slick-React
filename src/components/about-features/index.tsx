import React from 'react';
import FeatureItem from '../about-feature-item';
import styles from './index.module.css';
import { faCog, faPaintBrush, faHeart } from '@fortawesome/free-solid-svg-icons';

const AboutFeatures = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <FeatureItem
        icon={faCog}
        text="Bootstrap 4"
        description="Share processes and data secure lona need to know basis Our team assured your web site is always safe."
      />
      <FeatureItem
        icon={faPaintBrush}
        text="Slick Design"
        description="Share processes and data secure lona need to know basis Our team assured your web site is always safe."
      />
      <FeatureItem
        icon={faHeart}
        text="Crafted with Love"
        description="Share processes and data secure lona need to know basis Our team assured your web site is always safe."
      />
    </div>
  )
}

export default AboutFeatures

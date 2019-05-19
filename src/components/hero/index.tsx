import React from 'react';
import TextContainer from '../hero-text-container';
import layerImg from '../../images/intro.png';
import styles from './index.module.css';

const Hero = () => {
  const {
    hero,
    overlay,
    objectOne,
    objectTwo,
    wrapper,
    imageContainer
  } = styles;
  return (
    <section className={hero}>
      <div className={overlay}>
        <span className={objectOne}></span>
        <span className={objectTwo}></span>
      </div>
      <div className={wrapper}>
        <TextContainer />
        <div className={imageContainer}>
          <img src={layerImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react';
import styles from './index.module.css';

const Hero = () => {
  const { hero, overlay, objectOne, objectTwo, wrapper } = styles;
  return (
    <section className={hero}>
      <div className={overlay}>
        <span className={objectOne}></span>
        <span className={objectTwo}></span>
      </div>
      <div className={wrapper}>

      </div>
    </section>
  )
}

export default Hero

import React from 'react';
import layerImg from '../../images/intro.png';
import styles from './index.module.css';

const Hero = () => {
  const {
    hero,
    overlay,
    objectOne,
    objectTwo,
    wrapper,
    textContainer,
    imageContainer
  } = styles;
  return (
    <section className={hero}>
      <div className={overlay}>
        <span className={objectOne}></span>
        <span className={objectTwo}></span>
      </div>
      <div className={wrapper}>
        <div className={textContainer}>
          <h1>
            Handcrafted Web Template
            For Business and Startups
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            dolores ea fugiat nesciunt quisquam.
          </p>
          <button>
            text
          </button>
          <button>
            text
          </button>
        </div>
        <div className={imageContainer}>
          <img src={layerImg} />
        </div>
      </div>
    </section>
  )
}

export default Hero

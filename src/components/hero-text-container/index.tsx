import React from 'react';
import styles from './index.module.css';

const TextContainer = () => {
  const { textContainer, btnStart, btnContact } = styles;
  return (
    <div className={textContainer}>
      <h1>
        Handcrafted Web Template
        For Business and Startups
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
        dolores ea fugiat nesciunt quisquam.
      </p>
      <button className={btnStart}>
        Get Started
      </button>
      <button className={btnContact}>
        Contact Us
      </button>
    </div>
  )
}

export default TextContainer

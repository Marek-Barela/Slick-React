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
      <a
        href="https://uideck.com/products/slick-free-bootstrap-template/"
        target="_blank"
        rel="noopener noreferrer"
        className={btnStart}
      >
        Get Started
      </a>
      <a
        href="/#Contact"
        className={btnContact}>
        Contact Us
      </a>
    </div>
  )
}

export default TextContainer

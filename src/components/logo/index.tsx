import React from 'react';
import LogoImg from '../../images/logo.png';
import styles from './index.module.css';

const Logo: React.FC = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <img src={LogoImg} alt="Slick" />
    </div>
  );
}

export default Logo;

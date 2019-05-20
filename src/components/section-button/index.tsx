import React, { FC } from 'react';
import styles from './index.module.css';

interface Props {
  url: string;
  btnText: string;
}

const SectionButton: FC<Props> = props => {
  const { button } = styles;
  const { url, btnText } = props;
  return (
    <a
      className={button}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {btnText}
    </a>
  )
}

export default SectionButton

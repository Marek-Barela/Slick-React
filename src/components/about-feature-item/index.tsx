import React, { FC } from 'react';
import styles from './index.module.css';

interface Props {
  //icon: object;
  text: string;
  description: string;
}

const FeatureItem: FC<Props> = props => {
  const { wrapper, featureWrapper, header, paragraph, circle } = styles;
  const { text, description } = props;
  return (
    <div className={wrapper}>
      <div className={featureWrapper}>
        <div className={circle}>

        </div>
        <h4 className={header}>{text}</h4>
        <p className={paragraph}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureItem

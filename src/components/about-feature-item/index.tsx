import React, { FC } from 'react';
import styles from './index.module.css';
import FontAwesome from '../font-awesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  text: string;
  description: string;
}

const FeatureItem: FC<Props> = props => {
  const { wrapper, featureWrapper, header, paragraph, circle } = styles;
  const { icon, text, description } = props;
  return (
    <div className={wrapper}>
      <div className={featureWrapper}>
        <div className={circle}>
          <FontAwesome icon={icon} />
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

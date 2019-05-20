import React, { FC } from 'react';
import FontAwesome from '../font-awesome';
import styles from './index.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
}

const RoundFeature: FC<Props> = props => {
  const { icon } = props;
  const { circle } = styles;
  return (
    <div className={circle}>
      <FontAwesome icon={icon} />
    </div>
  )
}

export default RoundFeature

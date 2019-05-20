import React, { FC } from 'react';
import RoundIconFeature from '../round-icon-feature';
import SubsectionHeader from '../subsection-header';
import Paragraph from '../paragraph';
import styles from './index.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  text: string;
  description: string;
}

const FeatureItem: FC<Props> = props => {
  const { wrapper, featureWrapper } = styles;
  const { icon, text, description } = props;
  return (
    <div className={wrapper}>
      <div className={featureWrapper}>
        <RoundIconFeature icon={icon} />
        <SubsectionHeader headerText={text} />
        <Paragraph paragraphText={description} />
      </div>
    </div>
  )
}

export default FeatureItem

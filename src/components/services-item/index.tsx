import React, { FC } from 'react';
import RoundIconFeature from '../round-icon-feature';
import SubsectionHeader from '../subsection-header';
import Paragraph from '../paragraph';
import styles from './index.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
	icon: IconProp;
	header: string;
	paragraph: string;
}

const ServicesItem: FC<Props> = props => {
	const { wrapper, textContainer } = styles;
	const { icon, header } = props;
	return (
		<div className={wrapper}>
			<RoundIconFeature icon={icon}/>
			<div className={textContainer}>
				<SubsectionHeader headerText={header} />
				<Paragraph paragraphText="Producing long lasting organic SEO results for
					brand of different kinds for more than a decade,
					we understand that’s your."/>
			</div>
		</div>
	);
};

export default ServicesItem;

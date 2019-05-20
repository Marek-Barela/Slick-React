import React, { FC } from 'react';
import FontAwesome from '../font-awesome';
import styles from './index.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
	icon: IconProp;
}

const ServicesItem: FC<Props> = props => {
	const { wrapper, circle, textContainer } = styles;
	const { icon } = props;
	return (
		<div className={wrapper}>
			<div className={circle}>
				<FontAwesome icon={icon} />
			</div>
			<div className={textContainer}>
				<h3>
					Easy to Customize
				</h3>
				<p>
					Producing long lasting organic SEO results for
					brand of different kinds for more than a decade,
					we understand that’s your.
				</p>
			</div>
		</div>
	);
};

export default ServicesItem;

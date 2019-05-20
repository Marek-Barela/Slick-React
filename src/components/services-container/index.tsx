import React from 'react';
import ServiceItem from '../services-item';
import styles from './index.module.css';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

const ServicesContainer = () => {
	const { wrapper } = styles;
	return (
		<div className={wrapper}>
			<ServiceItem
				icon={faAdjust}
			/>
			<ServiceItem
				icon={faAdjust}
			/>
			<ServiceItem
				icon={faAdjust}
			/>
			<ServiceItem
				icon={faAdjust}
			/>
		</div>
	);
};

export default ServicesContainer;

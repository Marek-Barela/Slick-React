import React from 'react';
import ServiceItem from '../services-item';
import styles from './index.module.css';
import { faMugHot, faSuitcase, faLightbulb, faLayerGroup, faSync, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const ServicesContainer = () => {
	const { wrapper } = styles;
	return (
		<div className={wrapper}>
			<ServiceItem
				icon={faMugHot}
				header="Easy to Customize"
				paragraph="Producing long lasting organic SEO results for 
				brand of different kinds for more than a decade,
				we understand that’s your."
			/>
			<ServiceItem
				icon={faSuitcase}
				header="Business Template"
				paragraph="Producing long lasting organic SEO results for 
				brand of different kinds for more than a decade,
				we understand that’s your."
			/>
			<ServiceItem
				icon={faLightbulb}
				header="Clean & Trendy Design"
				paragraph="Producing long lasting organic SEO results for 
				brand of different kinds for more than a decade,
				we understand that’s your."
			/>
			<ServiceItem
				icon={faLayerGroup}
				header="Tons of Sections"
				paragraph="Producing long lasting organic SEO results for 
				brand of different kinds for more than a decade,
				we understand that’s your."
			/>
			<ServiceItem
				icon={faSync}
				header="Free Future Updates"
				paragraph="Producing long lasting organic SEO results for 
				brand of different kinds for more than a decade,
				we understand that’s your."
			/>
			<ServiceItem
				icon={faQuestionCircle}
				header="Premier Support"
				paragraph="Producing long lasting organic SEO results for 
				brand of different kinds for more than a decade,
				we understand that’s your."
			/>
		</div>
	);
};

export default ServicesContainer;

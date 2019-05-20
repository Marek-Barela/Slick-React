import React from 'react';
import SectionHeader from '../section-header';
import styles from './index.module.css';

const Services = () => {
	const {container, wrapper } = styles;
	return (
		<section id="Services" className={container}>
			<div className={wrapper}>
				<SectionHeader 
					headerText="Services We Provide"
					paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
					eiusmod tempor incididunt ut labore et dolore."
				/>
			</div>
		</section>
	);
};

export default Services;

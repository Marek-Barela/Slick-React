import React from 'react';
import SectionWrapper from '../section-wrapper';
import WrapperCenterColumn from '../wrapper-center-column';
import SectionHeader from '../section-header';
import Paragraph from '../paragraph';
import ServiceContainer from '../services-container';
import styles from './index.module.css';

const Services = () => {
	const { container } = styles;
	return (
		<section id="Services" className={container}>
			<SectionWrapper>
				<WrapperCenterColumn>
					<SectionHeader headerText="Services We Provide" />
					<Paragraph paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
				</WrapperCenterColumn>
				<ServiceContainer />
			</SectionWrapper>
		</section>
	);
};

export default Services;

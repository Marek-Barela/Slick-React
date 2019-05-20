import React from 'react';
import SectionHeader from '../section-header';
import Paragraph from '../paragraph';
import SectionButton from '../section-button';
import styles from './index.module.css';
import sectionImage from '../../images/business-img.png';


const AboutDescription = () => {
	const { wrapper, imageContainer, textContainer, button } = styles;
	return (
		<div className={wrapper}>
			<div className={imageContainer}>
				<img src={sectionImage} alt="" />
			</div>
			<div className={textContainer}>
				<SectionHeader headerText="Crafted For Business, Startup and Agency Websites" />
				<Paragraph paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
				<SectionButton
					url="https://uideck.com/products/slick-free-bootstrap-template/"
					btnText="Download"
				/>
			</div>
		</div>
	);
};

export default AboutDescription;

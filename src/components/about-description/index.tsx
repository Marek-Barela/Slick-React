import React from 'react';
import styles from './index.module.css';
import sectionImage from '../../images/business-img.png';

const AboutDescription = () => {
	const { wrapper, imageContainer, textContainer, header, paragraph, button } = styles;
	return (
		<div className={wrapper}>
			<div className={imageContainer}>
				<img src={sectionImage} alt="" />
			</div>
			<div className={textContainer}>
				<h2 className={header}>Crafted For Business, Startup and Agency Websites</h2>
				<p className={paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur.
				</p>
				<a
					className={button}
					href="https://uideck.com/products/slick-free-bootstrap-template/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download
				</a>
			</div>
		</div>
	);
};

export default AboutDescription;

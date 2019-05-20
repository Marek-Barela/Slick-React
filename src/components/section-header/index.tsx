import React, { FC } from 'react';
import styles from './index.module.css';

interface Props {
	headerText: string;
	paragraphText: string;
}

const SectionHeader: FC<Props> = (props) => {
	const { wrapper, header, paragraph } = styles;
	const { headerText, paragraphText } = props;
	return (
		<div className={wrapper}>
			<h2 className={header}>{headerText}</h2>
			<p className={paragraph}>{paragraphText}</p>
		</div>
	);
};

export default SectionHeader;

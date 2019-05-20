import React from 'react';
import Layout from '../layout';
import Hero from '../hero';
import About from '../about';
import Services from '../services';

const App: React.FC = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<Services />
		</Layout>
	);
};

export default App;

import React from 'react';
import Layout from '../layout';
import Hero from '../hero';
import About from '../about';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export default App;

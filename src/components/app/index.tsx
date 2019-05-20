import React from "react";
import Layout from "../layout";
import Hero from "../hero";
import About from "../about";
import Services from "../services";
import Pricing from "../pricing";

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Pricing />
    </Layout>
  );
};

export default App;

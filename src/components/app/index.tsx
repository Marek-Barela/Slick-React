import React from "react";
import Layout from "../layout";
import Hero from "../hero";
import About from "../about";
import Services from "../services";
import Pricing from "../pricing";
import Team from "../team";

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Team />
    </Layout>
  );
};

export default App;

import React from "react";
import Layout from "../layout";
import Hero from "../hero";
import About from "../about";
import Services from "../services";
import Pricing from "../pricing";
import Team from "../team";
import Blog from "../blog";
import Contact from "../contact";
import Footer from "../footer";

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default App;

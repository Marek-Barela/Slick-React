import React from "react";
import SectionWrapper from "../section-wrapper";
import WrapperCenterColumn from "../wrapper-center-column";
import SectionHeader from "../section-header";
import Paragraph from "../paragraph";
import PricingContainer from "../pricing-container";

const Pricing = () => {
  return (
    <section id="Pricing">
      <SectionWrapper>
        <WrapperCenterColumn>
          <SectionHeader headerText="Pricing Plans" />
          <Paragraph paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
        </WrapperCenterColumn>
        <PricingContainer />
      </SectionWrapper>
    </section>
  );
};

export default Pricing;

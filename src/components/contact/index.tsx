import React from "react";
import SectionWrapper from "../section-wrapper";
import WrapperCenterColumn from "../wrapper-center-column";
import SectionHeader from "../section-header";
import Paragraph from "../paragraph";

const Contact = () => {
  return (
    <section id="Contact">
      <SectionWrapper>
        <WrapperCenterColumn>
          <SectionHeader headerText="Get In Touch" />
          <Paragraph paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
        </WrapperCenterColumn>
      </SectionWrapper>
    </section>
  );
};

export default Contact;

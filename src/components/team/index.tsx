import React from "react";
import SectionWrapper from "../section-wrapper";
import WrapperCenterColumn from "../wrapper-center-column";
import SectionHeader from "../section-header";
import Paragraph from "../paragraph";
import TeamContainer from "../team-container";
import styles from "./index.module.css";

const Team = () => {
  const { container } = styles;
  return (
    <section id="Team" className={container}>
      <SectionWrapper>
        <WrapperCenterColumn>
          <SectionHeader headerText="Team Members" />
          <Paragraph paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
        </WrapperCenterColumn>
        <TeamContainer />
      </SectionWrapper>
    </section>
  );
};

export default Team;

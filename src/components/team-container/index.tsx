import React from "react";
import TeamMember from "../team-member";
import memberOne from "../../images/01.jpg";
import memberTwo from "../../images/02.jpg";
import memberThree from "../../images/03.jpg";
import memberFour from "../../images/04.jpg";
import styles from "./index.module.css";

const TeamContainer = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <TeamMember
        image={memberOne}
        name="Patric Green"
        title="Lead Designer"
        facebook="https://www.facebook.com"
        twitter="https://twitter.com"
        google="https://plus.google.com/"
      />
      <TeamMember
        image={memberTwo}
        name="Celina D Cruze"
        title="Front-end Developer"
        facebook="https://www.facebook.com"
        twitter="https://twitter.com"
        google="https://plus.google.com/"
      />
      <TeamMember
        image={memberThree}
        name="Daryl Dixon"
        title="Content Writer"
        facebook="https://www.facebook.com"
        twitter="https://twitter.com"
        google="https://plus.google.com/"
      />
      <TeamMember
        image={memberFour}
        name="Susan Parker"
        title="Support Engineer"
        facebook="https://www.facebook.com"
        twitter="https://twitter.com"
        google="https://plus.google.com/"
      />
    </div>
  );
};

export default TeamContainer;

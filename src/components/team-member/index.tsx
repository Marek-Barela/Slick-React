import React, { FC } from "react";
import SubsectionHeader from "../subsection-header";
import FontAwesome from "../font-awesome";
import styles from "./index.module.css";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  image: string;
  name: string;
  title: string;
  facebook: string;
  twitter: string;
  google: string;
}

const TeamMember: FC<Props> = props => {
  const {
    wrapper,
    memberWrapper,
    imageWrapper,
    descriptionWrapper,
    socialMedia
  } = styles;
  const { image, name, title, facebook, twitter, google } = props;
  return (
    <div className={wrapper}>
      <div className={memberWrapper}>
        <div className={imageWrapper}>
          <img src={image} alt="Team member" />
        </div>
        <div className={descriptionWrapper}>
          <div className={socialMedia}>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesome icon={faFacebookF} />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesome icon={faTwitter} />
            </a>
            <a href={google} target="_blank" rel="noopener noreferrer">
              <FontAwesome icon={faGooglePlusG} />
            </a>
          </div>
          <SubsectionHeader headerText={name} />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

import React from "react";
import FontAwesome from "../font-awesome";
import { faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const BlogDate = () => {
  const { postDateWrapper, dateTextWrapper } = styles;
  return (
    <div className={postDateWrapper}>
      <div className={dateTextWrapper}>
        <FontAwesome icon={faUser} />
        <span>Posted by Admin</span>
      </div>
      <div className={dateTextWrapper}>
        <FontAwesome icon={faCalendarAlt} />
        <span>10 April, 2020</span>
      </div>
    </div>
  );
};

export default BlogDate;

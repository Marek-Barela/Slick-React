import React from "react";
import styles from "./index.module.css";

const ContactTextarea = ({ errorMessage, ...props }) => {
  const { textarea, error } = styles;
  return (
    <>
      <textarea className={textarea} {...props} />
      {errorMessage && <span className={error}>{errorMessage}</span>}
    </>
  );
};

export default ContactTextarea;

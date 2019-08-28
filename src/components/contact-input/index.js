import React from "react";
import styles from "./index.module.css";

const ContactInput = ({ errorMessage, ...props }) => {
  const { input, error } = styles;
  return (
    <>
      <input className={input} {...props} />
      {errorMessage && <span className={error}>{errorMessage}</span>}
    </>
  );
};

export default ContactInput;

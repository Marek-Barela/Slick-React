import React from "react";
import styles from "./index.module.css";

const ContactInput = ({ errorMessage, ...props }) => {
  const { inputContainer, input, error } = styles;
  return (
    <div className={inputContainer}>
      <input className={input} {...props} />
      {errorMessage && <span className={error}>{errorMessage}</span>}
    </div>
  );
};

export default ContactInput;

import React from "react";
import styles from "./index.module.css";

const ContactTextarea = ({ errorMessage, ...props }) => {
  const { textareaContainer, textarea, error } = styles;
  return (
    <div className={textareaContainer}>
      <textarea className={textarea} {...props} />
      {errorMessage && <span className={error}>{errorMessage}</span>}
    </div>
  );
};

export default ContactTextarea;

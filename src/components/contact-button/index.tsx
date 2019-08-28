import React from "react";
import styles from "./index.module.css";

const ContactButton = () => {
  const { button } = styles;
  return (
    <button type="submit" className={button}>
      Submit
    </button>
  );
};

export default ContactButton;

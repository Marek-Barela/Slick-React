import React from "react";
import styles from "./index.module.css";

const AuthorContainer = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <p>
        <span>Crafted by</span> Marek Bareła
      </p>
    </div>
  );
};

export default AuthorContainer;

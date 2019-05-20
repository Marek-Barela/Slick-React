import React from "react";
import PricingItem from "../pricing-item";
import styles from "./index.module.css";

const PricingContainer = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <PricingItem title="FREE" cost="0" />
      <PricingItem title="STANDARD" cost="19.99" />
      <PricingItem title="BUSINESS" cost="29.99" />
    </div>
  );
};

export default PricingContainer;

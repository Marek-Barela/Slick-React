import React from "react";
import PricingItem from "../pricing-item";
import styles from "./index.module.css";

const PricingContainer = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <PricingItem
        title="FREE"
        cost="0"
        storage="500MB Storage"
        users="Single User"
        GB="5 GB Bandwith"
        features="Minimal Features"
        dashboard="No Dashboard"
      />
      <PricingItem
        title="STANDARD"
        cost="19.99"
        storage="2 GB Storage"
        users="Upto 2 users"
        GB="50 GB Bandwith"
        features="All Features"
        dashboard="Sales Dashboard"
      />
      <PricingItem
        title="BUSINESS"
        cost="29.99"
        storage="5 GB Storage"
        users="Upto 4 users"
        GB="100 GB Bandwith"
        features="All Features"
        dashboard="Sales Dashboard"
      />
    </div>
  );
};

export default PricingContainer;

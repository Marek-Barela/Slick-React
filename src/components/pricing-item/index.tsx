import React, { FC } from "react";
import SubsectionHeader from "../subsection-header";
import Button from "../section-button";
import styles from "./index.module.css";

interface Props {
  title: string;
  cost: string;
}

const PricingItem: FC<Props> = props => {
  const { wrapper, itemWrapper, price, list } = styles;
  const { title, cost } = props;
  return (
    <div className={wrapper}>
      <div className={itemWrapper}>
        <SubsectionHeader headerText={title} />
        <span className={price}>{cost}</span>
        <ul className={list}>
          <ListItem text="Free Instalation" />
          <ListItem text="500MB Storage" />
          <ListItem text="Single User" />
          <ListItem text="5 GB Bandwith" />
          <ListItem text="Minimal Features" />
          <ListItem text="No Dashboard" />
        </ul>
        <Button
          url="https://uideck.com/products/slick-free-bootstrap-template/"
          btnText="Purchuase"
        />
      </div>
    </div>
  );
};

interface ListProps {
  text?: string;
}

const ListItem: FC<ListProps> = props => {
  const { text = "" } = props;
  return <li>{text}</li>;
};

export default PricingItem;

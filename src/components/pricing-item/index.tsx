import React, { FC } from "react";
import SubsectionHeader from "../subsection-header";
import Button from "../section-button";
import styles from "./index.module.css";

interface Props {
  title: string;
  cost: string;
  storage: string;
  users: string;
  GB: string;
  features: string;
  dashboard: string;
}

const PricingItem: FC<Props> = props => {
  const { wrapper, itemWrapper, price, list } = styles;
  const { title, cost, storage, users, GB, features, dashboard } = props;
  return (
    <div className={wrapper}>
      <div className={itemWrapper}>
        <SubsectionHeader headerText={title} />
        <span className={price}>{cost}</span>
        <ul className={list}>
          <ListItem text="Free Instalation" />
          <ListItem text={storage} />
          <ListItem text={users} />
          <ListItem text={GB} />
          <ListItem text={features} />
          <ListItem text={dashboard} />
        </ul>
        <Button
          url="https://uideck.com/products/slick-free-bootstrap-template/"
          btnText="Purchase"
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

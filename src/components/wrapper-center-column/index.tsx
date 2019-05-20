import React, { FC } from "react";
import styles from "./index.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const WrapperCenterColumn: FC<Props> = props => {
  const { children } = props;
  const { wrapper } = styles;
  return <div className={wrapper}>{children}</div>;
};

export default WrapperCenterColumn;

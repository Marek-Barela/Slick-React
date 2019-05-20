import React, { FC } from "react";
import styles from "./index.module.css";

interface Props {
  headerText: string;
}

const SubsectionHeader: FC<Props> = props => {
  const { header } = styles;
  const { headerText } = props;
  return <h4 className={header}>{headerText}</h4>;
};

export default SubsectionHeader;

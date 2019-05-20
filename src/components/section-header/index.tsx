import React, { FC } from "react";
import styles from "./index.module.css";

interface Props {
  headerText: string;
}

const SectionHeader: FC<Props> = props => {
  const { header } = styles;
  const { headerText } = props;
  return <h2 className={header}>{headerText}</h2>;
};

export default SectionHeader;

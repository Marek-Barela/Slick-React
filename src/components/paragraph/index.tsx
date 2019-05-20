import React, { FC } from "react";
import styles from "./index.module.css";

interface Props {
  paragraphText: string;
}

const Paragraph: FC<Props> = props => {
  const { paragraph } = styles;
  const { paragraphText } = props;
  return <p className={paragraph}>{paragraphText}</p>;
};

export default Paragraph;

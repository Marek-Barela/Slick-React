import React from "react";

interface Props {
  to: string;
  text: string;
  handleClick?: () => void;
}

const NavigationItem: React.FC<Props> = ({
  to,
  text,
  handleClick = () => {}
}) => {
  return (
    <li onClick={handleClick}>
      <a href={to}>{text}</a>
    </li>
  );
};

export default NavigationItem;

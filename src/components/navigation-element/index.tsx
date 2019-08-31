import React from "react";
import { Link } from "react-scroll";

interface Props {
  to: string;
  text: string;
  handleClick?: () => void;
}

const NavigationItem: React.FC<Props> = ({ to, text, handleClick }) => {
  return (
    <li>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={handleClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavigationItem;

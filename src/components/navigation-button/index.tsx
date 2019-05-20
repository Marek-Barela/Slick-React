import React from "react";

interface Props {
  to: string;
  handleClick?: () => void;
}

const NavigationButton: React.FC<Props> = ({ to, handleClick = () => {} }) => {
  return (
    <li onClick={handleClick}>
      <button>
        <a href={to} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </button>
    </li>
  );
};

export default NavigationButton;

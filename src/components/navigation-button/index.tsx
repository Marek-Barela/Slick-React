import React from 'react';

interface Props {
  to: string;
}

const NavigationButton: React.FC<Props> = ({ to }) => {
  return (
    <li>
      <button>
        <a href={to} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </button>
    </li>
  );
}

export default NavigationButton;

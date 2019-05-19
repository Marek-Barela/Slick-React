import React from 'react';

interface Props {
  to: string;
  text: string;
}

const NavigationDesktop: React.FC<Props> = ({ to, text }) => {
  return (
    <li>
      <a href={to}>
        {text}
      </a>
    </li>
  );
}

export default NavigationDesktop;

import React from "react";
import NavigationDesktop from "../navigation-desktop";
import NavigationMobile from "../navigation-mobile";

const Navigation: React.FC = () => {
  return (
    <nav>
      <NavigationDesktop />
      <NavigationMobile />
    </nav>
  );
};

export default Navigation;

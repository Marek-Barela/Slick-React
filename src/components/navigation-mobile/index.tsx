import React, { PureComponent } from "react";
import NavigationElement from "../navigation-element";
import NavigationButton from "../navigation-button";
import styles from "./index.module.css";

class NavigationDesktop extends PureComponent {
  state = {
    navIsOpen: false
  };

  switchNavigation = () => {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    });
  };

  closeNavigation() {
    this.setState({
      navIsOpen: false
    });
  }

  render() {
    const { list, button, listVisible } = styles;
    const { navIsOpen } = this.state;
    const listStyling = navIsOpen ? `${list} ${listVisible}` : list;
    return (
      <>
        <button onClick={() => this.switchNavigation()} className={button}>
          &#9776;
        </button>
        <ul className={listStyling}>
          <NavigationElement
            to="Home"
            text="Home"
            handleClick={() => this.closeNavigation()}
          />
          <NavigationElement
            to="About"
            text="About"
            handleClick={() => this.closeNavigation()}
          />
          <NavigationElement
            to="Services"
            text="Services"
            handleClick={() => this.closeNavigation()}
          />
          <NavigationElement
            to="Pricing"
            text="Pricing"
            handleClick={() => this.closeNavigation()}
          />
          <NavigationElement
            to="Team"
            text="Team"
            handleClick={() => this.closeNavigation()}
          />
          <NavigationElement
            to="Blog"
            text="Blog"
            handleClick={() => this.closeNavigation()}
          />
          <NavigationElement
            to="Contact"
            text="Contact"
            handleClick={() => this.closeNavigation()}
          />
          <NavigationButton
            to="https://uideck.com/products/slick-free-bootstrap-template/"
            handleClick={() => this.closeNavigation()}
          />
        </ul>
      </>
    );
  }
}

export default NavigationDesktop;

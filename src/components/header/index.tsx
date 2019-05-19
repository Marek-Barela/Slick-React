import React, { PureComponent } from 'react';
import Logo from '../logo';
import Navigation from '../navigation';
import styles from './index.module.css';

interface State {
  scrolledNav: boolean
}

class Header extends PureComponent<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      scrolledNav: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollPossition = window.scrollY;
    const { scrolledNav } = this.state;
    if (scrollPossition > 0) {
      // if state is already true don't set state again
      if (scrolledNav) return
      this.setState({
        scrolledNav: true
      })
    }
    else {
      this.setState({
        scrolledNav: false
      })
    }
  }

  render() {
    const { header, wrapper, active } = styles;
    const { scrolledNav } = this.state;
    const headerStyles = scrolledNav ? `${header} ${active}` : header;
    return (
      <header id="Home" className={headerStyles}>
        <div className={wrapper}>
          <Logo />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;

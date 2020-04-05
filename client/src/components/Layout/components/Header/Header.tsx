import React, { PureComponent } from "react";
import { autobind } from "core-decorators";
import Wrapper from "./Header.style";

export interface IHeaderProps {
  children: React.ReactNode;
  fixed?: boolean;
  sticky?: boolean;
}

export interface IHeaderState {
  show: boolean;
  scrollPos: 0;
}

class Header extends PureComponent<IHeaderProps> {
  static defaultProps: Partial<IHeaderProps> = {
    children: null,
    sticky: false
  };
  state = {
    show: true,
    scrollPos: 0
  };

  componentDidMount() {
    const { sticky } = this.props;
    if (sticky) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  @autobind
  handleScroll() {
    const { scrollPos } = this.state;
    const { sticky } = this.props;
    if (sticky) {
      this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > scrollPos
      });
    }
  }

  render() {
    const { children } = this.props;
    const { show } = this.state;
    return <Wrapper show={show}>{children}</Wrapper>;
  }
}

export default Header;

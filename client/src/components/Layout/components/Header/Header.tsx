import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import Wrapper from './Header.style';

export interface HeaderProps {
  children: React.ReactNode;
  fixed?: boolean;
  sticky?: boolean;
}

export interface HeaderState {
  show: boolean;
  scrollPos: 0;
}

class Header extends PureComponent<HeaderProps> {
  public static defaultProps: Partial<HeaderProps> = {
    children: null,
    sticky: false
  };
  public state = {
    show: true,
    scrollPos: 0
  };

  public componentDidMount() {
    const { sticky } = this.props;
    if (sticky) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  @autobind
  public handleScroll() {
    const { scrollPos } = this.state;
    const { sticky } = this.props;
    if (sticky) {
      this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > scrollPos
      });
    }
  }

  public render() {
    const { children } = this.props;
    const { show } = this.state;
    return <Wrapper show={show}>{children}</Wrapper>;
  }
}

export default Header;

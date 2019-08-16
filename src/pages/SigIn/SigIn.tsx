import React, { PureComponent } from 'react';
import Wrapper from './SigIn.style';

export interface SigInProps {
  children: React.ReactNode;
  fixed?: boolean;
  sticky?: boolean;
}

export interface SigInState {
  show: boolean;
  scrollPos: 0;
}

class SigIn extends PureComponent<SigInProps> {
  public static defaultProps: Partial<SigInProps> = {
    children: null,
    sticky: false
  };

  public render() {
    const { children } = this.props;
    return <Wrapper>{children}</Wrapper>;
  }
}

export default SigIn;

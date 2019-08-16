import React, { PureComponent } from 'react';
import Wrapper from './SigIn.style';

export interface SigInProps {
  children: React.ReactNode;
}

class SigIn extends PureComponent<SigInProps> {
  public static defaultProps: Partial<SigInProps> = {
    children: null
  };

  public render() {
    return <Wrapper>dasdasdasdasdasd</Wrapper>;
  }
}

export default SigIn;

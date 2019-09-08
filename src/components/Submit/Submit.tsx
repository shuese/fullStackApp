import React from 'react';
import Sbm from './Submit.style';

export interface SubmitProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  type?: 'submit' | 'reset' | 'button';
}

class Submit extends React.Component<SubmitProps> {
  public render() {
    const { children, type } = this.props;
    return <Sbm type={type}>{children}</Sbm>;
  }
}

export default Submit;

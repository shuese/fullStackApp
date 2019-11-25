import React from 'react';
import Sbm from './Submit.style';

export interface ISubmitProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  type?: 'submit' | 'reset' | 'button';
}

class Submit extends React.Component<ISubmitProps> {
  public render() {
    const { children, type } = this.props;
    return <Sbm type={type}>{children}</Sbm>;
  }
}

export default Submit;

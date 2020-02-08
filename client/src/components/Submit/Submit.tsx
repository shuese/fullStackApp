import React from 'react';
import Sbm from './Submit.style';

interface ISubmitProps extends React.HTMLAttributes<HTMLElement> {
  status: 'progress' | 'pressF' | 'succes' | 'pending';
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean | undefined;
}

class Submit extends React.Component<ISubmitProps> {
  render() {
    const { type, status, disabled } = this.props;
    let textButton;
    if (status === 'progress') {
      textButton = 'отправляется...';
    } else if (status === 'pressF') {
      textButton = 'не загрузилось :(';
    } else if (status === 'succes') {
      textButton = 'отправилось!';
    } else {
      textButton = 'отправить!';
    }
    return <Sbm disabled={disabled} type={type}>{textButton}</Sbm>;
  }
}

export default Submit;

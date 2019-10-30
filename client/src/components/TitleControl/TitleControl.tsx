import React from 'react';
import Title from './TitleControl.style';

interface ITitleProps {
  children?: React.ReactNode | string;
}

const TitleControl: React.SFC<ITitleProps> = (props: ITitleProps) => {
  const { children } = props;
  return (
    <Title>
      {children}
    </Title>
  );
};

export default TitleControl;

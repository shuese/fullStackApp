import React from 'react';
import Title from './TitleControl.style';

interface TitleProps {
  children?: React.ReactNode | string;
}

const TitleControl: React.SFC<TitleProps> = (props: TitleProps) => {
  const { children } = props;
  return (
    <Title>
      {children}
    </Title>
  );
};

export default TitleControl;

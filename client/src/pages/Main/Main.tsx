import React from 'react';
import Wrapper from './Main.style';

interface MainProps {
  children?: React.ReactNode | string;
}

const Main: React.SFC<MainProps> = (props: MainProps) => {
  // const { children } = props;
  return (
    <Wrapper>
      Залогинен
    </Wrapper>
  );
};

export default Main;

import React from "react";
import Wrapper from "./Main.style";

interface IMainProps {
  children?: React.ReactNode | string;
}

const Main: React.SFC<IMainProps> = (props: IMainProps) => {
  // const { children } = props;
  return <Wrapper>Залогинен</Wrapper>;
};

export default Main;

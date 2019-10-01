import React from 'react';
import Wrapper from './Content.style';

interface ContentProps {
  children?: React.ReactNode;
}

const Content: React.SFC<ContentProps> = (props: ContentProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};

Content.defaultProps = {
  children: null
};

export default Content;

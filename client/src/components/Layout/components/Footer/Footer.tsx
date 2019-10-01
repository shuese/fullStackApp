import React from 'react';
import Wrapper from './Footer.style';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.SFC<FooterProps> = (props: FooterProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};

Footer.defaultProps = {
  children: null
};

export default Footer;

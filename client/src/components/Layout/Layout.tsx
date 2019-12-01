import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Wrapper from './Layout.style';

interface ILayoutProps {
  children: React.ReactNode;
  oneBlock?: boolean;
}

class Layout extends React.Component<ILayoutProps> {
  static Header = Header;
  static Footer = Footer;
  static Content = Content;
  static Sidebar = Sidebar;
  static defaultProps: Partial<ILayoutProps> = {
    children: null
  };
  render() {
    const { children, oneBlock } = this.props;
    return <Wrapper oneBlock={oneBlock}>{children}</Wrapper>;
  }
}

export default Layout;

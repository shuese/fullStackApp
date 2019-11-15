import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Wrapper from './Layout.style';

export interface ILayoutProps {
  children: React.ReactNode;
  oneBlock?: boolean;
}

class Layout extends React.Component<ILayoutProps> {
  public static Header = Header;
  public static Footer = Footer;
  public static Content = Content;
  public static Sidebar = Sidebar;
  public static defaultProps: Partial<ILayoutProps> = {
    children: null
  };
  public render() {
    const { children, oneBlock } = this.props;
    return <Wrapper oneBlock={oneBlock}>{children}</Wrapper>;
  }
}

export default Layout;

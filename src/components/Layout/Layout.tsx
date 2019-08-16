import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Wrapper from './Layout.style';

export interface LayoutProps {
  children: React.ReactNode;
}

class Layout extends React.Component<LayoutProps> {
  public static Header = Header;
  public static Footer = Footer;
  public static Content = Content;
  public static Sidebar = Sidebar;
  public static defaultProps: Partial<LayoutProps> = {
    children: null
  };
  public render() {
    const { children } = this.props;
    return <Wrapper>{children}</Wrapper>;
  }
}

export default Layout;

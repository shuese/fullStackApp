import React from 'react';
import Wrapper from './Sidebar.style';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.SFC<SidebarProps> = (props: SidebarProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};

Sidebar.defaultProps = {
  children: null
};

export default Sidebar;

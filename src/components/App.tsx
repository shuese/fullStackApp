import React, { Fragment } from 'react';
import GlobalStyles from './GlobalStyles';
import Layout from '../components/Layout/Layout';

interface AppProps {
  children?: React.ReactNode;
}

const App: React.SFC<AppProps> = (props: AppProps) => {
  const { children } = props;
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Layout.Header sticky>(づ￣ ³￣)づ</Layout.Header>
        <Layout.Content>{children}</Layout.Content>
        <Layout.Sidebar>{children}</Layout.Sidebar>
      </Layout>
    </Fragment>
  );
};

App.defaultProps = {
  children: null
};

export default App;

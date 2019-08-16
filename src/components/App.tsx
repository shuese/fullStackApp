import React, { Fragment } from 'react';
import GlobalStyles from './GlobalStyles';
import Layout from '../components/Layout/Layout';
import SigIn from '../pages/SigIn';

interface AppProps {
  children?: React.ReactNode;
  oneBlock?: boolean;
}

const App: React.SFC<AppProps> = (props: AppProps) => {
  const { children, oneBlock } = props;
  return (
    <Fragment>
      <GlobalStyles />
      <Layout oneBlock={oneBlock}>
        <Layout.Header sticky>(づ￣ ³￣)づ</Layout.Header>
        <Layout.Content>
          <SigIn />
        </Layout.Content>
        {oneBlock ? null : <Layout.Sidebar>{children}</Layout.Sidebar>}
      </Layout>
    </Fragment>
  );
};

App.defaultProps = {
  children: null,
  oneBlock: false
};

export default App;

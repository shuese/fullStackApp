import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Layout from './Layout/Layout';
import SigIn from '../pages/SigIn';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

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
          <Router>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/sigin' component={SigIn} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Router>
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

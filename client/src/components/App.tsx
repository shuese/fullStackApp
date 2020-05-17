import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./Layout/Layout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

interface IAppProps {
  children?: React.ReactNode;
  oneBlock?: boolean;
}

const App: React.SFC<IAppProps> = (props: IAppProps) => {
  const { children, oneBlock } = props;
  return (
    <Fragment>
      <GlobalStyles />
      <Layout oneBlock={oneBlock}>
        <Layout.Header sticky>(づ￣ ³￣)づ</Layout.Header>
        <Layout.Content>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="*" component={NotFound} />
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
  oneBlock: false,
};

export default App;

/** @format */

import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PranksLog from '../components/PranksLog/PranksLog';
import CreatePrank from '../components/CreatePrank/CreatePrank';
import RouteContainer from './RouteContainer';

export const history = createHistory();

const AppRouter = props => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/define_api" />} />
      <RouteContainer
        path="/define_api"
        component={PranksLog}
        name="Define Api"
      />
      <RouteContainer
        path="/chaos_test"
        component={CreatePrank}
        name="Chaos Test"
      />
    </Switch>
  </Router>
);

export default AppRouter;

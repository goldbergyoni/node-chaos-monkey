/** @format */

import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ChaosTest from '../components/ChaosTest/ChaosTest';
import DefineApi from '../components/DefineApi/DefineApi';
import RouteContainer from './RouteContainer';

export const history = createHistory();

const AppRouter = props => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/define_api" />} />
      <RouteContainer
        path="/define_api"
        component={DefineApi}
        name="Define Api"
      />
      <RouteContainer
        path="/chaos_test"
        component={ChaosTest}
        name="Chaos Test"
      />
    </Switch>
  </Router>
);

export default AppRouter;

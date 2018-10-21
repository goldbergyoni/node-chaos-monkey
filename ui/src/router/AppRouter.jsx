/** @format */

import React from 'react';
import {Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PranksLog from '../components/PranksLog/PranksLog';
import CreatePrank from '../components/CreatePrank/CreatePrank';
import RouteContainer from './RouteContainer';

export const history = createHistory();

const AppRouter = props => (
  <Router history={history}>
    <Switch>
      <RouteContainer path="/" exact component={PranksLog} name="View prank" />
      <RouteContainer
        path="/createprank"
        component={CreatePrank}
        name="New prank"
      />
    </Switch>
  </Router>
);

export default AppRouter;

/** @format */

import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../components/Header';
import PranksLog from '../components/PranksLog/PranksLog';
import CreatePrank from '../components/CreatePrank/CreatePrank';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/prankslog" component={PranksLog} />
        <Route path="/createprank" component={CreatePrank} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;

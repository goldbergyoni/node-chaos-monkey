/** @format */

import React from 'react';
import {Route} from 'react-router-dom';

import Dashboard from '../components/Dashboard';

const RouteContainer = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Dashboard {...props}>
        <Component {...props} />
      </Dashboard>
    )}
  />
);

export default RouteContainer;
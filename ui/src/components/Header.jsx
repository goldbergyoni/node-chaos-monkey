/** @format */

import React from 'react';
import {NavLink} from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

const Header = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>
          Chaos control
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to="/createprank">Create prank</NavLink>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Header;

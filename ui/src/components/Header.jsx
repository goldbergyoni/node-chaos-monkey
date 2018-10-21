/** @format */

import React from 'react';

// Styles
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Col from 'react-bootstrap/lib/Col';
import monkeyLogo from '../assets/chaos-monkey.png';

const Header = props => {
  console.log(props);
  return (
    <Col>
      <Breadcrumb>
        <img className="app_logo" src={monkeyLogo} alt="Chaos Monkey" />
        <Breadcrumb.Item>Chaos control</Breadcrumb.Item>
        <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
      </Breadcrumb>
    </Col>
  );
};

export default Header;

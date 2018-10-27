/** @format */

import React from 'react';

// Styles
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import monkeyLogo from '../assets/chaos-monkey.png';

const Header = () => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <img className="app_logo" src={monkeyLogo} alt="Chaos Monkey" />
          <h2>
            <strong>Node Chaos Monkey</strong>
          </h2>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default Header;

/** @format */

import React from 'react';

// Styles
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Col from 'react-bootstrap/lib/Col';

const Header = () => {
  return (
    <Col>
      <Breadcrumb>
        <Breadcrumb.Item>Chaos control</Breadcrumb.Item>
        <Breadcrumb.Item>Create prank</Breadcrumb.Item>
      </Breadcrumb>
    </Col>
  );
};

export default Header;

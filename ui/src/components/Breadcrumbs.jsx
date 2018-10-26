/** @format */

import React from 'react';

// Styles
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Breadcrumbs = ({name}) => (
  <Row>
    <Col className="d-flex px-4 mb-3">
      <Breadcrumb.Item>Chaos control</Breadcrumb.Item>
      <Breadcrumb.Item>{name}</Breadcrumb.Item>
    </Col>
  </Row>
);

export default Breadcrumbs;

/** @format */

import React from 'react';

import Header from './Header';
import Menu from './Menu';

// Styles
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Dashboard = ({children, name}) => {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col className="d-flex px-4 mb-3">
          <Breadcrumb.Item>Chaos control</Breadcrumb.Item>
          <Breadcrumb.Item>{name}</Breadcrumb.Item>
        </Col>
      </Row>
      <Row>
        <Menu />
        {children}
      </Row>
    </Container>
  );
};
export default Dashboard;

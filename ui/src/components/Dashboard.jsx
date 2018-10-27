/** @format */

import React from 'react';

import Header from './Header';
import Menu from './Menu';

// Styles
import Breadcrumbs from './Breadcrumbs';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';

const Dashboard = ({children, name}) => {
  return (
    <Container fluid>
      <Header />
      <Breadcrumbs name={name} />
      <Row>
        <Menu />
        {children}
      </Row>
    </Container>
  );
};
export default Dashboard;

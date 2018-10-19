/** @format */

import React from 'react';

import Header from './Header';
import Menu from './Menu';

// Styles
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';

const Dashboard = ({children, ...rest}) => {
  return (
    <Container fluid>
      <Row>
        <Header {...rest} />
      </Row>
      <Row>
        <Menu />
        {children}
      </Row>
    </Container>
  );
};
export default Dashboard;

/** @format */

import React from 'react';
import ReactTooltip from 'react-tooltip'

import Header from './Header';
import Menu from './Menu';

// Styles
import Breadcrumbs from './Breadcrumbs';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';

const Dashboard = ({children, name}) => {
  return (
    <Container fluid>
      <ReactTooltip  id="commingSoon">
          <span>Comming soon</span>
      </ReactTooltip>/> 
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

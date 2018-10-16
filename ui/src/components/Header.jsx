/** @format */

import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col md="2">
          <NavLink to="/prankslog">Chaos control</NavLink>
        </Col>
        <Col md="2">
          <NavLink to="/createprank">Create prank</NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

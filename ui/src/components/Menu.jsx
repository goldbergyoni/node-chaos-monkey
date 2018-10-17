/** @format */

import React from 'react';
import {NavLink} from 'react-router-dom';

// Styles
import Nav from 'react-bootstrap/lib/Nav';
import Col from 'react-bootstrap/lib/Col';

const Menu = () => {
  return (
    <Col md="2">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/createprank">
            Create prank
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default Menu;

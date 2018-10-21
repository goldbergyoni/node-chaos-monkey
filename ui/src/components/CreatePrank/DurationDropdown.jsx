/** @format */

import React from 'react';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';

const DurationDropdown = () => {
  return (
    <Row className="my-4">
      <Col md="3">How long</Col>
      <Col md="3">
        <DropdownButton
          variant="light"
          id="dropdown-item-button"
          title="select"
        >
          <Dropdown.Item as="button">5 sec</Dropdown.Item>
          <Dropdown.Item as="button">10 sec</Dropdown.Item>
          <Dropdown.Item as="button">30 sec</Dropdown.Item>
          <Dropdown.Item as="button">1 min</Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  );
};

export default DurationDropdown;

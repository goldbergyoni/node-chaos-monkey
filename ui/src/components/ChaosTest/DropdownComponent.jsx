/** @format */

import React from 'react';
import {observer} from 'mobx-react';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';

const DurationDropdown = observer(({items, title, onClick, selectedPrank}) => {
  return (
    <Row>
      <Col md="4">
        <h6>{title}</h6>
      </Col>
      <Col md="8">
        <DropdownButton
          variant="light"
          id="dropdown-item-button" 
          data-prank-select-button="true"
          title={selectedPrank ? selectedPrank.name : 'Select a prank'}
        >
          {items.map((item, idx) => (
            <Dropdown.Item
              as="button"
              key={idx}
              onClick={() => onClick(item)}
              active={!!selectedPrank && selectedPrank.name === item.name}
            >
              {item.friendlyName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Col>
    </Row>
  );
});

export default DurationDropdown;

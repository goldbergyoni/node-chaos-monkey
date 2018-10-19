/** @format */

import React, {Fragment} from 'react';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';

const CreatePlankList = ({items, listName, howLong}) => {
  return (
    <Fragment>
      <Row className="my-3">
        <Col md="3" sm="12">
          <h6>{listName}</h6>
        </Col>
        <Col md='6'sm="12">
          <ListGroup>
            {items.map(item => (
              <ListGroup.Item action className="py-2 px-3">
                {item}
              </ListGroup.Item>
            ))}
            <ListGroup.Item action variant="secondary" className="py-2 px-3">
              More...
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {howLong && (
        <Row className="my-4">
          <Col md="3">New Line</Col>
          <Col md="3">
            <DropdownButton
              variant="light"
              id="dropdown-item-button"
              title="How long"
            >
              <Dropdown.Item as="button">5 sec</Dropdown.Item>
              <Dropdown.Item as="button">10 sec</Dropdown.Item>
              <Dropdown.Item as="button">30 sec</Dropdown.Item>
              <Dropdown.Item as="button">1 min</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default CreatePlankList;

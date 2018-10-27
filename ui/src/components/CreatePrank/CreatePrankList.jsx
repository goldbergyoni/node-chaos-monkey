/** @format */

import React from 'react';
import {observer} from 'mobx-react';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ListGroup from 'react-bootstrap/lib/ListGroup';

const CreatePrankList = observer(({items, listName, onClick, activePrank}) => {
  return (
    <Row className="my-3">
      <Col md="3" sm="12">
        <h6>{listName}</h6>
      </Col>
      <Col md="6" sm="12">
        <ListGroup>
          {items.map((item, idx) => (
            <ListGroup.Item
              className="py-2 px-3"
              key={idx}
              action
              onClick={() => onClick(item, idx)}
              active={activePrank === idx}
            >
              {item.friendlyName}
            </ListGroup.Item>
          ))}
          <ListGroup.Item action variant="secondary" className="py-2 px-3">
            More...
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
});

export default CreatePrankList;

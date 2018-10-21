/** @format */

import React, {Fragment} from 'react';
import moment from 'moment';
import {observer} from 'mobx-react';

// Styles
import Badge from 'react-bootstrap/lib/Badge';
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const PranksLogList = observer(({items}) => {
  return (
    <Fragment>
      {items &&
        items.map((item, idx) => (
          <Card className="my-4 p-3" key={idx}>
            <Row>
              <Col md="2" className="text-center">
                <Badge pill variant="success">
                  Success
                </Badge>
              </Col>
              <Col md="10">
                <li>
                  <strong>{item.name}</strong>
                </li>
                <li>
                  <small>{moment(item.lastHappened).fromNow()}</small>
                </li>
                <li>
                  <strong>Prank : </strong> {item.friendlyName}
                </li>
                <li>
                  <strong>Expectation : </strong> {item.expectations}
                </li>
                <li>
                  <strong>Reality : </strong> {item.reality}
                </li>
              </Col>
            </Row>
          </Card>
        ))}
      {!items && (
        <Card>
          <Card.Body>No Pranks</Card.Body>
        </Card>
      )}
    </Fragment>
  );
});

export default PranksLogList;

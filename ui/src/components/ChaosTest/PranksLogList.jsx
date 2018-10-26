/** @format */

import React from 'react';
import moment from 'moment';
import {observer} from 'mobx-react';

// Styles
import Badge from 'react-bootstrap/lib/Badge';
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

const PranksLogList = observer(({items}) => {
  return (
    <Row>
      <Col md="8" className="test_border">
        <Row className="px-3">
          <h4>Pranks log</h4>
        </Row>
        {items &&
          items.map((item, idx) => (
            <Card className="my-4 py-3 px-2" key={idx}>
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
                  {
                    (item.success = 'Yes' ? (
                      <Form.Check type="checkbox" label="success" />
                    ) : (
                      <React.Fragment>
                        <Form.Check
                          type="checkbox"
                          label="We're wrong ? mark here"
                        />
                        <Button variant="outline-danger">
                          Instructions: What Should I Do
                        </Button>
                      </React.Fragment>
                    ))
                  }
                </Col>
              </Row>
            </Card>
          ))}
        {!items && (
          <Card>
            <Card.Body>No Pranks</Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  );
});

export default PranksLogList;

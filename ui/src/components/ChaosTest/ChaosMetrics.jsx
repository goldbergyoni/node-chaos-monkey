/** @format */

import React from 'react';

// Styles
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Badge from 'react-bootstrap/lib/Badge';

const PrankScore = ({apiCalls, apiErrors, apiIsAlive}) => {
  return (
    <Col lg={{span: 7, offset: 0}} md="true" className="mb-5">
      <Card bg="light">
        <Card.Header>Chaos Metrics</Card.Header>
        <Card.Body className="text-center d-flex justify-content-around">
          <div className="d-flex-column">
            # of Requests
            <h2>
              <Badge pill className="fixed_badge" variant="danger">
                {apiCalls}
                /sec
              </Badge>
            </h2>
          </div>
          <div className="d-flex-column">
            Errors
            <h2>
              <Badge pill className="fixed_badge" variant="warning">
              {apiErrors}
              </Badge>
            </h2>
          </div>
          <div className="d-flex-column">
            Avg. Latency
            <h2>
              <Badge pill className="fixed_badge" variant="info">
                {Math.floor(Math.random() * 80)} ms
              </Badge>
            </h2>
          </div>
          <div className="d-flex-column">
            is Alive
            <h2>
              <Badge pill className="fixed_badge" variant="success">
              {apiIsAlive}
              </Badge>
            </h2>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PrankScore;

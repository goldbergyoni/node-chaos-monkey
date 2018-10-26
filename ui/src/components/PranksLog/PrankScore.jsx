/** @format */

import React from 'react';

// Styles
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Badge from 'react-bootstrap/lib/Badge';

const PrankScore = ({score}) => {
  return (
    <Row>
      <Col lg="8" md="true">
        <Card bg="light">
          <Card.Header>Chaos Metrics</Card.Header>
          <Card.Body className="text-center d-flex justify-content-around">
            <div className="d-flex-column">
              # of Requests
              <h3>
                <Badge variant="danger">142 /sec</Badge>
              </h3>
            </div>
            <div className="d-flex-column">
              Errors
              <h3>
                <Badge variant="warning">0</Badge>
              </h3>
            </div>
            <div className="d-flex-column">
              Avg. Latency
              <h3>
                <Badge variant="info">44 ms</Badge>
              </h3>
            </div>
            <div className="d-flex-column">
              is Alive
              <h3>
                <Badge variant="success">yes</Badge>
              </h3>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PrankScore;

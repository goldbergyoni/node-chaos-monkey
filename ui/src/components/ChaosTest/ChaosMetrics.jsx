/** @format */

import React from 'react';

// Styles
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Badge from 'react-bootstrap/lib/Badge';

const PrankScore = ({apiCalls, apiErrors, apiIsAlive, latency}) => {
  console.log(apiCalls);
  return (
    <Col xl={{span: 6, offset: 1}} lg="7" md="12" className="mb-5">
      <Card bg="light" className="chaos_metrics">
        <Card.Header>Chaos Metrics</Card.Header>
        <Card.Body className="text-center d-flex flex-sm-row flex-column justify-content-around ">
          <div className="d-flex-column">
            # of Requests
            <h3>
              <Badge pill className="fixed_badge" variant="success">
                {apiCalls}
                /sec
              </Badge>
            </h3>
          </div>
          <div className="d-flex-column">
            Errors
            <h3>
              <Badge pill className="fixed_badge" variant="dark">
                <span id="metric" className="d-flex-column">{apiErrors}</span>
              </Badge>
            </h3>
          </div>
          <div className="d-flex-column">
            Avg. Latency
            <h3>
              <Badge pill className="fixed_badge" variant="primary">
                {/* {isNaN(latency) ? 0 : latency} ms */}
                {Math.floor(Math.random() * 50 + 1)} ms
              </Badge>
            </h3>
          </div>
          <div className="d-flex-column">
            is Alive
            <h3>
              <Badge
                pill
                className="fixed_badge"
                variant={apiIsAlive ? 'warning' : 'danger'}
              >
                {apiIsAlive ? 'Yes' : 'No'}!
              </Badge>
            </h3>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PrankScore;

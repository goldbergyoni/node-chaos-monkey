/** @format */

import React from 'react';

// Styles
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

const PrankScore = ({score}) => {
  return (
    <Col md="3">
      <Card bg="light">
        <Card.Header>Prank Score</Card.Header>
        <Card.Body className="text-center">
          <Card.Title>
            <h2>
              <strong>{score}</strong>
            </h2>
          </Card.Title>
          <Card.Text>
            Not bad, {Math.floor(Math.random() * Math.floor(10))} critical items
          </Card.Text>
          <Button variant="outline-primary" block>
            Export report
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PrankScore;

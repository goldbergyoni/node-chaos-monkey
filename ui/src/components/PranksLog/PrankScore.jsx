/** @format */

import React, {Component} from 'react';

// Styles
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

class PrankScore extends Component {
  render() {
    return (
      <Col md="3">
        <Card bg="light">
          <Card.Header>Prank Score</Card.Header>
          <Card.Body className="text-center">
            <Card.Title>
              <h2><strong>78</strong></h2>
            </Card.Title>
            <Card.Text>
              Not bad, 2 critical items
            </Card.Text>
            <Button variant="outline-primary" block>Export report</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default PrankScore;

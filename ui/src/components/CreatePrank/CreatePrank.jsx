/** @format */

import React, {Component} from 'react';

import CreatePlankList from './CreatePlankList';

// Styles
// import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class CreatePrank extends Component {
  render() {
    return (
      <Col md="10">
        <Row className="px-3">
          <h3>Create Plank</h3>
        </Row>
        <Row>
          <CreatePlankList items={1} listName="Pranks Plan" />
        </Row>
        <Row>OR</Row>
        <Row>
          <CreatePlankList items={2} listName="Single Prank" />
        </Row>
      </Col>
    );
  }
}

export default CreatePrank;

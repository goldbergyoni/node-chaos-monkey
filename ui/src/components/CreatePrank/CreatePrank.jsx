/** @format */

import React, {Component} from 'react';

import CreatePlankList from './CreatePlankList';

// Styles
// import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

class CreatePrank extends Component {
  state = {
    selectedItem: '',
    items: [
      'Random with surprises',
      'Exhausted hardware',
      'Error handling benchmark',
      'Slow and comprhensive',
    ],
  };

  render() {
    return (
      <Col lg='10' md="9">
        <Row className="px-3">
          <h3>Create Plank</h3>
        </Row>
        <CreatePlankList
          items={this.state.items}
          listName="Pranks Plan"
          howLong
        />
        <Row className="my-5">
          <Col md="1" sm='2' xs='2'>OR</Col>
          <Col md="7" sm='10' xs='10'>
            <hr style={{backgroundColor:'black'}}/>
          </Col>
        </Row>
        <CreatePlankList items={this.state.items} listName="Single Prank" />
        <Row className="mt-4 mb-3">
          <Col md={{span: 3, offset: 3}}>
            <Button>Create pranks</Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default CreatePrank;

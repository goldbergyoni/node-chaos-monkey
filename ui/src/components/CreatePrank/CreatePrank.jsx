/** @format */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

// import CreatePlankList from './CreatePlankList';
import DropdownComponent from './DropdownComponent';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

// const items = [{duration: 2}, {duration: 5}];

@inject('store')
@observer
class CreatePrank extends Component {
  state = {
    selectedPrank: '',
    pranks: [
      {name: 'Random with surprises'},
      {name: 'Exhausted hardware'},
      {name: 'Error handling benchmark'},
      {name: 'Slow and comprhensive'},
    ],
  };
  componentDidMount() {
    this.props.store.getSinglePranksList();
  }

  createPrank = prank => {
    this.props.store.addPrank(prank);
  };

  selectPrank = prank => {
    this.setState({selectedPrank: prank});
    console.log('Selected Prank', this.state.selectedPrank.name);
  };

  selectPrankTEST = prank => {
    console.log(prank);
  };

  render() {
    const {singlePranks} = this.props.store;

    return (
      <Row>
        <Col lg="8" md="true">
          <Row className="px-3">
            <h4>Choose Chaos</h4>
          </Row>
          <DropdownComponent
            items={this.state.pranks}
            title="Pranks Plan"
            onClick={prank => this.selectPrankTEST(prank)}
            selectedPrank={this.state.selectPrank}
          />
          <Row className="my-5">
            <Col xs="2">OR</Col>
            <Col xs="10">
              <hr style={{backgroundColor: 'black'}} />
            </Col>
          </Row>
          <DropdownComponent
            items={singlePranks}
            title="Single Prank"
            onClick={prank => this.selectPrank(prank)}
            selectedPrank={this.state.selectedPrank}
          />
          <Row className="mt-4 mb-3">
            {/* <Col md={{span: 3, offset: 3}}>
              <Button
                onClick={this.createPrank.bind(this, this.state.selectedPrank)}
              >
                Create prank
              </Button>
            </Col> */}
            <Col md={{span: 3, offset: 3}} sm="3">
              <Button
                onClick={this.createPrank.bind(this, this.state.selectedPrank)}
              >
                Start prank
              </Button>
            </Col>
            <Col md="3" sm="3">
              <Button
                variant="danger"
                onClick={this.createPrank.bind(this, this.state.selectedPrank)}
              >
                Stop prank
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default CreatePrank;

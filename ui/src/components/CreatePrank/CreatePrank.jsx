/** @format */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import CreatePlankList from './CreatePlankList';
import DurationDropdown from './DurationDropdown';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

@inject('store')
@observer
class CreatePrank extends Component {
  state = {
    selectedPrank: '',
    activePrank: '',
    activePrankTEST: '',
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

  selectPrank = (prank, idx) => {
    this.setState({selectedPrank: prank, activePrank: idx});
    console.log('Selected Prank', this.state.selectedPrank.name, idx);
  };

  selectPrankTEST = (prank, idx) => {
    this.setState({activePrankTEST: idx});
  };

  render() {
    const {singlePranks} = this.props.store;

    return (
      <Col lg="10" md="9">
        <Row className="px-3">
          <h3>Create Plank</h3>
        </Row>
        <CreatePlankList
          items={this.state.pranks}
          listName="Pranks Plan"
          onClick={(prank, idx) => this.selectPrankTEST(prank, idx)}
          activePrank={this.state.activePrankTEST}
        />
        <DurationDropdown />
        <Row className="my-5">
          <Col md="1" sm="2" xs="2">
            OR
          </Col>
          <Col md="7" sm="10" xs="10">
            <hr style={{backgroundColor: 'black'}} />
          </Col>
        </Row>
        <CreatePlankList
          items={singlePranks}
          listName="Single Prank"
          onClick={(prank, idx) => this.selectPrank(prank, idx)}
          activePrank={this.state.activePrank}
        />
        <Row className="mt-4 mb-3">
          <Col md={{span: 3, offset: 3}}>
            <Button
              onClick={this.createPrank.bind(this, this.state.selectedPrank)}
            >
              Create pranks
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default CreatePrank;

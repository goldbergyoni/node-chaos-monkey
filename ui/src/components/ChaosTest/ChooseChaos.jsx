/** @format */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import DropdownComponent from './DropdownComponent';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';
import Form from 'react-bootstrap/lib/Form';

@inject('store')
@observer
class ChooseChaos extends Component {
  interval = null;
  state = {
    selectedPrank: '',
    pranks: [
      {friendlyName: 'Random with surprises'},
      {friendlyName: 'Exhausted hardware'},
      {friendlyName: 'Error handling benchmark'},
      {friendlyName: 'Slow and comprehensive'},
    ],
    howLong: 30000,
    delay: 0,
    properties: '',
  };

  componentDidMount() {
    this.props.store.getSinglePranksList();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createPrankandStart = () => {
    this.props.store.addPrank({
      ...this.state.selectedPrank,
      properties: [
        {
          ...this.state.selectedPrank.properties,
          value: this.state.properties
            ? this.state.properties
            : this.state.selectedPrank.properties.defaultValue,
        },
      ],
      schedule: {
        type: 'one-time-schedule',
        fadeOutInMS: this.state.howLong,
        delay: this.state.delay,
      },
    });
    this.props.store.resetPranksLog();
    this.makeCall();
    this.props.store.getPranksLog();
    this.setState({prankRunning: true});
  };

  makeCall() {
    this.interval = setInterval(() => {
      this.props.store.callApi('http://localhost:8081/chaos/pranks-pool');
    }, 2000);
  }

  selectPrank = selectedPrank => {
    this.setState({selectedPrank, properties: ''}, () => {
      console.log('Selected Prank', this.state.selectedPrank.friendlyName);
    });
  };

  stopPrank = () => {
    this.props.store.disconnect();
    clearInterval(this.interval);
  };

  selectPrankTEST = prank => {
    console.log(prank);
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    const {singlePranks, prankRunning} = this.props.store;
    const {selectedPrank, pranks} = this.state;

    return (
      <Col lg="5" md="12" className="mb-5">
        <Card bg="light">
          <Card.Header>Choose Chaos</Card.Header>
          <Card.Body>
            {!prankRunning && (
              <>
                <DropdownComponent
                  items={pranks}
                  title="Pranks Plan"
                  onClick={this.selectPrankTEST}
                  selectedPrank={this.state.selectPrank}
                />
                <Row>
                  <Col md="2" xs="3">
                    OR
                  </Col>
                  <Col md="10" xs="9">
                    <hr style={{backgroundColor: 'black'}} />
                  </Col>
                </Row>
                <DropdownComponent
                  items={singlePranks}
                  title="Single Prank"
                  onClick={this.selectPrank}
                  selectedPrank={selectedPrank}
                />
                <hr />
                <Form.Row className="my-3">
                  <Form.Group as={Col} controlId="formGroupDelay">
                    <Form.Label>Delay (ms)</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      value={this.state.delay}
                      onChange={this.handleChange('delay')}
                      placeholder="How many ms to wait before starting"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGroupHowLong">
                    <Form.Label>How Long (ms)</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      value={this.state.howLong}
                      onChange={this.handleChange('howLong')}
                      placeholder="For how long this prank should run"
                    />
                  </Form.Group>
                </Form.Row>
                <hr />
                {selectedPrank &&
                  selectedPrank.properties.map(
                    prank =>
                      prank.name && (
                        <Form.Group controlId={`formGroup${prank.name}`}>
                          <Form.Label>{prank.name}</Form.Label>
                          <Form.Control
                            required
                            type={prank.type}
                            value={this.state.properties}
                            onChange={this.handleChange('properties')}
                            placeholder={prank.description}
                          />
                        </Form.Group>
                      )
                  )}
              </>
            )}
            <Row className="text-center">
              <Col xs="6">
                <Button
                  variant={selectedPrank ? 'primary' : 'secondary'}
                  onClick={this.createPrankandStart}
                  disabled={!selectedPrank ? !prankRunning : prankRunning}
                >
                  Start prank
                </Button>
              </Col>
              <Col xs="6">
                <Button
                  variant={prankRunning ? 'danger' : 'secondary'}
                  onClick={this.stopPrank.bind(this)}
                  disabled={!prankRunning}
                >
                  Stop prank
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ChooseChaos;

/** @format */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import FormControl from 'react-bootstrap/lib/FormControl';

@inject('store')
@observer
class DefineApi extends Component {
  state = {
    URL: '',
    setURL: '',
  };

  setURL = e => {
    e.preventDefault();
    this.props.store.setURL(this.state.URL);
    this.setState({setURL: this.state.URL});
  };

  handleChange = event => {
    this.setState({URL: event.target.value});
    console.log(event.target.value);
  };

  render() {
    return (
      <Col lg="10" md="9">
        <Row>
          <Col md="8">
            <InputGroup className="mb-3">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="GET"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item>GET</Dropdown.Item>
                <Dropdown.Item disabled>POST</Dropdown.Item>
                <Dropdown.Item disabled>PUT</Dropdown.Item>
              </DropdownButton>
              <FormControl
                aria-describedby="basic-addon1"
                placeholder="http://api.example.com"
                onChange={this.handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>URL</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-describedby="basic-addon1"
                placeholder="Write your URL above and press Set"
                disabled
                value={this.state.setURL}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <InputGroup className="mb-3">
              <FormControl
                as="textarea"
                aria-describedby="basic-addon1"
                placeholder="BODY - JSON"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 3, offset: 4}}>
            <Button variant="success" onClick={this.setURL}>
              Set URL
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default DefineApi;

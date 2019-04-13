/** @format */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

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
    method: 'GET',
    body: null,
    JSONFile: {BODY: 'JSON'},
  };

  setURL = e => {
    e.preventDefault();
    this.props.store.setURL(this.state.URL, this.state.method, this.state.body);
    this.setState({setURL: this.state.URL});
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  handleJSONChange = e => {
    this.setState({body: e.json});
  };

  handleFile = e => {
    this.refs.fileUploader.click();
  };

  render() {
    return (
      <Col lg="10" md="9">
        <Row>
          <Col md="8">
            <InputGroup className="mb-4">
              <Dropdown
                as="select"
                variant="outline-secondary"
                value={this.state.method}
                // title={this.state.method}
                id="input-group-dropdown-1"
                className="method-select"
                onChange={this.handleChange('method')}
              >
                <Dropdown.Item as="option" value="GET">
                  GET
                </Dropdown.Item>
                <Dropdown.Item as="option" value="POST">
                  POST
                </Dropdown.Item>
                <Dropdown.Item as="option" value="PUT">
                  PUT
                </Dropdown.Item>
              </Dropdown>
              <FormControl
                aria-describedby="basic-addon1"
                placeholder="http://api.example.com"
                onChange={this.handleChange('URL')}
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
                placeholder="Write your URL above and press Save"
                disabled
                value={this.state.setURL}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <InputGroup className="mb-4">
              {/* <FormControl
                as="textarea"
                rows="8"
                aria-describedby="basic-addon1"
                placeholder="BODY - JSON"
                value={this.state.body}
                onChange={this.handleChange('body')}
              /> */}
              {this.state.method !== 'GET' && (
                <div className="JSON-container">
                  <JSONInput
                    placeholder={this.state.JSONFile}
                    locale={locale}
                    theme="light_mitsuketa_tribute"
                    width="100%"
                    height="300px"
                    onChange={this.handleJSONChange}
                    style={{
                      outerBox: {borderRadius: '0.25rem'},
                      container: {borderRadius: '0.25rem'},
                      body: {fontSize: '14px'},
                    }}
                  />
                </div>
              )}
            </InputGroup>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs="4">
            <input
              type="file"
              id="file"
              ref="fileUploader"
              style={{display: 'none'}}
            />
            <Button
              variant="outline-success"
              onClick={this.handleFile}
              data-tip
              data-for="commingSoon"
            >
              Import Swagger
            </Button>
          </Col>
          <Col xs="4">
            <Button
              variant="success"
              disabled={!this.state.URL}
              onClick={this.setURL}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default DefineApi;

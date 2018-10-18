/** @format */

import React, {Component} from 'react';
import axios from 'axios';

import PrankScore from './PrankScore';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Badge from 'react-bootstrap/lib/Badge';
import Card from 'react-bootstrap/lib/Card';

const items = [
  {
    status: 'success',
    type: 'Api error',
    time: '1min ago',
    prank: 'api return error',
    expectation: 'avoid process',
    reality: 'process is up',
  },
  {
    status: 'danger',
    type: 'Api error',
    time: '1min ago',
    prank: 'api return error',
    expectation: 'avoid process',
    reality: 'process is up',
  },
  {
    status: 'warning',
    type: 'Api error',
    time: '1min ago',
    prank: 'api return error',
    expectation: 'avoid process',
    reality: 'process is up',
  },
];
class PranksLog extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:8081/chaos/pranks-pool');
      // this.setState({items: res})
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Col md="10">
        <Row>
          <Col md="9">
            <Row className="px-3">
              <h3>Pranks log</h3>
            </Row>
            {items.map((item, idx) => (
              <Card className="my-4 p-3" key={idx}>
                <Row>
                  <Col md="2" className="text-center">
                    <Badge pill variant={item.status}>
                      {item.status}
                    </Badge>
                  </Col>
                  <Col md="10">
                    <li>
                      <strong>{item.type}</strong>
                    </li>
                    <li>
                      <small>{item.time}</small>
                    </li>
                    <li>
                      <strong>Prank : </strong> {item.prank}
                    </li>
                    <li>
                      <strong>Expectation : </strong> {item.expectation}
                    </li>
                    <li>
                      <strong>Reality : </strong> {item.reality}
                    </li>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <PrankScore />
        </Row>
      </Col>
    );
  }
}

export default PranksLog;

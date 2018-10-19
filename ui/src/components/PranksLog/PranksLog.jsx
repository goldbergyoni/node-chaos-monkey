/** @format */

import React, {Component} from 'react';
import io from 'socket.io-client';

import PranksLogList from './PranksLogList';
import PrankScore from './PrankScore';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const socket = io('http://localhost:8081');

class PranksLog extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    socket.connect();
    socket.on('new-prank-activity', data => {
      if (data) {
        this.setState({items: [...this.state.items, data]});
      } else {
        console.log(`A new prank just ran ${JSON.stringify(data)}`);
      }
    });
    setTimeout(() => {
      socket.disconnect();
    }, 4000);
  }

  render() {
    const {items} = this.state;
    return (
      <Col md="10">
        <Row>
          <Col md="9">
            <Row className="px-3">
              <h3>Pranks log</h3>
            </Row>
            <PranksLogList items={items} />
          </Col>
          <PrankScore score={items.length} />
        </Row>
      </Col>
    );
  }
}

export default PranksLog;

/** @format */

import React, {Component} from 'react';
import io from 'socket.io-client';

import PranksLogList from './PranksLogList';
import PrankScore from './PrankScore';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

const socket = io('http://localhost:8081');

class PranksLog extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    socket.connect();
    console.log('Socket Connected', 'Will auto DC in 30sec');
    socket.on('new-prank-activity', data => {
      if (data) {
        this.setState({items: [...this.state.items, data]});
      } else {
        console.log(`A new prank just ran ${JSON.stringify(data)}`);
      }
    });
    setTimeout(() => {
      socket.disconnect();
      console.log('Socket AUTO Disconnected');
    }, 30000);
  }
  dc = () => {
    socket.disconnect();
    console.log('Socket Disconnected !');
  };

  render() {
    const {items} = this.state;
    return (
      <Col lg="10" md="9">
        <Row>
          <Col md="8">
            <Row className="px-3">
              <h3>Pranks log</h3>
            </Row>
            <PranksLogList items={items} />
          </Col>
          <PrankScore score={items.length} />
        </Row>
        <Row>
          <Col sm="6">
            <h5>after loading too much items press the RED button</h5>
            <Button variant="danger" onClick={this.dc}>
              Disconnect Socket
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default PranksLog;

/** @format */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import PranksLogList from './PranksLogList';
import PrankScore from './PrankScore';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

@inject('store')
@observer
class PranksLog extends Component {
  componentDidMount() {
    this.props.store.getPranksLog();
  }

  componentWillUnmount() {
    this.props.store.disconnect();
  }

  render() {
    const {pranksLog, crazyScore} = this.props.store;
    return (
      <Col lg="10" md="9">
        <Row>
          <Col md="8">
            <Row className="px-3">
              <h3>Pranks log</h3>
            </Row>
            <PranksLogList items={pranksLog} />
          </Col>
          <PrankScore score={crazyScore} />
        </Row>
      </Col>
    );
  }
}

export default PranksLog;

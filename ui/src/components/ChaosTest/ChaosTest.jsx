/** @format */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import ChooseChaos from './ChooseChaos';;
import PranksLogList from './PranksLogList';
import ChaosMetrics from './ChaosMetrics';

// Styles
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

@inject('store')
@observer
class PranksLog extends Component {
  componentWillUnmount() {
    this.props.store.disconnect();
  }

  render() {
    const {
      pranksLog,
      apiCalls,
      apiErrors,
      apiIsAlive,
      latency,
    } = this.props.store;
    return (
      <Col lg="10" md="9">
        <Row>
          <ChooseChaos />
          <ChaosMetrics
            apiCalls={apiCalls}
            apiErrors={apiErrors}
            apiIsAlive={apiIsAlive}
            latency={latency}
          />
        </Row>
        <PranksLogList items={pranksLog} />
      </Col>
    );
  }
}

export default PranksLog;

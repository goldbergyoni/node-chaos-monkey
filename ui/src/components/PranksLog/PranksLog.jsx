/** @format */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import CreatePrank from '../CreatePrank/CreatePrank';
import PranksLogList from './PranksLogList';
import PrankScore from './PrankScore';

// Styles
import Col from 'react-bootstrap/lib/Col';

@inject('store')
@observer
class PranksLog extends Component {
  // componentDidMount() {
  //   this.props.store.getPranksLog();
  // }

  componentWillUnmount() {
    this.props.store.disconnect();
  }

  render() {
    const {pranksLog, crazyScore} = this.props.store;
    return (
      <Col lg="10" md="9">
        <CreatePrank />
        <PrankScore score={crazyScore} />
        <PranksLogList items={pranksLog} />
      </Col>
    );
  }
}

export default PranksLog;

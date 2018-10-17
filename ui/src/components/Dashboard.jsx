/** @format */

import React, {Component} from 'react';

import Header from './Header';
import Menu from './Menu';

// Styles
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';

class Dashboard extends Component {
  render() {
    const {children} = this.props;
    return (
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Menu />
          {children}
        </Row>
      </Container>
    );
  }
}
export default Dashboard;

import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import HomepageSplash from '../../components/HomepageSplash'
import './NotFound.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            Polar
          </Navbar.Header>
          <Navbar.Collapse>
            <Button> Sign In </Button>
          </Navbar.Collapse>
        </Navbar>
        <HomepageSplash/>
      </div>
    );
  }
}

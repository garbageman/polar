import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import HomepageSplash from '../../components/HomepageSplash'
import './homepage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              Polar
            </Navbar.Brand>
            <Navbar.Toggle />
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

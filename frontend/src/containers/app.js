import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Task Application</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/tasks">
                <NavItem>Tasks</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    )
  }
}

// <Link to='/tasks'></Link>
// <Link to='/'></Link>
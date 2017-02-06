import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App</h1>
        <ul>
          <li><Link to='/'>Login</Link></li>
          <li><Link to='/tasks'>Tasks</Link></li>
        </ul>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    )
  }
}
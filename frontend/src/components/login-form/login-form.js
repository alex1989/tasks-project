import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import userApi from '../../actions/users';
import { browserHistory } from 'react-router';

export default class LoginForm extends Component {
  constructor(params) {
    super(params)
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange(e) {
    this.setState(Object.assign({}, this.state, {[e.target.name]: e.target.value}));
  }

  onSubmit(e) {
    e.preventDefault();
    const {username, password} = this.state;
    userApi.loginUser({username, password})
            .then((res) => {
              browserHistory.push('/tasks');
            })
  }

  render() {
    const {username, password} = this.state;
    return (<div>
        <form>
          <FormGroup controlId="task-name">
            <ControlLabel>Username</ControlLabel>
            <FormControl name="username" value={username} onChange={(e) => {this.onChange(e)}} type="text" placeholder="Enter your username"/>
          </FormGroup>
          <FormGroup controlId="task-name">
            <ControlLabel>Password</ControlLabel>
            <FormControl name="password" value={password} onChange={(e) => {this.onChange(e)}} type="password" placeholder="Enter your password"/>
          </FormGroup>

          <Button type="submit" onClick={(e) => {this.onSubmit(e)}}>Log In</Button>
        </form>
      </div>);
  }
};
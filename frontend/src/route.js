import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {TaskContainer} from './containers/task-container';
import {LoginForm} from './components/login-form/login-form';

export default function Root() {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={LoginForm}>
        <Route path="/tasks" component={TaskContainer} />
      </Route>
    </Router>
  );
}
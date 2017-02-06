import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/app';
import TaskContainer from './containers/task-container';
import LoginForm from './components/login-form/login-form';

import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './route';

ReactDOM.render(
  <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={LoginForm} />
        <Route path="tasks" component={TaskContainer} />
      </Route>
    </Router>,
  document.getElementById('app')
);


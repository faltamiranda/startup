import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Application from './app';
import Hello from './hello';
import Menu from './menu';
import List from './list';
import { Provider } from 'react-redux';
import store from './store';

class Rout extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Menu} />
          <Route path='/app' component={Application} />
          <Route path='/list' component={List} />
          <Route path='/app/(:index)' component={Application}/>
          <Route path='/Hello' component={Hello} />
          <Route path='*' component={NotFound} />
        </Router>
      </Provider>
    )
  }
}
const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

export default Rout

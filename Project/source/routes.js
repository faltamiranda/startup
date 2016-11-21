import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import Series from './components/series';
import store from './applications/store';

class Rout extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Series} />
        </Router>
      </Provider>
    )
  }
}
export default Rout

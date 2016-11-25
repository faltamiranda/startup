import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import {Provider} from 'react-redux';
import Series from './components/series';
import store from './applications/store';

class Rout extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Series} />
          <Route path='/cast/(:idCast)' component={Series}/>
          <Route path='/person/(:idPerson)' component={Series}/>
        </Router>
      </Provider>
    )
  }
}
export default Rout

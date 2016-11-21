import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import Center from './center';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import React from 'react';
import store from '../applications/store';

class Series extends React.Component{
  constructor() {
  super();
  }
  render() {
    return (
        <MuiThemeProvider>
            <div>
                <Header />
                <Center />
            </div>
        </MuiThemeProvider>

    )
  }

}


export default Series

import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import Center from './center';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import React from 'react';
import store from '../applications/store';

injectTapEventPlugin();

class Series extends React.Component{
    constructor() {
        super();
        this.state = { serie:[] };
        this.seriesSearch = this.seriesSearch.bind(this);
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header seriesSearch={this.seriesSearch}/>
                    <Center serie={this.state.serie}/>
                </div>
            </MuiThemeProvider>

        )
    }

    seriesSearch(search) {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://api.tvmaze.com/singlesearch/shows?q="+search, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === XMLHttpRequest.DONE)
            {
                let response = JSON.parse(event.target.response);
                this.setState( { serie: response } )
            }
        }.bind(this);
        xhttp.send();
    }
}


export default Series

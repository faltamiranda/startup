import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import store from '../applications/store';
import TextField from 'material-ui/TextField';

class Center extends React.Component{
    constructor() {
    super();
    this.state = { search:'' };
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
    this.seriesSearch = this.seriesSearch.bind(this);
    }

    render() {
        return (
            <div className="search">
                    <TextField hintText="Search series" onChange={this.handleSearchFieldChange} value={this.state.search} />
                    <RaisedButton label="Search" onClick={this.seriesSearch}/>
            </div>
        ) ;
    }
    
    handleSearchFieldChange(e) {
        this.setState( { search: e.target.value } )
    }

    seriesSearch() {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://api.tvmaze.com/singlesearch/shows?q="+this.state.search, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === XMLHttpRequest.DONE)
            {
                let response = JSON.parse(event.target.response);
                console.log(response);
                console.log(response._links.nextepisode);
                console.log(response.id);
            }
        }
        xhttp.send();
    }
}

export default Center

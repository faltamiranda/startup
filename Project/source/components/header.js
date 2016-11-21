import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import store from '../applications/store';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Header extends React.Component{
    constructor(props) {
    super(props);
    this.state = { search:'' };
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
    this.seriesSearch = this.seriesSearch.bind(this);
    }

    render() {
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup >
                        <ToolbarTitle text="Series" />
                        <TextField hintText="Search series" onChange={this.handleSearchFieldChange} value={this.state.search} />
                        <input type="button" onClick={this.seriesSearch} value="buscar"/>
                    </ToolbarGroup>


                </Toolbar>
            </div>
        ) ;
    }
    handleSearchFieldChange(e) {
        this.setState( { search: e.target.value } )

    }

    seriesSearch() {
        let xhttp = new XMLHttpRequest();
        console.log("ASD");
        xhttp.open("GET", "http://api.tvmaze.com/search/shows?q="+this.state.search, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === XMLHttpRequest.DONE)
            {
                let response = JSON.parse(event.target.response);
                console.log(response);
            }
        }
        xhttp.send();
    }
}

export default Header

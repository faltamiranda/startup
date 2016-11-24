import _ from 'lodash'
import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import ListSearch from './listSearch';
import React from 'react';
import store from '../applications/store';

class Center extends React.Component{
    constructor(props) {
    super(props);
    this.state = { cast:[] };
    this.castSearch = this.castSearch.bind(this);
    }
    render() {
		    return(
			       <div>
                <ListSearch seriesForMap={this.props.seriesForMap} castSearch={this.castSearch} castForMap={this.state.cast}/>
             </div>
		         );
      }

      castSearch(id) {
          let xhttp = new XMLHttpRequest();
          let idCast = id +"/cast";
          xhttp.open("GET", 'http://api.tvmaze.com/shows/'+idCast, true);
          xhttp.onreadystatechange = function(event) {
              if (xhttp.readyState === XMLHttpRequest.DONE)
              {
                  let response = JSON.parse(event.target.response);
                  this.setState( { cast: response } )
              }
          }.bind(this);
          xhttp.send();
      }

}
export default Center

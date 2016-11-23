import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import store from '../applications/store';

class Center extends React.Component{
    constructor(props) {
    super(props);
    }

    render() {


		return(
			<div>
                {this.props.seriesForMap.map(function(series){
                return {series.show.name} <RaisedButton label="Fav"/> });}
            </div>
		);
    }
}

export default Center

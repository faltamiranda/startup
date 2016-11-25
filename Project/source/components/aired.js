import {addFav, deleteFav, initialize} from '../applications/actions';
import Dialog from 'material-ui/Dialog';
import React from 'react';
import store from '../applications/store';

class Aired extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {alert("The next episode drops on the" + this.props.date +"at"+ this.props.time)}
            </div>

        )
    }

}


export default Aired

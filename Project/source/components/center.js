import {addFav, deleteFav, initialize} from '../applications/actions';
import ListSearch from './listSearch';
import React from 'react';
import store from '../applications/store';

class Center extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <ListSearch {...this.getListSearchProps()} />
            </div>
        );
    }


    getListSearchProps(){
        return{
            serie: this.props.serie,
            person: this.props.person
        }
    }
}
export default Center

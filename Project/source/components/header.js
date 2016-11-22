import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions'
import FontIcon from 'material-ui/FontIcon';
import React from 'react';
import store from '../applications/store';
import {Tabs, Tab} from 'material-ui/Tabs';

class Header extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Tabs>
                    <Tab
                        label="Search"
                        onActive={handleActive}
                    />
                    <Tab
                        label="Favorites"
                    />
                    <Tab
                        label="Aired"
                    />
                </Tabs>
            </div>

    ) ;
  }

}


export default Header

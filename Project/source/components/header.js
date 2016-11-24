import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import store from '../applications/store';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = { search:'',
        open: false,
    };
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
}
render() {
    return (
        <div>
            <Toolbar>
                <ToolbarGroup >
                    <ToolbarTitle text="Series" />
                    <TextField hintText="Search series" onChange={this.handleSearchFieldChange} value={this.state.search} />
                    <RaisedButton label="Search" onClick={this.props.seriesSearch.bind(this, this.state.search)}/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton
                        label="Actions"
                        onClick={this.handleToggle}
                    />
                    <Drawer width={200} openSecondary={true} open={this.state.open} >
                        <List>
                            <ListItem primaryText="Favorites"  />
                            <ListItem primaryText="Aired"  />
                        </List>
                    </Drawer>
                </ToolbarGroup>
            </Toolbar>
        </div>
    );
}
handleSearchFieldChange(e) {
    this.setState( { search: e.target.value } )
}
handleToggle(){
    this.setState({open: !this.state.open})
}

}

export default Header

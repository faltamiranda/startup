import {addFav, deleteFav, initialize} from '../applications/actions';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = { search:''};
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
}
render() {
    return (
        <div>
            <Toolbar>
                <ToolbarGroup >
                    <ToolbarTitle text="Series" />
                    <TextField hintText="Search series" onChange={this.handleSearchFieldChange} value={this.state.search} />
                    <Link to={'/'}><RaisedButton label="Search" onClick={this.props.seriesSearch.bind(this, this.state.search)}/></Link>
                </ToolbarGroup>
                <ToolbarGroup>
                  <Link to={'/'}><RaisedButton label="Home" /></Link>
                    <RaisedButton label="Favorites" />
                    <RaisedButton label="Aired" />
                </ToolbarGroup>
            </Toolbar>
        </div>
    );
}
handleSearchFieldChange(e) {
    this.setState( { search: e.target.value } )
}

}

export default Header

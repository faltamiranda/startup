import _ from 'lodash';
import {addFav, deleteFav, initialize} from '../applications/actions';
import {Link} from 'react-router';
import RaisedButton from 'material-ui';
import React from 'react';
import store from '../applications/store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CastAndCrew extends React.Component{
    constructor(props) {
        super(props);
        this.renderCastHelper = this.renderCastHelper.bind(this);
    }
    render() {
        return (
            <div>
                {this.renderCastHelper()}
            </div>

        )
    }
    renderCastHelper(){
        let helper=null;
        if (!_.isEmpty(this.props.cast)){
            helper = (
                <Table  >
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Character</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} >
                        {this.props.cast.map( (cast, index) => (
                            <TableRow >
                                <TableRowColumn >{cast.person.name}</TableRowColumn>
                                <TableRowColumn>{cast.character.name}</TableRowColumn>
                                <TableRowColumn><Link to={`/person/${cast.person.id}`}><input type="button" value="Check person"/> </Link> </TableRowColumn>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            );
        }
        return helper;
    }
}

export default CastAndCrew
